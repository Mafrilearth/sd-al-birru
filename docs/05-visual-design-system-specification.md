> **Tujuan Dokumen:** Spesifikasi fondasi matematis desain visual, token skala spasial linier, hierarki tipografi modular, matriks palet warna semantik, anatomi komponen primitif, dan standar aksesibilitas antarmuka pengguna.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Visual Design System Specification | Judul statutori spesifikasi sistem desain visual |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar sistem desain visual produksi |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/05-visual-design-system-specification.md` | Jalur berkas dalam repositori |
---
## 2. Spatial Scale and Layout Foundations
Sistem antarmuka menegakkan **skala linier berbasis kelipatan 8 piksel** (*8-pixel linear progression baseline*) untuk mempertahankan keteraturan ritme spasial vertikal maupun horizontal di seluruh viewport desktop dan seluler:
| Spatial Token Identifier | Dimension Value | Tailwind CSS Equivalent | Canonical Component Structural Usage |
|---|---|---|---|
| **`space-2`** | 2 piksel | `gap-0.5`, `p-0.5` | Garis pembatas mikro, *hairline divider rules*, cincin fokus halus |
| **`space-4`** | 4 piksel | `gap-1`, `p-1` | Padding padat, status tag insets, margin vertikal label field |
| **`space-8`** | 8 piksel | `gap-2`, `p-2` | Padding internal tombol standar, field form input insets |
| **`space-12`** | 12 piksel | `gap-3`, `p-3` | Offset ikon grup, padding kartu data kompak |
| **`space-16`** | 16 piksel | `gap-4`, `p-4` | Padding komponen standar, padding horizontal sel tabel |
| **`space-24`** | 24 piksel | `gap-6`, `p-6` | Padding panel kontainer, *gutter* kolom, kartu konten utama |
| **`space-32`** | 32 piksel | `gap-8`, `p-8` | Pemisah seksi antarmuka, pemisahan blok konten utama |
| **`space-48`** | 48 piksel | `gap-12`, `p-12` | Margin luar dialog modal, batas vertikal segmen halaman |
---
## 3. Modular Typography Scale and Hierarchy
Hierarki tipografi menggunakan susunan *font fallback sans-serif* bawaan sistem peramban guna mengeliminasi penalti latensi unduhan jaringan web font eksternal, berpedoman pada rasio modular *Major Third* (1.250):
| Typography Token | Font Weight Standard | Font Size | Line Height | Canonical Structural Usage |
|---|---|---|---|---|
| **`font-display`** | Bold (700) | 32 piksel | 40 piksel | Judul utama halaman, salam pembuka dasbor portal |
| **`font-heading-1`** | Semi-Bold (600) | 24 piksel | 32 piksel | Pemisah seksi mayor, judul utama jendela dialog modal |
| **`font-heading-2`** | Semi-Bold (600) | 20 piksel | 28 piksel | Judul kartu data kelompok, header panel fungsional |
| **`font-subheading`** | Medium (500) | 16 piksel | 24 piksel | Header kolom tabel data, label grup kolom formulir |
| **`font-body`** | Regular (400) | 14 piksel | 20 piksel | Teks sel data tabel, masukan formulir primer, paragraf |
| **`font-caption`** | Regular (400) | 12 piksel | 16 piksel | Catatan pembantu formulir, stempel waktu audit, tag |
---
## 4. Semantic Color Palette and Contrast Matrix
Penggunaan nilai kode warna mentah (*raw hexadecimal* atau *rgb*) dilarang keras di dalam seluruh elemen antarmuka. Seluruh lapisan komponen wajib merujuk pada alias token semantik:
| Semantic Token Identifier | Spectrum Classification | Minimum WCAG Contrast | Canonical Operational Role |
|---|---|---|---|
| **`color-brand-primary`** | Deep Navy Slate (`#0f172a`) | 4.5:1 (Level AA) | Bilah navigasi utama, pemicu aksi primer, tab aktif |
| **`color-brand-accent`** | Emerald Forest (`#059669`) | 4.5:1 (Level AA) | Sorotan interaktif, lencana verifikasi sukses |
| **`color-surface-base`** | Neutral Slate 50 (`#f8fafc`) | 3.0:1 (Surface) | Latar belakang dasar kanvas aplikasi dan portal |
| **`color-surface-card`** | Pure White (`#ffffff`) | 3.0:1 (Surface) | Kontainer kartu, permukaan kisi data tabel, dialog modal |
| **`color-border-subtle`** | Slate 200 (`#e2e8f0`) | 3.0:1 (Border) | Garis pemisah baris tabel, batas perimeter field input |
| **`color-status-present`** | Muted Emerald Green (`#10b981`) | 4.5:1 (Level AA) | Indikator kehadiran presensi harian, badge admisi disetujui |
| **`color-status-absent`** | Rose Red (`#f43f5e`) | 4.5:1 (Level AA) | Penanda absensi tanpa izin, penolakan verifikasi berkas |
| **`color-status-sick`** | Amber Yellow (`#f59e0b`) | 4.5:1 (Level AA) | Penanda ketidakhadiran sakit, status peninjauan dokumen |
| **`color-status-excused`** | Sky Blue (`#0284c7`) | 4.5:1 (Level AA) | Penanda ketidakhadiran izin resmi, catatan dispensasi |
---
## 5. Primitive Component Specifications
### 5.1 Interactive Form Inputs
- **Batas Struktural:** Kontainer persegi dengan tinggi minimum 40 piksel, padding horizontal 8 piksel (`space-8`), border perimeter 1 piksel (`color-border-subtle`), dan radius sudut 6 piksel.
- **Hierarki Tipografi:** Label menggunakan `font-subheading` berjarak 4 piksel di atas kontainer; nilai input menggunakan `font-body`; teks pembantu atau pesan galat menggunakan `font-caption` berjarak 4 piksel di bawah kontainer.
- **Ekspresi Status Interaksi:**
	- *Default:* Perimeter diberi warna `color-border-subtle`, latar belakang `color-surface-card`.
	- *Focus:* Cincin fokus luar selebar 2 piksel dengan warna `color-brand-primary`.
	- *Validation Error:* Perimeter diberi warna `color-status-absent`, disertai teks bantuan berwarna merah.
	- *Disabled:* Opasitas diturunkan menjadi 50%, latar belakang diarsir dengan `color-surface-base`, kursor terkunci.
