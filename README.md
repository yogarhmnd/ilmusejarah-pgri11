# 🏛️ SMK PGRI 11 CILEDUG - Pembelajaran Sejarah Indonesia Terpadu

Platform Pembelajaran Interaktif Sejarah Indonesia Terpadu jenjang SMK berbasis **Kurikulum Merdeka** (Fase E & Fase F). Portal edukasi ini dirancang modern, responsif, dan kaya konten visual serta arsip historis autentik bangsa Indonesia.

---

## ✨ Fitur Utama

- **🎓 Modul SMK Terstruktur (Fase E & Fase F)**:
  - **Fase E (Kelas X)**: Pengantar Ilmu Sejarah, Jalur Rempah Nusantara, Peradaban Kerajaan Hindu-Buddha, dan Perkembangan Kerajaan Islam.
  - **Fase F (Kelas XI - XII)**: Penjajahan Bangsa Barat & Pendudukan Jepang, Proklamasi Kemerdekaan 1945, Revolusi Fisik & Diplomasi (1945–1950), Demokrasi Parlementer, Demokrasi Terpimpin, Era Orde Baru, hingga Transisi Era Reformasi & Kontemporer.
- **📜 Arsip Dokumen Sejarah Autentik**:
  - Teks Proklamasi 1945, Piagam Jakarta, Sumpah Pemuda 1928, Perjanjian Linggarjati, Perjanjian Renville, Konferensi Meja Bundar (KMB), Dekret Presiden 1959, hingga Deklarasi Djuanda.
- **⏳ Linimasa Interaktif**:
  - Kronologi peristiwa sejarah lengkap dengan filter era, fakta kunci, dan detail historis.
- **👑 Galeri Tokoh Bangsa**:
  - Biografi, kutipan, dan peran kurikulum para pahlawan nasional dan presiden Republik Indonesia.
- **🎯 Latihan Soal & Evaluasi Interaktif**:
  - Kuis interaktif dengan timer, skor langsung, dan pembahasan penjelasan komprehensif.
- **🔍 Fitur Pencarian Cepat (Ctrl + K)**:
  - Akses cepat untuk mencari modul, tokoh, dokumen, dan peristiwa sejarah secara instan.
- **🌗 Mode Gelap / Terang (Dark / Light Theme)**:
  - Desain adaptif bernuansa elegan dengan motif budaya Megamendung.

---

## 🚀 Cara Menjalankan Secara Lokal (Local Development)

Pastikan perangkat Anda telah terpasang **Node.js** (versi 16 atau lebih baru).

1. Buka folder proyek di terminal atau PowerShell:
   ```bash
   cd c:/Users/yogar/app
   ```

2. Jalankan server lokal:
   ```bash
   npm start
   ```
   atau
   ```bash
   node server.js
   ```

3. Buka browser dan kunjungi:
   ```text
   http://localhost:3000
   ```

---

## 🌐 Cara Publikasi ke Internet (Agar Dapat Diakses Semua Orang)

Proyek ini dibuat menggunakan standar web modern murni (**HTML5, CSS3, ES Modules**) sehingga dapat di-hosting secara **100% GRATIS** di berbagai platform cloud terkemuka:

### Opsi 1: GitHub Pages (Sangat Direkomendasikan & Permanen)
1. Buat repositori baru di [GitHub](https://github.com/new), misalnya dengan nama `sejarah-smk-pgri-11`.
2. Buka terminal di folder proyek ini dan jalankan:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Siap Publikasi"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/sejarah-smk-pgri-11.git
   git push -u origin main
   ```
3. Di halaman repositori GitHub Anda, buka menu **Settings** > **Pages**.
4. Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Dalam 1-2 menit, website Anda akan aktif dan dapat diakses di:
   `https://USERNAME-ANDA.github.io/sejarah-smk-pgri-11/`

---

### Opsi 2: Vercel (Paling Cepat & Otomatis)
1. Masuk atau daftar akun di [Vercel](https://vercel.com).
2. Klik **Add New...** > **Project**.
3. Hubungkan akun GitHub Anda dan pilih repositori proyek ini (atau gunakan [Vercel CLI](https://vercel.com/cli) dengan mengetik perintah `npx vercel` langsung di terminal).
4. Pada bagian **Build and Output Settings**, konfigurasi sudah diatur otomatis oleh `vercel.json` (`outputDirectory: "."` dan rewrite ke `index.html`). Pastikan **Framework Preset** terdeteksi sebagai **Other**.
5. Klik **Deploy**.
6. Website akan langsung aktif dalam hitungan detik dengan domain HTTPS gratis (contoh: `sejarah-smk.vercel.app`).

> **Catatan jika pernah mengalami 404 di Vercel:**  
> Buka proyek di Vercel Dashboard > **Settings** > **General** > **Build & Development Settings**:
> - **Framework Preset**: Pilih `Other`
> - **Build Command**: Kosongkan atau biarkan default
> - **Output Directory**: Ketik `.` (titik/root) jika di-override, atau biarkan `vercel.json` yang mengaturnya secara otomatis.
> Lalu lakukan **Redeploy**.

---

### Opsi 3: Netlify (Deploy via Drag & Drop atau Git)
1. Masuk ke [Netlify](https://app.netlify.com).
2. Anda cukup melakukan **Drag & Drop** folder proyek ini ke dashboard Netlify, atau menghubungkannya dengan repositori GitHub.
3. Website langsung online seketika dengan SSL/HTTPS gratis.

---

## 📁 Struktur Direktori Bersih

```text
├── assets/                  # Logo sekolah, foto tokoh bangsa & gambar ilustrasi
├── css/
│   ├── base.css             # Reset & styling elemen dasar
│   ├── components.css       # Komponen kartu, modal, tab, kuis, tombol
│   ├── layout.css           # Grid & struktur responsif
│   └── variables.css        # Token desain, palet warna, tipografi
├── js/
│   ├── app.js               # Entry point utama aplikasi
│   ├── audio.js             # Efek suara interaktif
│   ├── curriculum-data.js   # Konten kurikulum Fase E & F
│   ├── curriculum.js        # Controller modul pembelajaran
│   ├── data.js              # Data tokoh, linimasa & bank soal kuis
│   ├── documents-data.js    # Data arsip teks dokumen sejarah
│   ├── documents.js         # Controller viewer arsip dokumen
│   ├── quiz.js              # Controller kuis interaktif
│   └── timeline.js          # Controller linimasa sejarah
├── .gitignore               # Konfigurasi file yang diabaikan git
├── _redirects               # Routing rule untuk Netlify / Cloudflare
├── index.html               # File utama halaman web
├── manifest.json            # PWA manifest untuk dukungan aplikasi mobile
├── package.json             # Konfigurasi proyek Node.js
├── README.md                # Panduan dokumentasi proyek & hosting
├── robots.txt               # Aturan pengindeksan mesin pencari (SEO)
├── server.js                # Server statis lokal berbasis Node.js
├── sitemap.xml              # Peta situs untuk Google / Bing
└── vercel.json              # Konfigurasi deployment Vercel
```

---

## 📜 Lisensi & Hak Cipta
Hak Cipta © 2026 **SMK PGRI 11 CILEDUG**. Seluruh materi sejarah disusun sesuai acuan Kurikulum Merdeka Kemendikdasmen RI untuk keperluan edukasi dan literasi sejarah nasional.
