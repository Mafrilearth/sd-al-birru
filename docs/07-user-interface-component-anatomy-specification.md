> **Tujuan Dokumen:** Spesifikasi dekonstruksi anatomis komponen antarmuka modular, hierarki slot internal, label mikrokopi statis dan dinamis, representasi mesin status visual, dan umpan balik sistem.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | User Interface Component Anatomy Specification | Judul statutori spesifikasi komponen antarmuka |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar spesifikasi anatomi komponen |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/07-user-interface-component-anatomy-specification.md` | Jalur berkas dalam repositori |
---
## 2. Structural Component Tree and Content Standards
### 2.1 Anatomical Deconstruction Methodology
Setiap spesifikasi komponen menegakkan protokol dekonstruksi deterministik 4 lapisan:
1. **Container and Boundary Properties:** Dimensi fisik, token spasi vertikal/horizontal, border, sudut radius, dan warna permukaan latar belakang.
2. **Internal Slot Hierarchy:** Urutan sekuensial penempatan slot anak, label teks, ikon Lucide, permukaan input, dan pemicu aksi.
3. **Exact Content Labels and Formats:** Teks mikrokopi verbatim tanpa singkatan, format angka baku, dan teks penampung (*placeholder*) format riil.
4. **State Machine Representations:** Perilaku visual eksplisit pada status *Initial*, *Filled*, *Active/Focus*, *Loading/Skeleton*, *Validation Error*, dan *Locked/Disabled*.
### 2.2 Copywriting and Formatting Directives
- **Placeholder Berbasis Contoh Nyata:** Placeholder masukan wajib mencerminkan contoh format data riil (misal: `Muhammad Fauzul Hanif`), bukan kalimat instruksi umum.
- **Metrik Numerik Eksplisit:** Nilai kuantitatif menyertakan satuan baku secara tegas (misal: `100.00%`, `30 Siswa`, `85.00/100`).
- **Kosakata Status Kanonikal:** Label status terikat secara eksklusif pada kata baku: `Present`, `Absent`, `Sick`, `Excused`, `Draft`, `Pending Verification`, `Published`, `Pending Review`, `Approved`, `Rejected`.
---
## 3. Granular Module Component Anatomy
### 3.1 Daily Attendance Tracking (`attendance`)
#### 3.1.1 Attendance Headcount Metric Strip
- **Penempatan:** Sudut kanan atas area kerja presensi kelas.
- **Batas Kontainer:** Baris horizontal, tinggi 48 piksel, padding vertikal `space-4`, padding horizontal `space-8`, celah `space-8`, latar `color-surface-base`, border 1 piksel `color-border-subtle`, radius 8 piksel.
- **Hierarki Slot:**
	- **Slot 1 (Present Metric Badge):** Latar emerald lembut, ikon `CheckCircle` 16 piksel, label statis `Present:`, nilai dinamis `28`.
	- **Slot 2 (Absent Metric Badge):** Latar rose lembut, ikon `XCircle` 16 piksel, label statis `Absent:`, nilai dinamis `1`.
	- **Slot 3 (Sick Metric Badge):** Latar amber lembut, ikon `AlertCircle` 16 piksel, label statis `Sick:`, nilai dinamis `1`.
	- **Slot 4 (Excused Metric Badge):** Latar sky blue lembut, ikon `HelpCircle` 16 piksel, label statis `Excused:`, nilai dinamis `0`.
	- **Slot 5 (Cohort Total Badge):** Latar netral, label statis `Total Enrolled:`, nilai dinamis `30 Siswa`.
- **Perilaku Status:**
	- *Loading:* Menampilkan 5 skeleton pulsa berukuran 90 piksel × 32 piksel (radius 16 piksel).
	- *Reconciled:* Angka bertambah atau berkurang seketika dengan animasi transisi saat baris siswa diubah.
#### 3.1.2 Attendance Roster Data Row
- **Penempatan:** Unit baris berulang pada tabel lembar presensi.
- **Batas Kontainer:** Baris tabel lebar penuh, tinggi minimum 60 piksel, perataan vertikal tengah, border bawah 1 piksel `color-border-subtle`, latar hover `color-surface-base`.
- **Hierarki Slot:**
	- **Slot 1 (Nomor Urut):** Lebar 40 piksel, `font-caption`, teks tengah (format: `01`, `02`).
	- **Slot 2 (Grup Identitas Siswa):** Lebar 280 piksel, tumpukan vertikal:
		- Baris Utama: `font-subheading` (Semi-Bold 600, `color-brand-primary`), menampilkan nama lengkap resmi siswa.
		- Baris Sekunder: `font-caption` (`color-text-muted`), label statis `NIK:` diikuti nilai nomor identitas kependudukan.
	- **Slot 3 (Kontrol Status Presensi Saling Lepas):** Lebar 360 piksel, grup 4 tombol horizontal, tinggi 36 piksel, padding 2 piksel, latar `color-surface-base`, border 1 piksel `color-border-subtle`, radius 6 piksel:
		- Tombol A: Ikon `Check` 14 piksel + Teks `Present`
		- Tombol B: Ikon `X` 14 piksel + Teks `Absent`
		- Tombol C: Ikon `Thermometer` 14 piksel + Teks `Sick`
		- Tombol D: Ikon `FileText` 14 piksel + Teks `Excused`
	- **Slot 4 (Input Keterangan Catatan):** Lebar dinamis (minimum 200 piksel):
		- *Tertutup:* Tombol teks sekunder dengan ikon `MessageSquare` 14 piksel + Teks `Tambah Catatan`.
		- *Terbuka:* Input field baris tunggal, tinggi 36 piksel, border 1 piksel `color-border-subtle`, padding `space-4` vertikal dan `space-8` horizontal, placeholder: `Masukkan catatan ketidakhadiran atau surat dokter...`.
- **Perilaku Status:**
	- *Active Selection:* Tombol terpilih terisi warna semantik solid (`color-status-present`, `color-status-absent`, dll.) dengan teks putih; tombol tidak terpilih transparan dengan teks slate gelap.
	- *Midnight Locked:* Seluruh baris kontrol transisi ke opasitas 0.6; klik interaktif dinonaktifkan; tooltip: `Sesi presensi telah terkunci otomatis pasca-tengah malam`.
---
### 3.2 Grading and Academic Reporting (`grading`)
#### 3.2.1 Assessment Weight Summary Banner
- **Penempatan:** Header area tepat di atas kisi evaluasi nilai mata pelajaran.
- **Batas Kontainer:** Lebar penuh, padding vertikal `space-12`, padding horizontal `space-16`, latar `color-surface-base`, border 1 piksel `color-border-subtle`, radius 8 piksel, tata letak baris flex rata kanan-kiri (*space-between*).
- **Hierarki Slot:**
	- **Slot Kiri (Metadata Kurikulum):**
		- Judul: `font-heading-2`, contoh: `Matematika - Kelas 4 SD`.
		- Sub-teks: `font-caption`, format: `Kode Kurikulum: MATH-PRI-04 | Semester: Ganjil 2026/2027`.
	- **Slot Kanan (Verifikasi Bobot Komponen):**
		- Daftar pil horizontal komponen evaluasi: `Tugas Harian: 20%`, `Keterampilan: 20%`, `PTS: 30%`, `PAS: 30%`.
		- Lencana Akumulasi Total: `Akumulasi Bobot: 100%` (teks emerald jika valid tepat 100%, teks rose red jika tidak sama dengan 100%).
#### 3.2.2 High-Density Score Entry Cell
- **Penempatan:** Sel grid data pada matriks evaluasi nilai siswa.
- **Batas Kontainer:** Sel tabel data, lebar 110 piksel, tinggi 52 piksel, padding `space-4`, perataan tengah.
- **Hierarki Slot:** Input teks numerik, lebar 100%, tinggi 40 piksel, radius 6 piksel, `font-body`, teks tengah, border 1 piksel `color-border-subtle`.
- **Format & Nilai:** Placeholder `0.00`, membatasi nilai desimal antara 0.00 hingga 100.00.
- **Perilaku Status:**
	- *Kosong:* Nilai kosong, latar `color-surface-card`, border 1 piksel `color-border-subtle`.
	- *Tersimpan Valid:* Nilai numerik terisi (misal: `87.50`), latar berkedip hijau lembut seketika saat tersimpan.
	- *Galat Batas Masukan:* Jika input \< 0.00 atau \> 100.00, border berubah menjadi 2 piksel `color-status-absent`, muncul popover teks mikro: `Nilai wajib berada di antara 0.00 hingga 100.00`.
	- *Published (Terkunci):* Kotak input bertransformasi menjadi label teks statis permanen tanpa kotak masukan.
---
### 3.3 Guardian Portal (`guardian`)
#### 3.3.1 Dependent Profile Header Card
- **Penempatan:** Area atas ruang kerja pemantauan portal wali murid.
- **Batas Kontainer:** Lebar penuh, padding `space-24`, latar `color-surface-card`, border 1 piksel `color-border-subtle`, radius 12 piksel, bayangan elevasi halus.
- **Hierarki Slot:**
	- **Slot Kiri (Biodata Siswa Terhubung):**
		- Avatar: Wadah inisial melingkar 64 piksel × 64 piksel, latar `color-brand-primary`, teks putih.
		- Tumpukan Teks: Nama lengkap siswa (`font-heading-1`), rombel aktif (`font-subheading`), pengenal institusi (`font-caption`, format: `NIS: STU-2026-0042 | NIK: 3273...`).
	- **Slot Kanan (Kartu Metrik Kunci):**
		- *Kartu Presensi:* Label `Tingkat Kehadiran`, nilai besar `96.7%` (`font-heading-1`, teks emerald), sub-label `28 Hadir dari 29 Sesi`.
		- *Kartu Rapor:* Label `Buku Rapor Semester`, badge status `Published` (emerald filled chip), tombol aksi sekunder berikon `Download` + Teks `Unduh Rapor Resmi`.
---
### 3.4 Roster and Identity Allocation (`identity`)
#### 3.4.1 Master Identity Provisioning Drawer
- **Penempatan:** Laci slide-over yang menempel di batas kanan layar (lebar tetap 480 piksel, tinggi 100vh).
- **Batas Kontainer:** Latar `color-surface-card`, border kiri 1 piksel `color-border-subtle`, padding `space-24`, tata letak kolom flex.
- **Hierarki Slot:**
	- **Header:** Judul `font-heading-1` (`Daftarkan Identitas Civitas Baru`), subjudul `font-caption`, tombol tutup ikon `X` 20 piksel.
	- **Formulir (Wadah gulir vertikal, celah ****`space-16`****):**
		- Field 1: Label `Nama Lengkap Resmi (Wajib)`, input placeholder: `Muhammad Fauzul Hanif`.
		- Field 2: Label `Nomor Induk Kependudukan / NIK (Wajib)`, input placeholder: `16 digit nomor NIK`.
		- Field 3: Label `Klasifikasi Peran Organisasi`, grup 3 kartu radio: `Siswa`, `Instruktur`, `Staf Administrasi`.
		- Field 4: Kolom ganda sejajar: `Jenis Kelamin` (pilihan dropdown `Laki-laki`, `Perempuan`) dan `Tanggal Lahir` (pemilih tanggal `YYYY-MM-DD`).
		- Field 5: Label `Alamat Surat Elektronik / Email (Opsional)`, input placeholder: `nama@sd-albirru.sch.id`.
	- **Footer Aksi:** Border atas 1 piksel `color-border-subtle`, tombol sekunder `Batal` dan tombol primer `Simpan Entitas Identitas`.
---
### 3.5 Public Admissions and Information (`admissions`)
#### 3.5.1 Multi-Step Admission Stepper Ribbon
- **Penempatan:** Bagian atas kontainer form pendaftaran rute `/admission`.
- **Batas Kontainer:** Lebar penuh, batas maksimal 800 piksel, margin tengah, margin bawah `space-32`, baris flex rata kanan-kiri dan sejajar tengah.
- **Hierarki Slot:**
	- **Langkah 1:** Lingkaran indikator 36 piksel (angka `1`, aktif: latar `color-brand-primary`, teks putih), label bawah `1. Calon Siswa`.
	- **Pemisah 1:** Garis horizontal 1 piksel, latar `color-border-subtle`, flex-grow.
	- **Langkah 2:** Lingkaran indikator 36 piksel (angka `2`, non-aktif: transparan, border 2 piksel, teks slate gelap), label bawah `2. Data Wali`.
	- **Pemisah 2:** Garis horizontal 1 piksel, latar `color-border-subtle`, flex-grow.
	- **Langkah 3:** Lingkaran indikator 36 piksel (angka `3`, non-aktif), label bawah `3. Berkas Persyaratan`.
- **Perilaku Status Selesai:** Lingkaran berubah warna `color-brand-accent` (emerald) dan menampilkan ikon `Check` 18 piksel menggantikan angka.
#### 3.5.2 Application Verification Tracking Card
- **Penempatan:** Tengah layar rute `/admission/status` setelah kode pelacak dimasukkan.
- **Batas Kontainer:** Lebar maksimal 600 piksel, margin tengah, latar `color-surface-card`, border 1 piksel `color-border-subtle`, radius 12 piksel, padding `space-32`, bayangan elevasi sedang.
- **Hierarki Slot:**
	- **Pita Atas:** Label `font-caption` (`Kode Pelacakan Resmi Registrasi`), tampilan kode `font-heading-1` monospace: `ADM-20261008-0841`.
	- **Kotak Panggilan Status (Banner penuh, padding ****`space-16`****, radius 8 piksel, margin vertikal ****`space-16`****):**
		- *Pending Review:* Latar amber lembut, ikon `Clock` 20 piksel, judul: `Menunggu Peninjauan Berkas`, deskripsi: `Berkas dalam antrean verifikasi administrasi (est. 3 hari kerja).`
		- *Approved:* Latar emerald lembut, ikon `CheckCircle2` 20 piksel, judul: `Pendaftaran Disetujui`, deskripsi: `Identitas siswa telah terdaftar. Silakan periksa email kontak wali murid.`
		- *Information Required:* Latar sky blue lembut, ikon `AlertTriangle` 20 piksel, judul: `Informasi Tambahan Diperlukan`, deskripsi: memuat catatan resmi administrator.
	- **Tabel Ringkasan Data:** Nama calon siswa, nama wali pendaftar, dan stempel waktu pengiriman formulir.
---
## 4. Micro-Interaction and Feedback States
### 4.1 Skeleton Screen Dimensions
| Target Component | Skeleton Container Dimensions | Layout Placement | Animation Profile |
|---|---|---|---|
| **Attendance Metric Strip** | 5 pil, masing-masing 90px × 32px | Pita atas area kerja presensi | Denyut opasitas 0.4 s.d. 0.8 |
| **Attendance Table Row** | Lebar penuh × tinggi 60px (10 baris) | Kontainer badan tabel presensi | Denyut bertingkat vertikal |
| **Grade Entry Cell** | Lebar 110px × tinggi 40px per sel | Titik koordinat kisi nilai | Denyut kisi tersinkronisasi |
| **Dependent Profile Card** | Lebar penuh × tinggi 160px | Atas area portal wali murid | Denyut kontainer seragam |
| **Admission Status Card** | Lebar 600px × tinggi 340px | Tengah layar pelacakan admisi | Denyut kartu tunggal seragam |
### 4.2 Ephemeral Toast Notification Microcopy Registry
| Triggering Event | Toast Variant | Exact Title Microcopy | Exact Body Description Microcopy |
|---|---|---|---|
| **Attendance Session Submitted** | Success (Emerald) | `Presensi Selesai Disimpan` | `Lembar presensi rombel berhasil diverifikasi untuk 30 siswa.` |
| **Attendance Past Midnight Lock** | Conflict Error (Rose) | `Perubahan Data Ditolak` | `Sesi presensi telah terkunci otomatis pasca-tengah malam.` |
| **Grade Score Saved** | Success (Emerald) | `Nilai Siswa Tersimpan` | `Nilai numerik tersimpan dan rata-rata semester diperbarui.` |
| **Grade Boundary Violation** | Validation Error (Rose) | `Skor Nilai Tidak Valid` | `Nilai wajib berada di antara rentang 0.00 hingga 100.00.` |
| **Admission Intake Successful** | Success (Emerald) | `Pendaftaran Terkirim` | `Kode lacak registrasi diterbitkan. Simpan untuk cek status.` |
| **Rate Limit Exceeded** | Warning (Amber) | `Batas Pengiriman Tercapai` | `Terlalu banyak permintaan dari jaringan ini. Coba 15 menit lagi.` |