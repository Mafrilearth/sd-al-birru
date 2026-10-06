# 11: API Contract Specifications

Agar komunikasi antara *Frontend* dan *Backend* (Server Actions / Route Handlers) kebal terhadap serangan dan eror tipe data, kita menggunakan **Zod** sebagai dinding validasi absolut (The Absolute Validation Wall).

## Kontrak Endpoint Pendaftaran PPDB

**Protokol:** Next.js Server Action (`submitPpdbRegistration`)

### 1. Payload yang Diharapkan (Incoming Data Contract)
Skema ini akan menolak secara sepihak *(Fail Fast)* segala input yang kotor atau sengaja dimanipulasi peretas *(hacker)* dari peramban.

```typescript
const PpdbSubmissionSchema = z.object({
  studentName: z.string().min(3, "Nama siswa terlalu pendek").max(100),
  parentName: z.string().min(3, "Nama wali terlalu pendek").max(100),
  whatsappNumber: z.string()
    .min(10, "Nomor WA tidak valid")
    .max(15, "Nomor WA terlalu panjang")
    .regex(/^[0-9]+$/, "Nomor WA hanya boleh angka"),
  previousSchool: z.string().max(100).optional(),
});
```

### 2. Format Respon Seragam (Uniform Response Contract)
Server tidak pernah merespon dengan format yang tidak menentu. Respon hanya bisa berbentuk salah satu dari status berikut:

```typescript
type ActionResponse<T> = 
  | { success: true; data: T; message: string }
  | { success: false; errors: Record<string, string[]>; message: string };
```
