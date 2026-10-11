> **Tujuan Dokumen:** Spesifikasi tata letak sekuensial laman publik, dekomposisi anatomis seksi visual, kontrak mikrokopi produksi, dan struktur konten statutori peramban web.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Landing Page View Architecture | Judul statutori spesifikasi arsitektur laman publik |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar arsitektur tampilan publik |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/08-landing-page-view-architecture.md` | Jalur berkas dalam repositori |
---
## 2. Page Hierarchy and Layout Foundations
Laman beranda publik (`/`) beroperasi di dalam kerangka kerja *Public Guest Shell* tanpa rintangan autentikasi. Tata letak dirender secara linier satu halaman (*single-page vertical flow*) yang terdiri atas enam seksi berurutan:
1. **Global Public Navigation Header:** Bilah navigasi lekat (*sticky ribbon*) dengan identitas sekolah dan tautan navigasi seksi.
2. **Hero Presentation Section:** Proposisi nilai utama institusi, gerbang pendaftaran aktif, dan kartu metrik operasional sekolah.
3. **Institutional Identity and Accreditation Strip:** Jalur validasi legalitas statutori, nomor registrasi nasional, dan yayasan.
4. **Academic Pillar and Curriculum Highlights:** Tiga pilar kurikulum terpadu (Karakter, STEM, Komunikasi Bilingual).
5. **Direct Action and Admission Intake Callout:** Kartu aksi utama terpusat (*primary call-to-action*) menuju formulir pendaftaran.
6. **Statutory Public Institutional Footer:** Direktori kontak resmi, akses portal terautentikasi, dan hak cipta statutori.
---
## 3. Granular Section Anatomy and Production Content
### 3.1 Global Public Navigation Header
- **Penempatan & Dimensi:** Menempel permanen di batas atas layar (*sticky*, `z-index: 50`), tinggi tetap 64 piksel, latar `color-surface-card` dengan opasitas 95% dan efek *backdrop blur*, batas bawah 1 piksel `color-border-subtle`.
- **Tata Letak Internal:** Kontainer tengah dengan lebar maksimum 1200 piksel, padding horizontal `space-24`, perataan vertikal tengah (*justify-between*).
- **Hierarki Slot & Teks Mikrokopi:**
	- **Slot Kiri (Identitas Institusi):**
		- Lambang Vektor: Ikon perisai navy slate dan buku terbuka emerald (36 piksel × 36 piksel).
		- Tumpukan Teks: Judul institusi `SD Al-Birru` (`font-heading-2`, Semi-Bold 600, `color-brand-primary`) dan sub-label statutori `NPSN: 70010111` (`font-caption`, `color-text-muted`).
	- **Slot Tengah (Tautan Navigasi Desktop):** Tersembunyi pada viewport di bawah 768 piksel, celah antartautan `space-24`:
		- Tautan 1: Teks `Profil Sekolah` (target penanda jangkar: `#institutional-profile`).
		- Tautan 2: Teks `Program Akademik` (target penanda jangkar: `#academic-pillars`).
		- Tautan 3: Teks `Kriteria Admisi` (target rute: `/admission`).
		- Tautan 4: Teks `Lacak Status` (target rute: `/admission/status`).
	- **Slot Kanan (Aksi Akses Cepat):** Celah antartombol `space-12`:
		- Tombol Sekunder: Teks `Masuk Portal`, rute `/authentication/sign-in`, gaya latar transparan dengan batas 1 piksel `color-border-subtle`, teks slate gelap.
		- Tombol Primer: Teks `Daftar Siswa Baru`, rute `/admission`, gaya latar terisi `color-brand-primary` dengan teks putih.
