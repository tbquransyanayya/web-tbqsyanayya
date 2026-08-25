/**
 * Netlify Function — perantara satu-satunya antara situs dan Google Sheets.
 *
 * Kenapa lewat function, bukan langsung dari browser ke Google Sheets API?
 * Karena kredensial service account (private key) TIDAK BOLEH pernah sampai
 * ke browser publik. Function ini jalan di server Netlify, membaca env vars
 * rahasia, dan satu-satunya "pintu" yang tahu cara bicara ke Spreadsheet.
 *
 * Endpoint: /.netlify/functions/data
 *   GET                                   → baca seluruh data situs (publik)
 *   POST { action: "verify", secret }     → cek passcode admin (tanpa ubah data)
 *   POST { action: "save", secret, data } → simpan seluruh data (perlu passcode benar)
 *
 * Environment variables yang WAJIB diisi di Netlify (Site settings → Environment variables):
 *   GOOGLE_SHEET_ID              — ID spreadsheet (dari URL-nya)
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL — email service account (client_email di file JSON)
 *   GOOGLE_PRIVATE_KEY           — private_key di file JSON (termasuk BEGIN/END)
 *   ADMIN_API_SECRET             — passcode admin situs (bebas kamu tentukan sendiri)
 *
 * Tab-tab di Spreadsheet dibuat OTOMATIS oleh function ini saat pertama kali
 * dipanggil — kamu tidak perlu bikin kolom/header manual, cukup buat
 * spreadsheet kosong dan share ke email service account (akses "Editor").
 */

const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
const ADMIN_SECRET = process.env.ADMIN_API_SECRET;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const SHEET_SCHEMAS = {
  Pengurus: ["id", "nama", "jabatan", "grup"],
  Projects: ["id", "nama", "slug", "deskripsi", "tipe", "target", "terkumpul", "icon"],
  DonaturTetap: ["id", "projectId", "nama", "jumlah"],
  DonaturBulanIni: ["id", "projectId", "nama", "jumlah", "tanggal"],
  Gallery: ["id", "src", "caption"],
  Santri: ["aktif", "tunggu", "dewasa", "halaqah"],
  LaporanBulanan: [
    "id", "periodeKey", "periodeLabel", "projectId", "projectNama",
    "totalTerkumpul", "target", "donaturTetapJSON", "donaturBulanIniJSON",
  ],
  Meta: ["operasionalPeriode", "donationLogJSON"],
};

const SEED_FALLBACK = {
  pengurus: [
    { id: "p1", nama: "Brigjen TNI (Purn) Otte Ruchiyat", jabatan: "Pembina Yayasan", grup: "pembina" },
    { id: "p2", nama: "Laksda TNI (Purn) Djuhana Suwarna", jabatan: "Ketua Yayasan", grup: "pengurus" },
    { id: "p3", nama: "Salim Abu Hijroh", jabatan: "Sekretaris", grup: "pengurus" },
    { id: "p4", nama: "Anggi Wicaksono", jabatan: "Bendahara", grup: "pengurus" },
    { id: "p5", nama: "Widodo Mujiono, SH", jabatan: "Pengawas", grup: "pengawas" },
    { id: "p6", nama: "Ust. Tamrin Sahid, BA", jabatan: "Mudzir / Kepala TBQ", grup: "pengajar" },
  ],
  gallery: [
    { id: "g1", src: "hero_building", caption: "Ruang belajar utama TBQ Syanayya" },
    { id: "g2", src: "gate", caption: "Gerbang masuk Taman Belajar Al-Qur'an Syanayya" },
    { id: "g3", src: "musholla", caption: "Musholla At-Tin" },
  ],
  projects: [
    {
      id: "op-bulanan",
      nama: "Dukungan Operasional Bulanan",
      slug: "operasional",
      deskripsi: "Menopang biaya rutin bulanan TBQ Syanayya.",
      tipe: "bulanan",
      target: 25000000,
      terkumpul: 9500000,
      icon: "wallet",
      donaturTetap: [
        { id: "dt1", nama: "Dzahabiya", jumlah: 5000000 },
        { id: "dt2", nama: "SIP", jumlah: 3000000 },
        { id: "dt3", nama: "Hamba Allah", jumlah: 1000000 },
        { id: "dt4", nama: "Hamba Allah", jumlah: 500000 },
      ],
      donatur: [],
    },
    {
      id: "pagar-keliling",
      nama: "Program Keamanan — Pemagaran Keliling",
      slug: "pemagaran",
      deskripsi: "Pembangunan pagar keliling sepanjang 500 meter.",
      tipe: "sekali",
      target: 250000000,
      terkumpul: 0,
      icon: "shield",
      donaturTetap: [],
      donatur: [],
    },
  ],
  santri: { aktif: 175, tunggu: 100, dewasa: 30, halaqah: 7 },
  donationLog: [],
  laporanBulanan: [],
  operasionalPeriode: currentPeriodKey(),
};

