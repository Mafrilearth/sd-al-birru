import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { NewsArchiveGrid } from "@/components/sections/news/NewsArchiveGrid";
import { CTASection } from "@/components/sections/CTASection";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Warta, Prestasi & Pengumuman Sekolah",
  description:
    "Ikuti informasi terkini seputar kegiatan belajar santri, agenda tahfidz akbar, pengumuman resmi PPDB, dan dokumentasi kejuaraan SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Warta, Prestasi & Pengumuman Sekolah | SD Al-Birru Sukabumi",
    description:
      "Dinamika aktivitas belajar santri, capaian prestasi tahfidz dan sains, serta pengumuman resmi SD Al-Birru Sukabumi.",
    url: "/news",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://sdalbirru.sch.id",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Warta & Berita",
      item: "https://sdalbirru.sch.id/news",
    },
  ],
};

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="PUBLIKASI // WARTA & PRESTASI"
        title="Dinamika Kampus &amp; Kabar Prestasi Santri"
        description="Dokumentasi resmi liputan aktivitas belajar, capaian kejuaraan tahfidz &amp; sains, serta pengumuman penting bagi wali santri SD Al-Birru."
        badges={[
          { iconName: "newspaper", label: "Warta Resmi Terverifikasi" },
          { iconName: "trophy", label: "Dokumentasi Prestasi" },
          { iconName: "calendar", label: "Agenda & Kalender Akademik" },
        ]}
      />

      <section aria-labelledby="news-archive-heading" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsArchiveGrid articles={articles} />
        </div>
      </section>

      <CTASection
        kicker="PENERIMAAN // JALUR PRESTASI & REGULER"
        title="Dukung Bakat Ananda Bersama SD Al-Birru"
        description="Tersedia jalur apresiasi bagi ananda yang memiliki hafalan Al-Qur'an atau prestasi minat bakat. Konsultasikan kuota rombel yang tersedia."
        primaryBtnText="Konsultasi Jalur Masuk"
        primaryBtnHref="/contact"
      />
    </>
  );
}
