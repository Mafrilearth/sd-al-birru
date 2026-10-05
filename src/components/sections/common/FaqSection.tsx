"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { cn } from "@/lib/utils";

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-hours",
    num: "01",
    question: "Bagaimana jam operasional belajar dan ritme harian santri di sekolah?",
    answer:
      "Kegiatan santri berlangsung hari Senin hingga Kamis pukul 07.15 – 15.00 WIB. Hari dimulai dengan Sholat Dhuha bersama dan halaqah tahfidz talaqqi pagi, dilanjutkan pembelajaran tematik Kurikulum Merdeka, Sholat Dzuhur berjamaah, serta makan siang bersama. Khusus hari Jumat, kepulangan pada pukul 11.30 WIB untuk persiapan ibadah Sholat Jumat.",
  },
  {
    id: "faq-catering",
    num: "02",
    question: "Bagaimana standar penyediaan makan siang dan asupan gizi santri?",
    answer:
      "SD Al-Birru menyediakan katering makan siang sehat higienis dengan menu seimbang setiap hari (karbohidrat kompleks, protein hewani/nabati, sayuran segar, dan buah) tanpa penyedap sintetis berlebih. Waktu makan juga menjadi sarana pembiasaan adab islami: duduk tertib, membaca doa bersama, dan menjaga adab tanpa menyisakan makanan.",
  },
  {
    id: "faq-shuttle",
    num: "03",
    question: "Apakah tersedia armada layanan antar-jemput bagi santri yang berdomisili jauh?",
    answer:
      "Tersedia layanan antar-jemput armada resmi berpendingin udara dengan rute terpadu di wilayah Kota dan Kabupaten Sukabumi. Setiap armada didampingi oleh staf sekolah serta dilengkapi koordinasi komunikasi aktif bersama orang tua untuk memastikan keselamatan, ketepatan waktu, dan kenyamanan santri selama perjalanan.",
  },
  {
    id: "faq-matrikulasi",
    num: "04",
    question: "Bagaimana jika calon santri baru belum lancar mengenal huruf hijaiyah atau membaca Iqra'?",
    answer:
      "Bapak/Ibu tidak perlu berkecil hati. Kami menyelenggarakan program matrikulasi tahsin intensif pada 3 bulan pertama semester ganjil. Asatidz membimbing dengan metode talaqqi personal penuh kesabaran dari tingkat dasar tanpa menghakimi kemampuan awal anak, sehingga ananda merasa dihargai dan antusias belajar.",
  },
  {
    id: "faq-observation",
    num: "05",
    question: "Bagaimana tahapan observasi masuk penerimaan santri baru (PPDB)?",
    answer:
      "Observasi dirancang dengan pendekatan ramah anak (child-friendly assessment) melalui kegiatan bermain edukatif terarah untuk memetakan kesiapan motorik, kemandirian emosional, dan interaksi sosial anak. Kami tidak memberlakukan tes calistung kaku sebagai penentu kelulusan, dan menyertakan sesi dialog kemitraan bersama orang tua demi penyelarasan visi di rumah dan sekolah.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-hours");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section aria-labelledby="faq-section-heading" className="py-24 md:py-32 lg:py-36 bg-[#FDFDFB] dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-700/80 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Golden Ratio 12-Column Division: col-span-5 (~41.7%) and col-span-7 (~58.3%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Industrial Overview & Direct Humas Reassurance (Golden Ratio Minor 5/12) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase mb-6">
                <span className="size-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>FAQ // INFORMASI OPERASIONAL</span>
              </div>

              <h2 id="faq-section-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-slate-50 tracking-tight leading-[1.12]">
                Pertanyaan Logistik &amp; Keseharian Santri
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
                Transparansi menyeluruh seputar jam belajar harian, standar katering gizi sehat,
                armada antar-jemput, dan tata cara observasi masuk ramah anak di SD Al-Birru.
              </p>

              {/* Direct Support Box - Strict 8pt Grid (p-8 = 32px, rounded-3xl = 24px) */}
              <aside aria-labelledby="faq-support-title" className="mt-8">
                <motion.div
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Sparkles className="size-5 text-amber-500 shrink-0" />
                    <h3 id="faq-support-title" className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-50 font-mono">
                      Bantuan &amp; Konsultasi Langsung
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                    Memerlukan informasi lebih mendalam terkait pendaftaran, survei lokasi, atau
                    konsultasi pemindahan santri?
                  </p>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                    <a
                      href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20seputar%20operasional%20sekolah."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-emerald-700 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-900/30 active:scale-95 min-h-[48px]"
                    >
                      <MessageCircle className="size-4.5" />
                      <span>Chat Langsung ke Tim Humas (WA)</span>
                    </a>

                    <a
                      href="tel:+6281234567890"
                      className="flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-colors active:scale-95 min-h-[48px]"
                    >
                      <Phone className="size-4 text-slate-500" />
                      <span>Hotline: (0266) 123-456</span>
                    </a>
                  </div>
                </motion.div>
              </aside>
            </ScrollReveal>
          </div>

          {/* Right Column: W3C WAI-ARIA Standard Semantic Accordion List (Golden Ratio Major 7/12) */}
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.li
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className={cn(
                      "rounded-3xl border transition-all duration-200 overflow-hidden list-none",
                      isOpen
                        ? "bg-white dark:bg-slate-900 border-slate-400 shadow-md ring-1 ring-slate-900/5"
                        : "bg-white/90 border-slate-200/90 hover:border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 dark:bg-slate-900"
                    )}
                  >
                    <h3 className="m-0 p-0 text-base sm:text-lg font-bold text-slate-950 dark:text-slate-50">
                      <button
                        id={`faq-btn-${faq.id}`}
                        type="button"
                        aria-controls={`faq-panel-${faq.id}`}
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-start justify-between gap-4 p-6 sm:p-8 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 rounded-3xl min-h-[56px]"
                      >
                        <span className="flex items-start gap-4 sm:gap-5">
                          {/* Monospace Numeric Indicator with Concentric Pill */}
                          <span
                            className={cn(
                              "font-mono text-xs font-bold px-3 py-1.5 rounded-full shrink-0 transition-colors",
                              isOpen
                                ? "bg-slate-950 text-amber-400"
                                : "bg-slate-100 text-slate-600 dark:text-slate-400"
                            )}
                          >
                            {faq.num}
                          </span>
                          <span className="leading-snug text-slate-950 dark:text-slate-50 pt-0.5">{faq.question}</span>
                        </span>

                        <span
                          className={cn(
                            "size-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                            isOpen
                              ? "bg-amber-500/10 text-amber-700"
                              : "bg-slate-100 text-slate-400"
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              "size-5 transition-transform duration-300",
                              isOpen && "rotate-180 text-amber-600"
                            )}
                          />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${faq.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-8 pb-8 pt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800">
                            <div className="sm:pl-14">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

