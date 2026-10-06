import React from "react";

export function GlobalGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {/* Full-bleed Grid Box Pattern covering the entire screen */}
      <div 
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]" 
        style={{
          backgroundImage: "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "calc(50% + 16px) top" // Mathematical fix: offsets the 32px tile to place its 0px line EXACTLY at 50% viewport
        }}
      />
    </div>
  );
}
