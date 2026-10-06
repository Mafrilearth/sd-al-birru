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
      className="hidden sm:flex w-16 h-full items-center justify-center rounded-none border-0 bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/50 dark:hover:text-slate-100 transition-colors"
      aria-label="Toggle dark mode"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
