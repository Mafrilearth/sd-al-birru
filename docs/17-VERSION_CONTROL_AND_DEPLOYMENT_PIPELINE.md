# 17: Version Control & CI/CD Pipeline

Dokumen ini mengatur bagaimana *engineer* atau AI berkolaborasi mengubah kode tanpa merusak repositori utama.

## 1. Standar Penamaan Komit (Conventional Commits)
Setiap perubahan wajib menggunakan standar global *Angular Commit Convention*:
- `feat(ppdb): tambah form pendaftaran` (Untuk fitur baru)
- `fix(auth): perbaiki sesi admin` (Untuk perbaikan bug)
- `docs(arsitektur): perbarui pedoman i18n` (Untuk dokumentasi)
- `chore(deps): update next.js` (Untuk pekerjaan internal tanpa ubah fitur)

## 2. Strategi Pencabangan (Trunk-Based Development)
Kami **tidak** menggunakan *GitFlow* yang rumit. Kami menggunakan *Trunk-Based Development* murni (hanya ada *branch* `main`).
- Setiap *engineer*/AI bekerja di lokal, lalu langsung *push* ke `main` (atau via Pull Request kecil berumur pendek).
- Fitur yang belum selesai akan disembunyikan menggunakan *Feature Flags* alih-alih diisolasi di *branch* berbulan-bulan.

## 3. Continuous Deployment (CD)
Vercel bertindak sebagai *gatekeeper*. Setiap *push* ke GitHub akan secara otomatis memicu kompilasi TypeScript ketat. Jika ada 1 *Warning* tipe data atau ESLint, Vercel akan membatalkan *deployment* (*Fail-Fast*) untuk mencegah *bug* masuk ke publik.
