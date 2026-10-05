"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  Menu,
  Home,
  Info,
  BookOpen,
  Newspaper,
  ImageIcon,
  Phone,
  MessageCircle,
  Sparkles,
  User,
  ArrowRight,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandLogo } from "@/components/common/BrandLogo";
import { appleTapHaptic } from "@/lib/motion";
import { cn } from "@/lib/utils";

const navigationItems = [
  { code: "01", label: "Beranda", href: "/", icon: Home },
  { code: "02", label: "Profil & Sejarah", href: "/about", icon: Info },
  { code: "03", label: "Program & Fasilitas", href: "/programs", icon: BookOpen },
  { code: "04", label: "Warta & Agenda", href: "/news", icon: Newspaper },
  { code: "05", label: "Galeri Foto", href: "/gallery", icon: ImageIcon },
  { code: "06", label: "Kontak & Lokasi", href: "/contact", icon: Phone },
];

export function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <motion.div whileTap={appleTapHaptic}>
        <SheetTrigger
          className="flex items-center justify-center size-9.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 lg:hidden transition-colors cursor-pointer shadow-xs"
          aria-label="Buka Menu Navigasi Lengkap"
        >
          <Menu className="size-4.5" />
        </SheetTrigger>
      </motion.div>

      <SheetContent
        side="right"
        className="flex w-full sm:max-w-sm flex-col p-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-l border-slate-200 dark:border-slate-800 shadow-2xl"
      >
        <SheetHeader className="pb-5 border-b border-slate-100 dark:border-slate-800 text-left">
          <SheetTitle className="sr-only">Navigasi Utama Mobile SD Al-Birru</SheetTitle>
          <div className="flex items-center justify-between">
            <BrandLogo />
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/20 text-[10px] font-mono text-emerald-800 dark:text-emerald-400 font-bold">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>PPDB 2026</span>
            </div>
          </div>
        </SheetHeader>

        {/* Navigation Links */}
        <nav aria-label="Navigasi Menu Mobile Lengkap" className="flex-1 py-4 flex flex-col gap-1.5 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all min-h-[46px]",
                  isActive
                    ? "bg-slate-950 dark:bg-slate-800 text-white font-bold shadow-xs"
                    : "text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-950 dark:hover:text-slate-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    aria-hidden="true"
                    className={cn(
                      "size-4.5 transition-colors",
                      isActive ? "text-amber-400" : "text-slate-400 dark:text-slate-500"
                    )}
                  />
                  <span>{item.label}</span>
                </div>

                <span
                  className={cn(
                    "text-[10px] font-mono",
                    isActive ? "text-amber-400 font-bold" : "text-slate-400 dark:text-slate-500"
                  )}
                >
                  {item.code}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA for Parents & Teacher Portal Link */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
          <Link
            href="/contact#formulir-ppdb"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full h-11 rounded-full bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/25 transition-all"
          >
            <Sparkles aria-hidden="true" className="size-4 text-slate-950" />
            <span>Pendaftaran PPDB 2026 Online</span>
          </Link>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20informasi%20sekolah."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-10 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold text-xs transition-all"
          >
            <MessageCircle aria-hidden="true" className="size-4 text-emerald-700 dark:text-emerald-500" />
            <span>Chat WhatsApp Humas</span>
          </a>

          <Link
            href="/admin"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full py-2 text-[11px] font-mono text-slate-400 hover:text-slate-700 dark:text-slate-300 transition-colors"
          >
            <User aria-hidden="true" className="size-3" />
            <span>Portal Login Guru / CMS</span>
            <ArrowRight aria-hidden="true" className="size-3" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

