"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { ConfettiCelebration } from "@/components/common/ConfettiCelebration";

import { submitAdmissionsRegistration } from "@/app/actions/admissions";
import { AdmissionsSubmissionPayload } from "@/lib/validations/admissions";

export function AdmissionsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload: AdmissionsSubmissionPayload = {
      applicantName: formData.get("applicantName") as string,
      guardianName: formData.get("guardianName") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      previousInstitution: (formData.get("previousInstitution") as string) || "",
    };

    try {
      const response = await submitAdmissionsRegistration(payload);
      if (response.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("Terjadi kesalahan sistem. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <SpotlightCard
        spotlightColor="rgba(16, 185, 129, 0.1)"
        className="rounded-none bg-white dark:bg-slate-900 p-8 sm:p-12 border border-emerald-200 dark:border-emerald-900 shadow-xl text-center relative overflow-hidden"
      >
        <ConfettiCelebration />
        <div className="flex flex-col items-center justify-center space-y-4 relative z-10">
          <div className="size-16 rounded-none bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
            <CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
            Pendaftaran Diterima!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Alhamdulillah, data pendaftaran ananda telah masuk ke sistem kami. 
            Panitia PPDB akan menghubungi Anda via WhatsApp dalam 1x24 jam untuk tahapan selanjutnya.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mt-4 rounded-none"
          >
            Daftarkan Calon Siswa Lainnya
          </Button>
        </div>
      </SpotlightCard>
    );
  }

  return (
    <SpotlightCard
      spotlightColor="rgba(150, 150, 150, 0.05)"
      className="rounded-none bg-white dark:bg-slate-900 p-8 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-2xs"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
          Form Registration Admissions 2026
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Mohon lengkapi data calon students dengan valid. Bidang bertanda <span className="text-rose-500">*</span> wajib diisi.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="applicantName">Nama Lengkap Calon Siswa <span className="text-rose-500">*</span></Label>
          <Input id="applicantName" name="applicantName" required placeholder="Sesuai Akta Kelahiran" className="h-11 rounded-none" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="guardianName">Nama Orang Tua / Wali <span className="text-rose-500">*</span></Label>
          <Input id="guardianName" name="guardianName" required placeholder="Nama Lengkap" className="h-11 rounded-none" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">No. Telepon / WhatsApp <span className="text-rose-500">*</span></Label>
          <Input id="phoneNumber" name="phoneNumber" type="tel" required placeholder="0812-3456-7890" className="h-11 rounded-none" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="previousInstitution">Asal Sekolah Sebelumnya (Opsional)</Label>
          <Input id="previousInstitution" name="previousInstitution" placeholder="Nama TK/PAUD" className="h-11 rounded-none" />
        </div>

        <div className="flex items-start space-x-3 pt-4">
          <Checkbox id="terms" name="terms" required className="mt-1 rounded-none" />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="terms"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed cursor-pointer"
            >
              Saya menyetujui syarat &amp; ketentuan pendaftaran
            </Label>
            <p className="text-xs text-slate-500">
              Dengan ini saya menyatakan bahwa data kontak yang diisi adalah benar agar panitia dapat menghubungi saya.
            </p>
          </div>
        </div>

        {errorMessage && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 text-sm rounded-none">
            {errorMessage}
          </div>
        )}

        <div className="pt-6">
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full h-[52px] text-base font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-none shadow-sm transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Memproses Pendaftaran...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Kirim Pendaftaran
              </>
            )}
          </Button>
        </div>
      </form>
    </SpotlightCard>
  );
}
