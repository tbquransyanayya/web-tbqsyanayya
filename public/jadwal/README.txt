Jadwal Konten Mingguan — TBQ Syanayya
======================================

ISI FOLDER
----------
- index.html      -> halaman utama, tidak perlu build apa pun
- content.json     -> data konten 7 harian (tanggal, jenis, format, caption)
- Code.gs          -> kode Google Apps Script (server status approve/revisi bersama tim)
                       — ini TIDAK ikut di-upload ke folder public/jadwal/, tapi ditempel
                       ke Google Sheet (lihat bagian "STATUS BERSAMA UNTUK TIM" di bawah)
- README.txt       -> file ini

CARA PASANG
-----------
1. Taruh index.html, content.json, dan README.txt ke: public/jadwal/  (Code.gs TIDAK ikut,
   itu ditempel terpisah ke Google Sheet — lihat bagian "STATUS BERSAMA UNTUK TIM")
2. Commit & push ke git → Netlify akan build ulang otomatis.
3. Halaman bisa diakses di: https://tbq-syanayya.netlify.app/jadwal/


BAGAIMANA HALAMAN INI BISA "DINAMIS PER 7 HARI" TANPA DEPLOY ULANG
--------------------------------------------------------------------
Ada dua hal yang dipisahkan di sini, karena sumber "dinamis"-nya beda:

1) PERGESERAN MINGGU (otomatis, tidak perlu apa pun dari kamu)
   Di dalam index.html ada satu tanggal jangkar:
       const ANCHOR_DATE = new Date('2026-09-15T00:00:00');
   Setiap kali halaman dibuka, JavaScript menghitung sudah berapa minggu berlalu sejak
   tanggal itu berdasarkan tanggal HARI INI di perangkat pengunjung, lalu otomatis
   menampilkan jendela 7 hari yang sesuai. Minggu depan, halaman ini otomatis pindah ke
   22–28 September tanpa kamu ubah kode maupun deploy ulang — ini murni perhitungan,
   berjalan selamanya.
   Catatan: karena ini menghitung "minggu berisi hari ini", kalau halaman dibuka SEBELUM
   15 September, yang tampil adalah minggu berjalan saat itu (kosong, karena konten belum
   diisi ke tanggal itu). Tinggal klik tombol › (minggu berikutnya) untuk melihat 15–21 Sept.
   Tombol ‹ / › juga bisa dipakai kapan saja untuk intip minggu lain (mundur/maju), tidak
   memengaruhi tanggal "hari ini" yang sebenarnya.

2) ISI KONTENNYA (caption, jenis feed/story, dst.) — ini yang perlu sumber data
   Sekarang halaman mengambil isi dari file content.json di folder yang sama. Supaya
   BENAR-BENAR bisa update konten tanpa pernah deploy ulang situs, ganti sumber datanya
   ke Google Sheets (gratis, tim kamu bisa edit dari HP tanpa sentuh kode sama sekali):

   a. Buat Google Sheet baru, sheet pertama diberi kolom persis:
      date | type | format | caption | slides | images
      Contoh isi satu baris (single, 1 gambar):
      2026-09-22 | feed | single | "Tips memilih waktu terbaik menghafal" | 1 | https://i.ibb.co/xxxxx/foto1.jpg
      Contoh baris carousel (4 gambar, urut sesuai urutan slide, dipisah KOMA dalam satu sel):
      2026-09-23 | feed | carousel | "4 keunggulan program tahfizh kami" | 4 | https://i.ibb.co/aaa/1.jpg,https://i.ibb.co/bbb/2.jpg,https://i.ibb.co/ccc/3.jpg,https://i.ibb.co/ddd/4.jpg
      (type: feed / story — format: single / carousel / multipage — slides: jumlah slide,
      isi 1 kalau single — images: boleh dikosongkan, nanti otomatis tampil kotak
      placeholder bernomor sebagai gantinya, tidak akan error)

      Kalau di satu hari ada FEED dan STORY sekaligus, tinggal tambah dua baris dengan
      "date" yang sama, "type" beda (satu feed, satu story). Halaman otomatis menampilkan
      keduanya berdampingan sebagai dua card terpisah di tanggal yang sama — tidak perlu
      pengaturan tambahan apa pun.

   b. File → Share → "Anyone with the link" (Viewer) supaya bisa diakses publik read-only.

   c. Ambil Spreadsheet ID dari URL sheet (bagian di antara /d/ dan /edit).

   d. Di index.html, cari baris ini:
        const DATA_URL = 'content.json';
      Ganti jadi:
        const DATA_URL = 'https://opensheet.elk.sh/<SPREADSHEET_ID>/Sheet1';
      (opensheet.elk.sh adalah layanan gratis yang mengubah Google Sheet jadi JSON secara
      otomatis setiap kali sheet dibuka — tidak perlu setup tambahan di sisi Google.)

   e. Deploy SEKALI TERAKHIR setelah ganti baris ini. Setelah itu, setiap kali tim mengisi
      baris baru di Google Sheet, halaman langsung menampilkannya begitu di-refresh browser
      — tanpa commit, tanpa push, tanpa build Netlify lagi.


DARI MANA DAPAT LINK GAMBAR UNTUK KOLOM "images"
---------------------------------------------------
Link di kolom images harus link LANGSUNG ke file gambar (bukan link halaman "lihat foto"),
supaya bisa dipasang langsung sebagai <img>. Tiga pilihan, dari yang paling gampang:

