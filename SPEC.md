# Specification: Website Resmi & CMS SD Al-Birru

## 1. Objective
Membangun portal website resmi dan sistem manajemen konten (CMS) untuk Sekolah Dasar (SD) Al-Birru.
- **Tujuan Utama:** Menghadirkan profil digital sekolah yang modern, kredibel, dan cepat untuk calon wali murid (termasuk informasi PPDB), orang tua siswa, dan masyarakat umum, serta menyediakan panel administrasi yang siap pakai untuk staf sekolah mengelola konten secara mandiri.
- **Pengguna Utama:**
  1. *Publik / Calon Wali Murid:* Mengakses informasi visi-misi, program unggulan, guru, berita, galeri, dan kontak/info pendaftaran.
  2. *Administrator Sekolah:* Mengelola berita/pengumuman, album galeri kegiatan, profil sekolah, dan pesan masuk melalui panel CMS.
- **Piagam Prinsip Multidisiplin:** Wajib mematuhi seluruh hukum psikologi kognitif (Hick's, Fitts's, Miller's), teknik copywriting konversi tinggi (AIDA & PAS), prinsip rekayasa SOLID/SoC, serta standar aksesibilitas WCAG 2.1 AA yang terdokumentasi di [PRINCIPLES.md](file:///c:/Users/MaFrileartHXVI/OneDrive/Desktop/SD%20Al-Birru/PRINCIPLES.md).

---

## 2. Tech Stack (Unified Official Ecosystem)

| Lapisan (*Layer*) | Pustaka / Platform | Versi / Keterangan |
| :--- | :--- | :--- |
| **Core Framework** | Next.js (App Router) | v15.x (React 19, Server Components & Server Actions) |
| **Bahasa** | TypeScript | v5.x (Strict Mode: `strict: true`, `noImplicitAny: true`) |
| **Komponen UI** | shadcn/ui | Berbasis Radix UI Primitives (Aksesibel WCAG 2.1 AA) |
| **Styling** | Tailwind CSS | v3/v4 (Desain responsif mobile-first) |
| **Ikonografi** | Lucide React | Koleksi ikon resmi standar |
| **Motion & Animasi** | Motion (Framer Motion) | Standar resmi industri untuk animasi React (scroll reveal, entrance transitions, interactive micro-animations) |
| **Validasi Skema** | Zod | Runtime schema validation & type inference |
| **Form Engine** | React Hook Form | `@hookform/resolvers/zod` |
| **Basis Data** | PostgreSQL | Cloud Relational Database (Vercel Postgres / Neon / Supabase) |
| **ORM** | Drizzle ORM | Native database layer untuk performa instan tanpa overhead |
| **CMS Engine** | Payload CMS 3.0 | Headless CMS enterprise native Next.js di rute `/admin` |
| **Asset Storage** | Vercel Blob | Penyimpanan file gambar berita/galeri via `@payloadcms/storage-vercel-blob` |
| **Hosting & CI/CD** | Vercel | Zero-infra, global edge network, automated SSL/HTTPS |

---

## 3. Project Structure

```text
sd-al-birru/
├── src/
│   ├── app/
│   │   ├── (public)/                 # Route group for public-facing website
│   │   │   ├── layout.tsx            # Main public layout (Navbar, Footer, Meta)
│   │   │   ├── page.tsx              # Home (Hero, Principal Greeting, Core Values, Latest News & Gallery)
│   │   │   ├── about/
│   │   │   │   └── page.tsx          # About: Vision & Mission, History, Faculty & Staff Profiles
│   │   │   ├── programs/
│   │   │   │   └── page.tsx          # Programs: Curriculum, Extracurriculars, Campus Facilities
│   │   │   ├── news/
│   │   │   │   ├── page.tsx          # News & Announcements Archive
│   │   │   │   └── [slug]/page.tsx   # Detailed News / Event Article
│   │   │   ├── gallery/
│   │   │   │   └── page.tsx          # Photo Documentation & Activity Gallery
│   │   │   └── contact/
│   │   │       └── page.tsx          # Location Map, Contact Info, and Admission/Inquiry Form
│   │   ├── (payload)/                # Route group dedicated for Payload CMS
│   │   │   ├── admin/[[...segments]] # Payload CMS Admin Studio dashboard (/admin)
│   │   │   └── api/[[...segments]]   # Payload CMS REST & GraphQL API endpoints
│   │   ├── api/
│   │   │   └── contact/route.ts      # Server Action/Route Handler for contact form submissions
│   │   ├── globals.css               # Tailwind CSS design tokens & shadcn/ui themes
│   │   └── layout.tsx                # Root HTML layout and font definitions
│   ├── collections/                  # Payload CMS Collection Schemas
│   │   ├── Users.ts                  # Admin accounts & Role-Based Access Control
│   │   ├── Posts.ts                  # News, Articles, and Official Announcements
│   │   ├── Gallery.ts                # Activity albums & photo documentation
│   │   ├── Media.ts                  # Media uploads & image assets (Vercel Blob)
│   │   └── Inquiries.ts              # Inbound messages from public contact form
│   ├── components/
│   │   ├── ui/                       # shadcn/ui primitives (Button, Card, Form, Input, Dialog, etc.)
│   │   ├── layout/                   # Header, Navigation, Footer, MobileNav
│   │   └── sections/                 # HeroSection, HeadmasterSpeech, NewsCard, GalleryGrid
│   ├── lib/
│   │   ├── db/                       # Drizzle ORM configuration & database schema
│   │   ├── validations/              # Zod validation schemas (contactSchema, postSchema)
│   │   └── utils.ts                  # Shared utility functions (cn helper, date formatting, etc.)
│   └── payload.config.ts             # Main Payload CMS 3.0 configuration file
├── public/                           # Static assets (school logo, favicon, badges)
├── tasks/                            # Task tracking and execution plans (Plan & Todo)
├── SPEC.md                           # This official specification document
├── PRINCIPLES.md                     # Multidisciplinary Principles & Global Standards Charter
├── DESIGN_SYSTEM.md                  # Al-Birru Signature Design System & Tokens
├── ARCHITECTURE.md                   # System Architecture, Component Tree & Flow Diagrams
└── package.json
```

---

## 4. Commands

```bash
# Instalasi dependensi
npm install

# Menjalankan server pengembangan lokal (Next.js + Payload CMS)
npm run dev

# Menjalankan type-checking TypeScript tanpa emit file
npx tsc --noEmit

# Menjalankan linter untuk menjaga kualitas kode
npm run lint

# Menjalankan build produksi untuk validasi kompilasi
npm run build

# Menjalankan pengujian (Unit & Component Test)
npm test
```

---

## 5. Code Style & Standards

- **Komponen Fungsional & Server Components:** Gunakan React Server Components (RSC) secara bawaan untuk kecepatan dan SEO. Tambahkan direktif `'use client'` hanya pada komponen interaktif (seperti form, modal, atau mobile drawer).
- **Penulisan Tipe Data (Strict TypeScript):** Seluruh properti (*props*), *handler*, dan data balikan wajib memiliki tipe eksplisit atau diinferensikan dari skema Zod.
- **Contoh Pola Standar:**

```typescript
// src/lib/validations/contact.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  phone: z.string().regex(/^([0-9\s+()-]{9,15})$/, "Nomor telepon/WhatsApp tidak valid"),
  email: z.string().email("Format email tidak valid").optional().or(z.literal("")),
  message: z.string().min(10, "Pesan pertanyaan minimal 10 karakter"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
```

---

## 6. Testing Strategy

- **Test Runner:** Vitest + React Testing Library.
- **Cakupan Pengujian:**
  - *Unit Test:* Validasi skema Zod, pemformatan tanggal Indonesia, dan fungsi utilitas sanitasi data.
  - *Integration Test:* Pengiriman formulir kontak publik (validasi input, penanganan error, dan respons sukses).
  - *Accessibility & Build:* Pengujian linting ketat, type-check bebas error, dan pemeriksaan atribut semantik HTML (WAI-ARIA).

---

## 7. Boundaries

- **Always Do:**
  - Jalankan `npx tsc --noEmit` dan `npm run lint` sebelum melakukan *commit*.
  - Desain antarmuka wajib ramah layar ponsel (*mobile-first* / responsif).
  - Validasi semua input pengguna di sisi klien dan server menggunakan skema Zod.
  - Gunakan `next/image` untuk gambar dengan atribut `alt` yang deskriptif.
- **Ask First:**
  - Menambah dependensi paket NPM baru di luar susunan resmi yang telah disepakati.
  - Mengubah skema koleksi Payload CMS yang sudah berjalan di produksi.
  - Menghapus fitur atau mengubah tata letak halaman yang telah disetujui.
- **Never Do:**
  - Mengabaikan tipe TypeScript dengan `@ts-ignore` atau menggunakan tipe `any`.
  - Menyimpan kunci rahasia (*secret keys*, string koneksi database) ke dalam repositori Git publik.
  - Mengubah kode di folder `.next/`, `node_modules/`, atau file build otomatis.

---

## 8. Success Criteria (Acceptance Criteria)

1. **Web Publik:**
   - [ ] Halaman Beranda (`/`) menampilkan Hero, Sambutan Kepala Sekolah, 4 Keunggulan Utama, 3 Berita Terbaru, Cuplikan Galeri, dan Tombol CTA ke Kontak/PPDB.
   - [ ] Halaman Profil (`/about`) menampilkan Visi & Misi resmi, Sejarah Singkat, serta daftar Guru/Tenaga Kependidikan.
   - [ ] Halaman Program (`/programs`) menampilkan Kurikulum, daftar Ekstrakurikuler, dan Sarana Prasarana.
   - [ ] Halaman Berita (`/news`) & Galeri (`/gallery`) dinamis: memuat konten resmi dari Payload CMS.
   - [ ] Halaman Kontak (`/contact`) menyediakan informasi alamat lengkap, integrasi peta Google Maps, tombol WhatsApp, dan form kirim pertanyaan tervalidasi.
   - [ ] Kecepatan akses prima: Skor Google Lighthouse > 90 pada performa dan aksesibilitas.
2. **Panel CMS (/admin):**
   - [ ] Dashboard Payload CMS dapat diakses via `/admin` dengan sistem login otentikasi aman.
   - [ ] Admin dapat membuat, menyunting, dan menghapus artikel Berita/Pengumuman (lengkap dengan judul, konten rich-text, tanggal, dan gambar cover).
   - [ ] Admin dapat mengunggah foto ke koleksi Galeri Kegiatan.
   - [ ] Admin dapat melihat riwayat pesan pertanyaan yang masuk dari formulir kontak.

---

## 9. Open Questions (Pertanyaan Terbuka untuk Anda)

1. **Warna & Identitas Visual:** Apakah SD Al-Birru memiliki warna identitas resmi (misal: nuansa Hijau Islami zamrud & Emas, atau Biru Edukasi modern)?
2. **Pesan Masuk Form Kontak:** Selain tersimpan di dashboard CMS admin, apakah form kontak/tanya PPDB ingin langsung menyediakan tombol cepat "Kirim via WhatsApp" otomatis ke nomor admin sekolah?
