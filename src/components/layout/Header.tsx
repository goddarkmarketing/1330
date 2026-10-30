"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
        scrolled ? "border-[var(--border)] shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container-site grid h-[60px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:h-[70px] sm:grid-cols-[auto_1fr_auto] sm:gap-3 lg:h-[76px] lg:gap-4">
        <Logo className="min-w-0" />

        <nav
          className="hidden items-center justify-center gap-1 lg:flex"
          aria-label="เมนูหลัก"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[10px] px-3 py-2 text-sm font-medium text-[var(--dark-text)]/75 no-underline transition-colors hover:text-[var(--primary-red)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
          <a
            href="#contact"
            className="btn btn-primary !min-h-9 !gap-1 !px-2.5 !py-1.5 text-[12px] whitespace-nowrap sm:!min-h-[42px] sm:!gap-2 sm:!px-4 sm:!py-2 sm:text-sm"
          >
            <span className="sm:hidden">เสนอราคา</span>
            <span className="hidden sm:inline">ขอใบเสนอราคา</span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[var(--border)] text-[var(--dark-text)] sm:h-10 sm:w-10 lg:hidden"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-white lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-3" aria-label="เมนูมือถือ">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-[10px] px-4 py-3 text-base font-medium text-[var(--dark-text)] no-underline hover:bg-[var(--light-gray)]"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="btn btn-primary mt-2 w-full">
              ขอใบเสนอราคา
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
