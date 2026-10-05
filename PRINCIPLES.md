# Multidisciplinary Principles & Global Standards Charter
## Proyek: Website Resmi & CMS SD Al-Birru

Dokumen ini adalah landasan filosofis, metodologis, dan ilmiah formal yang mengikat **seluruh tahapan perancangan visual, penulisan pesan, arsitektur kode, pengalaman interaksi manusia, serta kualitas operasional** website resmi dan panel CMS SD Al-Birru.

---

## 1. Persepsi Visual & Psikologi Gestalt (Visual Design & Perception Science)

Setiap elemen visual yang dilihat mata pengunjung wajib mematuhi hukum persepsi visual yang teruji secara ilmiah:

### 1.1 Hukum Kedekatan (*Gestalt Law of Proximity*)
- **Prinsip:** Elemen visual yang diletakkan saling berdekatan akan dipersepsikan otak sebagai satu kelompok fungsional yang berkaitan.
- **Penerapan:** Label input form menempel erat dengan kolom inputnya (`gap-1.5`), sementara jarak antar-pertanyaan dibuat lebih renggang (`gap-6`) untuk mencegah kekeliruan membaca.

### 1.2 Hukum Wilayah Bersama (*Gestalt Law of Common Region*)
- **Prinsip:** Objek yang berada dalam batas visual atau latar belakang yang sama dianggap memiliki konteks tunggal.
- **Penerapan:** Penerapan **Bento Grid** membungkus setiap keunggulan (Tahfidz, Sains, Karakter) ke dalam kotak kartu mandiri dengan batas border lembut (`border-border/60 bg-card rounded-2xl`).

### 1.3 Pola Pemindaian Mata (*Eye-Tracking: Z-Pattern & F-Pattern*)
- **Z-Pattern (Halaman Beranda & Hero):** Mata orang tua membaca dari Kiri Atas (Logo Sekolah) → Kanan Atas (Menu Kontak & Tombol PPDB) → Diagonal Tengah (Headline Visi & Video) → Kiri Bawah ke Kanan Bawah (Tombol WhatsApp & Aksi Utama).
- **F-Pattern (Halaman Berita & Artikel):** Judul tebal di kiri atas, ringkasan di paragraf pertama, dan penomoran poin-poin utama memudahkan orang tua memindai informasi kegiatan sekolah dalam hitungan detik.

### 1.4 Rasio Emas & Skala Tipografi Modular (*Modular Typographic Scale*)
- **Prinsip Rasio:** Menggunakan skala modular **Major Third (1.250)**.
- **Hierarki:** Tiap kenaikan ukuran font (12px → 14px → 16px → 20px → 24px → 30px → 36px → 48px) memiliki rasio geometris alami yang menenangkan saraf optik pembaca.

---

## 2. Psikologi Kognitif & Pengambilan Keputusan (Cognitive Psychology & UX)

### 2.1 Hick’s Law (Reduksi Beban Kognitif)
- **Prinsip:** Waktu pengambilan keputusan meningkat seiring bertambahnya pilihan.
- **Penerapan:** Menu navigasi utama dibatasi hanya 6 opsi: *Beranda, Tentang Kami, Program, Berita, Galeri, Kontak*. Form kontak/tanya PPDB hanya meminta 3 input pokok.

### 2.2 Fitts’s Law (Ergonomi Layar Sentuh Mobile)
- **Prinsip:** Semakin besar dan dekat target klik, semakin cepat dan mudah disentuh.
- **Penerapan:** Seluruh tombol interaktif di HP memiliki tinggi minimal **48px**, dengan tombol WhatsApp mengambang (*floating*) tepat di area jangkauan jempol (*thumb zone* kanan bawah).

### 2.3 Miller’s Law & Chunking (Batas Memori Kerja)
- **Prinsip:** Memori kerja manusia optimal menyerap 5 hingga 7 potongan (*chunk*) informasi.
- **Penerapan:** Informasi keunggulan sekolah dipilah tepat menjadi 4 pilar inti: *(1) Tahfidzul Qur'an, (2) Karakter Islami Mandiri, (3) Kurikulum Sains & Teknologi, (4) Pendidik Berdedikasi*.

### 2.4 Von Restorff Effect (Efek Isolasi Visual)
- **Prinsip:** Objek yang paling kontras dari kelompoknya akan menjadi pusat atensi dan paling lama diingat.
- **Penerapan:** Tombol pendaftaran PPDB menggunakan warna aksen **Al-Birru Gold (`#F59E0B`)** dengan efek pendaran cahaya lembut (*gold glow*), kontras di atas kanvas putih lembut.

