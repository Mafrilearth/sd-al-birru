# 12: Feature Specification - PPDB Admissions Form

**Fase Eksekusi:** Tahap 1 (Pengumpulan Data Awal)  
**Status:** Sedang Berjalan (*In Progress*)

## 1. Tujuan Bisnis (Business Objective)
Mendapatkan prospek calon siswa *(leads)* dengan hambatan sekecil mungkin *(Zero-Friction)*. Fokus utama adalah mengumpulkan data kontak (WhatsApp) agar tim Admin dapat mengambil alih komunikasi secara proaktif.

## 2. Arsitektur File (File Architecture)
Fitur ini akan dipecah menjadi beberapa *file* terisolasi untuk memastikan Single Responsibility Principle (SRP):
1. **Penyimpanan Skema:** `src/db/schema.ts` *(Telah Selesai)*
2. **Validasi Kontrak:** `src/lib/validations/ppdb.ts` *(Zod Schema)*
3. **Logika Server:** `src/app/api/ppdb/route.ts` atau `Server Actions`.
4. **Antarmuka Pengguna (UI):** `src/components/forms/AdmissionsForm.tsx` (Client Component)
5. **Halaman Publik:** `src/app/[locale]/(public)/admissions/page.tsx` (Server Component)

## 3. Implementasi Hukum Kognitif pada UI
Sesuai *Architecture Decision Record* (ADR-05), antarmuka form akan dibangun dengan spesifikasi berikut:
- **Hick's Law:** Form tidak akan meminta unggahan dokumen (seperti Akte Kelahiran / Kartu Keluarga) di tahap awal ini. Hanya 4 *field* teks.
- **Fitts's Law:** Tombol **"Kirim Pendaftaran"** akan memiliki tinggi `52px` (h-13), bewarna `brand-gold`, melintang penuh *(full width)* pada layar *mobile*.
- **Gestalt Principles:** Input *Nama Calon Siswa* dan *Nama Orang Tua* akan dikelompokkan secara visual berdekatan dengan jarak 16px (Base Grid), sedangkan tombol *Submit* akan diberi jarak 32px (Large Grid) dari grup input terakhir.

## 4. Mekanisme Pencegahan Kegagalan (Fail-Safe Mechanisms)
- **Tahan Banting (Idempotency):** Saat pengguna menekan *submit*, tombol akan menampilkan *spinner* pemuatan *(loading)* dari shadcn/ui dan dinonaktifkan *(disabled)* secara instan.
- **Validasi Ganda:** Validasi akan terjadi dua kali. Pertama di peramban pengguna *(Browser/Client-side)* agar instan, dan kedua di Server (via Zod) untuk mencegah manipulasi *hacker*.
