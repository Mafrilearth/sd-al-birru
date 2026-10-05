export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "prestasi" | "kegiatan" | "pengumuman" | "tahfidz";
  categoryLabel: string;
  publishedDate: string;
  formattedDate: string;
  author: string;
  summary: string;
  content: string[];
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "tahfidz" | "kegiatan" | "prestasi" | "fasilitas";
  categoryLabel: string;
  date: string;
  description: string;
  location: string;
}

export const fallbackArticles: Article[] = [
  {
    id: "1",
    slug: "gebyar-wisuda-tahfidz-angkatan-iv",
    title: "Gebyar Wisuda Tahfidz Angkatan Ke-IV: 35 Santri Tuntaskan Ujian Tasmi'",
    category: "tahfidz",
    categoryLabel: "Tahfidz & Keislaman",
    publishedDate: "2026-09-28",
    formattedDate: "28 September 2026",
    author: "Ustadzah Siti Fatimah, Lc., M.Ag.",
    summary:
      "Suasana haru dan rasa syukur menyelimuti aula utama SD Al-Birru Sukabumi dalam gelaran Wisuda Tahfidz Angkatan IV. Sebanyak 35 santri resmi diwisuda setelah menuntaskan tasmi' bil-ghaib juz 30, 29, dan 28.",
    content: [
      "Alhamdulillah, segala puji bagi Allah Subhanahu wa Ta'ala. Pada hari Sabtu (28/09), SD Al-Birru Sukabumi sukses menyelenggarakan Wisuda Tahfidzul Qur'an Angkatan Ke-IV bertempat di Aula Utama Graha Al-Birru. Acara ini dihadiri oleh jajaran dewan pembina yayasan, kepala dinas pendidikan setempat, para asatidz, serta seluruh orang tua wisudawan.",
      "Prosesi wisuda tahun ini diikuti oleh 35 santri kelas 4, 5, dan 6 yang telah menyelesaikan seluruh tahapan ujian tasmi' bil-ghaib (hafalan tanpa melihat mushaf) satu juz sekali duduk di hadapan dewan penguji bersanad. Dari total peserta, 12 santri berhasil menuntaskan 3 juz mutqin (Juz 28, 29, dan 30), sementara 23 santri lainnya menuntaskan 1 hingga 2 juz lengkap beserta kaidah hukum tajwid dan gharib Al-Qur'an.",
      "Kepala Sekolah SD Al-Birru, Ustadz H. Ahmad Fauzi, M.Pd., dalam sambutannya menyampaikan rasa bangga yang mendalam kepada para santri dan wali santri. 'Anak-anak penghafal Al-Qur'an adalah mahkota kemuliaan bagi kedua orang tuanya di akhirat kelak. Menghafal Al-Qur'an di usia dasar bukan sekadar melafalkan ayat, melainkan menanamkan kecintaan abadi kepada firman Allah yang akan memandu moral dan akhlak mereka di zaman yang penuh tantangan ini,' tegas beliau.",
      "Acara ditutup dengan prosesi penyematan selempang kehormatan dan mahkota bunga secara simbolis oleh santri kepada ayah dan ibu mereka, diiringi isak tangis haru dan doa kebaikan untuk keberkahan keluarga besar SD Al-Birru Sukabumi.",
    ],
    tags: ["Tahfidz", "Wisuda", "Tasmi'", "Prestasi Santri"],
  },
  {
    id: "2",
    slug: "kunjungan-edukasi-sains-dan-alam",
    title: "Kunjungan Edukasi Sains & Alam: Santri Kelas 3 & 4 Belajar Ekosistem Terapan",
    category: "kegiatan",
    categoryLabel: "Berita Kegiatan",
    publishedDate: "2026-09-15",
    formattedDate: "15 September 2026",
    author: "Ustadz Rahmat Hidayat, S.Pd.",
    summary:
      "Mengintegrasikan tadabbur alam dan Kurikulum Merdeka, puluhan santri SD Al-Birru antusias mengamati ekosistem flora, fauna, dan konservasi air langsung di habitat alaminya.",
    content: [
      "Sebagai implementasi nyata Projek Penguatan Profil Pelajar Pancasila (P5) dengan tema 'Gaya Hidup Berkelanjutan', santri kelas 3 dan 4 SD Al-Birru menggelar program Outdoor Learning & Field Trip ke kawasan konservasi alam Sukabumi.",
      "Dalam kegiatan ini, para santri diajak meneliti keanekaragaman hayati secara langsung. Mereka dibagi ke dalam kelompok-kelompok kecil dengan lembar pengamatan sains interaktif, mencatat jenis daun, mengamati metamorfosis serangga, serta belajar proses penyaringan air bersih alami.",
      "Ustadz Rahmat Hidayat selaku koordinator kurikulum menjelaskan bahwa belajar langsung di alam terbuka menghidupkan rasa ingin tahu anak secara alami. Selain mempelajari konsep sains, anak-anak juga diajak merenungi ayat-ayat kauniyah bahwa seluruh ciptaan Allah di muka bumi memiliki hikmah dan keteraturan yang luar biasa.",
      "Kegiatan diakhiri dengan aksi bersih lingkungan (operasi semut) di sekitar lokasi penelitian untuk melatih kepedulian ekologis dan adab menjaga kebersihan sebagai cerminan sebagian dari iman.",
    ],
    tags: ["Sains", "Outdoor Learning", "P5", "Kurikulum Merdeka"],
  },
  {
    id: "3",
    slug: "sosialisasi-ppdb-2026-2027-gelombang-1",
    title: "Penerimaan Peserta Didik Baru (PPDB) 2026/2027 Gelombang I Resmi Dibuka",
    category: "pengumuman",
    categoryLabel: "Pengumuman Resmi",
    publishedDate: "2026-09-01",
    formattedDate: "01 September 2026",
    author: "Panitia PPDB SD Al-Birru",
    summary:
      "SD Al-Birru Sukabumi resmi membuka pendaftaran santri baru tahun ajaran 2026/2027. Kuota terbatas maksimal 2 kelas demi menjamin rasio ideal 1:15 dan kualitas pembinaan tahfidz.",
    content: [
      "Bismillahirrohmanirrohim. Panitia Penerimaan Peserta Didik Baru (PPDB) SD Al-Birru Sukabumi mengumumkan bahwa pendaftaran santri baru untuk Tahun Ajaran 2026/2027 Gelombang I secara resmi telah dibuka mulai 1 September 2026 hingga 31 Desember 2026.",
      "Komitmen SD Al-Birru dalam menjaga mutu pendidikan diwujudkan melalui pembatasan kuota siswa, yaitu maksimal 2 kelas dengan kapasitas masing-masing 20 santri (rasio guru dan siswa 1:15). Hal ini bertujuan agar pendampingan tahfidz talaqqi harian serta pemantauan adab setiap anak dapat berlangsung intensif dan penuh kehangatan.",
      "Alur pendaftaran dapat dilakukan secara online melalui website resmi ini di menu Kontak & PPDB, atau datang langsung ke kantor sekretariat PPDB SD Al-Birru setiap hari kerja (Senin - Jumat pukul 08.00 - 14.00 WIB, dan Sabtu pukul 08.00 - 12.00 WIB).",
      "Pada Gelombang I ini, panitia memberikan program kemudahan infaq formulir dan konsultasi pemetaan minat bakat anak bersama psikolog pendidikan sekolah tanpa dipungut biaya tambahan.",
    ],
    tags: ["PPDB 2026", "Informasi Pendaftaran", "Kuota Terbatas"],
  },
  {
    id: "4",
    slug: "santri-al-birru-raih-juara-1-dai-cilik",
    title: "Membanggakan: Santri SD Al-Birru Raih Juara 1 Lomba Da'i Cilik se-Sukabumi",
    category: "prestasi",
    categoryLabel: "Prestasi Siswa",
    publishedDate: "2026-08-20",
    formattedDate: "20 Agustus 2026",
    author: "Ustadz Muhammad Ilham, S.Pd.I.",
    summary:
      "Ananda Muhammad Fathan (kelas 5) sukses memukau dewan juri dengan pidato bertema 'Berbakti kepada Orang Tua Kunci Keberkahan Hidup' dalam ajang Festival Anak Sholeh.",
    content: [
      "Kabar membanggakan kembali dipersembahkan oleh santri SD Al-Birru Sukabumi. Dalam ajang Festival Anak Sholeh Tingkat Kota dan Kabupaten Sukabumi yang diselenggarakan di Islamic Center, ananda Muhammad Fathan Al-Ghifari (kelas 5) berhasil menyabet Juara 1 Lomba Da'i Cilik.",
      "Membawakan tausiyah singkat bertajuk 'Birrul Walidain: Kunci Pintu Surga di Masa Belajar', Fathan tampil penuh percaya diri dengan artikulasi yang jelas, intonasi memikat, serta dalil ayat suci Al-Qur'an dan hadits yang dihafal dengan tartil.",
      "Guru pembimbing ekstrakurikuler public speaking, Ustadz Muhammad Ilham, menuturkan bahwa latihan intensif meliputi penguasaan panggung, ketepatan makhraj, dan ekspresi emosional telah diasah selama 2 bulan terakhir.",
      "Kemenangan ini diharapkan menjadi pemicu semangat bagi seluruh santri SD Al-Birru untuk terus menggali potensi dakwah dan menebarkan kebaikan di ruang publik.",
    ],
    tags: ["Da'i Cilik", "Juara 1", "Festival Anak Sholeh", "Prestasi"],
  },
  {
    id: "5",
    slug: "pekan-literasi-dan-festival-dongeng-islam",
    title: "Pekan Literasi Sekolah: Menumbuhkan Gemar Membaca Lewat Festival Dongeng",
    category: "kegiatan",
    categoryLabel: "Berita Kegiatan",
    publishedDate: "2026-08-10",
    formattedDate: "10 Agustus 2026",
    author: "Ustadzah Dewi Anggraeni, S.Pd.",
    summary:
      "Merayakan bulan literasi, SD Al-Birru menghadirkan dongeng sirah nabawiyah, parade kostum profesi muslim, dan pameran resensi buku karya santri kelas 1 hingga 6.",
    content: [
      "Membaca adalah jendela peradaban dan perintah wahyu pertama dalam Islam (Iqra'). Untuk menyalakan api kecintaan membaca sejak dini, SD Al-Birru menyelenggarakan Pekan Literasi dan Festival Dongeng Islam.",
      "Selama sepekan penuh, jam pertama pembelajaran diisi dengan '15 Menit Membaca Senyap' di sudut baca kelas dan taman sekolah. Para santri bebas memilih buku cerita bergambar, ensiklopedia penemu muslim, maupun kisah sahabat Nabi.",
      "Puncak acara dimeriahkan oleh kehadiran pendongeng nasional yang mengisahkan perjuangan para sahabat dalam menuntut ilmu dengan media boneka tangan interaktif yang membuat gelak tawa dan antusiasme ratusan santri terpancar.",
    ],
    tags: ["Literasi", "Pojok Baca", "Dongeng", "Iqra'"],
  },
];

