> **Tujuan Dokumen:** Spesifikasi kebutuhan bisnis, batasan fungsional produk, matriks otorisasi peran pengguna, dan kriteria penerimaan rilis produk layak minimum sistem informasi sekolah.
---
## 1. Document Metadata
| Attribute | Value | Description |
|---|---|---|
| **Document Title** | Product Requirements Specification | Judul statutori spesifikasi kebutuhan produk |
| **Dashboard Reference** | `albirru-sis-web/README.md` | Dasbor tata kelola induk repositori |
| **Specification Version** | 1.0.0 | Versi dasar produk layak minimum |
| **Lifecycle State** | Approved (In Development) | Status kesiapan tata kelola operasional |
| **File Path** | `/docs/01-product-requirements-specification.md` | Jalur berkas dalam repositori |
---
## 2. Executive Summary and Problem Statement
### 2.1 Operational Problem
Administrasi sekolah menghadapi inefisiensi pencatatan presensi manual, kalkulasi nilai siswa yang rentan galat pada lembar kerja tersebar, serta keterlambatan distribusi buku rapor akademik kepada wali murid.
### 2.2 System Solution
Menyediakan aplikasi web terisolasi modern modular monolit yang mengonsolidasikan direktori civitas sekolah, pencatatan presensi harian rombongan belajar, komputasi nilai akademik terbobot, portal mandiri wali murid, dan admisi peserta didik baru.
### 2.3 Measurable Key Performance Indicators
- Pencatatan presensi harian tuntas dalam waktu kurang dari 3 menit per rombongan belajar.
- Perhitungan nilai akhir dan pembulatan buku rapor memiliki akurasi matematis mutlak 100%.
- Waktu respons mutasi antarmuka dan transaksi komputasi selesai di bawah ambang batas 1000 milidetik.
---
## 3. Canonical User Roles and Permission Matrix
| Capability Scope | System Administrator | Instructor | Guardian | Public Guest |
|---|---|---|---|---|
| **Classroom Daily Attendance Entry** | Full Management | Write Cohort Only | Read Dependent Only | Access Denied |
| **Continuous Numeric Grade Submission** | Full Management | Write Assigned Courses | Read Dependent Only | Access Denied |
| **Report Card Freezing and Issuance** | Full Management | Submit Final Draft | Read Dependent Only | Access Denied |
| **Member Identity and Roster Setup** | Full Management | Read Cohort Only | Access Denied | Access Denied |
| **Public Admission Application Intake** | Full Management | Access Denied | Access Denied | Write Submission |
| **Public School Profile Viewing** | Full Management | Read Only | Read Only | Read Only |
---
## 4. Minimum Viable Product Functional Modules
### 4.1 Daily Attendance Tracking
#### 4.1.1 Cohort Attendance Session Inception
- **Initialization:** Instruktur membuka sesi presensi harian pada rombongan belajar yang ditugaskan untuk tanggal kalender aktif.
- **Execution & Data Intake:** Sistem memuat seluruh siswa aktif yang terdaftar, terurut menurut abjad nama resmi, dengan status awal `Present`.
- **Validation & Exception:** Sistem memblokir pembuatan sesi jika tanggal kalender klien melampaui tanggal kalender server. Sesi yang telah ada dialihkan ke mode pembaruan.
- **Finalization:** Tampilan ringkasan menyajikan rekapitulasi status kehadiran siswa secara langsung.
#### 4.1.2 Real-Time Attendance Status Mutation
- **Initialization:** Instruktur memilih baris data siswa yang mengalami perubahan kehadiran.
- **Execution & Data Intake:** Instruktur menentukan status pengganti (`Absent`, `Sick`, atau `Excused`) beserta catatan keterangan opsional.
- **Validation & Exception:** Penetapan status bersifat saling lepas (*mutually exclusive*). Satu siswa hanya memiliki tepat satu status presensi per sesi.
- **Finalization:** Nilai status tersimpan sementara pada antarmuka dan memperbarui total rekapitulasi tanpa memuat ulang layar penuh.
#### 4.1.3 Register Submission and Immutability Lock
- **Initialization:** Instruktur memicu aksi finalisasi lembar presensi rombongan belajar.
- **Execution & Data Intake:** Sistem membungkus seluruh status kehadiran siswa ke dalam satu transaksi basis data atomik.
- **Validation & Exception:** Sistem menolak penyimpanan jika terdapat baris data siswa aktif tanpa status eksplisit.
- **Finalization:** Status lembar presensi berubah menjadi `Verified` dan terkunci otomatis pada tengah malam kalender lokal (*midnight lock*).
---
### 4.2 Grading and Academic Reporting
#### 4.2.1 Assessment Component Weight Configuration
- **Initialization:** Administrator atau instruktur penanggung jawab memilih kurikulum mata pelajaran dan semester akademik aktif.
- **Execution & Data Intake:** Pengguna menetapkan bobot persentase bilangan bulat pada setiap komponen penilaian (Tugas Harian, Penilaian Tengah Semester, Penilaian Akhir Semester, dan Keterampilan).
- **Validation & Exception:** Sistem memblokir penyimpanan jika akumulasi penjumlahan bobot seluruh komponen tidak tepat bernilai 100 persen.
- **Finalization:** Skema bobot penilaian terkunci sebagai rujukan dasar perhitungan nilai akhir rapor.
#### 4.2.2 Continuous Numeric Score Intake
- **Initialization:** Instruktur membuka buku nilai kelas untuk mata pelajaran yang diampu.
- **Execution & Data Intake:** Instruktur memasukkan nilai numerik mentah berbasis skala 0 hingga 100 per siswa dalam antarmuka tabular.
- **Validation & Exception:** Masukan bernilai kurang dari 0 atau lebih dari 100 ditolak langsung oleh validasi batas. Masukan non-numerik diabaikan.
- **Finalization:** Rata-rata tertimbang mata pelajaran terhitung secara otomatis di sisi antarmuka.
#### 4.2.3 Report Card Review and Publication Freeze
- **Initialization:** Instruktur atau administrator membuka dasbor penerbitan rapor di akhir periode akademik.
- **Execution & Data Intake:** Sistem mengompilasi seluruh nilai tertimbang mata pelajaran ke dalam lembar draf buku rapor siswa.
- **Validation & Exception:** Rapor tidak dapat diterbitkan jika terdapat mata pelajaran wajib yang belum memiliki komponen nilai tuntas.
- **Finalization:** Administrator menandatangani pengesahan; status rapor berubah menjadi `Published`, bersifat kekal (*immutable*), dan dapat diakses oleh akun wali murid.
---
### 4.3 Guardian Portal
#### 4.3.1 Dependent Association Verification
- **Initialization:** Wali murid melakukan autentikasi ke dalam portal menggunakan kredensial resmi terdaftar.
- **Execution & Data Intake:** Gerbang keamanan memverifikasi ikatan relasi legal dan menampilkan kartu profil siswa terhubung.
- **Validation & Exception:** Upaya mengakses profil siswa di luar ikatan relasi legal ditolak dengan galat otorisasi akses. Akun tanpa relasi diarahkan ke verifikasi identitas administratif.
- **Finalization:** Wali murid memilih profil siswa untuk masuk ke area pemantauan spesifik siswa bersangkutan.
#### 4.3.2 Dependent Attendance Metric Monitoring
- **Initialization:** Wali murid membuka tab ringkasan kehadiran siswa.
- **Execution & Data Intake:** Sistem memuat statistik persentase kehadiran semester berjalan beserta log riwayat kalender harian.
- **Validation & Exception:** Catatan administrasi internal instruktur disaring dan disembunyikan; antarmuka hanya menampilkan label status resmi.
- **Finalization:** Wali murid menerima representasi visual status kehadiran dan indikasi ketidakhadiran siswa.
#### 4.3.3 Published Report Card Inspection
- **Initialization:** Wali murid membuka tab capaian akademik siswa.
- **Execution & Data Intake:** Sistem menampilkan daftar rapor akademik yang tersedia untuk periode semester berjalan.
- **Validation & Exception:** Rapor dengan status draf atau peninjauan internal disembunyikan sepenuhnya dari tampilan.
- **Finalization:** Lembar rincian nilai mata pelajaran, catatan instruktur, dan predikat resmi ditampilkan dengan opsi cetak dokumen.
---
### 4.4 Roster and Identity Allocation
#### 4.4.1 Master Individual Identity Provisioning
- **Initialization:** Administrator membuka konsol manajemen direktori civitas sekolah.
- **Execution & Data Intake:** Administrator memasukkan identitas master (Nama Lengkap, Nomor Induk Kependudukan, Tanggal Lahir, Jenis Kelamin, dan Peran: Siswa, Instruktur, atau Staf Administrasi).
- **Validation & Exception:** Sistem memvalidasi keunikan Nomor Induk Kependudukan; masukan duplikat diblokir dengan pemberitahuan konflik data.
- **Finalization:** Sistem menerbitkan Nomor Induk Siswa permanen dan menyimpan entitas ke dalam direktori master.
#### 4.4.2 Cohort Roster Assembly and Term Enrollment
- **Initialization:** Administrator membuka konfigurasi pembagian rombongan belajar untuk tahun ajaran aktif.
- **Execution & Data Intake:** Administrator memilih siswa aktif dari direktori untuk dialokasikan ke dalam rombongan belajar kelas tertentu.
- **Validation & Exception:** Penugasan diblokir jika jumlah siswa melampaui daya tampung maksimal kelas atau jika siswa telah terdaftar pada rombongan belajar lain pada semester yang sama.
- **Finalization:** Ikatan rombongan belajar terkunci dan otomatis memetakan siswa ke buku presensi serta buku nilai instruktur terkait.
#### 4.4.3 Logical Identity Deactivation and Archive Preservation
- **Initialization:** Administrator memproses penonaktifan civitas (kelulusan, mutasi, atau pengunduran diri).
- **Execution & Data Intake:** Administrator menandai status profil menjadi tidak aktif dengan mencantumkan alasan administratif resmi.
- **Validation & Exception:** Penghapusan baris data fisik (*hard delete*) dilarang keras. Seluruh riwayat presensi dan nilai tetap utuh.
- **Finalization:** Akun pengguna dialihkan ke status `Inactive`, mencabut izin autentikasi aktif, dan mengecualikan profil dari alokasi rombongan belajar baru.
---
### 4.5 Public Information and Admission
#### 4.5.1 Public Institutional Profile Display
- **Initialization:** Pengunjung umum membuka rute alamat web beranda sekolah (`/`).
- **Execution & Data Intake:** Sistem menyajikan konten profil sekolah, visi misi, struktur akreditasi, dan pengumuman resmi.
- **Validation & Exception:** Jalur akses publik disajikan tanpa hambatan autentikasi dan sepenuhnya terisolasi dari direktori data civitas internal.
- **Finalization:** Mesin pencari mengindeks halaman publik melalui konfigurasi Open Graph dan tag kanonikal.
#### 4.5.2 Electronic Admission Application Intake
- **Initialization:** Calon wali murid mengakses portal pendaftaran siswa baru (`/admission`).
- **Execution & Data Intake:** Pendaftar mengisi formulir digital data calon siswa, kontak orang tua, serta mengunggah berkas persyaratan (Kartu Keluarga dan Akta Kelahiran).
- **Validation & Exception:** Berkas unggahan divalidasi atas batas ukuran maksimal berkas dan format tipe MIME dokumen resmi; masukan formulir wajib diverifikasi lengkap.
- **Finalization:** Sistem menerbitkan nomor registrasi pendaftaran unik dan mengalihkan status data ke antrean `Pending Review`.
#### 4.5.3 Administrative Admission Application Adjudication
- **Initialization:** Panitia admisi membuka antrean verifikasi pendaftaran peserta didik baru.
- **Execution & Data Intake:** Administrator menelaah berkas lampiran dan keabsahan isian formulir calon peserta didik.
- **Validation & Exception:** Administrator memberikan keputusan status: `Approved`, `Rejected`, atau `Information Required`.
- **Finalization:** Penetapan status `Approved` memicu pembuatan entitas awal siswa yang siap dialokasikan ke dalam rombongan belajar tahun ajaran baru.
---
## 5. Non-Functional System Constraints
- **Strict Domain Decoupling:** Modul beroperasi dengan isolasi konteks domain di dalam arsitektur modular monolit tanpa ketergantungan logika lintas tabel yang tidak terdefinisi.
- **Transactional Integrity:** Penyimpanan presensi dan finalisasi buku nilai dieksekusi di dalam batas transaksi atomik basis data.
- **Audit Trail and Retention:** Setiap perubahan status nilai dan presensi mencatat log identitas pengguna serta stempel waktu sistem tanpa penghapusan fisik rekaman data (*zero hard delete*).
- **Response Latency Upper Bound:** Seluruh komputasi agregasi nilai dan mutasi antarmuka wajib merespons di bawah ambang batas 1000 milidetik pada koneksi standar.
---
## 6. Post-Baseline Scalability Registry
| Extended Scope Title | Target Lifecycle Phase | In-Tree Documentation Directive |
|---|---|---|
| **Automated Tuition Billing** | Post-MVP Active (Sprint 2) | Ditambahkan pada seksi 4.6 menggunakan struktur alur kerja 4 fase |
| **Computer-Based Examination** | Post-MVP Active (Sprint 3) | Ditambahkan pada seksi 4.7 menggunakan struktur alur kerja 4 fase |
| **Learning Management Resources** | Research Pipeline | Ditambahkan pada seksi 4.8 setelah justifikasi arsitektur disetujui |