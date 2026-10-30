"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M19.365 9.86c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.49h1.796c.5 0 .906.41.906.91s-.405.91-.906.91H16.66a.91.91 0 0 1-.906-.91V7.91c0-.5.406-.91.906-.91h2.705c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.04h1.796zm-4.17 3.32a.908.908 0 0 1-.877-.68l-2.14-6.54a.91.91 0 0 1 1.73-.567l1.287 3.93 1.287-3.93a.91.91 0 1 1 1.73.567l-2.14 6.54a.908.908 0 0 1-.877.68zm-4.7 0a.91.91 0 0 1-.91-.91V7.91c0-.5.41-.91.91-.91s.91.41.91.91v4.36a.91.91 0 0 1-.91.91zm-2.73-.02a.91.91 0 0 1-.644-.263L5.04 10.82v2.33a.91.91 0 1 1-1.82 0V7.91a.91.91 0 0 1 1.554-.643l2.08 2.08V7.91a.91.91 0 1 1 1.82 0v4.36a.91.91 0 0 1-.91.89z" />
      <path d="M12 2C6.48 2 2 6.02 2 10.96c0 4.43 3.93 8.13 9.23 8.82.36.08.85.24 1 .47.12.2.08.52.04.73l-.17.99c-.05.3-.24 1.17 1.03.64 1.27-.53 6.85-4.03 9.35-6.9C23.56 13.45 24 12.26 24 10.96 24 6.02 19.52 2 12 2z" />
    </svg>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-40 flex flex-col gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
      <a
        href={siteConfig.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดต่อผ่าน LINE"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06C755] text-white shadow-lg transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        <LineIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a
        href={`tel:${siteConfig.phoneTel}`}
        aria-label="โทรปรึกษา"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-red)] text-white shadow-lg transition-transform hover:scale-105 md:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
