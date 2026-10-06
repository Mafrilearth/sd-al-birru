"use server";

import { db } from "@/db";
import { applications } from "@/db/schema";
import { AdmissionsSubmissionSchema, ActionResponse, AdmissionsSubmissionPayload } from "@/lib/validations/admissions";
import { revalidatePath } from "next/cache";

export async function submitAdmissionsRegistration(
  payload: AdmissionsSubmissionPayload
): Promise<ActionResponse<{ applicationNumber: string }>> {
  try {
    // 1. Zod Validation (The Firewall)
    const validatedFields = AdmissionsSubmissionSchema.safeParse(payload);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validasi data gagal. Periksa kembali form Anda.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // 2. Generate Application Number (e.g., APP26-XXXX)
    const randomHex = Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, "0");
    const applicationNumber = `APP26-${randomHex}`;

    const { applicantName, guardianName, phoneNumber, previousInstitution } = validatedFields.data;

    // 3. Database Insertion (Type-Safe via Drizzle)
    await db.insert(applications).values({
      applicationNumber,
      applicantName,
      guardianName,
      phoneNumber,
      previousInstitution: previousInstitution || null,
      status: "PENDING",
    });

    // 4. Revalidate cache if there is an admin dashboard
    revalidatePath("/admin/admissions");

    // 5. Success Response
    return {
      success: true,
      message: "Pendaftaran berhasil disubmit.",
      data: { applicationNumber },
    };
  } catch (error) {
    console.error("Admissions Submission Error:", error);
    
    // Check if error is related to DB connection
    const errorMessage = error instanceof Error ? error.message : "Terjadi kesalahan internal pada server.";
    
    return {
      success: false,
      message: `Gagal mengirim pendaftaran: ${errorMessage}`,
    };
  }
}
