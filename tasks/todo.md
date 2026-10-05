# Tasks Checklist: Website Resmi & CMS SD Al-Birru

## Phase 1: Foundation & Setup

### Task 1: Initialize Next.js 15 Project with TypeScript, Tailwind CSS, Motion, & shadcn/ui
**Description:** Menyiapkan fondasi repositori Next.js 15 dengan TypeScript strict mode, mengonfigurasi Tailwind CSS, Lucide React, Motion (Framer Motion), serta utilitas `cn` (`clsx` + `tailwind-merge`) dan konfigurasi dasar shadcn/ui.
**Acceptance criteria:**
- [x] File `package.json`, `tsconfig.json`, `tailwind.config.ts` terkonfigurasi dengan benar.
- [x] Next.js App Router aktif dan siap digunakan di direktori `src/app`.
- [x] Dependensi `motion` (Framer Motion) terpasang untuk animasi interaktif dan scroll reveal.
- [x] Utilitas styling `src/lib/utils.ts` tersedia.
**Verification:**
- [x] Tests pass: `npx tsc --noEmit` bebas error.
- [x] Build succeeds: `npm run build` berhasil.
- [x] Manual check: Halaman pengujian Next.js terbuka normal di browser lokal.
**Dependencies:** None

---

### Task 2: Configure Payload CMS 3.0 & Database Connection
**Description:** Menginstal dan mengonfigurasi Payload CMS 3.0 di dalam Next.js App Router (`src/app/(payload)/admin`), terhubung dengan PostgreSQL melalui Drizzle ORM.
**Acceptance criteria:**
- [x] Konfigurasi `src/payload.config.ts` terpasang dengan adapter Drizzle PostgreSQL / SQLite fallback dev.
- [x] Rute `/admin` merender antarmuka otentikasi login admin Payload CMS.
**Verification:**
- [x] Tests pass: `npx tsc --noEmit` berhasil.
- [x] Build succeeds: `npm run build` sukses mengenali rute Payload.
- [x] Manual check: Mengakses `http://localhost:3000/admin` memunculkan halaman login/setup admin.
**Dependencies:** Task 1

---

### Checkpoint: Foundation
- [x] Next.js berjalan stabil di `npm run dev`.
- [x] Halaman login `/admin` dapat diakses.
- [x] `npx tsc --noEmit` lulus tanpa error.

---

## Phase 2: CMS Data Models & Media Storage

### Task 3: Define Payload Content Collections
**Description:** Membuat definisi skema koleksi data Payload CMS untuk kebutuhan sekolah: `Users` (admin), `Posts` (berita & artikel), `Gallery` (album kegiatan), `Media` (berkas gambar), dan `Inquiries` (pesan form kontak).
**Acceptance criteria:**
- [x] Koleksi `Posts` memiliki field: judul, slug, gambar cover, konten rich-text, kategori, status (draft/published), dan tanggal publikasi.
- [x] Koleksi `Gallery` memiliki field: judul kegiatan, tanggal, dan relasi ke media gambar.
- [x] Koleksi `Inquiries` memiliki field: nama lengkap, nomor WhatsApp, email, dan pesan pertanyaan.
**Verification:**
- [x] Tests pass: `npx tsc --noEmit` lolos validasi tipe skema Payload.
- [x] Manual check: Form input untuk semua koleksi muncul di dashboard `/admin`.
**Dependencies:** Task 2

---

### Task 4: Configure Media Upload Storage
**Description:** Mengonfigurasi adapter penyimpanan media (Vercel Blob / Cloud Storage) agar file gambar yang diunggah melalui CMS tersimpan di cloud storage yang aman dan persisten.
**Acceptance criteria:**
- [x] Upload gambar di dashboard CMS berhasil menyimpan gambar dan mengembalikan URL CDN yang valid.
- [x] Skrip fallback lokal tersedia untuk keperluan testing lingkungan dev offline.
**Verification:**
- [x] Manual check: Upload satu gambar contoh di `/admin` berhasil tampil di galeri media.
**Dependencies:** Task 3

---

