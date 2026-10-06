"use client";

import React from "react";
import Link from "next/link";
import { Megaphone, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function AnnouncementBanner() {
  const t = useTranslations("Navigation");

  return (
    <div className="w-full bg-amber-500 border-b border-slate-950 text-slate-950 relative z-50">
      <Link
        href="/admissions"
        className="block px-4 py-2 hover:bg-amber-400 transition-colors focus:outline-none focus:bg-amber-400"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold font-mono uppercase tracking-widest">
            <Megaphone className="size-3.5 animate-pulse" />
            <span>Pendaftaran Peserta Didik Baru (PPDB) 2026/2027 Telah Dibuka!</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold font-mono uppercase bg-slate-950 text-amber-500 px-2 py-0.5 ml-2">
            <span>Daftar Sekarang</span>
            <ArrowRight className="size-3" />
          </div>
        </div>
      </Link>
    </div>
  );
}