export const fallbackGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Halaqah Tahfidz & Muroja'ah Pagi",
    category: "tahfidz",
    categoryLabel: "Tahfidzul Qur'an",
    date: "Oktober 2026",
    description: "Santri khusyuk menyetorkan hafalan Al-Qur'an dengan metode talaqqi di hadapan asatidz bersanad.",
    location: "Aula Masjid Al-Birru",
  },
  {
    id: "g2",
    title: "Latihan Panahan Tradisional Sunnah",
    category: "kegiatan",
    categoryLabel: "Ekstrakurikuler",
    date: "September 2026",
    description: "Mengasah fokus, ketenangan mental, dan postur fisik santri dalam ekstrakurikuler panahan.",
    location: "Lapangan Olahraga Hijau",
  },
  {
    id: "g3",
    title: "Praktikum Sains & Eksperimen Alam",
    category: "kegiatan",
    categoryLabel: "Akademik",
    date: "September 2026",
    description: "Santri mengamati siklus kehidupan serangga dan filtrasi air bersih di laboratorium alam terbuka.",
    location: "Laboratorium Sains",
  },
  {
    id: "g4",
    title: "Prosesi Wisuda Tahfidz Akbar IV",
    category: "prestasi",
    categoryLabel: "Wisuda & Prestasi",
    date: "September 2026",
    description: "Momen khidmat penganugerahan mahkota dan selempang penghafal Qur'an kepada santri berprestasi.",
    location: "Graha Utama Al-Birru",
  },
  {
    id: "g5",
    title: "Sholat Dhuha & Pembiasaan Doa Berjamaah",
    category: "tahfidz",
    categoryLabel: "Karakter & Adab",
    date: "Oktober 2026",
    description: "Kultur sholat dhuha harian melatih kedisiplinan beribadah dan kebersihan hati sebelum belajar.",
    location: "Masjid Sekolah",
  },
  {
    id: "g6",
    title: "Suasana Belajar Kelas Tematik Ber-AC",
    category: "fasilitas",
    categoryLabel: "Fasilitas Kampus",
    date: "Oktober 2026",
    description: "Ruang kelas representatif dengan rasio santri ideal 1:15 yang nyaman, sejuk, dan interaktif.",
    location: "Gedung Pembelajaran 1",
  },
];

export async function getArticles(category?: string): Promise<Article[]> {
  if (!category || category === "all") {
    return fallbackArticles;
  }
  return fallbackArticles.filter((item) => item.category === category);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const found = fallbackArticles.find((item) => item.slug === slug);
  return found || null;
}

export async function getGalleryItems(category?: string): Promise<GalleryItem[]> {
  if (!category || category === "all") {
    return fallbackGallery;
  }
  return fallbackGallery.filter((item) => item.category === category);
}
