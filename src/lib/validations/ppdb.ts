import { z } from "zod";

export const PpdbSubmissionSchema = z.object({
  studentName: z.string().min(3, "Nama siswa terlalu pendek").max(100, "Nama siswa terlalu panjang"),
  parentName: z.string().min(3, "Nama wali terlalu pendek").max(100, "Nama wali terlalu panjang"),
  whatsappNumber: z
    .string()
    .min(10, "Nomor WhatsApp tidak valid (minimal 10 digit)")
    .max(15, "Nomor WhatsApp terlalu panjang")
    .regex(/^[0-9]+$/, "Nomor WhatsApp hanya boleh berisi angka"),
  previousSchool: z.string().max(100).optional().or(z.literal("")),
});

export type PpdbSubmissionPayload = z.infer<typeof PpdbSubmissionSchema>;

export type ActionResponse<T> =
  | { success: true; data: T; message: string }
  | { success: false; errors?: Record<string, string[]>; message: string };
