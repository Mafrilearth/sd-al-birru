import { z } from "zod";

export const AdmissionsSubmissionSchema = z.object({
  applicantName: z.string().min(3, "Nama siswa terlalu pendek").max(100, "Nama siswa terlalu panjang"),
  guardianName: z.string().min(3, "Nama wali terlalu pendek").max(100, "Nama wali terlalu panjang"),
  phoneNumber: z
    .string()
    .min(10, "Nomor telepon tidak valid (minimal 10 digit)")
    .max(15, "Nomor telepon terlalu panjang")
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka"),
  previousInstitution: z.string().max(100).optional().or(z.literal("")),
});

export type AdmissionsSubmissionPayload = z.infer<typeof AdmissionsSubmissionSchema>;

export type ActionResponse<T> =
  | { success: true; data: T; message: string }
  | { success: false; errors?: Record<string, string[]>; message: string };