function currentPeriodKey(date = new Date()) {
  return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0");
}
function periodLabel(key) {
  const bulanNama = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const [y, m] = key.split("-").map(Number);
  return `${bulanNama[m - 1]} ${y}`;
}
function uid(prefix) {
  return prefix + "-" + Math.random().toString(36).slice(2, 9);
}
function safeParse(str, fallback) {
  try {
    return str ? JSON.parse(str) : fallback;
  } catch {
    return fallback;
  }
}

async function getDoc() {
  if (!SHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    throw new Error(
      "Google Sheets belum dikonfigurasi. Pastikan GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, dan GOOGLE_PRIVATE_KEY sudah diisi di Netlify Environment Variables."
    );
  }
  const jwt = new JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const doc = new GoogleSpreadsheet(SHEET_ID, jwt);
  await doc.loadInfo();
  return doc;
}

async function ensureSheet(doc, title, headers) {
  let sheet = doc.sheetsByTitle[title];
  if (!sheet) {
    sheet = await doc.addSheet({ title, headerValues: headers });
  } else if (!sheet.headerValues || sheet.headerValues.length === 0) {
    await sheet.setHeaderRow(headers);
  }
  return sheet;
}

async function rewriteSheet(doc, title, headers, rowObjects) {
  const sheet = await ensureSheet(doc, title, headers);
  await sheet.clear();
  await sheet.setHeaderRow(headers);
  if (rowObjects.length) {
    const clean = rowObjects.map((o) => {
      const c = {};
      headers.forEach((h) => (c[h] = o[h] === undefined || o[h] === null ? "" : o[h]));
      return c;
    });
    await sheet.addRows(clean);
  }
}

async function readRaw(doc) {
  const out = {};
  for (const [title, headers] of Object.entries(SHEET_SCHEMAS)) {
    const sheet = await ensureSheet(doc, title, headers);
    const rows = await sheet.getRows();
    out[title] = rows.map((r) => {
      const obj = {};
      headers.forEach((h) => (obj[h] = r.get(h)));
      return obj;
    });
  }
  return out;
}

