"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookMarked, Heart, Cpu, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";

export function BentoValuesSection() {
  return (
    <section aria-labelledby="bento-values-heading" className="py-28 md:py-36 lg:py-44 bg-[#FDFDFB] dark:bg-slate-950 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200/90 shadow-2xs text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-5">
            <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>KURIKULUM // 4 PILAR TERPADU</span>
          </div>
          <h2 id="bento-values-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
            Kerangka Pembelajaran Holistik
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
            Struktur pengajaran yang memadukan kedalaman spiritual Al-Qur&apos;an, keluhuran adab,
            dan kelincahan nalar sains secara terukur.
          </p>
        </ScrollReveal>

        {/* Bento Grid with Industrial Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 01: Tahfidzul Qur'an (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="lg:col-span-7 flex"
          >
            <article aria-labelledby="pillar-01-title" className="flex-1 flex">
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.15)"
                borderColor="rgba(245, 158, 11, 0.4)"
                className="bg-slate-950 text-white p-2 border-slate-800 shadow-xs hover:shadow-xl relative flex-1 flex flex-col justify-between rounded-3xl"
              >
                <BorderBeam size={220} duration={12} colorFrom="#f59e0b" colorTo="#10b981" />

                <div className="rounded-2xl bg-slate-900/50 p-6 sm:p-10 flex-1 flex flex-col justify-between relative z-10 border border-slate-800/50">
                  <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-amber-400 tracking-wider">
                      PILAR 01
                    </span>
                    <BookMarked className="size-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 id="pillar-01-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                    Metode Talaqqi Bersanad &amp; Muroja&apos;ah Mandiri
                  </h3>

                  <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    Santri dibimbing secara intensif dalam halaqah pagi untuk menguasai makharijul huruf
                    dan kaidah tajwid yang benar. Evaluasi hafalan dilakukan melalui ujian tasmi&apos;
                    terbuka per juz disaksikan langsung oleh orang tua.
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2.5 text-xs font-medium text-slate-300">
                    <li className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono">
                      Talaqqi Asatidz Bersanad
                    </li>
                    <li className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono">
                      Tasmi&apos; Sekali Duduk
                    </li>
                    <li className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono">
                      Syahadah Tahfidz Resmi
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Target kelulusan: Juz 30, 29, dan 28</span>
                  <Link
                    href="/programs"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors group/link font-mono"
                  >
                    <span>Pelajari Silabus</span>
                    <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  </div>
                </div>
              </SpotlightCard>
            </article>
          </motion.div>

          {/* Pillar 02: Adab & Akhlak (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="lg:col-span-5 flex"
          >
            <article aria-labelledby="pillar-02-title" className="flex-1 flex">
              <SpotlightCard
                spotlightColor="rgba(16, 185, 129, 0.08)"
                borderColor="rgba(16, 185, 129, 0.35)"
                className="bg-white dark:bg-slate-900 p-2 shadow-2xs hover:shadow-lg transition-all flex-1 flex flex-col justify-between rounded-3xl"
              >
                <div className="rounded-2xl bg-[#FDFDFB] dark:bg-slate-950 p-6 sm:p-10 flex-1 flex flex-col justify-between relative z-10 border border-slate-100 dark:border-slate-800">
                  <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                      PILAR 02
                    </span>
                    <Heart className="size-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 id="pillar-02-title" className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug">
                    Habit-Forming &amp; 7 Kebiasaan Shalih
                  </h3>

                  <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    Pembiasaan sholat dhuha dan dzuhur berjamaah, kultur 5S (Senyum, Salam, Sapa,
                    Sopan, Santun), serta latihan kepedulian sosial melalui infaq pekanan dan
                    projek bakti orang tua (birrul walidain).
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500">
                  <span>Pendidikan adab mendahului penyerapan ilmu formal</span>
                </div>
                </div>
              </SpotlightCard>
            </article>
          </motion.div>

          {/* Pillar 03: Inkuiri Sains & Komputasi (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="lg:col-span-5 flex"
          >
            <article aria-labelledby="pillar-03-title" className="flex-1 flex">
              <SpotlightCard
                spotlightColor="rgba(14, 165, 233, 0.08)"
                borderColor="rgba(14, 165, 233, 0.35)"
                className="bg-white dark:bg-slate-900 p-2 shadow-2xs hover:shadow-lg transition-all flex-1 flex flex-col justify-between rounded-3xl"
              >
                <div className="rounded-2xl bg-[#FDFDFB] dark:bg-slate-950 p-6 sm:p-10 flex-1 flex flex-col justify-between relative z-10 border border-slate-100 dark:border-slate-800">
                  <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                      PILAR 03
                    </span>
                    <Cpu className="size-5 text-sky-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 id="pillar-03-title" className="text-xl sm:text-2xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug">
                    Inkuiri Sains &amp; Logika Koding Cilik
                  </h3>

                  <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    Pembelajaran aktif berbasis Kurikulum Merdeka yang memadukan eksplorasi praktikum
                    sains di laboratorium alam, pengenalan algoritma computational thinking, dan literasi
                    teknologi yang terarah.
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500">
                  <span>Mengasah nalar kritis dan daya cipta pemecahan masalah</span>
                </div>
                </div>
              </SpotlightCard>
            </article>
          </motion.div>

          {/* Pillar 04: Ekosistem Sekolah Sehat (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="lg:col-span-7 flex"
          >
            <article aria-labelledby="pillar-04-title" className="flex-1 flex">
              <SpotlightCard
                spotlightColor="rgba(245, 158, 11, 0.08)"
                borderColor="rgba(245, 158, 11, 0.35)"
                className="bg-slate-50 dark:bg-slate-800 p-2 shadow-2xs hover:shadow-lg transition-all flex-1 flex flex-col justify-between rounded-3xl"
              >
                <div className="rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-10 flex-1 flex flex-col justify-between relative z-10 border border-slate-100 dark:border-slate-800">
                  <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                      PILAR 04
                    </span>
                    <Sparkles className="size-5 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 id="pillar-04-title" className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-snug">
                    Rasio Terbatas &amp; Ekosistem Pembelajaran Sehat
                  </h3>

                  <p className="mt-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    Pembatasan kuota kelas maksimal 20 santri memastikan kedekatan emosional dan
                    pemantauan perkembangan unik setiap anak. Didukung ruang kelas ber-AC,
                    masjid representatif, perpustakaan baca, dan arena bermain terbuka yang aman.
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">Maksimal 20 santri per ruang kelas</span>
                  <Link
                    href="/programs"
                    className="text-xs font-bold text-slate-900 dark:text-slate-50 hover:text-amber-700 flex items-center gap-1.5 transition-colors group/link font-mono"
                  >
                    <span>Lihat Sarana Fasilitas</span>
                    <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                </div>
              </SpotlightCard>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

