"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="กลับขึ้นด้านบน"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-3 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--primary-red)] shadow-md transition-transform hover:scale-105 sm:bottom-6 sm:left-6 sm:h-12 sm:w-12"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
