import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import configPromise from "@/payload.config";
import { getPayload } from "payload";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = contactFormSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, phone, email, studentCandidateName, message } = result.data;

    // Try saving inquiry to Payload CMS database
    try {
      const payload = await getPayload({ config: configPromise });
      await payload.create({
        collection: "inquiries",
        data: {
          fullName,
          phone,
          email: email || undefined,
          studentCandidateName: studentCandidateName || undefined,
          message,
          status: "baru",
        },
      });
    } catch (dbError) {
      // In development or if db is initializing, log warning and still allow parent to proceed
      console.warn("Payload DB save warning (proceeding to WhatsApp):", dbError);
    }

    // Build personalized WhatsApp pre-filled link
    const waPhone = "6281234567890"; // Official School WhatsApp hotline
    const greetingText = `Assalamu'alaikum Admin SD Al-Birru,
Nama saya: ${fullName}
No. WhatsApp: ${phone}${email ? `\nEmail: ${email}` : ""}${studentCandidateName ? `\nNama Calon Ananda: ${studentCandidateName}` : ""}

Pesan Pertanyaan PPDB:
"${message}"

Mohon informasi lebih lanjut mengenai pendaftaran dan jadwal survei sekolah. Terima kasih.`;

    const encodedText = encodeURIComponent(greetingText);
    const whatsappUrl = `https://wa.me/${waPhone}?text=${encodedText}`;

    return NextResponse.json({
      success: true,
      message: "Pesan Anda berhasil diterima oleh sistem SD Al-Birru.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan server saat memproses pesan Anda.",
      },
      { status: 500 }
    );
  }
}
