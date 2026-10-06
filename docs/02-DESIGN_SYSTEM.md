# Al-Birru Signature Design System

> **Versi:** 2.1.0 (Global Multidisciplinary Standards Edition)  
> **Filosofi Fondasi:** Technical Minimalism
> **Bahasa Desain:** Institutional Brutalism
> **Kompatibilitas:** Tailwind CSS v4 + Motion v14 + shadcn/ui + WCAG 2.2 AAA Compliance

---

## 0. Filosofi Multidisipliner & Hukum Kognitif (Cognitive & Philosophical Charter)
Setiap piksel, warna, dan interaksi di dalam proyek ini didasarkan pada ilmu psikologi kognitif dan interaksi manusia-komputer (HCI). Tidak ada desain yang dibuat secara acak.

1. **Hukum Hick (Hick's Law):** Waktu yang dibutuhkan untuk mengambil keputusan sebanding dengan jumlah dan kompleksitas pilihan.
   - *Penerapan:* Navigasi dipangkas seminimal mungkin. Form PPDB dibagi menjadi langkah-langkah (*stepper*) logis untuk mengurangi beban kognitif (*Cognitive Load*).
2. **Hukum Fitts (Fitts's Law):** Waktu untuk mencapai target berbanding lurus dengan jarak dan berbanding terbalik dengan ukuran target.
   - *Penerapan:* Area sentuh (*Tap Target*) minimum mutlak adalah $48\text{px} \times 48\text{px}$ (Sesuai Apple HIG & Android Material).
3. **Prinsip Gestalt (Gestalt Principles):** Manusia mempersepsikan elemen yang berdekatan atau mirip sebagai satu kesatuan kelompok.
   - *Penerapan:* Jarak/spasi (margin/gap) dalam satu grup komponen selalu lebih kecil dari jarak antar-grup (*Proximity Rule*).
4. **Hukum Miller (Miller's Law):** Manusia hanya bisa menyimpan rata-rata 7 (plus/minus 2) item di memori kerja mereka.
   - *Penerapan:* Menu utama tidak boleh lebih dari 6 opsi. Daftar panjang harus dipotong menjadi *chunk* (gumpalan informasi).
5. **Zero-Arbitrary Rule (Aturan Tanpa Tebakan):** Tidak ada *padding*, *margin*, atau *font-size* yang diketik sembarangan. Semua WAJIB berasal dari konstanta matematika.

---

## 1. Piagam Standar Global & Geometri Matematika (Spatial Math Charter)

Setiap nilai numerik ukuran, jarak (*spacing*), kelengkungan sudut (*border radius*), skala huruf, dan fisika animasi dalam website SD Al-Birru **wajib tunduk pada hukum matematika dan standar industri global berikut (Zero Arbitrary Values)**:

### 0.1 Sistem Kisi Spasial 8-Point (*The 8-Point Spatial Grid System*)
Seluruh padding, margin, gap, dan tinggi komponen adalah kelipatan bulat dari **$8\text{px}$** (atau kelipatan mikro $4\text{px}$ untuk detail mikro):
- **Micro-1 (`4px` / `0.25rem`):** Jarak teks dengan indikator titik (*dot*), padding interstitial terkecil.
- **Micro-2 (`8px` / `0.5rem`):** Padding dalam pill kecil, gap antar-ikon badge.
- **Compact (`12px` / `0.75rem`):** Padding input form, gap tombol navigasi sekunder.
- **Base (`16px` / `1rem`):** Gutter grid mobile, padding kartu standar, jarak antar-paragraf.
- **Medium (`24px` / `1.5rem`):** Gutter grid tablet, padding dalam kartu bento, jarak antar-grup input.
- **Large (`32px` / `2rem`):** Gutter grid desktop, padding dalam kartu sorotan utama.
- **X-Large (`48px` / `3rem`):** Gap antar-kolom layout desktop.
- **Rhythm Vertikal Seksi (*Section Spacing*):**
  - **Mobile:** `py-20` ($80\text{px} = 10 \times 8$) atau `py-24` ($96\text{px} = 12 \times 8$)
  - **Tablet:** `md:py-28` ($112\text{px} = 14 \times 8$) atau `md:py-32` ($128\text{px} = 16 \times 8$)
  - **Desktop:** `lg:py-36` ($144\text{px} = 18 \times 8$) atau `lg:py-44` ($176\text{px} = 22 \times 8$)

### 0.2 Rasio Emas (*The Golden Ratio $\phi = 1.618$*) & Komposisi Kolom
- **Pembagian 12-Kolom Grid:** Kolom ganda menggunakan proporsi Mayor : Minor = $7 : 5$ (`col-span-7` mewakili $\approx 58.33\%$ dan `col-span-5` mewakili $\approx 41.67\%$), mendekati perbandingan Golden Ratio $\frac{1}{\phi} \approx 61.8\% : 38.2\%$.
- **Panjang Baris Baca Maksimal (*Measure*):** Dibatasi pada $65 - 75$ karakter per baris (`max-w-xl` hingga `max-w-2xl` / $576\text{px} - 672\text{px}$) untuk kenyamanan pemindaian mata tanpa keletihan optik.
- **Rasio Aspek Gambar:** Wajib mematuhi rasio harmonis: $1:1$ (Square), $4:3$ (Standard Academic), $16:9$ (Widescreen), dan $16:10$ (Golden Rectangle Proportional).

### 0.3 Skala Tipografi Modular Major Third ($r = 1.250$)
Setiap tingkat ukuran teks dihitung berdasarkan deret ukur geometris berakar $16\text{px}$ ($1\text{rem}$):
$$\text{Size}_n = 16\text{px} \times (1.250)^n$$
- **Step -2 ($10.24\text{px} \to 11\text{px}$):** Monospace technical tags, timestamp, status kode.
- **Step -1 ($12.80\text{px} \to 13\text{px} - 14\text{px}$):** Caption, label meta, sub-label.
- **Step 0 ($16.00\text{px}$):** Body base teks artikel dan kurikulum.
- **Step +1 ($20.00\text{px}$):** Heading 3 / Subhead kartu.
- **Step +2 ($25.00\text{px} \to 24\text{px}$):** Heading 2 / Judul seksi kartu bento.
- **Step +3 ($31.25\text{px} \to 32\text{px}$):** Heading 1 / Judul seksi utama halaman.
- **Step +4 ($39.06\text{px} \to 40\text{px}$):** Display 2 / Judul halaman berita & tentang kami.
- **Step +5 ($48.82\text{px} \to 48\text{px} - 58\text{px}$):** Display 1 / Hero headline berbobot tinggi.

### 0.4 Teorema Garis Lurus Mutlak (*Absolute Linear Theorem*)
Untuk setiap komponen batas, kontainer, dan interaksi, garis lurus 90 derajat wajib dipertahankan.
- **Tidak ada komponen bersarang (*nested corners*) yang melengkung.** 
- Semua formasi dalam Bento Grid mengikuti tata letak potong bata (*masonry/block structure*) dengan `rounded-none`.
- Pengecualian ditiadakan; batas kapsul dan tombol diubah menjadi balok struktural sempurna.

### 0.5 Ergonomi Layar Sentuh Fitts's Law (ISO 9241-11 & Apple HIG)
- **Target Sentuh Minimum:** Setiap tombol, link navigasi, dan tab di perangkat sentuh wajib memiliki ukuran tap envelope minimal **$48\text{px} \times 48\text{px}$** (`min-h-[48px]`).
- **Tinggi Tombol Utama:** $48\text{px} - 52\text{px}$ (`h-12` atau `h-13`).
- **Jempol Mobile Ergonomis:** Floating Mobile Dock dan Floating WhatsApp ditempatkan tepat di *Natural Thumb Arc Zone* (bawah layar).

### 0.6 Fisika Pegas Apple WWDC 2025 (*Spring Physics Motion*)
Animasi tidak menggunakan kurva linear atau ease-in-out CSS konvensional, melainkan simulasi massa dan pegas interaktif:
$$\text{Stiffness} = 300,\quad \text{Damping} = 28,\quad \text{Mass} = 0.8$$
- **Haptic Tap Feedback:** $\text{scale}: 0.94$, $\text{stiffness}: 450$, $\text{damping}: 30$.

---

## 1. Brand Identity & Color Tokens

Perpaduan warna ini diekstraksi langsung dari identitas resmi **SD Al-Birru Tahfidzul Quran (Sukabumi)**: *Solar Golden Yellow*, *Deep Obsidian Slate*, dan *Soft Alabaster White*, dengan aksen pelengkap *Tahfidz Emerald*.

### 1.1 Core Brand Palette (Hex & HSL)

| Token Name | Hex Code | HSL Value | Peran & Penggunaan |
| :--- | :--- | :--- | :--- |
| **`amber-500`** | `#F59E0B` | `hsl(38, 92%, 50%)` | Aksen primer, tombol aksi utama (CTA), badge sorotan. |
| **`amber-600`** | `#D97706` | `hsl(37, 91%, 44%)` | Status hover interaktif untuk elemen aksi primer. |
| **`amber-100`** | `#FEF3C7` | `hsl(48, 96%, 89%)` | Background kartu sekunder, notifikasi, dan pill tags. |
| **`slate-900`** | `#0F172A` | `hsl(222, 47%, 11%)` | Latar belakang footer, hero dark accents, teks judul utama. |
| **`slate-800`** | `#1E293B` | `hsl(215, 28%, 17%)` | Border tegas, teks sekunder, dan background mode gelap. |
| **`slate-50`** | `#F8FAFC` | `hsl(210, 40%, 98%)` | Kanvas latar belakang utama (mode terang). |
| **`emerald-800`** | `#065F46` | `hsl(163, 88%, 20%)` | Lencana program spesifik dan indikator status berhasil. |

---

### 1.2 shadcn/ui Semantic CSS Variables (Light & Dark)

Salin token CSS variables berikut ke file `src/app/globals.css`:

```css
@layer base {
  :root {
    /* Base Surface & Text */
    --background: 60 20% 99%;         /* #FDFDFB - Soft Alabaster */
    --foreground: 220 35% 10%;        /* #0F172A - Deep Charcoal Text */

    /* Cards & Popovers */
    --card: 0 0% 100%;                /* #FFFFFF - Crisp Pure White Card */
    --card-foreground: 220 35% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 35% 10%;

    /* Primary Actions (Al-Birru Signature Gold) */
    --primary: 38 92% 50%;            /* #F59E0B - Gold Energy */
    --primary-foreground: 220 35% 8%; /* High contrast dark text on gold */

    /* Secondary Elements */
    --secondary: 48 96% 89%;          /* #FEF3C7 - Warm Amber Tint */
    --secondary-foreground: 37 91% 30%;

    /* Muted & Neutral Details */
    --muted: 210 20% 96%;             /* Soft Slate Neutral */
    --muted-foreground: 215 16% 47%;  /* Readable secondary descriptions */

    /* Accent & Interactive States */
    --accent: 48 96% 94%;
    --accent-foreground: 38 92% 35%;

    /* Islamic / Tahfidz Specialty Badge */
    --islamic-emerald: 163 88% 20%;   /* #065F46 */
    --islamic-emerald-foreground: 0 0% 100%;

    /* Destructive / Alert */
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    /* Borders, Inputs, & Focus Rings */
    --border: 214 25% 91%;
    --input: 214 25% 91%;
    --ring: 38 92% 50%;               /* Golden Focus Ring */

    /* Structural Radius - Zero Tolerance for Curves */
    --radius: 0rem;                   /* 0px - Brutalist Sharp Edges */
  }

  .dark {
    --background: 220 35% 7%;         /* #0B0F17 */
    --foreground: 60 20% 98%;
    --card: 215 28% 12%;
    --card-foreground: 60 20% 98%;
    --popover: 215 28% 12%;
    --popover-foreground: 60 20% 98%;
    --primary: 38 92% 50%;
    --primary-foreground: 220 35% 7%;
    --secondary: 215 28% 17%;
    --secondary-foreground: 48 96% 89%;
    --muted: 215 28% 17%;
    --muted-foreground: 215 16% 65%;
    --accent: 215 28% 20%;
    --accent-foreground: 38 92% 60%;
    --border: 215 28% 18%;
    --input: 215 28% 18%;
    --ring: 38 92% 50%;
  }
}
```

---

## 2. Typography Hierarchy (Font Tokens)

- **Font Family Utama:** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`
- **Sifat Tipografi:** Geometris, tegas, bersih, dan memancarkan wibawa institusi modern yang ramah keluarga.

| Level | Size (Tailwind) | Weight | Line Height | Tracking | Penggunaan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | `text-5xl lg:text-6xl` | `font-extrabold` (800) | `leading-[1.1]` | `tracking-tight` | Headline Utama Hero Section |
| **Heading 1** | `text-3xl lg:text-4xl` | `font-bold` (700) | `leading-[1.2]` | `tracking-tight` | Judul Bagian Halaman (Section Header) |
| **Heading 2** | `text-2xl lg:text-3xl` | `font-bold` (700) | `leading-snug` | `tracking-normal` | Judul Kartu Utama, Sambutan Kepala Sekolah |
| **Heading 3** | `text-xl` | `font-semibold` (600) | `leading-snug` | `tracking-normal` | Judul Kartu Berita, Nama Program |
| **Body Large** | `text-lg` | `font-normal` (400) | `leading-relaxed`| `tracking-normal` | Subtitle Hero, Paragraf Pembuka |
| **Body Base** | `text-base` | `font-normal` (400) | `leading-relaxed`| `tracking-normal` | Teks Isi Artikel, Deskripsi Fasilitas |
| **Caption / Meta** | `text-xs lg:text-sm` | `font-medium` (500) | `leading-normal` | `tracking-wide uppercase` | Kategori Berita, Tanggal, Label Badge |

---

## 3. Spatial & Surface Tokens (Grid, Radius, Elevation)

### 3.1 Konstruksi Batas Mutlak (Zero-Radius Tokens)
Dalam *Institutional Brutalism*, seluruh parameter *border radius* diatur ulang menjadi 0.
- **`rounded-none` (0px):** Diterapkan tanpa pandang bulu pada: Input form, *dropdown item*, tombol aksi utama (*Buttons*), modal, *dialog*, *banner* peringatan, hingga *container* galeri.
- Estetika dibangun murni dari ketebalan *border* (`border`, `border-2`) dan struktur bayangan tajam, bukan kelengkungan.

### 3.2 Elevation & Shadow Tokens
- **`shadow-soft`:** `0 2px 8px -2px rgba(11, 15, 23, 0.05), 0 1px 4px -1px rgba(11, 15, 23, 0.03)`  
  *Penggunaan:* Kartu bento standar dalam kondisi idle.
- **`shadow-hover`:** `0 12px 24px -6px rgba(11, 15, 23, 0.08), 0 4px 12px -2px rgba(11, 15, 23, 0.04)`  
  *Penggunaan:* Kondisi hover kartu program dan berita.
- **`shadow-gold-glow`:** `0 0 20px 2px rgba(245, 158, 11, 0.25)`  
  *Penggunaan:* Tombol pendaftaran utama PPDB dan lencana prestasi unggul.

---

## 4. Bento Grid Layout Specification

Komposisi Bento Grid pada Halaman Beranda (`/`) dan Program (`/programs`):
- **Desktop (12 Kolom):**
  - **Tile A (Span 7 Kolom, Tinggi 380px):** Sorotan Program Tahfidzul Qur'an & Karakter Islami (Kartu Visual Dinamis).
  - **Tile B (Span 5 Kolom, Tinggi 380px):** Sambutan & Filosofi *"Sahabat Pendidikan Anak"*.
  - **Tile C (Span 4 Kolom, Tinggi 280px):** Kurikulum Sains & Teknologi Modern.
  - **Tile D (Span 4 Kolom, Tinggi 280px):** Statistik & Prestasi Siswa (Akreditasi A, Siswa Berprestasi).
  - **Tile E (Span 4 Kolom, Tinggi 280px):** Ekstrakurikuler Pilihan (Robotik, Panahan, Seni).
- **Mobile (1 Kolom):** Disusun linier bertingkat dengan urutan prioritas yang nyaman digeser (*thumb-friendly*).

---

## 5. Motion Tokens (Framer Motion Presets)

```typescript
// src/lib/motion.ts
export const transitionSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};
```

---

## 6. MCP & shadcn Component Library Integration

Komponen standar shadcn/ui yang wajib dipasang untuk web SD Al-Birru:
1. `button` — Tombol CTA emas dan tombol sekunder.
2. `badge` — Lencana Akreditasi, Status PPDB, dan Kategori Berita.
3. `card` — Fondasi pembangun Bento Grid.
4. `dialog` / `sheet` — Modal penampil galeri dan Mobile Navigation Drawer.
5. `form`, `input`, `textarea` — Formulir kontak dan tanya pendaftaran PPDB.
6. `accordion` — Tanya Jawab Seputar Sekolah (FAQ).
7. `carousel` — Slider cuplikan dokumentasi kegiatan.
8. `separator` — Pembatas bagian konten yang bersih.
