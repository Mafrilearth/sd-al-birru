"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BorderBeam } from "@/components/common/BorderBeam";

export interface CTASectionProps {
  kicker?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
}

export function CTASection({
  kicker = "Penerimaan Santri Baru TA 2026/2027",
  title = "Siapkan Fondasi Terbaik untuk Masa Depan Ananda",
  description = "Kuota dibatasi maksimal 2 kelas (40 santri) demi menjamin perhatian personal dan mutu bimbingan tahfidz yang optimal. Konsultasikan minat dan kesiapan ananda bersama tim kami.",
  primaryBtnText = "Formulir Konsultasi PPDB",
  primaryBtnHref = "/contact",
}: CTASectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="py-28 md:py-36 lg:py-44 bg-[#FDFDFB] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" scale={0.98}>
          <div className="rounded-3xl bg-slate-950 p-2 text-white border border-slate-800 shadow-xl relative overflow-hidden">
            <BorderBeam size={260} duration={14} colorFrom="#f59e0b" colorTo="#10b981" />
            {/* Subtle industrial grid watermark */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"
            />

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800/50 p-8 sm:p-12 md:p-16 max-w-4xl mx-auto text-center flex flex-col items-center relative z-10 w-full">
              {/* Top Monospace Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>{kicker}</span>
              </div>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
              >
                {title}
              </h2>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                {description}
              </p>

              {/* CTAs with generous touch targets & accessible contrast */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  href={primaryBtnHref}
 className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 h-13 rounded-xl shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] text-base focus-visible:ring-4 focus-visible:ring-amber-400/40 outline-none group"
                >
                  <span>{primaryBtnText}</span>
                  <ArrowRight aria-hidden="true" className="size-4.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20PPDB%20Tahun%20Ajaran%202026/2027."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-700 bg-slate-900 hover:bg-slate-850 text-slate-100 font-semibold px-7 h-13 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] text-base focus-visible:ring-4 focus-visible:ring-slate-700 outline-none group"
                >
                  <MessageCircle aria-hidden="true" className="size-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Chat WhatsApp Sekolah</span>
                </a>
              </div>

              <div className="mt-10 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck aria-hidden="true" className="size-4 text-emerald-400 shrink-0" />
                <span>Konsultasi &amp; observasi awal ramah anak tanpa biaya tersembunyi</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
