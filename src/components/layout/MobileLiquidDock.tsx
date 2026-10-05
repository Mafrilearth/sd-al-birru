"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Home, BookOpen, Newspaper, Phone, Sparkles } from "lucide-react";
import { appleSpring, appleTapHaptic } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface DockItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isSpecial?: boolean;
}

const dockItems: DockItem[] = [
  { id: "home", label: "Beranda", href: "/", icon: Home },
  { id: "programs", label: "Program", href: "/programs", icon: BookOpen },
  {
    id: "ppdb",
    label: "PPDB",
    href: "/contact#formulir-ppdb",
    icon: Sparkles,
    isSpecial: true,
  },
  { id: "news", label: "Warta", href: "/news", icon: Newspaper },
  { id: "contact", label: "Kontak", href: "/contact", icon: Phone },
];

/**
 * MobileLiquidDock
 * Apple Human Interface Guidelines (HIG) WWDC 2025 Liquid Glass Bottom App Dock.
 * 
 * Rules Adherence:
 * 1. Material Core: .liquid-glass-regular with adaptive luminosity & specular lensing rim.
 * 2. Layering Architecture: Floating navigation chrome only. Never placed on top of another glass layer.
 * 3. Concentric Radius: Outer .concentric-dock (28px radius) with p-1.5 (6px padding),
 *    so inner item elements have exactly (28 - 6) = 22px radius (.concentric-dock-item).
 * 4. Spring Physics: Apple WWDC spring tokens { stiffness: 300, damping: 28, mass: 0.8 }.
 * 5. No Glass on Glass: The active indicator pill is a solid tactile contrast element, not another blur layer.
 */
export function MobileLiquidDock() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Navigasi Aplikasi Mobile SD Al-Birru"
      className="fixed bottom-4 inset-x-3 sm:max-w-md sm:mx-auto z-50 lg:hidden pointer-events-none"
    >
      <nav
        aria-label="Bilah Aksi Cepat"
        className="pointer-events-auto bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 concentric-dock p-1.5 flex items-center justify-between gap-1 shadow-2xl transition-all"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isPPDB = item.isSpecial;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : !isPPDB && pathname.startsWith(item.href);

          if (isPPDB) {
            return (
              <motion.div
                key={item.id}
                whileTap={appleTapHaptic}
                className="relative flex-1 flex justify-center"
              >
                <Link
                  href={item.href}
                  className="relative -top-3.5 flex flex-col items-center justify-center size-13 rounded-full bg-linear-to-b from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/40 border-2 border-white dark:border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group"
                  aria-label="Daftar PPDB SD Al-Birru 2026"
                >
                  {/* Subtle Radar Beacon Effect */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping pointer-events-none group-hover:hidden"
                  />
                  <Icon className="size-5.5 text-slate-950 transition-transform group-hover:scale-110" />
                  <span className="text-[9px] font-black text-slate-950 uppercase tracking-tight -mt-0.5">
                    PPDB
                  </span>
                </Link>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={item.id}
              whileTap={appleTapHaptic}
              className="relative flex-1"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center py-2 px-1 min-h-[48px] concentric-dock-item transition-colors text-center select-none",
                  isActive ? "text-slate-950 dark:text-slate-50 font-bold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Active Pill with Apple Spring Layout Transition - Strictly Solid (No Glass on Glass) */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-dock-active-indicator"
                    transition={appleSpring}
                    className="absolute inset-0 bg-slate-950 dark:bg-slate-800 rounded-[22px] shadow-sm -z-10"
                  />
                )}

                <Icon
                  className={cn(
                    "size-5 transition-transform duration-200",
                    isActive ? "text-amber-400 scale-105" : "text-slate-500"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] tracking-tight leading-none mt-1 transition-colors",
                    isActive ? "text-white font-bold" : "text-slate-600 dark:text-slate-400"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
