import React from "react";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { MobileLiquidDock } from "@/components/layout/MobileLiquidDock";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sdalbirru.sch.id";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FDFDFB",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SD Al-Birru Tahfidzul Qur'an Sukabumi | Sahabat Pendidikan Anak",
    template: "%s | SD Al-Birru Sukabumi",
  },
  description:
    "Website Resmi SD Al-Birru Tahfidzul Qur'an Sukabumi. Membina generasi Qur'ani berakhlak mulia, hafal Al-Qur'an minimal 3 juz bersanad, unggul dalam nalar kritis sains Kurikulum Merdeka, dan berwawasan global.",
  applicationName: "SD Al-Birru Sukabumi",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SD Al-Birru",
  },
  authors: [{ name: "SD Al-Birru Sukabumi", url: siteUrl }],
  creator: "SD Al-Birru Sukabumi",
  publisher: "Yayasan Al-Birru Sukabumi",
  keywords: [
    "SD Al-Birru",
    "SDIT Al-Birru Sukabumi",
    "SD Tahfidz Sukabumi",
    "Sekolah Dasar Islam Terpadu Sukabumi",
    "PPDB SD Al-Birru 2026",
    "Tahfidz Quran Anak Sukabumi",
    "Kurikulum Merdeka SD Sukabumi",
    "Sekolah Ramah Anak Sukabumi",
  ],
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SD Al-Birru Tahfidzul Qur'an Sukabumi | Sahabat Pendidikan Anak",
    description:
      "Membina generasi Qur'ani berakhlak mulia, tahfidz minimal 3 juz mutqin bersanad, dan unggul dalam nalar kritis sains Kurikulum Merdeka.",
    url: siteUrl,
    siteName: "SD Al-Birru Sukabumi",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Al-Birru Tahfidzul Qur'an Sukabumi | Sahabat Pendidikan Anak",
    description:
      "Sekolah Dasar Islam Terpadu Tahfidzul Qur'an di Sukabumi. Sahabat Pendidikan Anak menuju generasi Qur'ani masa depan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const schoolStructuredData = {
  "@context": "https://schema.org",
  "@type": "School",
  "@id": `${siteUrl}/#school`,
  name: "SD Al-Birru Tahfidzul Qur'an Sukabumi",
  alternateName: ["SD Al-Birru", "SDIT Al-Birru Sukabumi"],
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Sekolah Dasar Islam Terpadu Tahfidzul Qur'an unggulan di Sukabumi. Pembinaan karakter akhlakul karimah, hafalan Al-Qur'an 3 juz mutqin bersanad, dan pembelajaran sains terapan Kurikulum Merdeka.",
  telephone: "+6281234567890",
  email: "info@sdalbirru.sch.id",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Selabintana Km. 5, Warnasari, Kec. Sukabumi",
    addressLocality: "Sukabumi",
    addressRegion: "Jawa Barat",
    postalCode: "43151",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.892,
    longitude: 106.945,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:15",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "07:15",
      closes: "11:30",
    },
  ],
  sameAs: [
    "https://facebook.com/sdalbirrusukabumi",
    "https://instagram.com/sdalbirru_sukabumi",
  ],
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function PublicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolStructuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-amber-500 selection:text-slate-950 font-sans relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to Content for Keyboard Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-slate-950 focus:font-bold focus:rounded-xl focus:shadow-lg focus:outline-none"
          >
            Menuju ke Konten Utama
          </a>

          <ScrollProgressBar />
          <PublicNavbar />
          <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none pb-28 lg:pb-0">
            {children}
          </main>
          <PublicFooter />
          <FloatingWhatsApp />
          <ScrollToTop />
          <MobileLiquidDock />
          
          {/* Vercel Observability Zero-Config */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
