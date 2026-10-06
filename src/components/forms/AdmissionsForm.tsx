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

export function AdmissionsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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
            Registration Diterima!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Alhamdulillah, data registration ananda telah masuk ke sistem kami. 
            Committee Admissions akan menghubungi Anda via WhatsApp dalam 1x24 jam untuk tahapan selanjutnya.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mt-4"
          >
            Daftarkan Calon Students Lainnya
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="childName">Nama Lengkap Calon Students <span className="text-rose-500">*</span></Label>
            <Input id="childName" required placeholder="Sesuai Akta Kelahiran" className="h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nik">NIK Calon Students <span className="text-rose-500">*</span></Label>
            <Input id="nik" required placeholder="16 Digit NIK" className="h-11" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="parentName">Nama Orang Tua / Wali <span className="text-rose-500">*</span></Label>
            <Input id="parentName" required placeholder="Nama Lengkap" className="h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">No. WhatsApp Aktif <span className="text-rose-500">*</span></Label>
            <Input id="whatsapp" type="tel" required placeholder="0812-3456-7890" className="h-11" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="program">Jalur Registration / Program <span className="text-rose-500">*</span></Label>
          <Select defaultValue="reguler" name="program">
            <SelectTrigger id="program" className="w-full h-11 text-sm font-medium">
              <SelectValue placeholder="Pilih Jalur Registration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reguler">Program Reguler (Tahfidz 3 Juz)</SelectItem>
              <SelectItem value="takhassus">Program Takhassus (Tahfidz 5+ Juz)</SelectItem>
              <SelectItem value="pindahan">Mutasi / Siswa Pindahan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Alamat Lengkap Domisili <span className="text-rose-500">*</span></Label>
          <Textarea 
            id="address" 
            required 
            placeholder="Jl. Raya Utama No. 123, RT/RW, Kelurahan, Kecamatan..." 
            className="min-h-[100px] resize-none p-3" 
          />
        </div>

        <div className="flex items-start space-x-3 pt-4">
          <Checkbox id="terms" required className="mt-1" />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="terms"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed cursor-pointer"
            >
              Saya menyetujui syarat &amp; ketentuan registration
            </Label>
            <p className="text-xs text-slate-500">
              Dengan ini saya menyatakan bahwa data yang diisi adalah benar dan dapat dipertanggungjawabkan.
            </p>
          </div>
        </div>

        <div className="pt-6">
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full h-12 text-sm font-bold bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Memproses Registration...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Form Registration
              </>
            )}
          </Button>
        </div>
      </form>
    </SpotlightCard>
  );
}
