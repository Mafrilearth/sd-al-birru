"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, User } from "lucide-react";
import { motion } from "motion/react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { MobileNavDrawer } from "@/components/layout/MobileNavDrawer";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { appleSpring, appleSpringSnappy, appleTapHaptic } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/about" },
  { label: "Program & Kurikulum", href: "/programs" },
  { label: "Warta", href: "/news" },
  { label: "Dokumentasi", href: "/gallery" },
  { label: "Kontak", href: "/contact" },
];

/**
 * PublicNavbar
 * Apple Human Interface Guidelines (HIG) WWDC 2025 Liquid Glass Dynamic Island Header.
 *
 * Rules Adherence:
 * 1. Material Core: .liquid-glass-regular with adaptive luminosity & specular lensing rim.
 * 2. Scroll Edge Effect: Automatically thickens blur to .liquid-glass-scrolled when scrolling.
 * 3. Layering Architecture: Chrome/navigation layer only.
 * 4. Concentric Geometry: Outer capsule (rounded-full) -> inner nav pill container (rounded-full) -> active pill (rounded-full).
 * 5. No Glass on Glass: Active pill is solid opaque high-contrast surface.
 * 6. Spring Physics: Apple WWDC spring tokens { stiffness: 300, damping: 28, mass: 0.8 }.
 */
export function PublicNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 sm:top-2 z-50 w-full transition-all duration-300 px-3 sm:px-6 lg:px-8 py-2">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl sm:rounded-full px-3.5 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300 specular-rim",
          isScrolled
            ? "liquid-glass-scrolled shadow-xl"
            : "liquid-glass-regular shadow-md"
        )}
      >
        {/* Brand Logo Identity */}
        <BrandLogo />

        {/* Desktop Dynamic Island Nav Links with Concentric Capsule & Apple Spring */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-1 bg-slate-900/5 dark:bg-white/5 p-1 rounded-full border border-slate-900/5 dark:border-white/5"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-colors z-10 select-none",
                  isActive ? "text-slate-950 dark:text-slate-50 font-bold" : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50"
                )}
              >
                {/* Active Pill with Apple HIG Spring Physics - Solid Contrast (No Glass on Glass) */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    transition={appleSpring}
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full border border-slate-200/90 dark:border-slate-700 shadow-xs -z-10"
                  />
                )}

                {/* Hover Indicator preview */}
                {hoveredPath === item.href && !isActive && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={appleSpringSnappy}
                    className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-full -z-20"
                  />
                )}

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Micro-Status, Admin & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Micro Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-white/60 dark:bg-slate-800/60 text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PPDB 2026</span>
          </div>

          <ThemeToggle />

          {/* Portal Staff Link */}
          <motion.div whileTap={appleTapHaptic}>
            <Link
              href="/admin"
              className="hidden sm:flex size-9 items-center justify-center rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-2xs"
              title="Portal Login Admin & Guru"
              aria-label="Portal Login Admin & Guru"
            >
              <User className="size-4" />
            </Link>
          </motion.div>

          {/* High-Contrast Primary CTA Button with Apple Spring Physics */}
          <motion.div whileTap={appleTapHaptic}>
            <Link
              href="/contact#formulir-ppdb"
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-950 dark:bg-amber-500 hover:bg-slate-850 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-bold px-4 h-9.5 rounded-full text-xs transition-all shadow-md group"
            >
              <span>Daftar PPDB</span>
              <ArrowRight className="size-3.5 text-amber-400 dark:text-slate-950 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Mobile Navigation Drawer Trigger */}
          <MobileNavDrawer />
        </div>
      </div>
    </header>
  );
}
