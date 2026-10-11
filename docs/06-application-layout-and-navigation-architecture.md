> **Tujuan Dokumen:** Spesifikasi kerangka arsitektur tata letak antarmuka, pembagian shell aplikasi, hierarki navigasi rute berbasis peran, zonasi spasial layar, dan strategi responsivitas peramban web.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Application Layout and Navigation Architecture | Judul statutori spesifikasi arsitektur tata letak dan navigasi |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar arsitektur tata letak produksi |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/06-application-layout-and-navigation-architecture.md` | Jalur berkas dalam repositori |
---
## 2. Global Viewport Shell Topologies
Aplikasi mengelompokkan struktur tata letak ke dalam tiga kerangka shell (*root viewport wrappers*) independen di bawah Next.js App Router:
| Shell Classification | Route Group Context | Structural Boundaries | Global Behavior and State |
|---|---|---|---|
| **Public Guest Shell** | `src/app/(public)/*` | Bilah navigasi atas (64px) dan footer institusi statutori | Akses bebas unauthenticated, konten kanonikal terindeks mesin pencari |
| **Authentication Shell** | `src/app/(auth)/*` | Kartu dialog terpusat vertikal dan horizontal (lebar maksimal 440px) | Terisolasi dari navigasi umum, fokus penuh pada formulir autentikasi |
| **Protected Portal Shell** | `src/app/(portal)/*` | Bilah samping tetap kiri (260px) dan pita utilitas atas (60px) | Terproteksi sesi autentikasi, isolasi data berbasis peran, area kerja modular |
---
## 3. Spatial Layout Zoning for Protected Portal Shell
Kerangka kerja portal terproteksi (`/portal/*`) menerapkan zonasi spasial kisi layar standar untuk memastikan keseragaman alur kerja antar-peran:
| Layout Zone | Spatial Dimensions | Layout Alignment | Canonical Functional Scope |
|---|---|---|---|
| **Persistent Left Sidebar** | Lebar tetap 260px, tinggi 100vh | Menempel di batas kiri layar (*fixed desktop*) | Lambang sekolah, penanda profil aktif, dan menu navigasi vertikal |
| **Top Utility Ribbon** | Tinggi tetap 60px, lebar fleksibel | Menempel di batas atas area kerja (*sticky top*) | Jejak rekam navigasi (*breadcrumbs*), notifikasi sistem, dan tombol keluar sesi |
| **Primary Workstage Canvas** | Lebar fleksibel, tinggi otomatis | Area kontainer utama dengan pengguliran vertikal | Area kerja konten tabel presensi, kisi input nilai, kartu metrik, dan form |
| **Contextual Flyout Drawer** | Lebar tetap 480px, tinggi 100vh | Menempel di batas kanan (*slide-over modal*) | Form pendataan civitas master, inspeksi rincian siswa, dan log verifikasi |
---
## 4. Role-Based Navigation Routing Tree
### 4.1 System Administrator Workspace Navigation (`/portal/admin/*`)
| Navigation Menu Item | Target URL Route | Leading Icon Identifier | Functional Purpose |
|---|---|---|---|
| **Master Civitas Directory** | `/portal/admin/identities` | `Users` | Pendataan biodata master, penerbitan NIS, dan audit akun civitas |
| **Cohort Roster Setup** | `/portal/admin/rosters` | `Layers` | Alokasi pembagian rombongan belajar kelas per semester aktif |
| **Admissions Adjudication** | `/portal/admin/admissions` | `UserCheck` | Antrean verifikasi berkas pendaftaran calon peserta didik baru |
| **Academic Term Calendar** | `/portal/admin/terms` | `Calendar` | Konfigurasi semester kalender ajaran aktif dan batas operasional |
| **Institutional Settings** | `/portal/admin/settings` | `Settings` | Konfigurasi profil sekolah, kurikulum mata pelajaran, dan audit log |
### 4.2 Instructor Workspace Navigation (`/portal/instructor/*`)
| Navigation Menu Item | Target URL Route | Leading Icon Identifier | Functional Purpose |
|---|---|---|---|
| **Daily Attendance Register** | `/portal/instructor/attendance` | `ClipboardCheck` | Inisialisasi sesi, mutasi status presensi siswa, dan kunci finalisasi |
| **Grade Assessment Ledger** | `/portal/instructor/grading` | `Award` | Masukan nilai numerik komponen kurikulum dan perhitungan rata-rata |
| **Homeroom Cohort Overview** | `/portal/instructor/roster` | `GraduationCap` | Ikhtisar daftar siswa aktif binaan dan rekapitulasi capaian kelas |
### 4.3 Guardian Self-Service Navigation (`/portal/guardian/*`)
| Navigation Menu Item | Target URL Route | Leading Icon Identifier | Functional Purpose |
|---|---|---|---|
| **Dependent Monitoring** | `/portal/guardian` | `Home` | Kartu ringkasan kehadiran dan status evaluasi seluruh anak terhubung |
| **Attendance History** | `/portal/guardian/attendance` | `CalendarDays` | Kalender riwayat kehadiran harian dan persentase kehadiran semester |
| **Academic Report Cards** | `/portal/guardian/reports` | `FileText` | Akses peninjauan dan unduh dokumen buku rapor resmi berstatus Published |
---
## 5. Responsive Breakpoint and Collapsible Behavior
Sistem menegakkan aturan adaptasi tata letak antarmuka peramban desktop dan seluler:
- **Desktop Viewport (**$`\ge`$** 1024px):** Bilah samping kiri (*sidebar*) tampil permanen selebar 260px; area kerja utama menempati sisa lebar layar secara proporsional.
- **Tablet & Mobile Viewport (\< 1024px):** Bilah samping kiri disembunyikan secara baku ke dalam laci geser (*off-canvas sheet*); pemicu menu burger (*menu trigger*) muncul pada pita utilitas atas untuk membuka navigasi.
- **Workstage Density Adaptation:** Pada layar peramban dengan resolusi lebar di bawah 1280px, tabel data presensi dan nilai mengaktifkan pengguliran horizontal mandiri (*horizontal scroll containment*) tanpa merusak struktur tata letak induk.
- **Breadcrumb Truncation:** Jejak rekam navigasi membatasi visualisasi hingga maksimal 3 tingkatan hierarki rute; tingkatan perantara disingkat menjadi ikon elipsis jika melampaui lebar pita atas.