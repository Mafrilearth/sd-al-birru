# ADR 0002: Adopsi Hukum Kognitif dalam Desain Antarmuka (UI/UX)

**Tanggal:** 2026-10-06  
**Status:** Diterima (Accepted)  
**Konteks & Masalah:**  
Sebuah website institusi pendidikan sering kali dipenuhi informasi yang berjejal, membuat orang tua murid kebingungan dan gagal menemukan tombol pendaftaran atau informasi penting. Kami membutuhkan landasan ilmiah untuk menata tata letak (layout) dan ukuran komponen.

**Keputusan (Decision):**  
Desain antarmuka secara mutlak diatur oleh empat hukum psikologi kognitif terapan (HCI):
1. **Hick's Law:** Mengurangi opsi di menu utama agar pengguna lebih cepat mengambil keputusan. Form pendaftaran dipotong menjadi input-input krusial saja.
2. **Fitts's Law:** Jarak dan ukuran tombol *(Tap Target)* ditetapkan minimal $48\times48\text{px}$ secara global agar sesuai dengan lengkung jempol manusia di layar sentuh (mobile).
3. **Miller's Law:** Item yang dijajarkan tidak akan pernah lebih dari 7 item (mengurangi *cognitive overload*).
4. **Gestalt Principles:** Komponen yang memiliki fungsi serupa akan dikelompokkan secara visual menggunakan jarak (*spacing/gap*) yang dihitung menggunakan *8-point grid*.

**Konsekuensi (Consequences):**  
- **Positif:** Mengurangi rasio *bounce rate* (pengguna lari dari website karena bingung). Memberikan pengalaman sekelas aplikasi kelas dunia.
- **Negatif:** Desainer tidak bisa sembarangan menambahkan fitur atau tombol baru tanpa merombak arsitektur kognitif ini.
