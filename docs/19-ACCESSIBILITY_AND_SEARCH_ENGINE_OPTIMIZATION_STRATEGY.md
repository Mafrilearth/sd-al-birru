# 19: Accessibility (a11y) & SEO Strategy

Dokumen ini mengatur detail "rinci kecil" terkait mesin pencari dan pengguna difabel (tunanetra).

## 1. Search Engine Optimization (SEO)
- Semua halaman publik wajib mengekspor objek `metadata` Next.js dengan `title`, `description`, dan `openGraph` (untuk pratinjau WhatsApp/Facebook).
- Wajib menggunakan tag semantik HTML5 (`<header>`, `<main>`, `<article>`, `<section>`).

## 2. Aksesibilitas (Web Content Accessibility Guidelines / WCAG)
- Semua gambar (termasuk logo) **wajib** memiliki atribut `alt` yang deskriptif.
- Semua tombol pendaftaran dan tautan navigasi harus bisa dinavigasi hanya menggunakan tombol `Tab` pada *keyboard* (untuk pengguna yang tidak menggunakan *mouse*).
- Form PPDB wajib memiliki tag `aria-invalid` jika Zod melempar eror, agar *Screen Reader* (pembaca layar untuk tunanetra) bisa membaca pesan erornya.
