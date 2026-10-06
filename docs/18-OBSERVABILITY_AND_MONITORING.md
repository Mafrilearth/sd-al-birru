# 18: Observability & Monitoring (Day-2 Operations)

Tahap akhir dari Siklus Hidup Pengembangan Perangkat Lunak (SDLC) adalah *Maintenance* dan Observasi. Dokumen ini mengunci standar bagaimana kita mengetahui jika sistem rusak di tangan pengguna akhir sebelum pengguna tersebut melaporkannya.

## 1. Pemantauan Kinerja (Performance Monitoring)
- **Vercel Web Vitals:** Digunakan untuk memantau Skor Kecepatan Akses (Core Web Vitals) seperti LCP (*Largest Contentful Paint*) dan CLS (*Cumulative Layout Shift*). Setiap penurunan skor di bawah batas 90 (zona hijau) harus langsung diinvestigasi.

## 2. Pelacakan Eror Jarak Jauh (Remote Error Tracking)
- **Vercel Logs & Sentry (Opsional):** Segala *error* yang terjadi di *Server Actions* (misalnya: Database *Timeout*, Zod *Crash*) tidak boleh sekadar mati (hancur) di layar tanpa jejak. Semua penangkapan (*catch block*) harus mengirim log eror ke Dasbor Observabilitas.
- Pesan log harus bersifat buta data privasi (*Privacy-Blind*). **Dilarang keras** mencetak/men-log (*console.log*) data sensitif (seperti Nomor WA atau NIK) ke dalam server log terbuka demi kepatuhan dokumen keamanan (Dokumen 15).

## 3. Penanganan Insiden (Incident Response)
Jika terjadi anomali lonjakan pendaftaran gagal di form PPDB (misalnya API putus), sistem wajib memicu *alert* tanpa campur tangan manusia. Perbaikan (*Hotfix*) akan melewati pipa CI/CD konvensional (Dokumen 17).