---
### 3.2 Hero Presentation Section
- **Penempatan & Dimensi:** Tepat di bawah bilah navigasi, lebar penuh, padding vertikal `space-48`, padding horizontal `space-24`, latar `color-surface-base`.
- **Tata Letak Internal:** Kisi asimetris dua kolom pada desktop (60% konten teks kiri, 40% kartu data kanan; satu kolom tumpuk vertikal pada perangkat seluler), lebar maksimum 1200 piksel, celah antarkolom `space-32`.
- **Hierarki Slot & Teks Mikrokopi:**
	- **Kolom Kiri (Blok Proposisi Inti):**
		- Lencana Operasional: Kontainer bentuk pil, latar emerald (opasitas 10%), batas 1 piksel `color-brand-accent`, padding vertikal `space-4`, padding horizontal `space-12`, margin bawah `space-16`. Ikon `Sparkles` 14 piksel emerald + Teks: `Penerimaan Siswa Baru TP 2026/2027 Dibuka`.
		- Judul Utama (`font-display`, Bold 700, tinggi baris 40 piksel, `color-brand-primary`): `Membentuk Karakter, Membina Ilmu, Membangun Integritas.`
		- Paragraf Deskripsi (`font-subheading`, Regular 400, tinggi baris 24 piksel, `color-text-muted`, margin atas `space-16`): `Sekolah Dasar Al-Birru menyelenggarakan kurikulum dasar nasional terintegrasi nilai Islam di Bandung yang berfokus pada pembiasaan adab disiplin, nalar analitis, dan keunggulan budi pekerti.`
		- Kelompok Tombol Aksi (celah antartombol `space-16`, margin atas `space-32`):
			- Tombol Utama: Tinggi 48 piksel, padding horizontal `space-24`, latar `color-brand-primary`, ikon `ArrowRight` 18 piksel di kanan, teks `Daftarkan Siswa Sekarang`.
			- Tombol Sekunder: Tinggi 48 piksel, padding horizontal `space-20`, latar transparan, batas 1 piksel `color-border-subtle`, ikon `FileText` 18 piksel di kiri, teks `Unduh Brosur Informasi`.
	- **Kolom Kanan (Kartu Metrik Operasional):**
		- Kontainer Kartu: Latar `color-surface-card`, batas 1 piksel `color-border-subtle`, radius 16 piksel, padding `space-24`, elevasi halus.
		- Header Kartu: Teks `Metrik Kinerja Operasional Sekolah` (`font-heading-2`), batas bawah 1 piksel `color-border-subtle`, padding bawah `space-12`.
		- Baris Metrik 1: Label `Status Akreditasi Institusi` \| Nilai `Peringkat A (Unggul)` (badge bentuk pil terisi emerald).
		- Baris Metrik 2: Label `Kepatuhan Presensi Siswa Harian` \| Nilai `98.4% Kehadiran Tepat Waktu`.
		- Baris Metrik 3: Label `Rasio Maksimum Pengajar dan Siswa` \| Nilai `15 : 1 Pembelajaran Fokus`.
---
### 3.3 Institutional Identity and Accreditation Strip
- **Penempatan & Dimensi:** Jalur pembatas lebar penuh, padding vertikal `space-24`, padding horizontal `space-24`, latar `color-surface-card`, batas atas dan bawah 1 piksel `color-border-subtle`.
- **Tata Letak Internal:** Baris fleksibel terpusat, lebar maksimum 1200 piksel, perataan multi-kolom responsif, celah antarelemen `space-24`.
- **Elemen Data Statutori:**
	- Butir 1: Label `Nomor Pokok Sekolah Nasional (NPSN)` $`\rightarrow`$ Nilai `70010111`.
	- Butir 2: Label `Badan Sertifikasi Akreditasi` $`\rightarrow`$ Nilai `Badan Akreditasi Nasional (BAN-S/M)`.
	- Butir 3: Label `Yayasan Penyelenggara Pendidikan` $`\rightarrow`$ Nilai `Yayasan Pendidikan Al-Birru`.
	- Butir 4: Label `Bahasa Pengantar Pembelajaran` $`\rightarrow`$ Nilai `Bahasa Indonesia & Pengenalan Bahasa Inggris Formal`.
---
### 3.4 Academic Pillar and Curriculum Highlights
- **Penempatan & Dimensi:** Lebar penuh, padding vertikal `space-48`, padding horizontal `space-24`, latar `color-surface-base`, penanda jangkar `#academic-pillars`.
- **Tata Letak Internal:** Kontainer vertikal terpusat, lebar maksimum 1200 piksel.
- **Header Seksi:**
	- Sub-label: `font-caption`, Semi-Bold 600, huruf kapital, warna `color-brand-accent`: `KEUNGGULAN KURIKULUM PEMBELAJARAN`.
	- Judul: `font-heading-1`, warna `color-brand-primary`: `Tiga Fondasi Pendidikan Terpadu SD Al-Birru`.
	- Subtitle: `font-body`, warna `color-text-muted`: `Pendekatan pedagogis seimbang yang memadukan kedalaman nilai akhlak dengan standar capaian kompetensi akademik.`
- **Struktur Tiga Kartu Kisi:** Tiga kolom seimbang (`1fr 1fr 1fr`), celah antarkartu `space-24`, margin atas `space-32`:
	- **Kartu 1 (Fondasi Nilai dan Adab):**
		- Ikon: `ShieldCheck` 28 piksel navy slate.
		- Judul Kartu: `font-heading-2`, teks `Fondasi Nilai dan Adab`.
		- Deskripsi: `font-body`, teks `Pembiasaan ibadah harian terstruktur, penanaman adab kesantunan, internalisasi kejujuran, dan pembiasaan budaya gotong royong antar-siswa.`
	- **Kartu 2 (Literasi Matematis & Nalar STEM):**
		- Ikon: `Compass` 28 piksel navy slate.
		- Judul Kartu: `font-heading-2`, teks `Literasi Matematis & Nalar STEM`.
		- Deskripsi: `font-body`, teks `Penguatan daya pikir logis, dasar nalar komputasi dasar, rasa ingin tahu ilmiah, dan literasi numerasi praktis pemecahan masalah.`
	- **Kartu 3 (Kecakapan Bahasa Terpadu):**
		- Ikon: `Languages` 28 piksel navy slate.
		- Judul Kartu: `font-heading-2`, teks `Kecakapan Bahasa Terpadu`.
		- Deskripsi: `font-body`, teks `Pengembangan keterampilan berbahasa Indonesia yang runtut dan pengenalan kosakata bahasa Inggris aktif melalui aktivitas dialog tematik harian.`
