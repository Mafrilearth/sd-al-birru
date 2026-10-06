"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, User } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LocaleSwitcher } from "@/components/common/LocaleSwitcher";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
}



/**
 * PublicNavbar
 * Utilitarian Grid-aligned Header.
 */
export function PublicNavbar() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const informasiLinks: NavLinkItem[] = [
    { label: t("news"), href: "/news", description: "News terbaru dan pengumuman school." },
    { label: "Gallery", href: "/gallery", description: "Gallery foto kegiatan students." },
    { label: t("contact"), href: "/contact", description: "Alamat, peta, dan kontak resmi." },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Ensure the max-w container has the same horizontal padding as GlobalGrid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The actual navbar container fills 1280px exactly */}
        <div className="flex items-stretch h-16 border-x border-slate-200 dark:border-slate-800">

          {/* Left Section: Brand & Nav Links */}
          <div className="flex items-stretch divide-x divide-slate-200 dark:divide-slate-800">
            {/* Logo block: exactly 9 grid blocks (288px) */}
            <div className="flex items-center w-[288px] pl-8 h-full">
              <BrandLogo />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-stretch divide-x divide-slate-200 dark:divide-slate-800">
              <NavigationMenu className="h-full">
                <NavigationMenuList className="h-full flex space-x-0">
                  {/* (Home removed: Logo acts as Home) */}

                  {/* Single Link: About */}
                  <NavigationMenuItem className="h-full border-r border-slate-200 dark:border-slate-800">
                    <NavigationMenuLink render={
                      <Link href="/about" className={cn(
                        "flex items-center justify-center w-[128px] h-full text-[11px] font-bold font-mono uppercase tracking-wider transition-colors select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 outline-none focus:bg-slate-50 dark:focus:bg-slate-900/50",
                        pathname.startsWith("/about") ? "text-amber-600 dark:text-amber-500 bg-slate-50 dark:bg-slate-900/50" : "text-slate-600 dark:text-slate-400"
                      )} />
                    }>
                      {t("about")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Single Link: Program */}
                  <NavigationMenuItem className="h-full border-r border-slate-200 dark:border-slate-800">
                    <NavigationMenuLink render={
                      <Link href="/programs" className={cn(
                        "flex items-center justify-center text-center w-[192px] h-full text-[11px] font-bold font-mono uppercase tracking-wider transition-colors select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 outline-none focus:bg-slate-50 dark:focus:bg-slate-900/50",
                        pathname.startsWith("/programs") ? "text-amber-600 dark:text-amber-500 bg-slate-50 dark:bg-slate-900/50" : "text-slate-600 dark:text-slate-400"
                      )} />
                    }>
                      {t("programs")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Dropdown: Informasi */}
                  <NavigationMenuItem className="h-full">
                    <NavigationMenuTrigger className="flex items-center justify-center w-[192px] h-full text-[11px] font-bold font-mono uppercase tracking-wider rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-900/50 border-0 focus:bg-transparent text-slate-600 dark:text-slate-400">
                      Public Information
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[320px] gap-0 p-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-none shadow-xl">
                        {informasiLinks.map((link) => (
                          <li key={link.href} className="border-b border-slate-200 dark:border-slate-800 last:border-0">
                            <NavigationMenuLink render={
                              <Link
                                href={link.href}
                                className="block select-none space-y-1 p-6 leading-none no-underline outline-none transition-colors hover:bg-slate-50 dark:hover:bg-slate-900 focus:bg-slate-50 dark:focus:bg-slate-900"
                              />
                            }>
                              <div className="text-xs font-bold leading-none font-mono text-slate-900 dark:text-slate-100 uppercase tracking-wider">{link.label}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400 font-sans">
                                {link.description}
                              </p>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right Section: Status, Locale, & CTA */}
          <div className="flex items-stretch divide-x divide-slate-200 dark:divide-slate-800 border-l border-slate-200 dark:border-slate-800">
            {/* Locale Switcher */}
            <LocaleSwitcher />

            {/* CTA */}
            <Link
              href="/admissions"
              className="hidden sm:flex items-center justify-center gap-2 w-[160px] bg-slate-950 dark:bg-amber-500 hover:bg-slate-800 dark:hover:bg-amber-400 text-white dark:text-slate-950 font-bold h-full font-mono uppercase text-xs transition-colors group"
            >
              <span>{t("admissions")}</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
