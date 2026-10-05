# System Architecture & Component Hierarchy
## Proyek: Website Resmi & CMS SD Al-Birru

Dokumen ini memetakan **alur kerja aplikasi (*application flow*)**, **diagram arsitektur sistem**, **hierarki komponen antarmuka**, dan **siklus data (*data flow*)** dari hulu ke hilir.

---

## 1. User Journey & Application Flow (Alur Pengguna & Sistem)

### 1.1 Alur Publik: Calon Wali Murid (Pencarian → Eksplorasi → Konversi PPDB)

```mermaid
flowchart TD
    A([Pengunjung / Calon Wali Murid]) --> B[Buka Website sdalbirru.sch.id]
    B --> C{Pilihan Eksplorasi}
    
    C -->|Mencari Keunggulan| D[Halaman Beranda: Bento Grid Keunggulan & Video Profil]
    C -->|Mencari Visi & Guru| E[Halaman Tentang Kami: Visi Misi & Profil Pendidik]
    C -->|Mencari Program| F[Halaman Program: Tahfidz, Kurikulum & Fasilitas]
    C -->|Mencari Bukti Nyata| G[Halaman Berita & Galeri Kegiatan]
    
    D --> H{Tertarik Mendaftar?}
    E --> H
    F --> H
    G --> H
    
    H -->|Ya - Ingin Bertanya| I[Halaman Kontak & PPDB]
    I --> J[Mengisi Form Pertanyaan Singkat]
    J --> K[Validasi Zod & Simpan ke Basis Data]
    K --> L([Otomatis Terhubung ke WhatsApp Resmi Sekolah])
```

---

### 1.2 Alur Admin Sekolah: Pengelolaan Konten (CMS Studio)

```mermaid
flowchart TD
    Admin([Staf / Admin SD Al-Birru]) --> Login[Akses /admin]
    Login --> AuthCheck{Autentikasi Aman}
    AuthCheck -->|Gagal| Login
    AuthCheck -->|Sukses| Dashboard[Dashboard Payload CMS Studio]
    
    Dashboard --> Action{Pilih Tindakan}
    Action -->|Tulis Berita / Agenda| PostCRUD[Editor Rich-Text Berita & Upload Cover]
    Action -->|Dokumentasi Kegiatan| GalleryCRUD[Unggah Foto Kegiatan ke Galeri]
    Action -->|Cek Pertanyaan Masuk| InquiryViewer[Melihat Pesan Masuk dari Form Kontak]
    
    PostCRUD --> Publish[Publish Konten]
    GalleryCRUD --> Publish
    
    Publish --> CDN[Tersimpan di PostgreSQL & Vercel Blob]
    CDN --> LiveWeb([Otomatis Tampil Live di Web Publik])
```

---

## 2. Diagram Arsitektur Sistem Terintegrasi (System Architecture)

```mermaid
graph TB
    subgraph ClientLayer ["1. Klien Pengguna (Browsers & Devices)"]
        UserDevice["Smartphone / Tablet / Laptop"]
        AdminDevice["Komputer Staf Sekolah"]
    end

    subgraph EdgeLayer ["2. Vercel Global Edge Network (Zero Infra)"]
        CDN["Vercel Edge CDN (Caching, SSL, Static Assets)"]
        AppRouter["Next.js 15 App Router Server"]
    end

    subgraph ApplicationLayer ["3. Next.js 15 Unified Application"]
        PublicApp["(public) Route Group<br>• React Server Components (RSC)<br>• Framer Motion Transitions<br>• shadcn/ui Design Tokens"]
        ServerActions["Server Actions API<br>• Zod Schema Validation<br>• WhatsApp Message Normalizer"]
        PayloadCMS["(payload) Route Group<br>• Payload CMS 3.0 Native Studio (/admin)<br>• Content Collections API<br>• RBAC Authentication"]
    end

    subgraph DataLayer ["4. Persistence & Cloud Storage"]
        Drizzle["Drizzle ORM Engine"]
        Postgres[(PostgreSQL Cloud Database<br>Neon / Vercel Postgres)]
        BlobStorage[(Vercel Blob Storage<br>Media Foto & Dokumen)]
    end

    UserDevice --> CDN
    AdminDevice --> CDN
    CDN --> AppRouter
    AppRouter --> PublicApp
    AppRouter --> PayloadCMS
    PublicApp --> ServerActions
    ServerActions --> Drizzle
    PayloadCMS --> Drizzle
    PayloadCMS --> BlobStorage
    Drizzle --> Postgres
```

---

## 3. Hierarki Arsitektur Komponen (Component Tree Hierarchy)

Struktur komponen disusun secara modular mematuhi kaidah **Atomic Design & Separation of Concerns**:

