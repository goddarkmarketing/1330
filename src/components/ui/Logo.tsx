import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[var(--dark-text)]";

  return (
    <Link
      href="#home"
      className={`inline-flex min-w-0 items-center gap-2 no-underline sm:gap-2.5 ${className}`}
      aria-label={siteConfig.companyName}
    >
      <span
        className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-red)] text-base font-bold italic text-white shadow-sm sm:h-10 sm:w-10 sm:text-lg"
        aria-hidden
      >
        T
        <span className="absolute -right-1 top-2 h-0.5 w-3 rounded bg-[var(--primary-yellow)]" />
        <span className="absolute -right-0.5 top-4 h-0.5 w-2 rounded bg-[var(--primary-yellow)] opacity-80" />
      </span>
      <span className={`min-w-0 leading-tight ${textColor}`}>
        <span className="block truncate text-[12px] font-bold italic tracking-wide sm:text-sm">
          THAI FAST
        </span>
        <span className="block truncate text-[9px] font-semibold tracking-[0.16em] opacity-80 sm:text-[11px] sm:tracking-[0.18em]">
          TRANSPORT
        </span>
      </span>
    </Link>
  );
}