### 2.5 Cialdini’s 6 Principles of Persuasion (Psikologi Kepercayaan Wali Murid)
1. **Authority (Otoritas):** Penampilan izin operasional resmi Kemendikbudristek dan Akreditasi Sekolah.
2. **Social Proof (Bukti Sosial):** Kutipan kepuasan nyata dari wali murid dan dokumentasi prestasi siswa.
3. **Liking (Kehangatan Emosional):** Sambutan tulus dan foto ramah Kepala Sekolah beserta guru.
4. **Commitment & Consistency:** Mengawali langkah dengan "Tanya Santai via WhatsApp" sebelum pendaftaran berkas resmi.

---

## 3. Retorika Klasik & Copywriting Pemasaran (Educational Rhetoric & Conversion)

### 3.1 Retorika Aristoteles (Aristotelian Rhetoric)
- **Ethos (Kredibilitas Moral):** Menunjukkan rekam jejak guru yang hafiz/hafizah dan berpendidikan linier.
- **Pathos (Empati & Kasih Sayang):** Menyentuh naluri terdalam orang tua yang ingin anaknya terlindung dari pergaulan negatif dan menjadi penyejuk hati (*qurrata a'yun*).
- **Logos (Rasionalitas & Bukti):** Data kurikulum terpadu, fasilitas belajar yang representatif, dan rasio guru-siswa yang ideal.

### 3.2 Donald Miller’s StoryBrand Framework
- **Orang Tua adalah Pahlawan (*The Hero*):** Orang tua yang sedang berjuang mencari sekolah terbaik untuk masa depan anaknya.
- **Masalah (*The Problem*):** Krisis moral era digital, maraknya perundungan, dan minimnya pembiasaan adab ibadah.
- **SD Al-Birru adalah Pemandu Bijak (*The Guide*):** Hadir dengan empati dan otoritas terpercaya (*"Sahabat Pendidikan Anak"*).
- **Rencana Jelas (*The Plan*):** (1) Hubungi Sekolah → (2) Kunjungan & Observasi → (3) Bergabung menjadi Keluarga Besar Al-Birru.
- **Hasil Akhir (*Success*):** Anak tumbuh cerdas berilmu, hafal Al-Qur'an, dan berakhlak mulia kepada orang tua.

### 3.3 AIDA & PAS Copywriting Frameworks
- **AIDA:** *Attention* (Headline pikat) → *Interest* (Keunikan program) → *Desire* (Visualisasi anak bahagia berprestasi) → *Action* (Tombol daftar).
- **PAS:** *Problem* (Tantangan zaman) → *Agitate* (Konsekuensi jika fondasi usia SD terabaikan) → *Solution* (SD Al-Birru sebagai ekosistem pembinaan terbaik).

---

## 4. Human-Computer Interaction & Usability Engineering (HCI untuk CMS & Pengguna)

### 4.1 Jakob Nielsen’s Usability Heuristics
1. **Visibility of System Status:** Saat admin mengunggah foto atau menyimpan artikel berita di CMS, sistem memberikan indikator proses (indikator loading dan toast alert hijau "Berhasil Disimpan").
2. **Match Between System and Real World:** Terminologi di CMS menggunakan bahasa lugas sekolah: *"Judul Berita"*, *"Foto Cover"*, *"Kategori"*, bukan istilah teknis basis data.
3. **Error Prevention (Poka-Yoke):** Tombol hapus artikel meminta konfirmasi ganda modal dialog untuk mencegah ketidaksengajaan.
4. **Recognition Rather Than Recall:** Seluruh pilihan kategori dan status artikel disajikan dalam dropdown visual, bukan kolom ketik bebas.

### 4.2 Shneiderman’s Eight Golden Rules
- Umpan balik yang informatif pada setiap tindakan.
- Mengurangi beban memori jangka pendek pengguna.
- Pembalikan aksi yang mudah (*undo/cancel*).

---

## 5. Software Engineering & Architectural Standards (Ilmu Komputer)

### 5.1 SOLID Principles
- **SRP (Single Responsibility):** Komponen UI hanya bertugas merender tampilan; validasi form sepenuhnya diisolasi di Zod schema; data fetching dihandle Server Components.
- **OCP (Open/Closed):** Komponen tombol dan kartu shadcn/ui dapat divariasikan melalui `cva()` tanpa mengutak-atik kode internalnya.

### 5.2 Postel’s Law / Robustness Principle
- *"Be conservative in what you send, be liberal in what you accept."*
- Penanganan input nomor WhatsApp di form kontak mentoleransi berbagai format pengguna (dengan spasi, tanda strip `-`, `+62`, atau awalan `08`), lalu dinormalisasi secara otomatis sebelum disimpan ke database.

### 5.3 Defense in Depth & Zero Trust Security
- Validasi data ganda di Client (UX cepat) dan Server Action (keamanan mutlak).
- Proteksi CSRF otomatis oleh Next.js Server Actions.
- Isolasi database PostgreSQL dengan prinsip hak akses terkecil (*Principle of Least Privilege*).

---

## 6. Standar Kualitas Internasional (ISO & W3C)

### 6.1 ISO/IEC 25010 (Model Kualitas Perangkat Lunak)
- **Functional Suitability:** Fitur web dan CMS memenuhi 100% kebutuhan sekolah tanpa redundansi.
- **Performance Efficiency:** Pemuatan halaman < 2.5 detik (*Google Core Web Vitals LCP*).
- **Usability:** Antarmuka ramah pengguna bagi wali murid awam maupun admin sekolah.
- **Reliability & Security:** Bebas celah kebocoran data dengan enkripsi HTTPS dan database PostgreSQL terlindungi.
- **Maintainability:** Arsitektur modular TypeScript yang rapi dan mudah dirawat developer masa depan.

### 6.2 W3C WCAG 2.1 Level AA (Standar Aksesibilitas Dunia)
- Rasio kontras teks minimal **4.5:1**.
- Navigasi keyboard penuh dengan indikator fokus emas (*Golden Focus Ring*).
- Dukungan pembaca layar tuna netra (*Screen Reader Accessible*) melalui atribut semantik ARIA.

---

## 7. Aturan Penamaan Ketat Standar Resmi Global (Strict Global Naming & Semantics)

Setiap penamaan file, komponen, token desain, fungsi, dan variabel terikat oleh konvensi baku industri internasional:

### 7.1 Standar Token Desain (W3C Design Tokens Community Group - DTCG)
- **Aturan Semantik:** Token dilarang keras menggunakan nama warna literal (misal: `--yellow-500` atau `--black-dark`), melainkan wajib menggunakan nama peran fungsional (*semantic role-based tokens*):
  - `--primary` & `--primary-foreground` (Warna aksi utama dan teks kontrasnya).
  - `--surface` & `--surface-foreground` (Warna kartu/kanvas).
  - `--muted` & `--muted-foreground` (Warna deskripsi sekunder).
- **Format CSS Variables:** `--{category}-{element}-{variant}-{state}` (mematuhi standar DTCG & shadcn/ui).

### 7.2 Standar Penamaan Komponen (React & Atomic Design Pattern)
- **Format:** Wajib **PascalCase** murni tanpa singkatan ambigu.
  - *Atoms / Primitives:* `Button.tsx`, `Badge.tsx`, `Input.tsx`.
  - *Molecules / Form:* `FormFieldGroup.tsx`, `SearchBar.tsx`.
  - *Organisms / Sections:* `HeroSection.tsx`, `WelcomeSection.tsx`, `BentoValuesSection.tsx`.
  - *Layout & Views:* `PublicNavbar.tsx`, `PublicFooter.tsx`, `MobileNavDrawer.tsx`.
- **Aturan 1 File 1 Komponen:** Nama file wajib identik dengan nama komponen yang diekspor (`export function HeroSection` di dalam `HeroSection.tsx`).

### 7.3 Standar Kode TypeScript (Google & Airbnb Style Guide)
- **Fungsi & Variabel:** Wajib **camelCase** diawali kata kerja tindakan (`fetchPublishedNews()`, `formatDateToIndonesia()`, `submitInquiryForm()`).
- **Nilai Boolean (Kondisi):** Wajib diawali kata bantu verifikasi (`isLoading`, `isPublished`, `hasFeaturedBadge`, `canSubmit`).
- **Tipe Data & Interface:** Wajib **PascalCase** kata benda tunggal tanpa awalan huruf `I` (`PostItem`, `GalleryAlbum`, `InquiryInput`).
- **Konstanta Global & Enums:** Wajib **UPPER_SNAKE_CASE** (`MAX_IMAGE_UPLOAD_BYTES`, `SCHOOL_ACCREDITATION_CODE`).
- **Skema Validasi Zod:** Wajib berakhiran `Schema` dalam format camelCase (`contactFormSchema`, `articleContentSchema`).

### 7.4 Standar Rute URL & Folder (RFC 3986 & Next.js Convention)
- **Folder & URL:** Wajib **kebab-case** huruf kecil penuh (`/about`, `/programs`, `/news`, `/gallery`, `/contact`).
- **Route Groups:** Menggunakan tanda kurung `(public)` dan `(payload)` untuk isolasi tata letak tanpa mempengaruhi URL publik.

---

Piagam ini adalah **hukum baku** yang memandu setiap baris kode, teks paragraf, tombol aksi, dan transisi animasi di proyek SD Al-Birru.
