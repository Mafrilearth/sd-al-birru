import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryViewer } from "@/components/sections/gallery/GalleryViewer";
import { CTASection } from "@/components/sections/CTASection";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galeri Foto Dokumentasi Kegiatan Santri",
  description:
    "Dokumentasi foto kegiatan tahfidzul qur'an, ekstrakurikuler panahan sunnah, sains praktikum, dan wisuda akbar santri SD Al-Birru Sukabumi.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Galeri Dokumentasi Kegiatan Santri | SD Al-Birru Sukabumi",
    description:
      "Rekam jejak aktivitas belajar, tahfidz Al-Qur'an, dan pembiasaan adab harian santri SD Al-Birru Sukabumi.",
    url: "/gallery",
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
      name: "Galeri Foto",
      item: "https://sdalbirru.sch.id/gallery",
    },
  ],
};

export default async function GalleryPage() {
  const galleryItems = await getGalleryItems();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        kicker="DOKUMENTASI // REKAM JEJAK AKTIVITAS"
        title="Galeri Aktivitas &amp; Pembiasaan Santri"
        description="Merekam keceriaan, kesungguhan melafalkan ayat Al-Qur'an, dan eksplorasi sains interaktif para santri dalam lingkungan sekolah yang aman dan asri."
        badges={[
          { iconName: "camera", label: "Dokumentasi Riil Kampus" },
          { iconName: "sparkles", label: "Kegiatan Tahfidz & Akademik" },
          { iconName: "heart", label: "Kultur Ramah Anak" },
        ]}
      />

      <section aria-labelledby="gallery-grid-heading" className="py-24 md:py-32 lg:py-40 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryViewer items={galleryItems} />
        </div>
      </section>

      <CTASection
        kicker="KUNJUNGAN // SURVEI LINGKUNGAN KAMPUS"
        title="Lihat Suasana Belajar Secara Langsung"
        description="Bapak dan Ibu dipersilakan berkunjung ke kampus untuk menyaksikan langsung keseharian halaqah Al-Qur'an dan fasilitas sekolah."
        primaryBtnText="Daftar Jadwal Survei Kampus"
        primaryBtnHref="/contact"
      />
    </>
  );
}
