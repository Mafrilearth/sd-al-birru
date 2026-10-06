"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const locales = [
  { code: "id", label: "IND" },
  { code: "en", label: "ENG" },
  { code: "ar", label: "ARA" },
  { code: "ja", label: "JPN" },
];

export function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === currentLocale) return;
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.replace(segments.join('/'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex items-center justify-center gap-2 w-[128px] h-full transition-colors select-none rounded-none outline-none font-mono uppercase text-[11px] font-bold tracking-wider border-0",
          "bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 focus:bg-slate-50 dark:focus:bg-slate-900/50 text-slate-600 dark:text-slate-400"
        )}
        aria-label="Toggle language"
      >
        <Languages className="size-4" />
        <span>{locales.find(l => l.code === currentLocale)?.label || currentLocale}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[128px] rounded-none font-mono text-xs font-bold uppercase tracking-wider">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc.code}
            onClick={() => switchLocale(loc.code)}
            className={cn(
              "rounded-none cursor-pointer justify-center py-3",
              currentLocale === loc.code ? "bg-amber-500 text-slate-950 focus:bg-amber-500 focus:text-slate-950" : ""
            )}
          >
            {loc.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
