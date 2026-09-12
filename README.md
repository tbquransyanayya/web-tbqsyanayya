# Situs TBQ Syanayya — Paket Deploy Netlify (dengan Google Sheets sebagai database)

Situs React (Vite) untuk **TBQ Syanayya (Taman Belajar Al-Qur'an)**. Semua data situs — pengurus,
galeri, progres donasi & wakaf, donatur, laporan bulanan — disimpan di **Google Sheets**, dibaca/ditulis
lewat satu **Netlify Function** perantara. Karena datanya di Sheets (bukan di localStorage
browser), **semua pengurus yang login dari perangkat masing-masing akan melihat data yang sama**,
selalu sinkron.

## Kenapa perlu Netlify Function, bukan langsung ke Google Sheets dari browser?

Karena mengakses Google Sheets API butuh kredensial rahasia (private key service account). Kalau
kredensial itu ditaruh di kode yang jalan di browser, siapa pun bisa membukanya lewat "View Source"
dan mencuri akses ke spreadsheet kamu. Netlify Function berjalan di server, jadi kredensial itu
aman tersimpan sebagai environment variable dan tidak pernah dikirim ke pengunjung situs.

---

## Bagian 1 — Menyiapkan Google Sheets sebagai database

### 1.1 Buat spreadsheet kosong

1. Buka [sheets.google.com](https://sheets.google.com) → buat spreadsheet baru, beri nama misalnya "TBQ Syanayya - Database".
2. Salin **ID spreadsheet** dari URL-nya. Contoh URL:
   ```
   https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit
   ```
   ID-nya adalah bagian `1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`.
3. Biarkan kosong — semua tab/kolom akan **dibuat otomatis** oleh sistem saat pertama kali situs diakses.

### 1.2 Buat Service Account (akun robot untuk akses API)

1. Buka [console.cloud.google.com](https://console.cloud.google.com) → buat project baru (atau pakai yang sudah ada).
2. Di kotak pencarian atas, cari **"Google Sheets API"** → klik **Enable**.
3. Buka menu **IAM & Admin → Service Accounts** → **Create Service Account**.
   - Nama bebas, misalnya `tbq-syanayya-bot`.
   - Klik **Create and Continue** → **Done** (role/permission tambahan tidak perlu).
4. Klik service account yang baru dibuat → tab **Keys** → **Add Key → Create new key → JSON** → download.
   File JSON ini berisi dua hal penting yang kamu butuhkan:
   - `client_email` (contoh: `tbq-syanayya-bot@nama-project.iam.gserviceaccount.com`)
   - `private_key` (teks panjang diawali `-----BEGIN PRIVATE KEY-----`)

   **Simpan file ini baik-baik, jangan diunggah ke GitHub.**

### 1.3 Bagikan spreadsheet ke Service Account

1. Buka kembali spreadsheet yang dibuat di langkah 1.1.
2. Klik **Share** → tempel email `client_email` dari file JSON tadi → beri akses **Editor** → Send.

Tanpa langkah ini, function tidak akan bisa membaca/menulis spreadsheet kamu.

---

## Bagian 2 — Deploy ke Netlify

### 2.1 Upload project ke GitHub

Ikuti cara yang sama seperti sebelumnya (lewat browser HP, tanpa command line):
1. Ekstrak folder project ini.
2. Buat repo baru di GitHub.
3. Upload seluruh isi folder, termasuk folder `netlify/functions/` (buat dulu foldernya lewat "Create new file" → ketik `netlify/functions/.gitkeep`, lalu upload `data.cjs` ke situ).
4. Buat file-file konfigurasi di root (`index.html`, `package.json`, `vite.config.js`, `netlify.toml`, `.gitignore`) — isinya tinggal copy-paste dari hasil ekstrak.

### 2.2 Hubungkan ke Netlify

1. netlify.com → **Add new site → Import an existing project → Deploy with GitHub** → pilih repo ini.
2. Netlify otomatis membaca `netlify.toml` (build command, publish folder, dan lokasi function sudah diatur).
3. **Jangan klik Deploy dulu** — isi environment variables terlebih dahulu (langkah berikut), supaya build pertama langsung berhasil terhubung ke Sheets.

### 2.3 Isi Environment Variables di Netlify

Di halaman setup site (atau nanti lewat **Site settings → Environment variables**), tambahkan 4 variable ini:

| Key | Value |
|---|---|
| `GOOGLE_SHEET_ID` | ID spreadsheet dari langkah 1.1 |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `client_email` dari file JSON |
| `GOOGLE_PRIVATE_KEY` | `private_key` dari file JSON (isi lengkap termasuk `-----BEGIN PRIVATE KEY-----` dan `-----END PRIVATE KEY-----`) |
| `ADMIN_API_SECRET` | Passcode admin situs — bebas kamu tentukan sendiri, contoh: `SyanayyaAdmin2026!` |

**Catatan soal `GOOGLE_PRIVATE_KEY`:** kalau kamu paste isi private key ke Netlify dan strukturnya jadi satu baris panjang dengan tulisan literal `\n` di dalamnya, itu **tidak masalah** — kode di function ini sudah menangani konversi `\n` tersebut secara otomatis.

### 2.4 Deploy

Klik **Deploy site**. Tunggu 1–2 menit. Situs live di `nama-acak.netlify.app`.

**Uji coba:** buka situs → klik 5x baris hak cipta di footer → masukkan passcode yang kamu isi di `ADMIN_API_SECRET` tadi → kalau berhasil masuk ke Dashboard, berarti koneksi ke Google Sheets sudah benar. Coba tambah satu data (misal pengurus baru), lalu cek langsung di Google Sheets kamu — baris barunya harus langsung muncul di tab `Pengurus`.

---

## Struktur data di Google Sheets

Setelah situs pertama kali diakses, spreadsheet kamu otomatis punya tab-tab berikut. Kamu **boleh membuka dan melihat-lihat isinya langsung** di Google Sheets (read-only untuk dicek manual) — tapi **sebaiknya perubahan data tetap dilakukan lewat Panel Admin di situs**, bukan diedit langsung di Sheets, supaya perhitungan seperti "terkumpul" dan reset bulanan tetap konsisten.

| Tab | Isi |
|---|---|
| `Pengurus` | Nama, jabatan, kelompok pengurus |
| `Projects` | Program donasi (Operasional Bulanan, Pemagaran), target & terkumpul |
| `DonaturTetap` | Donatur rutin bulanan — tidak ikut direset tanggal 1 |
| `DonaturBulanIni` | Donatur non-rutin bulan berjalan — direset otomatis tanggal 1 |
| `Gallery` | Foto & caption fasilitas |
| `Santri` | Jumlah santri aktif, tunggu, dewasa, halaqah |
| `LaporanBulanan` | Arsip laporan tiap bulan (untuk tombol "Unduh Laporan") |
| `Meta` | Info periode berjalan & data grafik tren donasi |

Reset otomatis tanggal 1 dan pengarsipan ke `LaporanBulanan` **dijalankan otomatis oleh server** setiap ada orang membuka situs setelah tanggal 1 — tidak perlu ada admin yang login untuk memicunya.

---

## Panel Admin

- **Cara membuka:** klik baris hak cipta di footer 5x dalam 3 detik.
- **Passcode:** sesuai yang kamu isi di environment variable `ADMIN_API_SECRET` (bukan lagi kode tetap di dalam kode sumber, jadi lebih aman — kamu bisa ganti kapan saja lewat Netlify tanpa perlu edit/build ulang kode).
- **Ganti passcode:** Netlify → Site settings → Environment variables → edit `ADMIN_API_SECRET` → **Deploys → Trigger deploy** (supaya function memakai nilai baru).

## Menjalankan di komputer sendiri (opsional)

```bash
npm install
npm run dev
```

Perlu Netlify CLI (`npm install -g netlify-cli` lalu jalankan `netlify dev` bukan `vite dev`) supaya function lokal (`/.netlify/functions/data`) ikut jalan dan bisa dites tanpa deploy dulu. Kalau hanya `npm run dev`, halaman publiknya jalan tapi panel admin tidak akan bisa login karena function belum aktif.

## Mengganti nomor WhatsApp / rekening bank / media sosial

Semua ada di bagian atas `src/App.jsx`:

```js
const BANK = { bank: "...", norek: "...", atasNama: "...", konfirmasi: "..." };
const PENGURUS_KONTAK = [ /* nomor WA untuk konfirmasi donasi */ ];
const LOKASI = { alamat: "...", googleMapsUrl: "...", embedUrl: "..." };
const SOSMED = { whatsapp: "...", email: "...", instagram: "...", facebook: "...", tiktok: "..." };
```

**Penting:** akun Instagram, Facebook, TikTok, dan email di `SOSMED` masih **placeholder** — ganti dengan akun resmi TBQ Syanayya sebelum situs live ke publik.

## Struktur proyek

```
├── index.html
├── netlify.toml              ← build settings + lokasi functions
├── package.json
├── vite.config.js
├── netlify/
│   └── functions/
│       └── data.cjs           ← perantara ke Google Sheets (GET/POST)
├── public/
│   └── images/                ← foto-foto yayasan
└── src/
    ├── main.jsx
    └── App.jsx                 ← seluruh halaman + panel admin
```