---
### 3.5 Direct Action and Admission Intake Callout
- **Penempatan & Dimensi:** Lebar penuh, padding vertikal `space-48`, padding horizontal `space-24`, latar `color-surface-base`.
- **Tata Letak Internal:** Kontainer kartu hero terpusat, lebar maksimum 1000 piksel, latar `color-brand-primary`, radius 16 piksel, padding vertikal `space-48`, padding horizontal `space-32`, perataan teks tengah, warna teks putih.
- **Hierarki Slot & Teks Mikrokopi:**
	- Judul: `font-heading-1`, teks putih: `Daftarkan Putra-Putri Anda untuk Tahun Pelajaran 2026/2027`.
	- Paragraf Deskripsi: `font-body`, warna Slate 200, batas lebar 600 piksel, margin tengah, margin atas `space-16`, margin bawah `space-32`: `Pendaftaran siswa baru reguler dan mutasi Kelas 1 s.d. 6 dibuka secara digital. Proses mandiri, cepat, dan dilengkapi kode pelacakan verifikasi berkas seketika.`
	- Bilah Tombol Aksi: Baris flex tengah, celah antartombol `space-16`:
		- Tombol Primer: Tinggi 48 piksel, padding horizontal `space-24`, latar `color-brand-accent` (emerald), teks `Buka Formulir Pendaftaran`, tautan rute `/admission`.
		- Tombol Sekunder: Tinggi 48 piksel, padding horizontal `space-20`, latar transparan, batas 1 piksel solid putih (opasitas 30%), teks `Hubungi Meja Bantuan Admisi`, tautan surat `mailto:admissions@sd-albirru.sch.id`.
---
### 3.6 Statutory Public Institutional Footer
- **Penempatan & Dimensi:** Batas paling bawah dokumen, lebar penuh, padding atas `space-48`, padding samping dan bawah `space-24`, latar `color-surface-card`, batas atas 1 piksel `color-border-subtle`.
- **Tata Letak Internal:** Tiga kolom kisi atas dengan bilah hak cipta terpisah di bawah, lebar maksimum 1200 piksel, margin tengah, celah antarkolom `space-32`.
- **Rincian Kolom:**
	- **Kolom 1 (Legalitas Institusi Sekolah):**
		- Judul: `font-heading-2`, teks `Sekolah Dasar Al-Birru`.
		- Deskripsi: `font-caption`, teks `Institusi pendidikan dasar formal yang menyelenggarakan kegiatan belajar mengajar sesuai standar otoritas pendidikan nasional.`
		- Butir Identitas: `NPSN: 70010111` \| `Status: Institusi Swasta Terakreditasi`.
	- **Kolom 2 (Alamat dan Kontak Kampus):**
		- Judul: `font-subheading`, teks `Sekretariat Administrasi Kampus`.
		- Alamat: `font-caption`, teks `Jl. Al-Birru Educational Precinct No. 12, Bandung, Jawa Barat, Indonesia`.
		- Telepon: `font-caption`, teks `+62 (022) 7001-0111`.
		- Surat Elektronik: `font-caption`, teks `administration@sd-albirru.sch.id`.
	- **Kolom 3 (Akses Portal Terautentikasi):**
		- Judul: `font-subheading`, teks `Gerbang Portal Sistem`.
		- Tautan 1: Teks `Portal Wali Murid` (target rute: `/portal/guardian`).
		- Tautan 2: Teks `Ruang Kerja Guru & Instruktur` (target rute: `/portal/instructor`).
		- Tautan 3: Teks `Konsol Manajemen Administrator` (target rute: `/portal/admin`).
		- Tautan 4: Teks `Pengecekan Status Pendaftaran Admisi` (target rute: `/admission/status`).
- **Bilah Bawah (*Bottom Bar*):** Batas atas 1 piksel `color-border-subtle`, margin atas `space-32`, padding atas `space-16`, baris flex rata kanan-kiri (*justify-between*), tipografi `font-caption` (`color-text-muted`):
	- Sisi Kiri: `© 2026 Sekolah Dasar Al-Birru. Seluruh hak cipta statutori dilindungi undang-undang.`
	- Sisi Kanan: `Primary School Information System Core (PSIS) Baseline v1.0.0`