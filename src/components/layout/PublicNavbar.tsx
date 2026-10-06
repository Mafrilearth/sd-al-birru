"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, User, Menu } from "lucide-react";
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
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
}

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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between xl:justify-start items-stretch h-16 border-x border-slate-200 dark:border-slate-800">
          
          {/* Left Section: Brand */}
          <div className="flex items-center h-full xl:border-r border-slate-200 dark:border-slate-800 shrink-0">
            <BrandLogo />
          </div>

          {/* Desktop Nav Links (Hidden on Mobile/Tablet) */}
          <div className="hidden xl:flex flex-1 items-stretch divide-x divide-slate-200 dark:divide-slate-800">
            <NavigationMenu className="h-full">
              <NavigationMenuList className="h-full flex space-x-0">
                <NavigationMenuItem className="h-full border-r border-slate-200 dark:border-slate-800">
                  <NavigationMenuLink render={
                    <Link href="/about" className={cn(
                      "flex items-center justify-center px-5 xl:px-6 h-full text-[11px] font-bold font-mono uppercase tracking-wider transition-colors select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 outline-none focus:bg-slate-50 dark:focus:bg-slate-900/50 whitespace-nowrap",
                      pathname.startsWith("/about") ? "text-amber-600 dark:text-amber-500 bg-slate-50 dark:bg-slate-900/50" : "text-slate-600 dark:text-slate-400"
                    )} />
                  }>
                    {t("about")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="h-full border-r border-slate-200 dark:border-slate-800">
                  <NavigationMenuLink render={
                    <Link href="/programs" className={cn(
                      "flex items-center justify-center text-center px-5 xl:px-6 h-full text-[11px] font-bold font-mono uppercase tracking-wider transition-colors select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 outline-none focus:bg-slate-50 dark:focus:bg-slate-900/50 whitespace-nowrap",
                      pathname.startsWith("/programs") ? "text-amber-600 dark:text-amber-500 bg-slate-50 dark:bg-slate-900/50" : "text-slate-600 dark:text-slate-400"
                    )} />
                  }>
                    {t("programs")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="h-full">
                  <NavigationMenuTrigger className="flex items-center justify-center px-5 xl:px-6 h-full text-[11px] font-bold font-mono uppercase tracking-wider rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-900/50 border-0 focus:bg-transparent text-slate-600 dark:text-slate-400 whitespace-nowrap">
                    Public Information
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-0 p-0 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-none shadow-xl">
                      {informasiLinks.map((link) => (
                        <li key={link.href} className="border-b border-slate-200 dark:border-slate-800 last:border-0">
                          <NavigationMenuLink render={
                            <Link href={link.href} className="block select-none space-y-1 p-6 leading-none no-underline outline-none transition-colors hover:bg-slate-50 dark:hover:bg-slate-900 focus:bg-slate-50 dark:focus:bg-slate-900" />
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

          {/* Right Section: Mobile Menu, Locale, & CTA */}
          <div className="flex items-stretch divide-x divide-slate-200 dark:divide-slate-800 border-l border-slate-200 dark:border-slate-800">
            {/* Locale Switcher */}
            <div className="hidden sm:block">
              <LocaleSwitcher />
            </div>

            {/* CTA Button (Desktop Only) */}
            <div className="hidden xl:flex items-center">
              <Button asChild variant="default" className="px-6 h-full rounded-none bg-slate-950 hover:bg-slate-800 text-white font-bold font-mono uppercase text-xs group whitespace-nowrap">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>{t("contact")}</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation Sheet Trigger */}
            <div className="flex xl:hidden items-center px-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Menu className="size-6 text-slate-900 dark:text-slate-100" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 rounded-none flex flex-col">
                  <SheetHeader className="p-6 border-b border-slate-200 dark:border-slate-800 text-left">
                    <SheetTitle className="font-mono text-sm font-bold uppercase text-slate-900 dark:text-slate-100">
                      Menu Navigasi
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto flex flex-col py-4">
                    <Link href="/about" className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      {t("about")}
                    </Link>
                    <Link href="/programs" className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      {t("programs")}
                    </Link>
                    <div className="px-6 py-4 text-xs font-bold font-mono uppercase tracking-wider text-slate-500 mt-4">
                      Public Information
                    </div>
                    {informasiLinks.map(link => (
                      <Link key={link.href} href={link.href} className="px-6 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-amber-600 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="p-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
                    <Button asChild className="w-full rounded-none bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold font-mono uppercase">
                      <Link href="/admissions">Daftar Sekarang</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
