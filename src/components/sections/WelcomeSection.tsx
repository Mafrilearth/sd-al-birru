"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, UserCheck, ShieldCheck, HeartHandshake, Sparkles, Compass } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";

const fitrahPillars = [
  {
    code: "FITRAH // 01",
    title: "Qudwah Hasanah (Teladan Nyata)",
    desc: "Setiap ustadz dan ustadzah diposisikan sebagai teladan akhlak hidup yang disaksikan langsung oleh santri.",
    icon: Sparkles,
  },
  {
    code: "FITRAH // 02",
    title: "Disiplin Positif & Memuliakan",
    desc: "Membentuk kemandirian dan adab tanpa kekerasan verbal ataupun hukuman fisik yang merusak mental.",
    icon: Compass,
  },
  {
    code: "FITRAH // 03",
    title: "Sinergi Sekolah & Keluarga",
    desc: "Keselarasan pembiasaan harian terpadu melalui mutaba'ah yaumiyah antara guru dan orang tua.",
    icon: HeartHandshake,
  },
];

export function WelcomeSection() {
  return (
    <section aria-labelledby="welcome-heading" className="py-28 md:py-36 lg:py-44 bg-white dark:bg-slate-900 border-b border-slate-200/70 relative overflow-hidden">
      {/* Background dot matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Headmaster Identity Card with Spotlight & BorderBeam */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative"
              >
                <article aria-labelledby="headmaster-name">
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.12)"
                    borderColor="rgba(245, 158, 11, 0.3)"
                    className="rounded-3xl p-2 bg-[#FDFDFB] dark:bg-slate-950 shadow-2xs hover:shadow-xl transition-all relative overflow-hidden"
                  >
                    <BorderBeam size={220} duration={14} colorFrom="#f59e0b" colorTo="#10b981" />

                    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 h-full flex flex-col justify-between relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="size-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-2xs">
                          <UserCheck className="size-9" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 uppercase">
                          LEADERSHIP // KS-01
                        </span>
                      </div>

                      <h3 id="headmaster-name" className="text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight">
                        Ustadz H. Ahmad Fauzi, M.Pd.
                      </h3>
                      <p className="text-xs font-bold text-amber-700 mt-1 uppercase tracking-wider font-mono">
                        Kepala Sekolah SD Al-Birru
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        Magister Manajemen Pendidikan Islam (UIN)
                      </p>

                      <blockquote cite="Ustadz H. Ahmad Fauzi, M.Pd." className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-700/80 text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic bg-amber-50/40 p-5 rounded-2xl border border-amber-100">
                        &quot;Mendidik bukan sekadar mentransfer pengetahuan, melainkan menghidupkan fitrah,
                        menjaga kemurnian hati, dan menanamkan akhlak mulia sebelum ilmu diajarkan.&quot;
                      </blockquote>

                      <div className="mt-6 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                          <ShieldCheck className="size-3.5 text-emerald-700" />
                          <span>Komitmen Sekolah Ramah Anak</span>
                        </div>
                        <span className="text-slate-400">STANDAR JSIT</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </article>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pedagogical Philosophy & 3 Fitrah Blueprint Cards */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
                <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>FILOSOFI // PENDIDIKAN FITRAH</span>
              </div>

              <h2 id="welcome-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
                Menjaga Fitrah Anak Melalui Keteladanan, Adab, &amp; Kasih Sayang
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Anak usia sekolah dasar belajar paling mendalam dari apa yang mereka saksikan dan rasakan.
                Di SD Al-Birru, setiap sudut ruang belajar dirancang untuk menumbuhkan cinta ilmu dan keluhuran pekerti.
              </p>

              {/* Semantic List of 3 Out-of-the-Box Fitrah Blueprint Cards */}
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4.5 w-full">
                {fitrahPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex">
                      <article
                        aria-labelledby={`fitrah-title-${idx}`}
                        className="p-5 rounded-2xl bg-[#FDFDFB] dark:bg-slate-950 border border-slate-200/90 hover:border-amber-300 hover:shadow-xs transition-all flex flex-col justify-between w-full"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-3">
                            <Icon className="size-4.5 text-amber-600" />
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              {item.code}
                            </span>
                          </div>
                          <h3 id={`fitrah-title-${idx}`} className="text-xs sm:text-sm font-bold text-slate-950 dark:text-slate-50 leading-snug">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 font-bold px-6 h-12 rounded-xl text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.99] shadow-2xs"
                >
                  <span>Pelajari Profil &amp; Sejarah Al-Birru</span>
                  <ArrowRight className="size-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-5 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 dark:bg-slate-800 font-bold text-xs sm:text-sm transition-colors shadow-2xs"
                >
                  <span>Eksplorasi Kurikulum</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

