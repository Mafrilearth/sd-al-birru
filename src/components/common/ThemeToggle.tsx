"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { appleTapHaptic } from "@/lib/motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileTap={appleTapHaptic}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hidden sm:flex size-9 items-center justify-center rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:border-slate-800/80 dark:bg-slate-900/70 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-all shadow-2xs"
      aria-label="Toggle dark mode"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
