# 21: Media & Asset Optimization

Situs SD Al-Birru harus dimuat di bawah 1.5 detik (*Hick's Law of Speed*). Dokumen ini mengunci penanganan detail kecil terkait aset statis.

## 1. Manajemen Gambar
- Penggunaan tag HTML `<img>` standar **dilarang keras**.
- Semua gambar (foto fasilitas, logo) wajib menggunakan komponen `next/image` dari Next.js untuk memaksa kompresi format `WebP` otomatis dan *Lazy Loading* (gambar tidak dimuat sebelum masuk layar).

## 2. Tipografi (Fonts)
- Penggunaan CDN eksternal (seperti Google Fonts *stylesheet*) dilarang keras karena menyebabkan *Render-Blocking*.
- Semua *font* wajib diimpor melalui modul `next/font/google` yang akan mengunduh dan menyematkan *font* langsung saat waktu kompilasi (*Build Time*), menghasilkan skor kecepatan (LCP) yang sempurna.
