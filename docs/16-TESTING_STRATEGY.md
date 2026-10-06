# 16: Testing Strategy & Quality Assurance (QA)

Dokumen ini mengunci standar pengujian perangkat lunak (*Software Testing*) untuk memastikan kode tidak rusak saat pembaruan terjadi. Kami menerapkan filosofi *Shift-Left Testing* (menangkap bug secepat mungkin).

## 1. Pengujian Unit (Unit Testing)
- **Engine:** Vitest (karena sangat cepat dan kompatibel secara bawaan dengan Vite/Turbopack).
- **Cakupan (Scope):** Pengujian hanya dilakukan pada fungsi-fungsi logika murni (*Pure Functions*) seperti kalkulasi biaya PPDB atau validasi Zod. Kami **tidak** membuang waktu menguji komponen antarmuka statis yang tidak memiliki logika.

## 2. Pengujian Menyeluruh (End-to-End / E2E)
- **Engine:** Playwright.
- **Cakupan Kritis:** Alur Pendaftaran PPDB wajib memiliki *test script* Playwright yang secara otomatis mengisi *form* dan menekan *submit* setiap kali ada *commit* baru, untuk memastikan jalur pemasukan data wali murid tidak pernah lumpuh di *production*.