### 5.2 Status Chips and Indicator Badges
- **Batas Struktural:** Kontainer *pill* membulat penuh dengan tinggi tetap 24 piksel dan padding horizontal 8 piksel (`space-8`).
- **Tipografi:** Dibatasi secara ketat pada `font-caption` dengan ketebalan teks *medium* (500).
- **Varian Semantik:** Varian isian saling lepas (*mutually exclusive*) sesuai token status (`color-status-present`, `color-status-absent`, `color-status-sick`, `color-status-excused`).
### 5.3 Action Buttons
- **Batas Struktural:** Dimensi target interaktif minimum tinggi 40 piksel dan lebar 80 piksel, menegakkan padding horizontal 16 piksel (`space-16`) dan radius sudut 6 piksel.
- **Klasifikasi Varian:**
	- *Primary Action:* Latar belakang terisi `color-brand-primary` dengan teks putih kontras tinggi.
	- *Secondary Action:* Latar belakang transparan dengan border perimeter `color-border-subtle` dan teks slate gelap.
	- *Destructive Action:* Latar belakang terisi atau bergaris tepi menggunakan `color-status-absent`.
---
## 6. Web Accessibility Guardrails and Compliance Standards
- **Kepatuhan Rasio Kontras:** Seluruh pasangan teks tipografi terhadap latar belakang permukaan wajib memenuhi standar minimum Web Content Accessibility Guidelines (WCAG) 2.1 AA (rasio kontras 4.5:1 untuk teks normal dan 3.0:1 untuk teks skala besar).
- **Cincin Navigasi Papan Ketik:** Setiap elemen interaktif wajib menampilkan cincin indikator fokus visual selebar 2 piksel yang tegas saat dijelajahi via tombol Tab keyboard.
- **Indikator Non-Warna Eksklusif:** Seluruh status data kritis (status presensi dan putusan admisi) wajib menyertakan label teks eksplisit di samping warna *chip* untuk menjamin aksesibilitas penuh bagi pengguna disabilitas netra/buta warna.