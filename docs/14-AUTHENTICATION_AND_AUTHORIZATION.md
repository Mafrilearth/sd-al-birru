# 14: Authentication & Authorization (RBAC)

Karena website ini akan memiliki Dasbor Admin untuk mengelola data Pendaftaran PPDB, sistem autentikasi mutlak diperlukan untuk mencegah akses ilegal.

## 1. Engine Autentikasi
Kami menggunakan **Auth.js (NextAuth v5)**. Teknologi ini terintegrasi langsung secara bawaan dengan Next.js Server Actions dan Middleware, memberikan keamanan tingkat tinggi (berbasis *HTTP-only cookies*) yang kebal terhadap pencurian *token* via injeksi JavaScript (XSS).

## 2. Role-Based Access Control (RBAC)
Sistem ini membagi pengguna ke dalam batas *Role* yang kaku:
- `USER` (Publik / Orang Tua): Hanya bisa mengakses halaman publik (`/(public)/...`) dan mengirim formulir pendaftaran. Mereka tidak perlu *login* untuk mendaftar PPDB (Zero-Friction).
- `ADMIN` (Panitia / Staf Sekolah): Dapat mengakses rute `/admin/...`. Middleware secara otomatis akan melempar (*bounce*) siapa pun yang mencoba mengakses rute ini tanpa sesi `ADMIN` aktif.

## 3. Strategi Penyimpanan Sesi
Sesi disimpan di *Database* (PostgreSQL via Drizzle) di tabel `sessions`. Ini menjamin *Admin Utama* dapat mencabut (*revoke*) paksa akses staf kapan saja (misalnya jika perangkat staf hilang), berbeda dengan JWT biasa yang tidak bisa dibatalkan sebelum *expired*.
