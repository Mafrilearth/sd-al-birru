import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  isDarkBackground?: boolean;
}

export function BrandLogo({ className, isDarkBackground = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex h-full items-center gap-4", className)}
      aria-label="Kembali ke Home SD Al-Birru"
    >
      <div className="relative flex h-full items-center justify-center rounded-none bg-transparent px-4 sm:px-6 shadow-none border-r border-slate-200 dark:border-slate-800">
        <svg
          viewBox="0 0 100 120"
          className="h-full max-h-10 w-auto fill-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield Outline */}
          <path
            d="M50 5 L88 20 C88 65 72 98 50 115 C28 98 12 65 12 20 Z"
            fill="#0B0F17"
            stroke="#FBBF24"
            strokeWidth="4"
          />
          {/* Inner Golden Shield Area */}
          <path
            d="M50 15 L78 27 C78 62 66 88 50 102 C34 88 22 62 22 27 Z"
            fill="#F59E0B"
          />
          {/* Central Sunburst / Islamic 8-Point Star Motif */}
          <g fill="#0B0F17">
            <polygon points="50,38 54,48 64,48 56,54 59,64 50,58 41,64 44,54 36,48 46,48" />
            <circle cx="50" cy="51" r="3.5" fill="#FBBF24" />
          </g>
        </svg>
      </div>

      {/* Typography Identity */}
      <div className="flex flex-col pr-4 sm:pr-6 justify-center h-full">
        <span
          className={cn(
            "text-lg font-black tracking-tight leading-none font-sans",
            isDarkBackground ? "text-white" : "text-slate-900 dark:text-slate-50"
          )}
        >
          SD AL-BIRRU
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold tracking-wider uppercase mt-1",
            isDarkBackground ? "text-amber-400" : "text-amber-600 dark:text-amber-400"
          )}
        >
          Sahabat Pendidikan Anak
        </span>
      </div>
    </Link>
  );
}