### Checkpoint: CMS Readiness
- [x] Admin dapat login ke `/admin`.
- [x] Seluruh koleksi (`Posts`, `Gallery`, `Media`, `Inquiries`) aktif dan dapat diisi.

---

## Phase 3: Public Website Structure & Layout

### Task 5: Implement Public Layout (Navbar, Footer, Mobile Drawer)
**Description:** Membangun tata letak global untuk web publik di `src/app/(public)/layout.tsx` menggunakan komponen shadcn/ui, mencakup header sticky dengan logo SD Al-Birru, navigasi responsif (dengan drawer menu mobile), dan footer lengkap.
**Acceptance criteria:**
- [x] Navbar menampilkan link navigasi: Beranda, Profil, Program, Berita, Galeri, dan Kontak.
- [x] Menu mobile drawer dapat dibuka/tutup dengan lancar di layar smartphone.
- [x] Footer memuat info kontak sekolah, alamat, jam operasional, dan hak cipta resmi.
**Verification:**
- [x] Manual check: Uji responsive layout di ukuran layar mobile (375px) dan desktop (1440px).
- [x] Tests pass: Tidak ada error hydration di console browser.
**Dependencies:** Task 1

---

### Task 6: Implement Home Page (`/`)
**Description:** Membangun halaman utama (Beranda) yang memikat dengan Hero Section, Sambutan Kepala Sekolah, 4 Pilar Keunggulan, Cuplikan Berita Terkini, Galeri Sorotan, dan CTA Informasi PPDB.
**Acceptance criteria:**
- [x] Hero section memuat headline inspiratif, slogan SD Al-Birru, dan tombol cepat ke Informasi PPDB & Profil.
- [x] Bagian sambutan kepala sekolah dilengkapi foto representatif dan kutipan visi.
- [x] Bagian keunggulan menampilkan 4 poin utama (Kurikulum Islami Terpadu, Karakter Mulia, Guru Berdedikasi, Fasilitas Lengkap).
**Verification:**
- [x] Manual check: Tampilan beranda rapi, tipografi nyaman dibaca, dan kontras warna sesuai standar.
**Dependencies:** Task 5

---

### Task 7: Implement About School Page (`/about`)
**Description:** Membangun halaman profil lengkap SD Al-Birru yang menyajikan Visi & Misi resmi, Sejarah singkat berdirinya sekolah, serta Grid Profil Guru dan Tenaga Kependidikan.
**Acceptance criteria:**
- [x] Menampilkan visi & misi sekolah dengan poin-poin yang terstruktur.
- [x] Menampilkan profil pimpinan dan daftar tenaga pendidik profesional.
**Verification:**
- [x] Manual check: Halaman `/about` dapat diakses dari menu navigasi dan seluruh informasi tersaji rapi.
**Dependencies:** Task 5

---

### Task 8: Implement Programs & Facilities Page (`/programs`)
**Description:** Membangun halaman rincian program sekolah yang menyajikan Kurikulum pembelajaran, kegiatan Ekstrakurikuler unggulan (Pramuka, Tahfidz, Robotik, Seni), dan Sarana Prasarana sekolah.
**Acceptance criteria:**
- [x] Informasi kurikulum nasional dan muatan lokal tersaji jelas.
- [x] Card interaktif untuk setiap ekstrakurikuler.
- [x] Galeri sarana dan prasarana (perpustakaan, lab komputer, masjid, lapangan olahraga).
**Verification:**
- [x] Manual check: Halaman `/programs` responsif di semua ukuran layar.
**Dependencies:** Task 5

---

### Checkpoint: UI & Layout
- [x] Halaman Beranda (`/`), Profil (`/about`), dan Program (`/programs`) selesai dan responsif.
- [x] Navigasi antarhalaman berfungsi tanpa kendala.

---

## Phase 4: Dynamic Content & Interactivity