function assembleData(raw) {
  const hasAnyData = Object.values(raw).some((rows) => rows && rows.length > 0);
  if (!hasAnyData) return null; // sheet masih benar-benar kosong (pertama kali)

  const projects = (raw.Projects || []).map((p) => ({
    id: p.id,
    nama: p.nama,
    slug: p.slug,
    deskripsi: p.deskripsi,
    tipe: p.tipe,
    target: Number(p.target) || 0,
    terkumpul: Number(p.terkumpul) || 0,
    icon: p.icon,
    donaturTetap: (raw.DonaturTetap || [])
      .filter((d) => d.projectId === p.id)
      .map((d) => ({ id: d.id, nama: d.nama, jumlah: Number(d.jumlah) || 0 })),
    donatur: (raw.DonaturBulanIni || [])
      .filter((d) => d.projectId === p.id)
      .map((d) => ({ id: d.id, nama: d.nama, jumlah: Number(d.jumlah) || 0, tanggal: d.tanggal })),
  }));

  const pengurus = (raw.Pengurus || []).map((p) => ({ id: p.id, nama: p.nama, jabatan: p.jabatan, grup: p.grup }));
  const gallery = (raw.Gallery || []).map((g) => ({ id: g.id, src: g.src, caption: g.caption }));
  const santriRow = (raw.Santri || [])[0] || {};
  const santri = {
    aktif: Number(santriRow.aktif) || 0,
    tunggu: Number(santriRow.tunggu) || 0,
    dewasa: Number(santriRow.dewasa) || 0,
    halaqah: Number(santriRow.halaqah) || 0,
  };
  const laporanBulanan = (raw.LaporanBulanan || []).map((l) => ({
    id: l.id,
    periodeKey: l.periodeKey,
    periodeLabel: l.periodeLabel,
    projectId: l.projectId,
    projectNama: l.projectNama,
    totalTerkumpul: Number(l.totalTerkumpul) || 0,
    target: Number(l.target) || 0,
    donaturTetap: safeParse(l.donaturTetapJSON, []),
    donaturBulanIni: safeParse(l.donaturBulanIniJSON, []),
  }));
  const metaRow = (raw.Meta || [])[0] || {};
  const donationLog = safeParse(metaRow.donationLogJSON, []);
  const operasionalPeriode = metaRow.operasionalPeriode || currentPeriodKey();

  return { pengurus, gallery, projects, santri, donationLog, laporanBulanan, operasionalPeriode };
}

async function writeData(doc, data) {
  await rewriteSheet(
    doc, "Pengurus", SHEET_SCHEMAS.Pengurus,
    (data.pengurus || []).map((p) => ({ id: p.id, nama: p.nama, jabatan: p.jabatan, grup: p.grup }))
  );

  await rewriteSheet(
    doc, "Projects", SHEET_SCHEMAS.Projects,
    (data.projects || []).map((p) => ({
      id: p.id, nama: p.nama, slug: p.slug, deskripsi: p.deskripsi, tipe: p.tipe,
      target: p.target, terkumpul: p.terkumpul, icon: p.icon,
    }))
  );

  const donaturTetapRows = [];
  (data.projects || []).forEach((p) =>
    (p.donaturTetap || []).forEach((d) => donaturTetapRows.push({ id: d.id, projectId: p.id, nama: d.nama, jumlah: d.jumlah }))
  );
  await rewriteSheet(doc, "DonaturTetap", SHEET_SCHEMAS.DonaturTetap, donaturTetapRows);

  const donaturBulanIniRows = [];
  (data.projects || []).forEach((p) =>
    (p.donatur || []).forEach((d) =>
      donaturBulanIniRows.push({ id: d.id, projectId: p.id, nama: d.nama, jumlah: d.jumlah, tanggal: d.tanggal })
    )
  );
  await rewriteSheet(doc, "DonaturBulanIni", SHEET_SCHEMAS.DonaturBulanIni, donaturBulanIniRows);

  await rewriteSheet(
    doc, "Gallery", SHEET_SCHEMAS.Gallery,
    (data.gallery || []).map((g) => ({ id: g.id, src: g.src, caption: g.caption }))
  );

  await rewriteSheet(doc, "Santri", SHEET_SCHEMAS.Santri, [data.santri || {}]);

  await rewriteSheet(
    doc, "LaporanBulanan", SHEET_SCHEMAS.LaporanBulanan,
    (data.laporanBulanan || []).map((l) => ({
      id: l.id, periodeKey: l.periodeKey, periodeLabel: l.periodeLabel, projectId: l.projectId,
      projectNama: l.projectNama, totalTerkumpul: l.totalTerkumpul, target: l.target,
      donaturTetapJSON: JSON.stringify(l.donaturTetap || []),
      donaturBulanIniJSON: JSON.stringify(l.donaturBulanIni || []),
    }))
  );

  await rewriteSheet(doc, "Meta", SHEET_SCHEMAS.Meta, [
    {
      operasionalPeriode: data.operasionalPeriode || currentPeriodKey(),
      donationLogJSON: JSON.stringify(data.donationLog || []),
    },
  ]);
}

