"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Sparkles, ShieldCheck, Award } from "lucide-react";
import { motion } from "motion/react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { ParallaxFloatingBadge } from "@/components/common/ParallaxFloatingBadge";

import { appleTapHaptic } from "@/lib/motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 lg:pt-36 lg:pb-44 bg-transparent border-b border-slate-200/70">
      {/* Removed conflicting background dots to allow GlobalGrid to shine clearly */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Industrial Modern Headline & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase mb-6"
            >
              <span className="size-1.5 rounded-none bg-emerald-500 animate-pulse" />
              <span>Terakreditasi A Nasional</span>
            </motion.div>

            {/* High-Impact Headline */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]"
            >
              {t("title1")} <br className="hidden sm:block" /> {t("title2")}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal"
            >
              {t("description")}
            </motion.p>

            {/* Action Buttons with Concentric Capsule & Apple Spring Haptics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <motion.div whileTap={appleTapHaptic}>
                <Button asChild className="group flex items-center justify-center gap-2.5 bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-7 h-13 rounded-none text-sm transition-all shadow-md shadow-amber-500/25 relative overflow-hidden">
                  <Link href="/contact">
                    <Sparkles className="size-4 group-hover:rotate-12 transition-transform" />
                    <span>{t("cta_primary")}</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileTap={appleTapHaptic}>
                <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold px-6 h-13 rounded-none text-sm transition-all shadow-2xs">
                  <Link href="/programs">
                    <BookOpen className="size-4 text-slate-500" />
                    <span>{t("cta_secondary")}</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Architectural Blueprint Card with Spotlight & Parallax Floating Chips */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">


            {/* SaaS Spotlight Card with Sweeping BorderBeam */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <SpotlightCard className="p-2 shadow-xs hover:shadow-lg transition-all relative rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <BorderBeam size={220} duration={10} colorFrom="#f59e0b" colorTo="#10b981" />

                <div className="aspect-[4/3] rounded-none bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-6 flex flex-col justify-between relative overflow-hidden group">
                  {/* Subtle Blueprint Grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase font-mono">
                      Arsitektur Kampus
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-none border border-emerald-200/60 font-mono">
                      <span className="size-1.5 rounded-none bg-emerald-500 animate-pulse" />
                      KAMPUS AKTIF
                    </span>
                  </div>

                  <div className="relative z-10 my-auto text-center py-4">
                    <motion.div
                      whileHover={{ rotate: 20, scale: 1.05 }}
                      className="size-13 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs mx-auto flex items-center justify-center text-slate-400 mb-3 transition-transform cursor-pointer"
                    >
                      <Compass className="size-6 text-slate-700 dark:text-slate-300" />
                    </motion.div>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-50">
                      SD Al-Birru Tahfidzul Qur&apos;an
                    </p>
                    <address className="text-xs text-slate-500 mt-0.5 font-mono not-italic">
                      Jl. Selabintana Km. 5, Sukabumi, Jawa Barat
                    </address>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Status: Terakreditasi Resmi</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Academic Year 2026/2027</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>

        {/* Semantic Definition List for Tabular Metric Pairs (Exposed Grid Style) */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 bg-slate-200 dark:bg-slate-800 gap-[1px] border-y border-slate-200 dark:border-slate-800 text-left relative"
        >
          <div className="bg-[#FDFDFB] dark:bg-slate-950 p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group flex flex-col justify-center">
            <dd className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-slate-50 font-mono tracking-tight group-hover:translate-x-1 transition-transform">
              <AnimatedCounter value={3} suffix=" Juz" />
            </dd>
            <dt className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider font-mono">
              Target Hafalan Mutqin
            </dt>
          </div>

          <div className="bg-[#FDFDFB] dark:bg-slate-950 p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group flex flex-col justify-center">
            <dd className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-slate-50 font-mono tracking-tight group-hover:translate-x-1 transition-transform">
              1 : <AnimatedCounter value={15} />
            </dd>
            <dt className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider font-mono">
              Rasio Maksimal Kelas
            </dt>
          </div>

          <div className="bg-[#FDFDFB] dark:bg-slate-950 p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group flex flex-col justify-center">
            <dd className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-slate-50 font-mono tracking-tight group-hover:translate-x-1 transition-transform">
              <AnimatedCounter value={100} suffix="%" />
            </dd>
            <dt className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider font-mono">
              Curriculum Merdeka
            </dt>
          </div>

          <div className="bg-[#FDFDFB] dark:bg-slate-950 p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group flex flex-col justify-center">
            <dd className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-slate-50 font-mono tracking-tight group-hover:translate-x-1 transition-transform">
              <AnimatedCounter value={2} suffix=" Rombel" />
            </dd>
            <dt className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-2 uppercase tracking-wider font-mono">
              Batas Kuota Admissions
            </dt>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
