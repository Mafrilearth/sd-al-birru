# 20: Environment & Secrets Management

Dokumen ini mengunci bagaimana variabel lingkungan (seperti *password database*) dikelola agar tidak bocor ke publik.

## 1. Validasi Variabel (T3 Env / Zod)
- File `.env` tidak akan sekadar dipanggil dengan `process.env.DATABASE_URL`.
- Kami menggunakan pendekatan *Type-Safe Env*: Semua variabel lingkungan wajib didaftarkan dan divalidasi oleh Zod saat server pertama kali menyala (saat *Build*).
- Jika *Admin* Vercel lupa memasukkan kunci `DATABASE_URL`, proses *Build* akan langsung gagal dengan pesan eror eksplisit, mencegah aplikasi mati tiba-tiba saat diakses pengguna.

## 2. Isolasi Klien vs Server
- Variabel yang berawalan `NEXT_PUBLIC_` adalah satu-satunya variabel yang diizinkan melintasi batas menuju peramban publik.
- Variabel rahasia (seperti Token NextAuth atau URL PostgreSQL) dijaga mutlak di lapisan *Server Actions* (merujuk pada Dokumen 09).