/**
 * Reset otomatis Dukungan Operasional Bulanan tiap tanggal 1 — dijalankan
 * di server (bukan di browser klien manapun) supaya tidak butuh admin yang
 * sedang login untuk memicunya, dan hanya terjadi sekali per bulan meski
 * banyak orang membuka situs bersamaan.
 */
function applyMonthlyResetIfNeeded(data) {
  const nowKey = currentPeriodKey();
  const storedKey = data.operasionalPeriode || nowKey;
  if (nowKey === storedKey) return { data, changed: false };

  const opProject = (data.projects || []).find((p) => p.slug === "operasional");
  let donationLog = data.donationLog || [];
  let laporanBulanan = data.laporanBulanan || [];
  let newBaseline = 0;

  if (opProject) {
    const tetapTotal = (opProject.donaturTetap || []).reduce((s, d) => s + d.jumlah, 0);
    donationLog = [
      ...donationLog,
      { id: uid("d"), bulan: periodLabel(storedKey).slice(0, 3), jumlah: opProject.terkumpul },
    ].slice(-8);

    laporanBulanan = [
      {
        id: uid("lap"),
        periodeKey: storedKey,
        periodeLabel: periodLabel(storedKey),
        projectId: opProject.id,
        projectNama: opProject.nama,
        totalTerkumpul: opProject.terkumpul,
        target: opProject.target,
        donaturTetap: (opProject.donaturTetap || []).map((d) => ({ nama: d.nama, jumlah: d.jumlah })),
        donaturBulanIni: (opProject.donatur || []).map((d) => ({ nama: d.nama, jumlah: d.jumlah, tanggal: d.tanggal })),
      },
      ...laporanBulanan,
    ].slice(0, 24);

    newBaseline = tetapTotal;
  }

  const projects = (data.projects || []).map((p) =>
    p.slug === "operasional" ? { ...p, terkumpul: newBaseline, donatur: [] } : p
  );

  return { data: { ...data, projects, donationLog, laporanBulanan, operasionalPeriode: nowKey }, changed: true };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: CORS_HEADERS, body: "" };
  }

  try {
    if (event.httpMethod === "GET") {
      const doc = await getDoc();
      const raw = await readRaw(doc);
      let data = assembleData(raw);

      if (!data) {
        // Spreadsheet kosong (pertama kali dipakai) — isi dengan data awal.
        data = SEED_FALLBACK;
        await writeData(doc, data);
      } else {
        const { data: afterReset, changed } = applyMonthlyResetIfNeeded(data);
        if (changed) {
          await writeData(doc, afterReset);
          data = afterReset;
        }
      }

      return {
        statusCode: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        body: JSON.stringify({ ok: true, data }),
      };
    }

    if (event.httpMethod === "POST") {
      const body = JSON.parse(event.body || "{}");

      if (body.action === "verify") {
        const ok = !!ADMIN_SECRET && body.secret === ADMIN_SECRET;
        return {
          statusCode: 200,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          body: JSON.stringify({ ok }),
        };
      }

      if (body.action === "save") {
        if (!ADMIN_SECRET || body.secret !== ADMIN_SECRET) {
          return {
            statusCode: 401,
            headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
            body: JSON.stringify({ ok: false, error: "Unauthorized" }),
          };
        }
        const doc = await getDoc();
        await writeData(doc, body.data);
        return {
          statusCode: 200,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          body: JSON.stringify({ ok: true }),
        };
      }

      return {
        statusCode: 400,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        body: JSON.stringify({ ok: false, error: "Unknown action" }),
      };
    }

    return { statusCode: 405, headers: CORS_HEADERS, body: "Method Not Allowed" };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
};
