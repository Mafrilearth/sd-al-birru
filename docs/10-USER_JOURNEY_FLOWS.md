# 10: User Journey Flows & State Machines

Dalam rekayasa tingkat tinggi, antarmuka tidak boleh memiliki *state* (status) ganda yang ambigu (misalnya tombol *Submit* bisa ditekan ganda saat *loading*). Seluruh interaksi pengguna (*User Journey*) dipetakan secara matematis menggunakan model *Finite State Machine (FSM)*.

## State Machine: Pendaftaran PPDB (Admissions)

```mermaid
stateDiagram-v2
    [*] --> IDLE : Masuk Halaman PPDB
    
    IDLE --> FILLING_FORM : Mulai Mengetik
    FILLING_FORM --> VALIDATING : Tekan Submit
    
    VALIDATING --> FILLING_FORM : Validasi Gagal (Zod Error)
    VALIDATING --> SUBMITTING : Validasi Sukses
    
    SUBMITTING --> ERROR_NETWORK : Server Gangguan / Timeout
    ERROR_NETWORK --> SUBMITTING : Coba Lagi
    
    SUBMITTING --> SUCCESS : Database Berhasil Menyimpan
    SUCCESS --> [*] : Menampilkan Nomor Pendaftaran (PPDB26-XXXX)
```

## Kebijakan Interaksi Kesalahan (Error Handling Policy)
1. **Larangan Blank Putih (Zero Blank Screen):** Apabila terjadi kegagalan sistem pada tingkat terendah sekalipun, UI wajib melempar *Error Boundary* yang elegan dan dapat dibaca manusia (bukan *stack trace* kode).
2. **Pencegahan Mutasi Ganda (Idempotency):** Saat pengguna masuk ke status `SUBMITTING`, tombol pendaftaran otomatis dilumpuhkan sementara (*disabled*) untuk mencegah data ganda akibat pengguna menekan berulang kali.