### Task 9: Implement News & Announcements Archive & Detail (`/news` & `/news/[slug]`)
**Description:** Menghubungkan halaman daftar berita (`/news`) dan halaman detail artikel (`/news/[slug]`) dengan data dinamis dari Payload CMS dan fallback content.
**Acceptance criteria:**
- [x] `/news` menampilkan daftar kartu artikel terbaru dengan thumbnail, tanggal publikasi, dan kategori.
- [x] Mengklik kartu artikel membuka `/news/[slug]` yang menampilkan isi lengkap artikel, gambar cover, dan tombol bagikan.
**Verification:**
- [x] Manual check: Artikel yang dipublish di `/admin` otomatis muncul di `/news`.
**Dependencies:** Task 3, Task 5

---

### Task 10: Implement Activity Gallery Page (`/gallery`)
**Description:** Membangun halaman galeri dokumentasi foto kegiatan sekolah yang terhubung dengan koleksi `Gallery` dari Payload CMS, dilengkapi tampilan lightbox / image modal.
**Acceptance criteria:**
- [x] Grid foto kegiatan tersusun estetis dengan keterangan nama kegiatan dan tanggal.
- [x] Mengklik salah satu foto membuka penampil gambar ukuran penuh (*modal view*).
**Verification:**
- [x] Manual check: Foto dari koleksi CMS ter-render dengan rasio aspek yang proporsional.
**Dependencies:** Task 3, Task 5

---

### Task 11: Implement Contact & PPDB Inquiry Page (`/contact`)
**Description:** Membangun halaman kontak yang menyajikan detail alamat, peta interaktif, jam operasional, serta form kirim pesan/pertanyaan PPDB tervalidasi Zod dengan Server Action / API Route yang menyimpan data ke koleksi `Inquiries` dan menyediakan tombol chat cepat ke WhatsApp admin.
**Acceptance criteria:**
- [x] Form tervalidasi ketat (nama lengkap, nomor HP, email opsional, pesan).
- [x] Pesan tersimpan ke basis data dan admin sekolah menerima notifikasi WhatsApp.
- [x] Pesan sukses tampil interaktif setelah form terkirim.
**Verification:**
- [x] Manual check: Isi form dengan nomor dummy, periksa data masuk di `/admin`, dan verifikasi tautan WhatsApp tergenerate otomatis.
**Dependencies:** Task 3, Task 5

---

### Checkpoint: End-to-End Interactivity
- [x] Seluruh integrasi dinamis (Berita, Galeri, Form Kontak) berfungsi penuh.
- [x] Alur input dari `/admin` hingga tampil di web publik terverifikasi.

---

## Phase 5: SEO, Optimization & Verification

### Task 12: SEO Metadata, OpenGraph & Sitemap
**Description:** Menambahkan konfigurasi metadata dinamis di Next.js untuk setiap halaman, kartu OpenGraph (Twitter/Facebook/WhatsApp share preview), `sitemap.ts`, dan `robots.ts`.
**Acceptance criteria:**
- [x] Tautan web saat dibagikan di WhatsApp menampilkan judul, deskripsi resmi SD Al-Birru, dan logo sekolah.
- [x] File `/sitemap.xml` dan `/robots.txt` dapat diakses dan valid.
**Verification:**
- [x] Manual check: Akses `http://localhost:3000/sitemap.xml` dan verifikasi seluruh rute terdaftar.
**Dependencies:** Task 6, Task 7, Task 8, Task 9, Task 10, Task 11

---

### Task 13: Final Code Review, Linting & Build Verification
**Description:** Melakukan audit menyeluruh terhadap kebersihan kode, type-checking ketat, linting, dan menjalankan `npm run build` untuk memastikan proyek 100% siap dideploy ke Vercel.
**Acceptance criteria:**
- [x] `npx tsc --noEmit` lulus tanpa satu pun type error.
- [x] `npm run build` menghasilkan bundle produksi Next.js yang optimal.
**Verification:**
- [x] Build succeeds: Menghasilkan status build hijau (clean exit code 0).
**Dependencies:** All Tasks

---

### Checkpoint: Production Complete
- [x] Seluruh task 1–13 selesai.
- [x] Web siap di-deploy ke Vercel dan diserahkan ke pihak sekolah.
