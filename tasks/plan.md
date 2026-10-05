# Implementation Plan: Website Resmi & CMS SD Al-Birru

## Overview
Membangun website resmi institusi pendidikan SD Al-Birru dan panel CMS mandiri berbasis Next.js 15, TypeScript (Strict), shadcn/ui, Tailwind CSS, PostgreSQL, Drizzle ORM, dan Payload CMS 3.0. Seluruh sistem terintegrasi dalam satu repositori (*Unified Next.js Ecosystem*) dengan arsitektur serverless zero-infra.

---

## Architecture Decisions

1. **Unified Next.js 15 App Router + Payload CMS 3.0:**
   - Halaman publik diletakkan pada route group `(public)` untuk performa SSR/SSG dan optimasi SEO.
   - Panel admin CMS diletakkan pada route group `(payload)` di rute `/admin`, berjalan *native* tanpa server terpisah.
2. **Drizzle ORM + PostgreSQL Cloud (Neon / Supabase):**
   - Drizzle ORM digunakan sebagai penggerak basis data Payload CMS dan tabel aplikasi dengan *type-safety* murni dan overhead nol.
3. **Cloud Media Storage via Vercel Blob:**
   - Semua gambar dokumentasi kegiatan, berita, dan logo diunggah ke Vercel Blob via `@payloadcms/storage-vercel-blob` agar tidak hilang saat serverless redeploy.
4. **Design System & Aksesibilitas:**
   - Memakai **shadcn/ui** berbasis Radix UI dan Tailwind CSS, menjamin navigasi responsif ramah layar HP (wali murid) dan memenuhi standar aksesibilitas WCAG 2.1 AA.
5. **Validasi Formulir:**
   - Form kontak publik di `/contact` divalidasi ganda (klien dan server) menggunakan **Zod** dan **React Hook Form**, serta mendukung pengalihan cepat ke chat WhatsApp sekolah.
6. **Motion & Animasi Halus (Motion / Framer Motion):**
   - Menggunakan **Motion** untuk efek entrance hero, scroll reveal saat pengguna menggulir halaman, transisi halus pada menu drawer mobile, dan micro-interaction pada kartu program & berita agar tampilan terasa hidup dan premium tanpa mengorbankan performa.

---

## Implementation Phases & Task List

### Phase 1: Foundation & Setup
- [ ] **Task 1:** Inisialisasi proyek Next.js 15 (TypeScript strict, Tailwind CSS, Lucide React, Motion/Framer Motion, shadcn/ui, dan utilitas `cn`).
- [ ] **Task 2:** Setup konfigurasi Payload CMS 3.0 & koneksi PostgreSQL (Drizzle ORM) di Next.js App Router.

#### Checkpoint 1: Foundation
- [ ] Proyek berjalan bersih dengan `npm run dev`.
- [ ] Dashboard `/admin` dapat diakses dan `npx tsc --noEmit` bebas error.

---

### Phase 2: CMS Data Models & Media Storage
- [ ] **Task 3:** Konfigurasi koleksi data Payload CMS (`Users`, `Posts`, `Gallery`, `Media`, `Inquiries`).
- [ ] **Task 4:** Konfigurasi adapter penyimpanan berkas gambar (Vercel Blob / Media Storage).

#### Checkpoint 2: CMS Readiness
- [ ] Admin dapat login ke `/admin` dan mengunggah gambar ke koleksi Media.
- [ ] Admin dapat membuat artikel berita dummy dan melihatnya tersimpan di database.

---

### Phase 3: Public Website Structure & Layout
- [ ] **Task 5:** Pembuatan layout publik (Navbar dengan navigasi responsif mobile drawer, Footer dengan kontak dan legalitas sekolah).
- [ ] **Task 6:** Halaman Beranda (`/`) lengkap dengan Hero Banner, Sambutan Kepala Sekolah, 4 Pilar Keunggulan, Cuplikan Berita, dan CTA Pendaftaran.
- [ ] **Task 7:** Halaman Profil Sekolah (`/about`) memuat Visi & Misi, Sejarah Singkat, serta Struktur Dewan Guru & Staf.
- [ ] **Task 8:** Halaman Program & Fasilitas (`/programs`) memuat Kurikulum, Ekstrakurikuler, dan Galeri Sarana Prasarana.

#### Checkpoint 3: UI & Navigation
- [ ] Navigasi publik antarhalaman berjalan lancar di HP dan desktop.
- [ ] Tampilan profesional, kontras warna memenuhi standar, tanpa error visual.

---

### Phase 4: Dynamic Content & Interactivity
- [ ] **Task 9:** Integrasi halaman Berita & Pengumuman (`/news` dan detail `/news/[slug]`) dengan data live dari Payload CMS.
- [ ] **Task 10:** Halaman Galeri Kegiatan (`/gallery`) dengan tampilan grid foto dokumentasi kegiatan sekolah.
- [ ] **Task 11:** Halaman Kontak & Tanya PPDB (`/contact`) dengan validasi Zod, Server Action penyimpanan ke koleksi `Inquiries`, dan tombol integrasi pesan WhatsApp otomatis.

#### Checkpoint 4: End-to-End Flow
- [ ] Postingan berita baru yang diinput via `/admin` langsung muncul di `/news`.
- [ ] Pengiriman form kontak tervalidasi, tersimpan di database, dan membuka WhatsApp dengan format pesan rapi.

---

### Phase 5: SEO, Optimization & Final Verification
- [ ] **Task 12:** Implementasi metadata SEO dinamis (`sitemap.ts`, `robots.ts`, OpenGraph banner untuk media sosial).
- [ ] **Task 13:** Pengujian menyeluruh, audit linting, type-check, dan verifikasi `npm run build` sukses.

#### Checkpoint 5: Production Ready
- [ ] Build produksi selesai 100% tanpa peringatan (*warning*) atau error.
- [ ] Siap untuk deployment ke Vercel.

---

## Risks and Mitigations

| Risiko | Dampak | Mitigasi |
| :--- | :--- | :--- |
| **Koneksi Database Cloud lambat / putus** | Sedang | Gunakan *connection pooling* resmi dari Neon/Supabase dan simpan data query statis dengan Next.js ISR (*Incremental Static Regeneration*). |
| **Upload gambar ukuran besar oleh admin** | Rendah | Konfigurasi batas ukuran upload di Payload CMS (maks 2MB per gambar) dan optimasi otomatis via `next/image`. |
| **Spam pada form kontak publik** | Sedang | Pasang validasi skema Zod ketat dan mekanisme *rate-limiting* pada endpoint pengiriman pesan. |