```text
src/
├── app/
│   ├── (public)/
│   │   ├── layout.tsx (Public Root Layout)
│   │   │   ├── Navbar.tsx (Sticky Glassmorphic Header)
│   │   │   │   ├── BrandLogo.tsx (Logo SD Al-Birru)
│   │   │   │   ├── NavLinks.tsx (Desktop Links)
│   │   │   │   ├── PPDBButton.tsx (CTA Tombol Emas)
│   │   │   │   └── MobileNav.tsx (Sheet / Mobile Drawer)
│   │   │   │
│   │   │   ├── page.tsx (Beranda / Home)
│   │   │   │   ├── HeroSection.tsx (Headline AIDA, Staggered Motion)
│   │   │   │   ├── WelcomeSection.tsx (Sambutan Kepala Sekolah)
│   │   │   │   ├── BentoValuesSection.tsx (4 Pilar Keunggulan)
│   │   │   │   ├── ProgramsPreview.tsx (Cuplikan Kurikulum & Tahfidz)
│   │   │   │   ├── LatestNewsSection.tsx (3 Kartu Berita Terkini)
│   │   │   │   ├── GalleryPreview.tsx (Slider Foto Dokumentasi)
│   │   │   │   └── CTASection.tsx (Banner Ajakan Daftar PPDB)
│   │   │   │
│   │   │   ├── about/page.tsx (Profil Sekolah)
│   │   │   │   ├── VisionMissionCard.tsx (Visi, Misi, & Tujuan)
│   │   │   │   ├── HistoryTimeline.tsx (Sejarah Singkat Al-Birru)
│   │   │   │   └── FacultyStaffGrid.tsx (Foto & Profil Dewan Guru)
│   │   │   │
│   │   │   ├── programs/page.tsx (Program & Sarana)
│   │   │   │   ├── CurriculumTabs.tsx (Kurikulum Nasional & Tahfidz)
│   │   │   │   ├── ExtracurricularGrid.tsx (Ekstrakurikuler Pilihan)
│   │   │   │   └── FacilitiesShowcase.tsx (Sarana & Prasarana)
│   │   │   │
│   │   │   ├── news/
│   │   │   │   ├── page.tsx (Arsip Berita & Pencarian)
│   │   │   │   └── [slug]/page.tsx (Detail Artikel & Tombol Share)
│   │   │   │
│   │   │   ├── gallery/page.tsx (Galeri Kegiatan & Lightbox Viewer)
│   │   │   │
│   │   │   ├── contact/page.tsx (Halaman Kontak)
│   │   │   │   ├── ContactInfoCard.tsx (Alamat, Jam Kerja, Telepon)
│   │   │   │   ├── MapEmbed.tsx (Peta Lokasi Google Maps)
│   │   │   │   └── ContactForm.tsx (Form Zod + Action WhatsApp)
│   │   │   │
│   │   │   └── Footer.tsx (Footer Institusi Resmi)
│   │   │       ├── SchoolIdentity.tsx
│   │   │       ├── QuickNavLinks.tsx
│   │   │       ├── AccreditationBadge.tsx
│   │   │       └── CopyrightNotice.tsx
│   │   │
│   │   └── (payload)/
│   │       ├── admin/[[...segments]]/page.tsx (Dashboard CMS Studio)
│   │       └── api/[[...segments]]/route.ts (Payload REST/GraphQL Endpoint)
```

---

## 4. Siklus Alur Data Formulir Kontak (*Data Lifecycle: Contact & PPDB Form*)

```mermaid
sequenceDiagram
    autonumber
    actor Parent as Calon Wali Murid
    participant Form as ContactForm.tsx (Client)
    participant Action as submitInquiry Action (Server)
    participant Zod as Zod Schema Validator
    participant DB as PostgreSQL (Drizzle ORM)
    participant WA as WhatsApp API Generator

    Parent->>Form: Ketik Nama, No. HP, dan Pertanyaan
    Form->>Form: Validasi Awal Client-Side (React Hook Form)
    Form->>Action: Kirim Data melalui Server Action
    Action->>Zod: Validasi Ulang Server-Side (Zero Trust)
    alt Data Tidak Valid
        Zod-->>Action: Return Error Validation
        Action-->>Form: Tampilkan Pesan Error di Form
    else Data Valid
        Zod-->>Action: Data Terverifikasi & Dinormalisasi (Postel's Law)
        Action->>DB: INSERT into inquiries table
        DB-->>Action: Success ID
        Action->>WA: Susun Template Teks WhatsApp Resmi
        Action-->>Form: Return Status Sukses & URL WhatsApp
        Form->>Parent: Munculkan Notifikasi Toast Hijau
        Form->>Parent: Buka Tab WhatsApp Resmi Sekolah Otomatis
    end
```

---

## 5. Matriks Peran & Keamanan (*Security & Access Control Matrix*)

| Tipe Pengguna | Hak Akses Rute Publik | Hak Akses Rute `/admin` | Hak Akses Basis Data |
| :--- | :--- | :--- | :--- |
| **Pengunjung Umum / Wali Murid** | Membaca seluruh halaman publik, mengisi form kontak. | ❌ Ditolak (HTTP 401 / Redirect ke Login). | ❌ Tidak ada akses langsung. |
| **Admin Konten (Staf SD Al-Birru)** | Akses penuh halaman publik. | ✅ Membaca, Menulis, dan Menyunting artikel berita, galeri, dan pesan masuk. | ✅ Akses terbatas via Payload CMS ORM. |
| **Super Admin (Pengelola IT)** | Akses penuh halaman publik. | ✅ Hak akses penuh termasuk kelola akun pengguna admin dan konfigurasi sistem. | ✅ Akses penuh terenkripsi. |

---

Dokumen arsitektur ini menjamin bahwa seluruh tim pengembang memiliki **peta navigasi teknis yang seragam, presisi, dan bebas dari kebingungan arsitektur**.
