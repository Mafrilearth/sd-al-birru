> **Tujuan Dokumen:** Spesifikasi skema tabel fisik, konvensi relasional data, batasan integritas referensial, strategi indeks performa, dan kebijakan Row-Level Security basis data PostgreSQL.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Relational Database Specification | Judul statutori spesifikasi basis data |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar skema basis data produksi |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/03-relational-database-specification.md` | Jalur berkas dalam repositori |
---
## 2. Structural Conventions and Global Data Standards
### 2.1 Primary Keys and Identifier Types
Setiap tabel relasional menggunakan Universally Unique Identifier versi 7 (UUIDv7) sebagai kunci primer (*primary key*). Pemilihan ini menjamin pengurutan data kronologis alami, performa indeks B-Tree yang optimal, eliminasi risiko tabrakan data (*zero collision*), dan pencegahan eksploitasi enumerasi URL (*Insecure Direct Object Reference*).
### 2.2 Mandatory Audit Columns
Seluruh tabel operasional memelihara tiga kolom audit sistem secara konsisten:
- `created_at` (Timestamp with Time Zone, Default: Current Time, Not Null)
- `updated_at` (Timestamp with Time Zone, Default: Current Time, Not Null)
- `created_by` (UUID, Foreign Key ke `users.id`, Nullable khusus entitas pendaftaran publik)
### 2.3 Logical Deactivation Policy
Penghapusan baris data fisik (*hard delete*) dilarang keras pada seluruh tabel civitas, akademik, dan presensi. Penonaktifan rekaman data dilakukan melalui kolom status logis `is_active` (Boolean, Default: True, Not Null).
---
## 3. Relational Table Schemas
### 3.1 Domain Identity and Roster (`identity`)
#### 3.1.1 Table: `users`
Menyimpan akun keamanan pengguna yang terikat pada mesin autentikasi.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik prinsipal autentikasi |
| **`email`** | Varchar(255) | Unique, Not Null | Alamat surat elektronik terdaftar |
| **`role`** | Enumeration | Not Null | `System Administrator`, `Instructor`, `Guardian`, `Public Guest` |
| **`is_active`** | Boolean | Default True, Not Null | Penanda kelayakan hak masuk sistem |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu inisialisasi akun |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan akun terakhir |
#### 3.1.2 Table: `profiles`
Menyimpan atribut biodata civitas sekolah yang terisolasi dari mesin autentikasi.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik profil civitas |
| **`user_id`** | UUID | Foreign Key (`users.id`), Unique, Nullable | Ikatan ke akun autentikasi aktif |
| **`full_legal_name`** | Varchar(255) | Not Null | Nama lengkap sesuai dokumen identitas resmi |
| **`national_identity_number`** | Varchar(32) | Unique, Not Null | Nomor Induk Kependudukan (NIK) unik |
| **`gender`** | Enumeration | Not Null | `Male`, `Female` |
| **`birth_date`** | Date | Not Null | Tanggal kelahiran resmi |
| **`phone_number`** | Varchar(32) | Nullable | Nomor telepon kontak utama |
| **`address_street`** | Text | Nullable | Alamat jalan domisili |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu inisialisasi entitas |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu perubahan biodata terakhir |
#### 3.1.3 Table: `academic_terms`
Menyimpan kalender operasional semester dan siklus ajaran aktif.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik periode semester |
| **`term_code`** | Varchar(32) | Unique, Not Null | Kode baku semester (Contoh: `2026-2027-SEM-1`) |
| **`title`** | Varchar(128) | Not Null | Label periode (Contoh: Semester Ganjil 2026/2027) |
| **`start_date`** | Date | Not Null | Batas awal siklus kalender ajaran |
| **`end_date`** | Date | Not Null | Batas akhir siklus kalender ajaran |
| **`is_active`** | Boolean | Default False, Not Null | Penanda periode aktif (Singleton: tepat 1 bernilai true) |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembuatan periode |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan periode |
#### 3.1.4 Table: `classroom_cohorts`
Menyimpan entitas rombongan belajar kelas pada tahun ajaran aktif.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik rombongan belajar |
| **`academic_term_id`** | UUID | Foreign Key (`academic_terms.id`), Not Null | Referensi ke periode akademik aktif |
| **`grade_level`** | Integer | Not Null | Tingkat kelas sekolah dasar (Nilai: 1 s.d. 6) |
| **`section_name`** | Varchar(32) | Not Null | Label rombel (Contoh: `A`, `B`) |
| **`lead_instructor_profile_id`** | UUID | Foreign Key (`profiles.id`), Nullable | Referensi ke profil instruktur wali kelas |
| **`maximum_capacity`** | Integer | Default 30, Not Null | Batas kapasitas maksimal siswa rombel |
| **`is_active`** | Boolean | Default True, Not Null | Status operasional rombel |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu inisialisasi rombel |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan rombel |
#### 3.1.5 Table: `cohort_enrollments`
Menyimpan ikatan pendaftaran siswa pada rombongan belajar per semester aktif.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik ikatan enrollment |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi ke profil siswa terdaftar |
| **`classroom_cohort_id`** | UUID | Foreign Key (`classroom_cohorts.id`), Not Null | Referensi ke rombongan belajar alokasi |
| **`enrollment_status`** | Enumeration | Not Null | `Active`, `Transferred`, `Withdrawn`, `Completed` |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu penetapan rombel |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan status pendaftaran |
---
### 3.2 Domain Attendance (`attendance`)
#### 3.2.1 Table: `attendance_sessions`
Mencatat pembukaan lembar presensi rombongan belajar untuk tanggal kalender tertentu.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik sesi presensi |
| **`classroom_cohort_id`** | UUID | Foreign Key (`classroom_cohorts.id`), Not Null | Referensi ke rombongan belajar |
| **`session_date`** | Date | Not Null | Tanggal kalender sesi presensi dibuka |
| **`recording_instructor_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi instruktur pembuka sesi |
| **`is_verified`** | Boolean | Default False, Not Null | Status verifikasi penyelesaian presensi |
| **`is_locked`** | Boolean | Default False, Not Null | Status kunci otomatis pasca-tengah malam |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembuatan sesi presensi |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu mutasi sesi terakhir |
#### 3.2.2 Table: `attendance_records`
Menyimpan rekaman kehadiran spesifik per siswa dalam satu sesi presensi.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik rekaman kehadiran siswa |
| **`attendance_session_id`** | UUID | Foreign Key (`attendance_sessions.id`), Not Null | Referensi ke induk sesi presensi |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi ke profil siswa yang dinilai |
| **`status`** | Enumeration | Not Null | `Present`, `Absent`, `Sick`, `Excused` |
| **`remarks`** | Text | Nullable | Ringkasan catatan medis atau izin |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pencatatan status |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu mutasi status |
---
### 3.3 Domain Grading and Academic Reporting (`grading`)
#### 3.3.1 Table: `subjects`
Menyimpan master kurikulum mata pelajaran institusi.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik mata pelajaran |
| **`code`** | Varchar(32) | Unique, Not Null | Kode mata pelajaran (Contoh: `MATH-PRI`) |
| **`name`** | Varchar(128) | Not Null | Nama resmi mata pelajaran kurikulum |
| **`is_active`** | Boolean | Default True, Not Null | Status ketersediaan kurikulum |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembuatan master |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan kurikulum |
#### 3.3.2 Table: `assessment_configurations`
Menyimpan konfigurasi bobot persentase komponen penilaian per mata pelajaran dalam satu semester.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik konfigurasi penilaian |
| **`subject_id`** | UUID | Foreign Key (`subjects.id`), Not Null | Referensi ke mata pelajaran terkait |
| **`academic_term_id`** | UUID | Foreign Key (`academic_terms.id`), Not Null | Referensi ke periode semester aktif |
| **`category_name`** | Varchar(64) | Not Null | Komponen (Tugas Harian, PTS, PAS, Keterampilan) |
| **`weight_percentage`** | Integer | Not Null | Bobot bilangan bulat (Total akumulasi semester = 100%) |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembuatan konfigurasi |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan bobot |
#### 3.3.3 Table: `student_grades`
Menyimpan rekaman nilai numerik siswa pada komponen penilaian tertentu.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik rekaman nilai |
| **`assessment_config_id`** | UUID | Foreign Key (`assessment_configurations.id`), Not Null | Referensi ke komponen penilaian |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi ke profil siswa dinilai |
| **`evaluator_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi instruktur penilai |
| **`raw_score`** | Decimal(5,2) | Not Null | Skor nilai terikat rentang 0.00 s.d. 100.00 |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pencatatan nilai |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan nilai |
#### 3.3.4 Table: `report_cards`
Menyimpan artefak final buku rapor semester siswa beserta status pembekuan penerbitan.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik artefak buku rapor |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi profil siswa bersangkutan |
| **`academic_term_id`** | UUID | Foreign Key (`academic_terms.id`), Not Null | Referensi periode semester rapor |
| **`classroom_cohort_id`** | UUID | Foreign Key (`classroom_cohorts.id`), Not Null | Referensi rombongan belajar siswa |
| **`calculated_grade_point`** | Decimal(4,2) | Nullable | Rata-rata capaian akademik akhir |
| **`publication_status`** | Enumeration | Default Draft, Not Null | `Draft`, `Pending Verification`, `Published` |
| **`published_at`** | Timestamp with Time Zone | Nullable | Stempel waktu pengesahan administratif |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu inisialisasi draf rapor |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu perubahan status buku rapor |
---
### 3.4 Domain Guardian (`guardian`)
#### 3.4.1 Table: `guardian_student_relations`
Tabel pemetaan relasi legal antara akun wali murid dengan profil siswa.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik ikatan relasi wali |
| **`guardian_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi ke profil biodata wali murid |
| **`student_profile_id`** | UUID | Foreign Key (`profiles.id`), Not Null | Referensi ke profil siswa terhubung |
| **`relationship_type`** | Enumeration | Not Null | `Father`, `Mother`, `Legal Guardian` |
| **`is_verified`** | Boolean | Default False, Not Null | Penanda status verifikasi keabsahan legal |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu inisialisasi relasi |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pembaruan status validasi |
---
### 3.5 Domain Admissions (`admissions`)
#### 3.5.1 Table: `admission_applications`
Tabel penampung berkas pendaftaran calon peserta didik baru dari portal publik.
| Column Name | Data Type | Constraint Rule | Permitted Values / Description |
|---|---|---|---|
| **`id`** | UUID | Primary Key | Pengenal unik berkas pendaftaran |
| **`registration_tracking_code`** | Varchar(32) | Unique, Not Null | Kode lacak unik (Format: `ADM-YYYYMMDD-XXXX`) |
| **`prospective_student_name`** | Varchar(255) | Not Null | Nama lengkap calon siswa baru |
| **`prospective_student_birth_date`** | Date | Not Null | Tanggal kelahiran calon siswa |
| **`guardian_contact_name`** | Varchar(255) | Not Null | Nama lengkap orang tua atau wali pendaftar |
| **`guardian_contact_phone`** | Varchar(32) | Not Null | Nomor kontak telepon aktif |
| **`guardian_contact_email`** | Varchar(255) | Not Null | Alamat surat elektronik kontak |
| **`submitted_documents_url`** | Text | Nullable | Tautan berkas lampiran pendukung |
| **`application_status`** | Enumeration | Default Pending Review, Not Null | `Pending Review`, `Information Required`, `Approved`, `Rejected` |
| **`adjudicated_by`** | UUID | Foreign Key (`profiles.id`), Nullable | Referensi administrator penilai berkas |
| **`created_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu pengiriman formulir |
| **`updated_at`** | Timestamp with Time Zone | Default Now(), Not Null | Stempel waktu putusan admisi |
---
## 4. Referential Integrity and Composite Constraints
| Target Relational Table | Composite Constraint Type | Enforced Rule | Business Objective |
|---|---|---|---|
| **`cohort_enrollments`** | Composite Unique Index | `(student_profile_id, classroom_cohort_id)` | Mencegah duplikasi alokasi siswa pada rombel yang sama |
| **`attendance_sessions`** | Composite Unique Index | `(classroom_cohort_id, session_date)` | Membatasi satu sesi presensi per rombel per tanggal kalender |
| **`attendance_records`** | Composite Unique Index | `(attendance_session_id, student_profile_id)` | Menjamin tepat satu status kehadiran per siswa per sesi |
| **`assessment_configurations`** | Composite Unique Index | `(subject_id, academic_term_id, category_name)` | Mencegah duplikasi kategori nilai mata pelajaran per semester |
| **`student_grades`** | Composite Unique Index | `(assessment_config_id, student_profile_id)` | Memastikan tepat satu nilai numerik per komponen per siswa |
| **`report_cards`** | Composite Unique Index | `(student_profile_id, academic_term_id)` | Membatasi satu buku rapor per siswa per periode semester |
| **`guardian_student_relations`** | Composite Unique Index | `(guardian_profile_id, student_profile_id)` | Menghilangkan redundansi relasi wali dan siswa yang sama |
---
## 5. Performance Indexing Strategy and Row Security Directives
### 5.1 Indexing Policies for Query Latency
- **Foreign Key Coverage:** Seluruh kolom kunci asing (`_id`) diberi indeks B-Tree standar guna mengoptimasi operasi *relational join* dan mencegah penguncian tabel pada transaksi tulis.
- **Chronological Range Indexes:** Kolom `attendance_sessions.session_date` dan `student_grades.created_at` memiliki indeks B-Tree *descending* untuk mempercepat kueri rekapitulasi rentang tanggal.
- **Exact Match Lookup Indexes:** Kolom `admission_applications.registration_tracking_code` dan `profiles.national_identity_number` memiliki indeks unik untuk kueri pencarian instan.
### 5.2 Row-Level Access Policies (PostgreSQL RLS)
- **Profiles Table Isolation:** Pengguna hanya diizinkan membaca dan memperbarui baris pada tabel `profiles` jika `user_id` cocok dengan klaim identitas sesi autentikasi pengguna.
- **Instructor Cohort Scope:** Instruktur dibatasi hak tulisnya hanya pada tabel `attendance_records` dan `student_grades` untuk rombel dan mata pelajaran yang tercatat sebagai penugasannya.
- **Guardian Dependent Scope:** Akun wali murid hanya memiliki izin baca (*select*) pada data presensi dan nilai rapor siswa yang tercatat terhubung aktif dan terverifikasi pada tabel `guardian_student_relations`.
- **Public Admission Boundary:** Tabel `admission_applications` mengizinkan operasi *unauthenticated insert* dari formulir publik, sedangkan operasi *select* dan *update* dibatasi secara eksklusif hanya untuk peran *System Administrator*.