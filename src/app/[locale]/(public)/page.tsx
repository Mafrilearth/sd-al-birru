import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustPartnerMarquee } from "@/components/sections/common/TrustPartnerMarquee";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { BentoValuesSection } from "@/components/sections/BentoValuesSection";
import { LatestNewsPreview } from "@/components/sections/LatestNewsPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/common/FaqSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Sahabat Pendidikan Anak - Tahfidz 3 Juz & Karakter Qur'ani",
  description:
    "Website resmi SD Al-Birru Tahfidzul Qur'an Sukabumi. Membina generasi Qur'ani berakhlak mulia, cerdas, berwawasan global, hafalan 3 juz mutqin bersanad, dan Curriculum Merdeka.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SD Al-Birru Sukabumi | Sahabat Pendidikan Anak",
    description:
      "Membina generasi Qur'ani berakhlak mulia, hafal Al-Qur'an minimal 3 juz bersanad, dan unggul dalam nalar kritis sains Curriculum Merdeka.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustPartnerMarquee />
      <WelcomeSection />
      <BentoValuesSection />
      <LatestNewsPreview />
      <TestimonialsSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
