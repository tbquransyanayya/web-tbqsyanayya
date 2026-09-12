TBQ Syanayya — Demo Konten Sosmed
==================================

Isi folder:
- index.html         -> file utama, siap di-upload ke hosting statis apa pun
                         (Netlify, Vercel, GitHub Pages, cPanel, dst — tanpa build step)
- feed-001.png .. feed-009.png       -> placeholder grid Instagram (rasio 3:4)
- story-001.png .. story-006.png     -> placeholder story (rasio 9:16)
- carousel-001.png .. carousel-004.png -> placeholder carousel (rasio 3:4)

Cara deploy:
1. Upload SEMUA file di folder ini (index.html + semua .png) ke root folder hosting kamu.
   Jangan pindahkan gambar ke sub-folder, karena index.html memanggilnya dengan path relatif
   langsung (contoh: url('feed-001.png')).
2. Ganti file .png placeholder dengan gambar asli kamu — pastikan NAMA FILE-nya sama persis
   (feed-001.png, story-003.png, dst) supaya otomatis kepakai tanpa edit HTML lagi.
3. Buka index.html di browser untuk preview lokal sebelum upload (tinggal double-click).

Butuh ganti ke banyak gambar sekaligus? Cukup timpa (overwrite) file dengan nama yang sama.
