import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  Menu, X, ChevronRight, ChevronLeft, Copy, Check, Lock, LogOut,
  Plus, Trash2, Pencil, ShieldCheck, Users, Wallet,
  TrendingUp, Sparkles, ArrowUpRight, MessageCircle, MapPin, Phone,
  BookOpenText, HeartHandshake, Building2, LayoutDashboard, ImagePlus,
  Landmark, GraduationCap, Info, Award, Download, RefreshCcw,
  ExternalLink, CalendarCheck, Mail
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";

/* ============================================================
   BRAND ICONS — minimal inline SVGs (no external icon package
   needed) so WhatsApp / Instagram / Facebook / TikTok render as
   their real, recognizable logo marks instead of generic shapes.
   ============================================================ */
function IconWhatsapp({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}
function IconInstagram({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.36-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.86.06-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.418-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.881.001 1.44 1.44 0 012.881-.001z" />
    </svg>
  );
}
function IconFacebook({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function IconTiktok({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

/* ============================================================
   IMAGE ASSETS (base64, derived from the yayasan's own photos)
   ============================================================ */
const IMAGES = {
  logo: "/images/logo.jpg",
  gate: "/images/gate.jpg",
  hero_building: "/images/hero_building.jpg",
  musholla: "/images/musholla.jpg",
  playground: "/images/playground.jpg",
  classroom_group: "/images/classroom_group.jpg",
  girls_circle: "/images/girls_circle.jpg",
  boys_circle: "/images/boys_circle.jpg",
  garden: "/images/garden.jpg",
  porch: "/images/porch.jpg",
  yellow_building: "/images/yellow_building.jpg",
};

/* ============================================================
   DESIGN TOKENS
   ------------------------------------------------------------
   Sawah green + brass + limestone, arch motif borrowed from the
   mihrab-style doorway & mosque windows in the yayasan's own photos.
   ============================================================ */
const T = {
  green: "#1F5C3F",
  greenDeep: "#153F2B",
  palm: "#4C8C63",
  limestone: "#F3EFE6",
  limestoneDeep: "#EAE3D3",
  ink: "#23281F",
  brass: "#B8863B",
  brassLight: "#D9A857",
  brick: "#A85B3F",
  white: "#FFFFFF",
};

const FONTS_LINK =
  "https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap";

/* ============================================================
   DEFAULT / SEED DATA — used the first time the site loads and
   nothing has been saved to storage yet.
   ============================================================ */
const SEED = {
  pengurus: [
    { id: "p1", nama: "Brigjen TNI (Purn) Otte Ruchiyat", jabatan: "Pembina Yayasan", grup: "pembina" },
    { id: "p2", nama: "Laksda TNI (Purn) Djuhana Suwarna", jabatan: "Ketua Yayasan", grup: "pengurus" },
    { id: "p3", nama: "Salim Abu Hijroh", jabatan: "Sekretaris", grup: "pengurus" },
    { id: "p4", nama: "Anggi Wicaksono", jabatan: "Bendahara", grup: "pengurus" },
    { id: "p5", nama: "Widodo Mujiono, SH", jabatan: "Pengawas", grup: "pengawas" },
    { id: "p6", nama: "Ust. Tamrin Sahid, BA", jabatan: "Mudzir / Kepala TBQ", grup: "pengajar" },
    { id: "p7", nama: "Emilda Rizki Amalia, BBA", jabatan: "Pengajar", grup: "pengajar" },
    { id: "p8", nama: "Roni Kurniawan, BBA", jabatan: "Pengajar", grup: "pengajar" },
    { id: "p9", nama: "Nila Rizki Alawiyah, A.Md", jabatan: "Pengajar", grup: "pengajar" },
    { id: "p10", nama: "Jehan Nurfaizal Setiawan, BA", jabatan: "Pengajar", grup: "pengajar" },
    { id: "p11", nama: "Sopian Atsauri", jabatan: "Pengajar", grup: "pengajar" },
    { id: "p12", nama: "Nabila Diva Aulidina", jabatan: "Pengajar", grup: "pengajar" },
  ],
  gallery: [
    { id: "g1", src: "hero_building", caption: "Ruang belajar utama TBQ Syanayya" },
    { id: "g2", src: "gate", caption: "Gerbang masuk Taman Belajar Al-Qur'an Syanayya" },
    { id: "g3", src: "musholla", caption: "Musholla At-Tin, tempat mengaji & sholat berjamaah" },
    { id: "g4", src: "playground", caption: "Area bermain santri usia dini" },
    { id: "g5", src: "porch", caption: "Teras & pintu masuk ruang tahfidz" },
    { id: "g6", src: "yellow_building", caption: "Aula halaqah tambahan" },
    { id: "g7", src: "classroom_group", caption: "Halaqah santri putra & putri" },
    { id: "g8", src: "girls_circle", caption: "Halaqah tahsin santri putri" },
    { id: "g9", src: "boys_circle", caption: "Halaqah tahfidz santri putra" },
    { id: "g10", src: "garden", caption: "Kebun & lingkungan asri sekitar TBQ" },
  ],
  projects: [
    {
      id: "op-bulanan",
      nama: "Dukungan Operasional Bulanan",
      slug: "operasional",
      deskripsi:
        "Menopang biaya rutin bulanan TBQ Syanayya: gaji pengajar, gaji penjaga TBQ, listrik, sarana belajar-mengajar, dan pemeliharaan lainnya — agar pendidikan Al-Qur'an tetap berjalan tanpa dipungut biaya dari santri.",
      tipe: "bulanan",
      target: 25000000,
      terkumpul: 9500000,
      icon: "wallet",
      // Donatur tetap: menyumbang rutin tiap bulan — TIDAK ikut direset tanggal 1.
      donaturTetap: [
        { id: "dt1", nama: "Dzahabiya", jumlah: 5000000 },
        { id: "dt2", nama: "SIP", jumlah: 3000000 },
        { id: "dt3", nama: "Hamba Allah", jumlah: 1000000 },
        { id: "dt4", nama: "Hamba Allah", jumlah: 500000 },
      ],
      // Donatur bulan berjalan (non-rutin) — direset otomatis tiap tanggal 1.
      donatur: [],
    },
    {
      id: "pagar-keliling",
      nama: "Program Keamanan — Pemagaran Keliling",
      slug: "pemagaran",
      deskripsi:
        "Pembangunan pagar keliling sepanjang 500 meter untuk mengamankan lingkungan belajar 175 santri usia 4–12 tahun, dengan estimasi Rp 500.000 per meter.",
      tipe: "sekali",
      target: 250000000,
      terkumpul: 0,
      icon: "shield",
      donaturTetap: [],
      donatur: [],
    },
  ],
  santri: { aktif: 175, tunggu: 100, dewasa: 30, halaqah: 7 },
  donationLog: [
    { id: "d1", bulan: "Mar", jumlah: 21000000 },
    { id: "d2", bulan: "Apr", jumlah: 19500000 },
    { id: "d3", bulan: "Mei", jumlah: 23800000 },
    { id: "d4", bulan: "Jun", jumlah: 17200000 },
    { id: "d5", bulan: "Jul", jumlah: 25400000 },
  ],
  // Arsip detail per bulan (untuk tombol "Unduh Laporan" di panel admin).
  // Terisi otomatis tiap kali reset tanggal 1 terjadi pada program bulanan.
  laporanBulanan: [
    {
      id: "lap-2026-07",
      periodeKey: "2026-07",
      periodeLabel: "Juli 2026",
      projectId: "op-bulanan",
      projectNama: "Dukungan Operasional Bulanan",
      totalTerkumpul: 25400000,
      target: 25000000,
      donaturTetap: [
        { nama: "Dzahabiya", jumlah: 5000000 },
        { nama: "SIP", jumlah: 3000000 },
        { nama: "Hamba Allah", jumlah: 1000000 },
        { nama: "Hamba Allah", jumlah: 500000 },
      ],
      donaturBulanIni: [
        { nama: "Keluarga Bpk. Yusuf", jumlah: 8000000, tanggal: "2026-07-10" },
        { nama: "Hamba Allah", jumlah: 4400000, tanggal: "2026-07-22" },
        { nama: "Ibu Fitriani", jumlah: 3500000, tanggal: "2026-07-27" },
      ],
    },
    {
      id: "lap-2026-06",
      periodeKey: "2026-06",
      periodeLabel: "Juni 2026",
      projectId: "op-bulanan",
      projectNama: "Dukungan Operasional Bulanan",
      totalTerkumpul: 17200000,
      target: 25000000,
      donaturTetap: [
        { nama: "Dzahabiya", jumlah: 5000000 },
        { nama: "SIP", jumlah: 3000000 },
        { nama: "Hamba Allah", jumlah: 1000000 },
        { nama: "Hamba Allah", jumlah: 500000 },
      ],
      donaturBulanIni: [
        { nama: "Bpk. Rahmat S.", jumlah: 5200000, tanggal: "2026-06-08" },
        { nama: "Hamba Allah", jumlah: 2500000, tanggal: "2026-06-19" },
      ],
    },
  ],
  operasionalPeriode: currentPeriodKey(),
};

const BANK = {
  bank: "Bank Syari'ah Indonesia (BSI)",
  norek: "9114965480",
  atasNama: "TBQ SYANAYYA",
  konfirmasi: "081213123466 / 081332255855",
};
// Kontak pengurus untuk konfirmasi donasi/wakaf via WhatsApp
const PENGURUS_KONTAK = [
  { id: 1, nama: "Pengurus 1 (Salim Abu Hijroh)", nomor: "6281213123466" },
  { id: 2, nama: "Pengurus 2 (Anggi Wicaksono)", nomor: "6281332255855" },
];

// Lokasi Google Maps TBQ Syanayya
const LOKASI = {
  alamat: "Jl. H. Sulaiman, Kp. Prigi, Bedahan, Kec. Sawangan, Kota Depok, Jawa Barat 16519",
  googleMapsUrl: "https://maps.app.goo.gl/m7UNap7YfQSRB89j9",
  embedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Taman Belajar Al Quran Syanayya, Jl. H. Sulaiman, Prigi, Bedahan, Kec. Sawangan, Kota Depok, Jawa Barat 16519") +
    "&output=embed",
};

// TODO: ganti dengan akun resmi TBQ Syanayya sebelum situs live.
const SOSMED = {
  whatsapp: "6281213123466",
  email: "tbqsyanayya@gmail.com",
  instagram: "https://instagram.com/tbqsyanayya",
  facebook: "https://facebook.com/tbqsyanayya",
  tiktok: "https://tiktok.com/@tbqsyanayya",
};

/* ============================================================
   HELPERS
   ============================================================ */
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
function shortBulan(dateStr) {
  const bulanSingkat = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const d = new Date(dateStr);
  return bulanSingkat[d.getMonth()];
}
function formatTanggalPendek(dateStr) {
  const bulanSingkat = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return `${d.getDate()} ${bulanSingkat[d.getMonth()]}`;
}
function formatRupiah(n) {
  if (n == null || isNaN(n)) return "Rp 0";
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}
function pct(a, b) {
  if (!b) return 0;
  return Math.min(100, Math.round((a / b) * 100));
}
function resolveImg(src) {
  if (!src) return null;
  if (src.startsWith("data:")) return src;
  return IMAGES[src] || null;
}
function uid(prefix) {
  return prefix + "-" + Math.random().toString(36).slice(2, 9);
}

function buildLaporanText(laporan) {
  const lines = [];
  lines.push("LAPORAN DONASI BULANAN — TBQ SYANAYYA");
  lines.push(laporan.projectNama);
  lines.push(`Periode: ${laporan.periodeLabel}`);
  lines.push("=".repeat(46));
  lines.push("");
  lines.push("DONATUR TETAP (RUTIN BULANAN)");
  if (laporan.donaturTetap.length) {
    laporan.donaturTetap.forEach((d, i) => lines.push(`${i + 1}. ${d.nama} — ${formatRupiah(d.jumlah)}`));
  } else {
    lines.push("(tidak ada)");
  }
  const tetapTotal = laporan.donaturTetap.reduce((s, d) => s + d.jumlah, 0);
  lines.push(`Subtotal Donatur Tetap: ${formatRupiah(tetapTotal)}`);
  lines.push("");
  lines.push("DONATUR BULAN INI (NON-RUTIN)");
  if (laporan.donaturBulanIni.length) {
    laporan.donaturBulanIni.forEach((d, i) =>
      lines.push(`${i + 1}. ${d.nama} — ${formatRupiah(d.jumlah)} (${formatTanggalPendek(d.tanggal)})`)
    );
  } else {
    lines.push("(tidak ada)");
  }
  const bulanIniTotal = laporan.donaturBulanIni.reduce((s, d) => s + d.jumlah, 0);
  lines.push(`Subtotal Donatur Bulan Ini: ${formatRupiah(bulanIniTotal)}`);
  lines.push("");
  lines.push("=".repeat(46));
  lines.push(`TOTAL TERKUMPUL PERIODE INI: ${formatRupiah(laporan.totalTerkumpul)}`);
  lines.push(`TARGET BULANAN: ${formatRupiah(laporan.target)}`);
  lines.push(`PERSENTASE TERCAPAI: ${pct(laporan.totalTerkumpul, laporan.target)}%`);
  lines.push("");
  lines.push(`Dicetak otomatis oleh sistem TBQ Syanayya pada ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}`);
  return lines.join("\n");
}

function downloadLaporan(laporan) {
  const text = buildLaporanText(laporan);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `laporan-donasi-${laporan.periodeKey}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * NOTE: reset otomatis Dukungan Operasional Bulanan (tanggal 1 tiap bulan)
 * sekarang dijalankan di server — lihat `netlify/functions/data.js`. GET
 * data akan otomatis mengarsipkan & mereset periode yang sudah lewat
 * sebelum mengirim data ke browser, jadi klien tidak perlu (dan tidak
 * berwenang) menulis reset itu sendiri.
 */

/**
 * Penyimpanan data situs — versi ini disimpan di Google Sheets, lewat
 * satu Netlify Function perantara (`/.netlify/functions/data`). Kredensial
 * Google (service account) hanya hidup di server (Netlify env vars),
 * tidak pernah dikirim ke browser. Setiap pengurus yang login dengan
 * passcode yang benar akan membaca & menulis ke Spreadsheet yang sama,
 * jadi datanya konsisten di semua perangkat.
 */
const API_URL = "/.netlify/functions/data";

async function storageLoad() {
  try {
    const res = await fetch(API_URL);
    const json = await res.json();
    if (json && json.ok) return json.data;
    console.error("Gagal memuat data:", json && json.error);
  } catch (e) {
    console.error("Gagal terhubung ke server data:", e);
  }
  return null;
}

async function storageSave(data, secret) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "save", secret, data }),
    });
    const json = await res.json();
    return !!json.ok;
  } catch (e) {
    console.error("Gagal menyimpan data:", e);
    return false;
  }
}

/** Memverifikasi passcode admin ke server, TANPA menyimpan kode aslinya di bundle browser. */
async function verifyPasscode(secret) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "verify", secret }),
    });
    if (!res.ok && res.status !== 401) {
      return { ok: false, serverError: true };
    }
    const json = await res.json();
    return { ok: !!json.ok, serverError: false };
  } catch (e) {
    return { ok: false, serverError: true };
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ============================================================
   PHOTO FRAME — simple rounded rectangle so photos are never
   aggressively cropped into a pointed/arch shape.
   ============================================================ */
function Arch({ children, style, className = "" }) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function ArchPhoto({ src, alt, height = 260, style }) {
  const url = resolveImg(src);
  return (
    <Arch style={{ height, background: T.limestoneDeep, ...style }}>
      {url ? (
        <img
          src={url}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: T.palm,
          }}
        >
          <ImagePlus size={28} />
        </div>
      )}
    </Arch>
  );
}

/* ============================================================
   SHARED UI PRIMITIVES
   ============================================================ */
function Eyebrow({ children }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: T.brass,
        fontWeight: 600,
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub, light }) {
  return (
    <div style={{ maxWidth: 640, marginBottom: 40 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        style={{
          fontFamily: "'Reem Kufi', sans-serif",
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 600,
          color: light ? T.white : T.ink,
          margin: 0,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            marginTop: 14,
            fontSize: 16,
            lineHeight: 1.7,
            color: light ? "rgba(255,255,255,0.78)" : "#5B5A4F",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

function Button({ children, onClick, variant = "primary", icon: Icon, style, type = "button", disabled }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: 14.5,
    padding: "13px 22px",
    borderRadius: 999,
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.55 : 1,
    transition: "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease",
  };
  const variants = {
    primary: { background: T.brass, color: T.white, boxShadow: "0 6px 18px -6px rgba(184,134,59,0.55)" },
    dark: { background: T.green, color: T.white, boxShadow: "0 6px 18px -6px rgba(31,92,63,0.5)" },
    ghost: { background: "transparent", color: T.green, border: `1.5px solid ${T.green}` },
    ghostLight: { background: "transparent", color: T.white, border: "1.5px solid rgba(255,255,255,0.55)" },
    subtle: { background: T.limestoneDeep, color: T.ink },
    danger: { background: "#B8433A", color: T.white },
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}

function ProgressBar({ value, colorTrack = T.limestoneDeep, colorFill = T.brass, h = 10 }) {
  return (
    <div style={{ height: h, borderRadius: 999, background: colorTrack, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${value}%`,
          background: `linear-gradient(90deg, ${colorFill}, ${T.brassLight})`,
          borderRadius: 999,
          transition: "width 0.6s ease",
        }}
      />
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <span
        style={{
          display: "block",
          fontSize: 12.5,
          fontWeight: 600,
          color: "#6B6A5E",
          marginBottom: 6,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 10,
  border: "1.5px solid #DFD9C7",
  fontSize: 14.5,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  outline: "none",
  boxSizing: "border-box",
  background: T.white,
  color: T.ink,
};

/* ============================================================
   PUBLIC SITE SECTIONS
   ============================================================ */

function NavBar({ page, setPage, mobileOpen, setMobileOpen }) {
  const links = [
    { id: "tentang", label: "Tentang" },
    { id: "program", label: "Program" },
    { id: "fasilitas", label: "Fasilitas" },
    { id: "pengurus", label: "Pengurus" },
    { id: "lokasi", label: "Lokasi" },
    { id: "donasi", label: "Donasi & Wakaf" },
  ];
  const go = (id) => {
    setMobileOpen(false);
    setPage("home");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(243,239,230,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(35,40,31,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
          onClick={() => go("top")}
        >
          <img src={IMAGES.logo} alt="Logo TBQ Syanayya" style={{ height: 34, width: "auto", borderRadius: 6 }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 16, color: T.green, fontWeight: 600 }}>
              TBQ Syanayya
            </div>
            <div style={{ fontSize: 10.5, color: "#8A8874", fontFamily: "'JetBrains Mono', monospace" }}>
              Taman Belajar Al-Qur'an
            </div>
          </div>
        </div>

        <nav style={{ display: "flex", gap: 6, alignItems: "center" }} className="nav-desktop">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                background: "transparent",
                border: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14.5,
                fontWeight: 500,
                color: T.ink,
                padding: "8px 14px",
                borderRadius: 999,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(31,92,63,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {l.label}
            </button>
          ))}
          <Button variant="dark" onClick={() => go("donasi")} style={{ marginLeft: 6 }}>
            Berdonasi
          </Button>
        </nav>

        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: T.green }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ padding: "8px 24px 20px", display: "flex", flexDirection: "column", gap: 4 }} className="nav-mobile-panel">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                textAlign: "left",
                background: "transparent",
                border: "none",
                padding: "12px 4px",
                fontSize: 16,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                color: T.ink,
                borderBottom: "1px solid rgba(35,40,31,0.08)",
              }}
            >
              {l.label}
            </button>
          ))}
          <Button variant="dark" onClick={() => go("donasi")} style={{ marginTop: 12, justifyContent: "center" }}>
            Berdonasi
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero({ data, goDonasi }) {
  const opProject = data.projects.find((p) => p.slug === "operasional");
  const pagarProject = data.projects.find((p) => p.slug === "pemagaran");
  return (
    <section id="top" style={{ position: "relative", background: T.greenDeep, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${resolveImg("hero_building")})`,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          opacity: 0.22,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, ${T.greenDeep} 0%, rgba(21,63,43,0.85) 55%, ${T.greenDeep} 100%)`,
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "76px 24px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, alignItems: "center" }} className="hero-grid">
          <div>
            <Eyebrow>Jl. H. Sulaiman No.128, Bedahan, Sawangan, Depok</Eyebrow>
            <h1
              style={{
                fontFamily: "'Reem Kufi', sans-serif",
                fontSize: "clamp(34px, 5.4vw, 58px)",
                lineHeight: 1.08,
                color: T.white,
                margin: "0 0 20px",
                fontWeight: 600,
              }}
            >
              Membangun Generasi yang Dekat dengan Al-Qur'an
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(255,255,255,0.82)", maxWidth: 540, marginBottom: 28 }}>
              TBQ Syanayya mendidik 175 santri usia 4–12 tahun membaca, menghafal, dan
              mengamalkan Al-Qur'an — tanpa dipungut biaya. Program ini berjalan sepenuhnya
              dari infaq, shodaqah, dan wakaf kaum Muslimin.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button variant="primary" icon={HeartHandshake} onClick={goDonasi}>
                Salurkan Donasi & Wakaf
              </Button>
              <Button
                variant="ghostLight"
                icon={ChevronRight}
                onClick={() => document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kenali TBQ Syanayya
              </Button>
            </div>

            <div style={{ display: "flex", gap: 32, marginTop: 44, flexWrap: "wrap" }}>
              {[
                ["175", "Santri Aktif"],
                ["100", "Daftar Tunggu"],
                ["7", "Halaqah"],
                ["30", "Santri Dewasa"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 26, color: T.brassLight, fontWeight: 600 }}>
                    {num}
                  </div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[opProject, pagarProject].filter(Boolean).map((p) => (
              <div
                key={p.id}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 18,
                  padding: 20,
                  backdropFilter: "blur(6px)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: T.white, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {p.nama}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: T.brassLight }}>
                    {pct(p.terkumpul, p.target)}%
                  </span>
                </div>
                <ProgressBar value={pct(p.terkumpul, p.target)} colorTrack="rgba(255,255,255,0.14)" />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                  <span>{formatRupiah(p.terkumpul)}</span>
                  <span>dari {formatRupiah(p.target)}</span>
                </div>
              </div>
            ))}
            <button
              onClick={goDonasi}
              style={{
                background: "transparent",
                border: "1px dashed rgba(255,255,255,0.35)",
                borderRadius: 18,
                padding: "16px 18px",
                color: "rgba(255,255,255,0.85)",
                fontSize: 13.5,
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Lihat rincian & cara berdonasi
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tentang() {
  return (
    <section id="tentang" style={{ padding: "88px 24px", background: T.limestone }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 56, alignItems: "center" }} className="two-col">
        <ArchPhoto src="gate" alt="Gerbang TBQ Syanayya" height={420} />
        <div>
          <SectionTitle
            eyebrow="Tentang Kami"
            title="Taman Belajar Al-Qur'an Syanayya"
          />
          <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4B4A3F", marginBottom: 16 }}>
            TBQ Syanayya merupakan lembaga pendidikan dan pembinaan Al-Qur'an yang hadir
            sebagai wadah pembelajaran Al-Qur'an sekaligus pembentukan karakter dan akhlak
            generasi muda. Pembelajaran diarahkan secara bertahap, terarah, dan berkesinambungan —
            meliputi kemampuan membaca Al-Qur'an, tahsin, tahfidz, pemahaman nilai-nilai
            keislaman, serta pembinaan akhlak.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#4B4A3F", marginBottom: 28 }}>
            Dasar pengajaran dan keilmuan di TBQ Syanayya adalah sebagaimana pada umumnya
            kaum Muslimin, yakni <em>Ahlussunnah wal Jama'ah</em> sesuai pemahaman para salaf,
            diampu oleh alumni LIPIA dan perguruan tinggi diniyah lainnya.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {[
              ["Tahsin & Tajwid", BookOpenText],
              ["Tahfidz Al-Qur'an", Sparkles],
              ["Pendidikan Keislaman", Landmark],
              ["Pembinaan Karakter", GraduationCap],
            ].map(([label, Icon]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, background: T.white, padding: "12px 14px", borderRadius: 12, border: "1px solid #E6E0CF" }}>
                <Icon size={18} color={T.green} />
                <span style={{ fontSize: 13.5, fontWeight: 600, color: T.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisiMisi() {
  const nilai = [
    ["Qur'ani", "Dekat dengan Al-Qur'an"],
    ["Akhlak", "Adab sebagai karakter"],
    ["Ilmu", "Belajar secara bertahap"],
    ["Manfaat", "Bermanfaat bagi sesama"],
  ];
  const misi = [
    "Menyelenggarakan pendidikan Al-Qur'an yang berkualitas dan berkesinambungan",
    "Meningkatkan kemampuan membaca Al-Qur'an sesuai kaidah tajwid",
    "Membimbing peserta didik dalam menghafal dan memahami Al-Qur'an",
    "Menanamkan akhlakul karimah dan nilai-nilai keislaman",
    "Membentuk generasi disiplin, mandiri, dan bertanggung jawab",
  ];
  return (
    <section style={{ padding: "88px 24px", background: T.green, position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
        <SectionTitle eyebrow="Visi & Misi" title="Arah Pengembangan" light />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="two-col">
          <div>
            <Arch style={{ background: "rgba(255,255,255,0.08)", padding: "34px 26px", height: "auto" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: T.brassLight, letterSpacing: "0.1em", marginBottom: 12 }}>
                VISI
              </div>
              <p style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 21, lineHeight: 1.55, color: T.white, margin: 0 }}>
                "Menjadi lembaga pendidikan Al-Qur'an yang unggul dalam membentuk generasi
                Qur'ani, berilmu, berakhlak mulia, dan bermanfaat bagi masyarakat."
              </p>
            </Arch>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
              {nilai.map(([k, v]) => (
                <div key={k} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: "16px 16px" }}>
                  <div style={{ fontFamily: "'Reem Kufi', sans-serif", color: T.brassLight, fontSize: 16, marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: T.brassLight, letterSpacing: "0.1em", marginBottom: 16 }}>
              MISI
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {misi.map((m, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      border: `1.5px solid ${T.brassLight}`,
                      color: T.brassLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.88)" }}>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Program() {
  const items = [
    { title: "Pendidikan Al-Qur'an", icon: BookOpenText, desc: "Tahsin dan tajwid • Membaca Al-Qur'an • Tahfidz Al-Qur'an • Muraja'ah hafalan" },
    { title: "Pendidikan Keislaman", icon: Landmark, desc: "Aqidah dan akhlak • Fiqih dasar • Doa dan praktik ibadah • Sirah Nabawiyah" },
    { title: "Pembinaan Karakter", icon: Sparkles, desc: "Kedisiplinan • Adab dan akhlak • Kemandirian • Kepedulian sosial" },
  ];
  return (
    <section id="program" style={{ padding: "88px 24px", background: T.limestone }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="Program Pendidikan"
          title="Pembelajaran Bertahap & Berkesinambungan"
          sub="Kemampuan membaca → Hafalan → Pemahaman → Pengamalan → Akhlak Qur'ani."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="grid-3">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} style={{ background: T.white, border: "1px solid #E6E0CF", borderRadius: "26px 26px 14px 14px", padding: "30px 26px" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: T.greenDeep,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <Icon size={22} color={T.brassLight} />
              </div>
              <h3 style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 19, color: T.ink, margin: "0 0 10px", fontWeight: 600 }}>
                {title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#5B5A4F", margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fasilitas({ gallery }) {
  return (
    <section id="fasilitas" style={{ padding: "88px 24px", background: T.white }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="Lingkungan & Fasilitas"
          title="Ruang Belajar yang Asri dan Kondusif"
          sub="Lingkungan yang terbuka dan rindang mendukung suasana belajar yang nyaman bagi santri."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
          {gallery.map((g) => (
            <div key={g.id}>
              <ArchPhoto src={g.src} alt={g.caption} height={200} />
              <p style={{ fontSize: 13, color: "#6B6A5E", marginTop: 10, textAlign: "center" }}>{g.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Santri({ santri }) {
  const steps = ["Membaca", "Hafalan", "Pemahaman", "Pengamalan", "Akhlak Qur'ani"];
  return (
    <section style={{ padding: "88px 24px", background: T.limestoneDeep }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle eyebrow="Sasaran & Jumlah Santri" title="Generasi Qur'ani" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 46 }} className="grid-4">
          {[
            [santri.aktif, "Santri Aktif (4–12 th)"],
            [santri.tunggu, "Daftar Tunggu"],
            [santri.dewasa, "Kelompok Dewasa"],
            [santri.halaqah, "Halaqah Berjalan"],
          ].map(([num, label]) => (
            <div key={label} style={{ background: T.white, borderRadius: 18, padding: "26px 20px", border: "1px solid #E6E0CF" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 32, fontWeight: 600, color: T.green }}>{num}</div>
              <div style={{ fontSize: 13, color: "#6B6A5E", marginTop: 6 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0, justifyContent: "center" }}>
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div
                style={{
                  background: T.green,
                  color: T.white,
                  padding: "10px 20px",
                  borderRadius: 999,
                  fontSize: 13.5,
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {s}
              </div>
              {i < steps.length - 1 && <ChevronRight size={18} color={T.palm} style={{ margin: "0 4px" }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pengurus({ pengurus }) {
  const groups = [
    { key: "pembina", label: "Pembina Yayasan" },
    { key: "pengurus", label: "Pengurus Yayasan" },
    { key: "pengawas", label: "Pengawas" },
    { key: "pengajar", label: "Mudzir & Para Pengajar" },
  ];
  return (
    <section id="pengurus" style={{ padding: "88px 24px", background: T.white }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="Pengelola"
          title="Manajemen Lembaga"
          sub="Para pengajar adalah alumni LIPIA dan perguruan tinggi diniyah lainnya, Ahlussunnah wal Jama'ah 'ala fahmi salaf."
        />
        {groups.map((g) => {
          const members = pengurus.filter((p) => p.grup === g.key);
          if (!members.length) return null;
          return (
            <div key={g.key} style={{ marginBottom: 38 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.1em", color: T.palm, marginBottom: 16, textTransform: "uppercase" }}>
                {g.label}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
                {members.map((m) => {
                  const initials = m.nama
                    .split(" ")
                    .filter((w) => w.length > 1 || /[A-Za-z]/.test(w))
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase();
                  return (
                    <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 14, background: T.limestone, borderRadius: 16, padding: "14px 16px" }}>
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 14,
                          background: T.green,
                          color: T.brassLight,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontFamily: "'Reem Kufi', sans-serif",
                          fontSize: 15,
                        }}
                      >
                        {initials}
                      </div>
                      <div>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink, lineHeight: 1.3 }}>{m.nama}</div>
                        <div style={{ fontSize: 12, color: "#8A8874" }}>{m.jabatan}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Rencana() {
  const items = [
    "Peningkatan fasilitas dan sarana pembelajaran berupa pemagaran lingkungan TBQ Syanayya sepanjang 500 m",
    "Peningkatan kualitas serta dukungan bagi tenaga pengajar",
    "Program Pre School Syanayya",
    "Penguatan program tahsin, tahfidz, dan pembinaan karakter",
  ];
  return (
    <section style={{ padding: "80px 24px", background: T.limestone }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 48, alignItems: "center" }} className="two-col">
        <ArchPhoto src="porch" alt="Rencana pengembangan" height={380} />
        <div>
          <SectionTitle
            eyebrow="Ikhtiar Berkelanjutan"
            title="Rencana Pengembangan"
            sub="Setiap dukungan menjadi bagian dari ikhtiar bersama membangun generasi yang dekat dengan Al-Qur'an."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: "flex", gap: 14, background: T.white, padding: "16px 18px", borderRadius: 14, border: "1px solid #E6E0CF" }}>
                <TrendingUp size={18} color={T.brass} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14.5, lineHeight: 1.6, color: T.ink }}>{it}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LokasiKunjungan() {
  const scheduleMsg = `Assalamu'alaikum, saya ingin menjadwalkan kunjungan ke TBQ Syanayya. Mohon info hari/jam yang tersedia. Jazakumullahu khairan.`;
  const scheduleLink = `https://wa.me/${SOSMED.whatsapp}?text=${encodeURIComponent(scheduleMsg)}`;

  return (
    <section id="lokasi" style={{ padding: "80px 24px", background: T.white }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }} className="two-col">
        <Arch style={{ height: 360, background: T.limestoneDeep }}>
          <iframe
            title="Lokasi TBQ Syanayya di Google Maps"
            src={LOKASI.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Arch>
        <div>
          <SectionTitle
            eyebrow="Kunjungi Kami"
            title="Lokasi & Jadwal Kunjungan"
            sub="Kami terbuka bagi donatur, wakif, maupun calon wali santri yang ingin melihat langsung suasana belajar di TBQ Syanayya."
          />
          <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
            <MapPin size={18} color={T.brass} style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 14.5, lineHeight: 1.7, color: "#4B4A3F" }}>{LOKASI.alamat}</span>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="ghost" icon={ExternalLink} onClick={() => window.open(LOKASI.googleMapsUrl, "_blank")}>
              Buka di Google Maps
            </Button>
            <Button variant="primary" icon={CalendarCheck} onClick={() => window.open(scheduleLink, "_blank")}>
              Jadwalkan Kunjungan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   DONASI & WAKAF — the automation-focused section
   ------------------------------------------------------------ */
function waConfirmLink(kontak, project, amount) {
  const msg = `Assalamu'alaikum, saya ingin mendonasikan/mewakafkan senilai ${formatRupiah(
    amount
  )} untuk ${project.nama} TBQ Syanayya. Berikut bukti transfernya.`;
  return `https://wa.me/${kontak.nomor}?text=${encodeURIComponent(msg)}`;
}

function DonorList({ project }) {
  const donaturTetap = project.donaturTetap || [];
  const donatur = project.donatur || [];

  if (project.tipe === "bulanan") {
    const terbaru = [...donatur].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal)).slice(0, 6);
    return (
      <div>
        {donaturTetap.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#6B6A5E", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Donatur Tetap
              </span>
              <span style={{ fontSize: 10, fontWeight: 700, color: T.green, background: "rgba(31,92,63,0.1)", padding: "2px 8px", borderRadius: 999, display: "flex", alignItems: "center", gap: 4 }}>
                <RefreshCcw size={9} /> Rutin tiap bulan
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {donaturTetap.map((d) => (
                <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: T.white, borderRadius: 10, padding: "9px 12px", border: `1px solid ${T.green}22` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: T.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Users size={12} color={T.brassLight} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>{d.nama}</span>
                  </div>
                  <span style={{ fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: T.green }}>
                    {formatRupiah(d.jumlah)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ fontSize: 12, fontWeight: 700, color: "#6B6A5E", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Donatur Bulan Ini
        </div>
        {terbaru.length === 0 ? (
          <div style={{ fontSize: 12.5, color: "#8A8874" }}>
            Belum ada donatur non-rutin bulan ini — jadilah yang pertama.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {terbaru.map((d) => (
              <div key={d.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: T.white, borderRadius: 10, padding: "9px 12px", border: "1px solid #E6E0CF" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: T.limestoneDeep, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Users size={12} color={T.palm} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: T.ink }}>{d.nama}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: T.green }}>
                    {formatRupiah(d.jumlah)}
                  </div>
                  <div style={{ fontSize: 10.5, color: "#A6A38F" }}>{formatTanggalPendek(d.tanggal)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (!donatur.length) {
    return (
      <div style={{ fontSize: 12.5, color: "#8A8874", padding: "10px 0" }}>
        Belum ada donatur tercatat — jadilah yang pertama.
      </div>
    );
  }

  const top = [...donatur].sort((a, b) => b.jumlah - a.jumlah)[0];
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#6B6A5E", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>
        Donatur Tertinggi
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, background: "linear-gradient(90deg, rgba(184,134,59,0.12), rgba(184,134,59,0.02))", borderRadius: 12, padding: "12px 14px", border: `1px solid ${T.brass}` }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: T.brass, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <Award size={17} color={T.white} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink }}>{top.nama}</div>
          <div style={{ fontSize: 11, color: "#8A8874" }}>{formatTanggalPendek(top.tanggal)}</div>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 700, color: T.brass }}>
          {formatRupiah(top.jumlah)}
        </div>
      </div>
    </div>
  );
}

function CampaignCard({ project }) {
  const [customAmount, setCustomAmount] = useState("");
  const [selected, setSelected] = useState(null);
  const quickAmounts =
    project.tipe === "bulanan" ? [100000, 250000, 500000, 1000000] : [500000, 1000000, 5000000, 25000000];

  const amount = selected || Number(customAmount) || 0;
  const Icon = project.icon === "shield" ? ShieldCheck : Wallet;

  return (
    <div style={{ background: T.white, borderRadius: 24, border: "1px solid #E6E0CF", overflow: "hidden" }}>
      <div style={{ padding: "28px 28px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={18} color={T.brassLight} />
          </div>
          <div>
            <div style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 18, color: T.ink }}>{project.nama}</div>
            <div style={{ fontSize: 11.5, color: T.brass, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>
              {project.tipe === "bulanan"
                ? `Periode ${periodLabel(currentPeriodKey())} · reset tiap tgl 1`
                : "Proyek pembangunan"}
            </div>
          </div>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5B5A4F", marginBottom: 20 }}>{project.deskripsi}</p>

        <ProgressBar value={pct(project.terkumpul, project.target)} h={12} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, marginBottom: 22 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 600, color: T.green }}>
              {formatRupiah(project.terkumpul)}
            </div>
            <div style={{ fontSize: 11.5, color: "#8A8874" }}>terkumpul</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, fontWeight: 600, color: T.ink }}>
              {formatRupiah(project.target)}
            </div>
            <div style={{ fontSize: 11.5, color: "#8A8874" }}>target{project.tipe === "bulanan" ? " / bulan" : ""}</div>
          </div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <DonorList project={project} />
        </div>
      </div>

      <div style={{ background: T.limestone, padding: "22px 28px 28px" }}>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: "#6B6A5E", marginBottom: 10 }}>Pilih nominal</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
          {quickAmounts.map((a) => (
            <button
              key={a}
              onClick={() => {
                setSelected(a);
                setCustomAmount("");
              }}
              style={{
                padding: "10px 8px",
                borderRadius: 10,
                border: `1.5px solid ${selected === a ? T.brass : "#DFD9C7"}`,
                background: selected === a ? "rgba(184,134,59,0.1)" : T.white,
                color: selected === a ? T.brass : T.ink,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {formatRupiah(a)}
            </button>
          ))}
        </div>
        <input
          placeholder="Nominal lainnya (Rp)"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value.replace(/[^0-9]/g, ""));
            setSelected(null);
          }}
          style={{ ...inputStyle, marginBottom: 14, fontFamily: "'JetBrains Mono', monospace" }}
        />
        <div style={{ fontSize: 11.5, color: "#8A8874", marginBottom: 8 }}>
          Kirim bukti transfer ke salah satu pengurus:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {PENGURUS_KONTAK.map((kontak, i) => (
            <Button
              key={kontak.id}
              variant={i === 0 ? "primary" : "dark"}
              icon={MessageCircle}
              disabled={amount <= 0}
              style={{ justifyContent: "center", fontSize: 13 }}
              onClick={() => window.open(waConfirmLink(kontak, project, amount), "_blank")}
            >
              Konfirmasi ke Pengurus {kontak.id}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DonasiSection({ projects }) {
  const [copied, setCopied] = useState(false);

  const copyRek = () => {
    navigator.clipboard?.writeText(BANK.norek);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="donasi" style={{ padding: "88px 24px", background: T.limestoneDeep }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionTitle
          eyebrow="Kesempatan Berkolaborasi"
          title="Donasi & Wakaf"
          sub="Setiap dukungan menjadi pahala yang mengalir sepanjang lantunan huruf Al-Qur'an yang berkumandang di TBQ Syanayya. Pilih program, tentukan nominal, dan konfirmasi langsung via WhatsApp."
        />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }} className="two-col">
          {projects.map((p) => (
            <CampaignCard key={p.id} project={p} />
          ))}
        </div>

        <div
          style={{
            background: T.green,
            borderRadius: 24,
            padding: "32px 30px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 30,
            alignItems: "center",
          }}
          className="two-col"
        >
          <div>
            <div style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 20, color: T.white, marginBottom: 10 }}>
              Transfer Langsung
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0 }}>
              Infaq dan shodaqah juga dapat disalurkan langsung melalui rekening resmi yayasan
              di bawah ini. Sertakan program tujuan (Operasional / Pemagaran) pada saat konfirmasi.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 22px" }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 2 }}>{BANK.bank}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 600, color: T.white }}>
                {BANK.norek}
              </span>
              <button
                onClick={copyRek}
                style={{ background: "rgba(255,255,255,0.14)", border: "none", borderRadius: 8, padding: 7, cursor: "pointer", color: T.white }}
                title="Salin nomor rekening"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>a.n. {BANK.atasNama}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>Konfirmasi: {BANK.konfirmasi}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  // Hidden admin access: click the copyright line 5x within 3s.
  const clicksRef = useRef([]);
  const handleSecretClick = () => {
    const now = Date.now();
    clicksRef.current = [...clicksRef.current, now].filter((t) => now - t < 3000);
    if (clicksRef.current.length >= 5) {
      clicksRef.current = [];
      setPage("admin-login");
    }
  };

  return (
    <footer style={{ background: T.greenDeep, padding: "50px 24px 26px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 34 }} className="grid-3">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src={IMAGES.logo} alt="Logo" style={{ height: 30, borderRadius: 6 }} />
              <span style={{ fontFamily: "'Reem Kufi', sans-serif", color: T.white, fontSize: 16 }}>TBQ Syanayya</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 320 }}>
              "Dekat dengan Al-Qur'an • Kuat dalam iman • Mulia dalam akhlak"
            </p>
          </div>
          <div>
            <div style={{ fontSize: 12, color: T.brassLight, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>ALAMAT</div>
            <div style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
              <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>Jl. H. Sulaiman No. 128, RT 02/RW 07, Kp. Perigi, Kel. Bedahan, Kec. Sawangan, Depok, Jawa Barat</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: T.brassLight, marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>KONTAK</div>
            <div style={{ display: "flex", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>
              <Phone size={15} /> {BANK.konfirmasi}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { Icon: IconWhatsapp, href: `https://wa.me/${SOSMED.whatsapp}`, label: "WhatsApp" },
                { Icon: Mail, href: `mailto:${SOSMED.email}`, label: "Email" },
                { Icon: IconInstagram, href: SOSMED.instagram, label: "Instagram" },
                { Icon: IconFacebook, href: SOSMED.facebook, label: "Facebook" },
                { Icon: IconTiktok, href: SOSMED.tiktok, label: "TikTok" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: T.brassLight,
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                >
                  <Icon size={16} color={T.brassLight} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          onClick={handleSecretClick}
          title="" 
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 36, paddingTop: 18, fontSize: 12, color: "rgba(255,255,255,0.4)", textAlign: "center", cursor: "default", userSelect: "none" }}
        >
          © {new Date().getFullYear()} TBQ Syanayya — Situs dikelola untuk transparansi donasi & wakaf.
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   ADMIN — LOGIN
   Passcode diverifikasi ke server (Netlify Function), bukan
   dicocokkan di browser — supaya kode akses sebenarnya tidak
   pernah ikut ter-bundle ke JS publik.
   ============================================================ */
function AdminLogin({ onSuccess, setPage }) {
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setChecking(true);
    setError("");
    const result = await verifyPasscode(pass.trim());
    setChecking(false);
    if (result.ok) {
      onSuccess(pass.trim());
    } else if (result.serverError) {
      setError("Tidak dapat terhubung ke server data. Pastikan Google Sheets & environment variables sudah dikonfigurasi (lihat README.md).");
    } else {
      setError("Kode akses salah. Coba lagi.");
    }
  };
  return (
    <div style={{ minHeight: "100vh", background: T.greenDeep, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <form onSubmit={submit} style={{ background: T.white, borderRadius: 24, padding: "40px 36px", width: 380, maxWidth: "100%" }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", background: T.green, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <Lock size={22} color={T.brassLight} />
        </div>
        <h2 style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 22, margin: "0 0 8px", color: T.ink }}>Panel Admin</h2>
        <p style={{ fontSize: 13.5, color: "#6B6A5E", marginBottom: 22 }}>Masuk untuk mengelola pengurus, galeri, program donasi, dan data santri.</p>
        <Field label="Kode Akses">
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            style={inputStyle}
            autoFocus
            placeholder="••••••••"
          />
        </Field>
        {error && <div style={{ color: "#B8433A", fontSize: 13, marginBottom: 12, lineHeight: 1.5 }}>{error}</div>}
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Button variant="dark" type="submit" disabled={checking} style={{ flex: 1, justifyContent: "center" }}>
            {checking ? "Memeriksa…" : "Masuk"}
          </Button>
          <Button variant="subtle" onClick={() => setPage("home")}>Batal</Button>
        </div>
      </form>
    </div>
  );
}

/* ============================================================
   ADMIN — SHELL + PAGES
   ============================================================ */
function AdminShell({ data, setData, save, setPage, saving }) {
  const [tab, setTab] = useState("dashboard");
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "pengurus", label: "Pengurus", icon: Users },
    { id: "galeri", label: "Galeri", icon: ImagePlus },
    { id: "donasi", label: "Program Donasi", icon: Wallet },
    { id: "santri", label: "Data Santri", icon: GraduationCap },
  ];

  return (
    <div style={{ minHeight: "100vh", background: T.limestone, display: "flex" }} className="admin-shell">
      <aside style={{ width: 240, background: T.greenDeep, padding: "26px 16px", flexShrink: 0 }} className="admin-sidebar">
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 10px 26px" }}>
          <img src={IMAGES.logo} style={{ height: 30, borderRadius: 6 }} alt="logo" />
          <span style={{ color: T.white, fontFamily: "'Reem Kufi', sans-serif", fontSize: 15 }}>Admin</span>
        </div>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "11px 14px",
              borderRadius: 10,
              border: "none",
              background: tab === t.id ? "rgba(255,255,255,0.12)" : "transparent",
              color: tab === t.id ? T.brassLight : "rgba(255,255,255,0.75)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: 4,
              textAlign: "left",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <t.icon size={17} /> {t.label}
          </button>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", marginTop: 18, paddingTop: 14 }}>
          <button
            onClick={() => setPage("home")}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 10, border: "none", background: "transparent", color: "rgba(255,255,255,0.75)", fontSize: 14, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <ArrowUpRight size={16} style={{ transform: "rotate(180deg)" }} /> Lihat Situs
          </button>
          <button
            onClick={() => setPage("home")}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 10, border: "none", background: "transparent", color: "rgba(255,255,255,0.5)", fontSize: 14, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <LogOut size={16} /> Keluar
          </button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: "32px 36px", overflowX: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
          <h1 style={{ fontFamily: "'Reem Kufi', sans-serif", fontSize: 26, color: T.ink, margin: 0, textTransform: "capitalize" }}>
            {tabs.find((t) => t.id === tab)?.label}
          </h1>
          <div style={{ fontSize: 12.5, color: saving ? T.brass : "#8A8874", fontFamily: "'JetBrains Mono', monospace" }}>
            {saving ? "Menyimpan ke Google Sheets…" : "Tersimpan otomatis ke Google Sheets · sinkron untuk semua pengurus"}
          </div>
        </div>
        {tab === "dashboard" && <AdminDashboard data={data} />}
        {tab === "pengurus" && <AdminPengurus data={data} setData={setData} save={save} />}
        {tab === "galeri" && <AdminGaleri data={data} setData={setData} save={save} />}
        {tab === "donasi" && <AdminDonasi data={data} setData={setData} save={save} />}
        {tab === "santri" && <AdminSantri data={data} setData={setData} save={save} />}
      </main>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, accent }) {
  return (
    <div style={{ background: T.white, borderRadius: 16, padding: "20px 22px", border: "1px solid #E6E0CF" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontSize: 12.5, color: "#8A8874", fontWeight: 600 }}>{label}</span>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: accent || T.limestoneDeep, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={15} color={T.green} />
        </div>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 600, color: T.ink }}>{value}</div>
    </div>
  );
}

function AdminDashboard({ data }) {
  const totalTerkumpul = data.projects.reduce((s, p) => s + p.terkumpul, 0);
  const totalTarget = data.projects.reduce((s, p) => s + p.target, 0);
  const chartData = data.donationLog.map((d) => ({ bulan: d.bulan, jumlah: d.jumlah }));

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 26 }} className="grid-4">
        <StatCard label="Total Donasi Terkumpul" value={formatRupiah(totalTerkumpul).replace("Rp ", "")} icon={Wallet} />
        <StatCard label="Santri Aktif" value={data.santri.aktif} icon={GraduationCap} />
        <StatCard label="Daftar Tunggu" value={data.santri.tunggu} icon={Users} />
        <StatCard label="Progres Total (%)" value={pct(totalTerkumpul, totalTarget) + "%"} icon={TrendingUp} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }} className="two-col">
        <div style={{ background: T.white, borderRadius: 16, padding: "22px 24px", border: "1px solid #E6E0CF" }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink, marginBottom: 16 }}>Tren Donasi Bulanan (contoh log)</div>
          <div style={{ width: "100%", height: 220 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EDE8D9" vertical={false} />
                <XAxis dataKey="bulan" tick={{ fontSize: 12, fill: "#8A8874" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#8A8874" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v / 1000000}jt`} />
                <Tooltip formatter={(v) => formatRupiah(v)} contentStyle={{ borderRadius: 10, border: "1px solid #E6E0CF", fontSize: 12.5 }} />
                <Bar dataKey="jumlah" fill={T.brass} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ background: T.white, borderRadius: 16, padding: "22px 24px", border: "1px solid #E6E0CF" }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink, marginBottom: 16 }}>Progres per Program</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {data.projects.map((p) => (
              <div key={p.id}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: T.ink }}>{p.nama}</span>
                  <span style={{ color: T.brass, fontFamily: "'JetBrains Mono', monospace" }}>{pct(p.terkumpul, p.target)}%</span>
                </div>
                <ProgressBar value={pct(p.terkumpul, p.target)} colorTrack="#EDE8D9" />
                <div style={{ fontSize: 11.5, color: "#8A8874", marginTop: 4 }}>
                  {formatRupiah(p.terkumpul)} / {formatRupiah(p.target)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: T.white, borderRadius: 16, padding: "22px 24px", border: "1px solid #E6E0CF", marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink }}>Laporan Bulanan — Dukungan Operasional</div>
          <span style={{ fontSize: 11.5, color: "#8A8874" }}>Diarsipkan otomatis tiap reset tanggal 1</span>
        </div>
        {(!data.laporanBulanan || data.laporanBulanan.length === 0) ? (
          <div style={{ fontSize: 13, color: "#8A8874" }}>
            Belum ada laporan bulan sebelumnya. Laporan pertama akan muncul di sini setelah reset otomatis tanggal 1 berikutnya.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.laporanBulanan.map((lap) => (
              <div key={lap.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: T.limestone, borderRadius: 12, padding: "12px 16px" }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: T.ink }}>{lap.periodeLabel}</div>
                  <div style={{ fontSize: 11.5, color: "#8A8874" }}>
                    {formatRupiah(lap.totalTerkumpul)} terkumpul · {pct(lap.totalTerkumpul, lap.target)}% dari target
                  </div>
                </div>
                <Button variant="subtle" icon={Download} style={{ fontSize: 12.5, padding: "9px 16px" }} onClick={() => downloadLaporan(lap)}>
                  Unduh Laporan
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


function AdminPengurus({ data, setData, save }) {
  const [editing, setEditing] = useState(null); // object being edited, or null
  const grupOptions = [
    ["pembina", "Pembina Yayasan"],
    ["pengurus", "Pengurus Yayasan"],
    ["pengawas", "Pengawas"],
    ["pengajar", "Mudzir & Pengajar"],
  ];

  const startNew = () => setEditing({ id: uid("p"), nama: "", jabatan: "", grup: "pengajar" });

  const commit = () => {
    if (!editing.nama.trim()) return;
    setData((d) => {
      const exists = d.pengurus.some((p) => p.id === editing.id);
      const pengurus = exists ? d.pengurus.map((p) => (p.id === editing.id ? editing : p)) : [...d.pengurus, editing];
      const next = { ...d, pengurus };
      save(next);
      return next;
    });
    setEditing(null);
  };

  const remove = (id) => {
    setData((d) => {
      const next = { ...d, pengurus: d.pengurus.filter((p) => p.id !== id) };
      save(next);
      return next;
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button variant="dark" icon={Plus} onClick={startNew}>Tambah Pengurus</Button>
      </div>

      {editing && (
        <div style={{ background: T.white, border: `1.5px solid ${T.brass}`, borderRadius: 16, padding: 22, marginBottom: 22 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
            <Field label="Nama Lengkap">
              <input style={inputStyle} value={editing.nama} onChange={(e) => setEditing({ ...editing, nama: e.target.value })} />
            </Field>
            <Field label="Jabatan">
              <input style={inputStyle} value={editing.jabatan} onChange={(e) => setEditing({ ...editing, jabatan: e.target.value })} />
            </Field>
          </div>
          <Field label="Kelompok">
            <select style={inputStyle} value={editing.grup} onChange={(e) => setEditing({ ...editing, grup: e.target.value })}>
              {grupOptions.map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </Field>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Button variant="dark" onClick={commit}>Simpan</Button>
            <Button variant="subtle" onClick={() => setEditing(null)}>Batal</Button>
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {data.pengurus.map((p) => (
          <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 14, background: T.white, border: "1px solid #E6E0CF", borderRadius: 12, padding: "10px 14px" }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: T.limestoneDeep, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Users size={17} color={T.palm} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{p.nama}</div>
              <div style={{ fontSize: 12, color: "#8A8874" }}>{p.jabatan} · {grupOptions.find((g) => g[0] === p.grup)?.[1]}</div>
            </div>
            <button onClick={() => setEditing(p)} style={{ background: "none", border: "none", cursor: "pointer", color: T.palm, padding: 8 }}><Pencil size={16} /></button>
            <button onClick={() => remove(p.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#B8433A", padding: 8 }}><Trash2 size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminGaleri({ data, setData, save }) {
  const addPhoto = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const b64 = await fileToBase64(file);
    setData((d) => {
      const next = { ...d, gallery: [...d.gallery, { id: uid("g"), src: b64, caption: "Foto baru" }] };
      save(next);
      return next;
    });
  };
  const updateCaption = (id, caption) => {
    setData((d) => {
      const next = { ...d, gallery: d.gallery.map((g) => (g.id === id ? { ...g, caption } : g)) };
      save(next);
      return next;
    });
  };
  const remove = (id) => {
    setData((d) => {
      const next = { ...d, gallery: d.gallery.filter((g) => g.id !== id) };
      save(next);
      return next;
    });
  };
  const ref = useRef(null);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <input type="file" accept="image/*" ref={ref} onChange={addPhoto} style={{ display: "none" }} />
        <Button variant="dark" icon={Plus} onClick={() => ref.current?.click()}>Tambah Foto</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 18 }}>
        {data.gallery.map((g) => (
          <div key={g.id} style={{ background: T.white, border: "1px solid #E6E0CF", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ height: 140, background: T.limestoneDeep }}>
              <img src={resolveImg(g.src)} alt={g.caption} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: 12 }}>
              <input style={{ ...inputStyle, fontSize: 13, padding: "8px 10px", marginBottom: 8 }} value={g.caption} onChange={(e) => updateCaption(g.id, e.target.value)} />
              <button onClick={() => remove(g.id)} style={{ background: "none", border: "none", color: "#B8433A", cursor: "pointer", fontSize: 12.5, display: "flex", alignItems: "center", gap: 5, padding: 0 }}>
                <Trash2 size={13} /> Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminDonasi({ data, setData, save }) {
  const [editing, setEditing] = useState(null);
  const [donorFormFor, setDonorFormFor] = useState(null); // projectId
  const [donorDraft, setDonorDraft] = useState({ nama: "", jumlah: "", tanggal: "" });
  const [tetapFormFor, setTetapFormFor] = useState(null); // projectId
  const [tetapDraft, setTetapDraft] = useState({ nama: "", jumlah: "" });

  const startNew = () =>
    setEditing({ id: uid("proj"), nama: "", slug: "", deskripsi: "", tipe: "sekali", target: 0, terkumpul: 0, icon: "wallet", donatur: [], donaturTetap: [] });

  const commit = () => {
    if (!editing.nama.trim()) return;
    setData((d) => {
      const exists = d.projects.some((p) => p.id === editing.id);
      const record = { donatur: [], donaturTetap: [], ...editing };
      const projects = exists ? d.projects.map((p) => (p.id === editing.id ? record : p)) : [...d.projects, record];
      const next = { ...d, projects };
      save(next);
      return next;
    });
    setEditing(null);
  };

  const remove = (id) => {
    setData((d) => {
      const next = { ...d, projects: d.projects.filter((p) => p.id !== id) };
      save(next);
      return next;
    });
  };

  // Donatur bulan ini (non-rutin) — ikut direset otomatis tiap tanggal 1.
  const openDonorForm = (projectId) => {
    setTetapFormFor(null);
    setDonorFormFor(projectId);
    setDonorDraft({ nama: "", jumlah: "", tanggal: new Date().toISOString().slice(0, 10) });
  };

  const commitDonor = () => {
    if (!donorDraft.nama.trim() || !Number(donorDraft.jumlah)) return;
    setData((d) => {
      const projects = d.projects.map((p) => {
        if (p.id !== donorFormFor) return p;
        const entry = { id: uid("do"), nama: donorDraft.nama.trim(), jumlah: Number(donorDraft.jumlah), tanggal: donorDraft.tanggal };
        return { ...p, donatur: [...(p.donatur || []), entry], terkumpul: p.terkumpul + entry.jumlah };
      });
      const next = { ...d, projects };
      save(next);
      return next;
    });
    setDonorFormFor(null);
  };

  const removeDonor = (projectId, donorId) => {
    setData((d) => {
      const projects = d.projects.map((p) => {
        if (p.id !== projectId) return p;
        const donor = (p.donatur || []).find((x) => x.id === donorId);
        return {
          ...p,
          donatur: (p.donatur || []).filter((x) => x.id !== donorId),
          terkumpul: Math.max(0, p.terkumpul - (donor ? donor.jumlah : 0)),
        };
      });
      const next = { ...d, projects };
      save(next);
      return next;
    });
  };

  // Donatur tetap — rutin tiap bulan, TIDAK ikut direset tanggal 1.
  const openTetapForm = (projectId) => {
    setDonorFormFor(null);
    setTetapFormFor(projectId);
    setTetapDraft({ nama: "", jumlah: "" });
  };

  const commitTetap = () => {
    if (!tetapDraft.nama.trim() || !Number(tetapDraft.jumlah)) return;
    setData((d) => {
      const projects = d.projects.map((p) => {
        if (p.id !== tetapFormFor) return p;
        const entry = { id: uid("dt"), nama: tetapDraft.nama.trim(), jumlah: Number(tetapDraft.jumlah) };
        return { ...p, donaturTetap: [...(p.donaturTetap || []), entry], terkumpul: p.terkumpul + entry.jumlah };
      });
      const next = { ...d, projects };
      save(next);
      return next;
    });
    setTetapFormFor(null);
  };

  const removeTetap = (projectId, donorId) => {
    setData((d) => {
      const projects = d.projects.map((p) => {
        if (p.id !== projectId) return p;
        const donor = (p.donaturTetap || []).find((x) => x.id === donorId);
        return {
          ...p,
          donaturTetap: (p.donaturTetap || []).filter((x) => x.id !== donorId),
          terkumpul: Math.max(0, p.terkumpul - (donor ? donor.jumlah : 0)),
        };
      });
      const next = { ...d, projects };
      save(next);
      return next;
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button variant="dark" icon={Plus} onClick={startNew}>Tambah Program</Button>
      </div>

      {editing && (
        <div style={{ background: T.white, border: `1.5px solid ${T.brass}`, borderRadius: 16, padding: 22, marginBottom: 22 }}>
          <Field label="Nama Program">
            <input style={inputStyle} value={editing.nama} onChange={(e) => setEditing({ ...editing, nama: e.target.value })} />
          </Field>
          <Field label="Deskripsi">
            <textarea style={{ ...inputStyle, minHeight: 80, resize: "vertical" }} value={editing.deskripsi} onChange={(e) => setEditing({ ...editing, deskripsi: e.target.value })} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="grid-3">
            <Field label="Tipe">
              <select style={inputStyle} value={editing.tipe} onChange={(e) => setEditing({ ...editing, tipe: e.target.value })}>
                <option value="bulanan">Rutin Bulanan</option>
                <option value="sekali">Proyek Sekali Jalan</option>
              </select>
            </Field>
            <Field label="Target (Rp)">
              <input style={{ ...inputStyle, fontFamily: "'JetBrains Mono', monospace" }} value={editing.target} onChange={(e) => setEditing({ ...editing, target: Number(e.target.value.replace(/[^0-9]/g, "")) })} />
            </Field>
            <Field label="Terkumpul (Rp)">
              <input style={{ ...inputStyle, fontFamily: "'JetBrains Mono', monospace" }} value={editing.terkumpul} onChange={(e) => setEditing({ ...editing, terkumpul: Number(e.target.value.replace(/[^0-9]/g, "")) })} />
            </Field>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <Button variant="dark" onClick={commit}>Simpan</Button>
            <Button variant="subtle" onClick={() => setEditing(null)}>Batal</Button>
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {data.projects.map((p) => (
          <div key={p.id} style={{ background: T.white, border: "1px solid #E6E0CF", borderRadius: 14, padding: "16px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: T.ink }}>{p.nama}</div>
                <div style={{ fontSize: 12, color: "#8A8874" }}>{p.tipe === "bulanan" ? "Rutin bulanan · reset tgl 1" : "Proyek sekali jalan"}</div>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={() => setEditing(p)} style={{ background: "none", border: "none", cursor: "pointer", color: T.palm, padding: 6 }}><Pencil size={16} /></button>
                <button onClick={() => remove(p.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#B8433A", padding: 6 }}><Trash2 size={16} /></button>
              </div>
            </div>
            <ProgressBar value={pct(p.terkumpul, p.target)} colorTrack="#EDE8D9" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", color: "#6B6A5E" }}>
              <span>{formatRupiah(p.terkumpul)}</span>
              <span>{pct(p.terkumpul, p.target)}%</span>
              <span>{formatRupiah(p.target)}</span>
            </div>

            {/* Donatur Tetap — hanya relevan untuk program rutin bulanan */}
            {p.tipe === "bulanan" && (
              <div style={{ marginTop: 16, borderTop: "1px solid #EDE8D9", paddingTop: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: T.green, textTransform: "uppercase", letterSpacing: "0.04em", display: "flex", alignItems: "center", gap: 6 }}>
                    <RefreshCcw size={12} /> Donatur Tetap ({(p.donaturTetap || []).length}) · tidak direset
                  </span>
                  <Button variant="subtle" icon={Plus} style={{ fontSize: 12.5, padding: "8px 14px" }} onClick={() => openTetapForm(p.id)}>
                    Tambah Donatur Tetap
                  </Button>
                </div>

                {tetapFormFor === p.id && (
                  <div style={{ background: T.limestone, borderRadius: 12, padding: 14, marginBottom: 12 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 10, marginBottom: 10 }} className="grid-3">
                      <input
                        placeholder="Nama donatur tetap"
                        style={{ ...inputStyle, padding: "9px 12px", fontSize: 13.5 }}
                        value={tetapDraft.nama}
                        onChange={(e) => setTetapDraft({ ...tetapDraft, nama: e.target.value })}
                      />
                      <input
                        placeholder="Nominal / bulan (Rp)"
                        style={{ ...inputStyle, padding: "9px 12px", fontSize: 13.5, fontFamily: "'JetBrains Mono', monospace" }}
                        value={tetapDraft.jumlah}
                        onChange={(e) => setTetapDraft({ ...tetapDraft, jumlah: e.target.value.replace(/[^0-9]/g, "") })}
                      />
                    </div>
                    <div style={{ fontSize: 11.5, color: "#8A8874", marginBottom: 10 }}>
                      Donatur tetap dihitung setiap bulan secara otomatis dan tidak ikut terhapus saat reset tanggal 1.
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Button variant="dark" style={{ fontSize: 13, padding: "8px 16px" }} onClick={commitTetap}>Simpan Donatur Tetap</Button>
                      <Button variant="subtle" style={{ fontSize: 13, padding: "8px 16px" }} onClick={() => setTetapFormFor(null)}>Batal</Button>
                    </div>
                  </div>
                )}

                {(p.donaturTetap || []).length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {p.donaturTetap.map((dn) => (
                      <div key={dn.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12.5, padding: "7px 4px" }}>
                        <span style={{ color: T.ink }}>{dn.nama}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: T.green, fontWeight: 600 }}>{formatRupiah(dn.jumlah)}</span>
                          <button onClick={() => removeTetap(p.id, dn.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#B8433A", padding: 2 }}>
                            <Trash2 size={13} />
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Donatur non-rutin — direset otomatis tiap tanggal 1 untuk program bulanan */}
            <div style={{ marginTop: 16, borderTop: "1px solid #EDE8D9", paddingTop: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#6B6A5E", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {p.tipe === "bulanan" ? "Donatur Bulan Ini" : "Donatur"} ({(p.donatur || []).length})
                </span>
                <Button variant="subtle" icon={Plus} style={{ fontSize: 12.5, padding: "8px 14px" }} onClick={() => openDonorForm(p.id)}>
                  Catat Donatur
                </Button>
              </div>

              {donorFormFor === p.id && (
                <div style={{ background: T.limestone, borderRadius: 12, padding: 14, marginBottom: 12 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 10, marginBottom: 10 }} className="grid-3">
                    <input
                      placeholder="Nama donatur"
                      style={{ ...inputStyle, padding: "9px 12px", fontSize: 13.5 }}
                      value={donorDraft.nama}
                      onChange={(e) => setDonorDraft({ ...donorDraft, nama: e.target.value })}
                    />
                    <input
                      placeholder="Nominal (Rp)"
                      style={{ ...inputStyle, padding: "9px 12px", fontSize: 13.5, fontFamily: "'JetBrains Mono', monospace" }}
                      value={donorDraft.jumlah}
                      onChange={(e) => setDonorDraft({ ...donorDraft, jumlah: e.target.value.replace(/[^0-9]/g, "") })}
                    />
                    <input
                      type="date"
                      style={{ ...inputStyle, padding: "9px 12px", fontSize: 13.5 }}
                      value={donorDraft.tanggal}
                      onChange={(e) => setDonorDraft({ ...donorDraft, tanggal: e.target.value })}
                    />
                  </div>
                  <div style={{ fontSize: 11.5, color: "#8A8874", marginBottom: 10 }}>
                    {p.tipe === "bulanan"
                      ? "Donatur non-rutin ini akan ikut terhapus dari daftar publik saat reset otomatis tanggal 1 (tetap tercatat di Laporan Bulanan)."
                      : "Mencatat donatur otomatis menambah jumlah \"terkumpul\" pada program ini."}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <Button variant="dark" style={{ fontSize: 13, padding: "8px 16px" }} onClick={commitDonor}>Simpan Donatur</Button>
                    <Button variant="subtle" style={{ fontSize: 13, padding: "8px 16px" }} onClick={() => setDonorFormFor(null)}>Batal</Button>
                  </div>
                </div>
              )}

              {(p.donatur || []).length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[...p.donatur]
                    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
                    .map((dn) => (
                      <div key={dn.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12.5, padding: "7px 4px" }}>
                        <span style={{ color: T.ink }}>{dn.nama} <span style={{ color: "#A6A38F" }}>· {formatTanggalPendek(dn.tanggal)}</span></span>
                        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontFamily: "'JetBrains Mono', monospace", color: T.green, fontWeight: 600 }}>{formatRupiah(dn.jumlah)}</span>
                          <button onClick={() => removeDonor(p.id, dn.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#B8433A", padding: 2 }}>
                            <Trash2 size={13} />
                          </button>
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminSantri({ data, setData, save }) {
  const [local, setLocal] = useState(data.santri);
  const update = (k, v) => setLocal({ ...local, [k]: Number(v.replace(/[^0-9]/g, "")) || 0 });
  const commit = () => {
    setData((d) => {
      const next = { ...d, santri: local };
      save(next);
      return next;
    });
  };
  const fields = [
    ["aktif", "Santri Aktif (4–12 th)"],
    ["tunggu", "Daftar Tunggu"],
    ["dewasa", "Kelompok Dewasa"],
    ["halaqah", "Jumlah Halaqah"],
  ];
  return (
    <div style={{ background: T.white, border: "1px solid #E6E0CF", borderRadius: 16, padding: 24, maxWidth: 560 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {fields.map(([k, label]) => (
          <Field key={k} label={label}>
            <input style={{ ...inputStyle, fontFamily: "'JetBrains Mono', monospace" }} value={local[k]} onChange={(e) => update(k, e.target.value)} />
          </Field>
        ))}
      </div>
      <Button variant="dark" onClick={commit}>Simpan Data Santri</Button>
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */
export default function App() {
  const [data, setData] = useState(SEED);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState("home"); // home | admin-login | admin
  const [mobileOpen, setMobileOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [adminSecret, setAdminSecret] = useState(null); // hanya di memori, tidak pernah disimpan/persist

  useEffect(() => {
    (async () => {
      const stored = await storageLoad();
      // Server (`netlify/functions/data.js`) sudah menangani reset bulanan
      // otomatis sebelum mengirim data ini, jadi di sini cukup dipakai apa adanya.
      setData(stored ? { ...SEED, ...stored } : SEED);
      setLoaded(true);
    })();
  }, []);

  const refreshFromServer = useCallback(async () => {
    const stored = await storageLoad();
    if (stored) setData({ ...SEED, ...stored });
  }, []);

  // Muat ulang data dari server tiap beberapa menit, supaya kalau pengurus
  // lain menyimpan perubahan dari perangkat lain, tampilan ini ikut update
  // tanpa perlu refresh manual.
  useEffect(() => {
    const interval = setInterval(refreshFromServer, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refreshFromServer]);

  const save = useCallback(
    async (next) => {
      setSaving(true);
      const ok = await storageSave(next, adminSecret);
      setSaving(false);
      if (!ok) {
        alert("Gagal menyimpan ke Google Sheets. Periksa koneksi internet, lalu coba lagi.");
      }
    },
    [adminSecret]
  );

  const goDonasi = () => {
    setPage("home");
    requestAnimationFrame(() => document.getElementById("donasi")?.scrollIntoView({ behavior: "smooth" }));
  };

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", background: T.greenDeep, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: T.brassLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 13 }}>Memuat situs…</div>
      </div>
    );
  }

  return (
    <>
      <link rel="stylesheet" href={FONTS_LINK} />
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .app-root { font-family: 'Plus Jakarta Sans', sans-serif; color: ${T.ink}; background: ${T.limestone}; }
        input:focus, select:focus, textarea:focus { border-color: ${T.brass} !important; }
        ::selection { background: ${T.brass}; color: white; }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
          .hero-grid, .two-col { grid-template-columns: 1fr !important; }
          .grid-3, .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .admin-shell { flex-direction: column; }
          .admin-sidebar { width: 100% !important; display: flex; flex-wrap: wrap; gap: 4px; padding: 14px !important; }
        }
        @media (max-width: 520px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {page === "admin-login" && (
        <AdminLogin
          setPage={setPage}
          onSuccess={(secret) => {
            setAdminSecret(secret);
            setPage("admin");
          }}
        />
      )}

      {page === "admin" && (
        <div className="app-root">
          <AdminShell data={data} setData={setData} save={save} setPage={setPage} saving={saving} />
        </div>
      )}

      {page === "home" && (
        <div className="app-root">
          <NavBar page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          <Hero data={data} goDonasi={goDonasi} />
          <Tentang />
          <VisiMisi />
          <Program />
          <Fasilitas gallery={data.gallery} />
          <Santri santri={data.santri} />
          <Pengurus pengurus={data.pengurus} />
          <Rencana />
          <LokasiKunjungan />
          <DonasiSection projects={data.projects} />
          <Footer setPage={setPage} />
        </div>
      )}
    </>
  );
}
