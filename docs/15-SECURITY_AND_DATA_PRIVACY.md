# 15: Security & Data Privacy (PII)

Karena SD Al-Birru mengumpulkan **Personally Identifiable Information (PII)** yang sangat sensitif (Nomor WhatsApp, Nama Anak, dan NIK pada tahap lanjutan), kode ini harus tunduk pada standar keamanan data global.

## 1. Proteksi Enkripsi Lalu Lintas Data (In-Transit)
Seluruh pengiriman formulir PPDB dipaksa menggunakan protokol SSL/TLS (HTTPS). Konfigurasi Vercel akan memblokir secara keras koneksi *HTTP* biasa.

## 2. Sanitasi Input Lintas Situs (XSS Prevention)
- **Zod Validation:** Menolak input yang mengandung tag skrip berbahaya (misal: `<script>`).
- **React Escaping:** Next.js / React secara bawaan membersihkan (*escape*) seluruh variabel yang dirender di layar, memastikan nama calon siswa yang mengandung kode berbahaya tidak akan pernah tereksekusi oleh peramban Admin.

## 3. Rate Limiting (Pencegahan Serangan DDoS/Spam)
Formulir PPDB, meskipun tidak memerlukan *login*, tidak boleh dihujani oleh *bot/spam*.
- **Mekanisme Tahan Banting:** Jika Vercel Web Application Firewall (WAF) mendeteksi ada IP (Alamat Jaringan) yang mengirim ratusan pendaftaran palsu dalam hitungan menit, *IP* tersebut akan diblokir di level *Edge Network* sebelum sempat membebani *database* PostgreSQL kita.
- **Idempotency Form UI:** Tombol akan mati *(disabled)* total ketika status bergeser ke `SUBMITTING`, mencegah satu klik ganda membuat dua baris data di *database*.