1. ImgBB (imgbb.com) — PALING DISARANKAN
   Upload foto di imgbb.com (tidak perlu akun), setelah selesai copy link yang berlabel
   "Direct link" (bukan "Viewer link"/"HTML"/"BBCode"). Tempel link itu ke sel di sheet.
   Paling stabil dan gampang buat tim non-teknis.

2. Google Drive — kalau tim sudah biasa pakai Drive
   Upload foto ke Drive → klik kanan → Share → "Anyone with the link". Dari link yang
   didapat (bentuknya https://drive.google.com/file/d/FILE_ID/view?usp=sharing), ambil
   bagian FILE_ID-nya saja, lalu susun ulang jadi:
     https://drive.google.com/uc?export=view&id=FILE_ID
   Itu yang ditempel ke sheet. Catatan: Drive kadang kurang stabil untuk hotlink gambar
   (bisa sesekali gagal muat atau muncul peringatan scan untuk file besar) — cukup aman
   untuk kebutuhan review internal seperti ini, tapi kalau mulai sering gagal muat,
   pindah ke ImgBB atau Cloudinary.

3. Cloudinary (cloudinary.com) — kalau butuh lebih andal / foto banyak & besar
   Free tier tersedia, hasil upload otomatis dapat direct link, dan bisa atur ukuran
   gambar lewat parameter URL kalau nanti performanya perlu dioptimasi.

Kalau sel "images" dikosongkan untuk salah satu baris, halaman tetap jalan normal —
otomatis menampilkan kotak placeholder bernomor seperti sebelumnya, jadi aman untuk diisi
bertahap.


TENTANG TOMBOL APPROVE / REVISI — STATUS BERSAMA UNTUK TIM
--------------------------------------------------------------
Status approve/revisi TIDAK disimpan di browser (localStorage) lagi, supaya semua
orang di tim yang buka halaman ini — dari HP atau komputer manapun — melihat status
yang sama persis: mana yang sudah "Siap posting", mana yang "Perlu revisi" beserta
catatannya.

Status ini disimpan di Google Sheet yang sama dengan konten kamu, lewat "server" gratis
bernama Google Apps Script. Sekali di-setup, semua approve/revisi dari siapa pun otomatis
tersimpan ke Sheet dan langsung terlihat semua orang begitu mereka buka/refresh halaman.

CARA SETUP (sekali saja):

1. Buka Google Sheet yang kamu pakai untuk konten (yang sudah disambungkan lewat
   opensheet.elk.sh di langkah sebelumnya).

2. Tambah SHEET/TAB baru di spreadsheet yang sama, kasih nama PERSIS: Status
   Isi baris pertama (header) persis: key | status | note | updated_at
   (kolom di bawahnya boleh kosong — nanti otomatis terisi dari halaman)

3. Di Google Sheet: menu Extensions → Apps Script. Akan terbuka editor kode baru.

4. Hapus kode bawaan (function myFunction(){}), lalu copy-paste SELURUH isi file
   Code.gs yang ada di paket ini ke editor tersebut. Simpan (Ctrl/Cmd+S).

5. Klik Deploy (kanan atas) → New deployment.
   - Klik ikon gerigi di sebelah "Select type" → pilih "Web app".
   - Execute as: Me (akun Google kamu).
   - Who has access: Anyone.
   - Klik Deploy. Google akan minta izin akses ke Sheet kamu — klik Authorize dan
     izinkan (ini normal, karena scriptnya perlu baca/tulis ke Sheet kamu sendiri).

6. Setelah deploy selesai, copy URL yang muncul (bentuknya panjang, berakhiran /exec).

7. Buka index.html, cari baris:
     const STATUS_URL = '';
   Ganti jadi (tempel URL dari langkah 6 di antara tanda kutip):
     const STATUS_URL = 'https://script.google.com/macros/s/XXXXXXXX/exec';

8. Deploy ulang situs (commit + push). Selesai — approve/revisi sekarang tersimpan
   ke tab "Status" di Sheet dan terlihat sama oleh semua orang.

Kalau STATUS_URL dibiarkan kosong, halaman tetap bisa dipakai seperti biasa, tapi akan
muncul peringatan kecil di atas halaman bahwa status belum tersambung ke tim (sementara
hanya tersimpan di sesi browser saat itu saja, hilang kalau tab ditutup).

Catatan: kalau nanti isi Code.gs ini diubah/diperbaiki, harus bikin deployment BARU lagi
(Deploy → Manage deployments → ikon pensil → New version) — sekadar Save di editor tidak
otomatis memperbarui Web App yang sudah jalan.

Netlify Forms ("approval-konten" / "revisi-konten") tetap jalan berbarengan sebagai
notifikasi tambahan (supaya ada jejak email/log di dashboard Netlify), tapi sumber
status yang ditampilkan di halaman sekarang sepenuhnya dari Google Sheet, bukan dari
Netlify Forms.

Preview yang formatnya carousel/multipage bisa digeser dengan swipe kiri/kanan langsung
di atas gambar (touchscreen), atau pakai tombol ‹ › / panah kiri-kanan keyboard.


MENGUJI DI KOMPUTER SEBELUM DEPLOY
------------------------------------
Karena halaman ini mengambil content.json lewat fetch(), tidak bisa dibuka langsung dengan
klik dua kali (file://). Jalankan server lokal sederhana dulu di folder ini, misalnya:
  python3 -m http.server 8000
lalu buka http://localhost:8000 di browser.
