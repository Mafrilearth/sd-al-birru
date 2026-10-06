"use server";

import { db } from "@/db";
import { ppdbRegistrations } from "@/db/schema";
import { PpdbSubmissionSchema, ActionResponse, PpdbSubmissionPayload } from "@/lib/validations/ppdb";
import { revalidatePath } from "next/cache";

export async function submitPpdbRegistration(
  payload: PpdbSubmissionPayload
): Promise<ActionResponse<{ registrationNumber: string }>> {
  try {
    // 1. Zod Validation (The Firewall)
    const validatedFields = PpdbSubmissionSchema.safeParse(payload);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validasi data gagal. Periksa kembali form Anda.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // 2. Generate Registration Number (e.g., PPDB26-XXXX)
    const randomHex = Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, "0");
    const registrationNumber = `PPDB26-${randomHex}`;

    const { studentName, parentName, whatsappNumber, previousSchool } = validatedFields.data;

    // 3. Database Insertion (Type-Safe via Drizzle)
    await db.insert(ppdbRegistrations).values({
      registrationNumber,
      studentName,
      parentName,
      whatsappNumber,
      previousSchool: previousSchool || null,
      status: "PENDING",
    });

    // 4. Revalidate cache if there is an admin dashboard
    revalidatePath("/admin/ppdb");

    // 5. Success Response
    return {
      success: true,
      message: "Pendaftaran berhasil disubmit.",
      data: { registrationNumber },
    };
  } catch (error) {
    console.error("PPDB Submission Error:", error);
    
    // Check if error is related to DB connection
    const errorMessage = error instanceof Error ? error.message : "Terjadi kesalahan internal pada server.";
    
    return {
      success: false,
      message: `Gagal mengirim pendaftaran: ${errorMessage}`,
    };
  }
}
