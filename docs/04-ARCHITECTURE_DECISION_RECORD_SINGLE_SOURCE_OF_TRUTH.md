# ADR 0001: Penggunaan Filosofi "1 Opsi" (Single Source of Truth)

**Tanggal:** 2026-10-06  
**Status:** Diterima (Accepted)  
**Konteks & Masalah:**  
Dalam proyek pengembangan web tradisional, terlalu banyak pilihan desain dan penamaan variabel menyebabkan kode berantakan (*bloat*), perdebatan panjang, dan kesulitan pemeliharaan (*maintenance*). Kami membutuhkan hukum absolut untuk menjaga kode tetap bersih, sangat efisien, dan berskala global.

**Keputusan (Decision):**  
Kami menerapkan Hukum "1 Opsi" (Opinionated Constraints) di seluruh lapisan arsitektur web SD Al-Birru:
1. **Bahasa Kode:** 100% Bahasa Inggris Murni (Tidak ada penamaan variabel Bahasa Indonesia).
2. **Framework Database:** 1 jalur mutlak menggunakan Drizzle ORM + PostgreSQL untuk memaksakan ketatnya tipe data (Type-Safe).
3. **Bentuk Visual (Shape):** 1 kelengkungan absolut yaitu `0rem` (brutalist, kotak sempurna).
4. **Jarak Visual (Spacing):** 1 sistem tunggal berbasis *8-Point Grid*.

**Konsekuensi (Consequences):**  
- **Positif:** Kecepatan pengembangan meningkat drastis. Tidak ada ambiguitas (*zero friction*). Keamanan dan konsistensi kode sekelas perusahaan *tech* raksasa.
- **Negatif (Mitigasi):** Arsitektur terasa kaku (*rigid*). Namun ini dimitigasi dengan fakta bahwa "kaku" adalah sinonim dari "tangguh" (*robust*) dalam rekayasa perangkat lunak.
