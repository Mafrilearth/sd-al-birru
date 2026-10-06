"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, User, Menu } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LocaleSwitcher } from "@/components/common/LocaleSwitcher";
import { ThemeToggle } from "@/components/common/ThemeToggle";
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

export function PublicNavbar() {
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full border-x-0">
        <div className="flex justify-between items-stretch h-16">
          
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

                <NavigationMenuItem className="h-full border-r border-slate-200 dark:border-slate-800">
                  <NavigationMenuLink render={
                    <Link href="/news" className={cn(
                      "flex items-center justify-center text-center px-5 xl:px-6 h-full text-[11px] font-bold font-mono uppercase tracking-wider transition-colors select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 outline-none focus:bg-slate-50 dark:focus:bg-slate-900/50 whitespace-nowrap",
                      pathname.startsWith("/news") ? "text-amber-600 dark:text-amber-500 bg-slate-50 dark:bg-slate-900/50" : "text-slate-600 dark:text-slate-400"
                    )} />
                  }>
                    {t("news")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="h-full border-r border-slate-200 dark:border-slate-800">
                  <NavigationMenuLink render={
                    <Link href="/gallery" className={cn(
                      "flex items-center justify-center text-center px-5 xl:px-6 h-full text-[11px] font-bold font-mono uppercase tracking-wider transition-colors select-none rounded-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 outline-none focus:bg-slate-50 dark:focus:bg-slate-900/50 whitespace-nowrap",
                      pathname.startsWith("/gallery") ? "text-amber-600 dark:text-amber-500 bg-slate-50 dark:bg-slate-900/50" : "text-slate-600 dark:text-slate-400"
                    )} />
                  }>
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section: Mobile Menu, Locale, & CTA */}
          <div className="flex items-stretch divide-x divide-slate-200 dark:divide-slate-800 border-l border-slate-200 dark:border-slate-800">
            {/* Theme Toggle & Locale Switcher */}
            <div className="hidden sm:flex items-stretch divide-x divide-slate-200 dark:divide-slate-800">
              <ThemeToggle />
              <LocaleSwitcher />
            </div>

            {/* CTA Button (Desktop Only) */}
            <div className="hidden xl:flex items-center">
              <Button asChild variant="default" className="px-6 h-full rounded-none bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold font-mono uppercase text-xs group whitespace-nowrap">
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
                    <Link href="/news" className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      {t("news")}
                    </Link>
                    <Link href="/gallery" className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                      Gallery
                    </Link>
                    <Link href="/contact" className="px-6 py-4 text-sm font-bold font-mono uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-amber-600">
                      {t("contact")}
                    </Link>
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
