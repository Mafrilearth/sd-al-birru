# 13: Internationalization (i18n) Architecture

Sistem SD Al-Birru dirancang secara bawaan (*native*) untuk mendukung audiens global dengan 4 bahasa kunci: Indonesia (`id`), Inggris (`en`), Arab (`ar`), dan Jepang (`ja`). Dokumen ini mengatur bagaimana lokalisasi teks dan tata letak bahasa beroperasi.

## 1. Teknologi Inti (Core Engine)
- **Library:** `next-intl`
- **Routing:** Menggunakan *Middleware* untuk secara otomatis mendeteksi bahasa peramban pengguna dan melakukan pengalihan (*redirect*) ke rute spesifik (contoh: `/ar/admissions`).
- **Kamus (Dictionaries):** Disimpan secara terpusat dan murni dalam format JSON di folder `src/messages/`.

## 2. Struktur Kamus Bersarang (Nested JSON Rules)
Untuk mencegah kamus yang berantakan, semua kunci terjemahan wajib dikelompokkan berdasarkan area komponen/halaman (*Namespace*):
```json
{
  "Hero": {
    "title": "Terjemahan Title",
    "cta": "Terjemahan Tombol"
  },
  "Navigation": { ... },
  "Forms": { ... }
}
```
Aturan Keras: **Struktur *key* JSON di `id.json`, `en.json`, `ar.json`, dan `ja.json` harus 100% identik.** Jika ada satu *key* yang tertinggal di bahasa Jepang, sistem kompilasi (TypeScript) harus membunyikan alarm *error*.

## 3. Tata Letak Kanan-ke-Kiri (Right-to-Left / RTL)
Khusus untuk bahasa Arab (`ar`), struktur HTML `<html lang="ar" dir="rtl">` akan secara dinamis diaktifkan oleh *layout* utama.
- **Konsekuensi Desain:** Tailwind CSS akan otomatis membalikkan margin dan *padding* bawaan (contoh: `ml-4` menjadi batas kanan) karena arsitektur Tailwind kita telah disetel menggunakan properti logika CSS (*CSS Logical Properties* seperti `ms-4` dan `me-4`).

## 4. Standar Terminologi Terjemahan
- `id` (Indonesia): Harus sangat baku (EYD) dan profesional.
- `en` (English): Menggunakan American English (*Standard Professional*).
- `ar` (Arabic): Menggunakan *Fusha* (Bahasa Arab Standar Modern) dengan penekanan pada diksi Islami yang sopan.
- `ja` (Japanese): Menggunakan bahasa formal bisnis (*Keigo / Desumasu-cho*).
