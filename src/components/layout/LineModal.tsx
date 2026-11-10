"use client";

import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { withBasePath } from "@/lib/paths";
import { LINE_MODAL_EVENT } from "@/lib/line-modal";

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M19.365 9.86c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.49h1.796c.5 0 .906.41.906.91s-.405.91-.906.91H16.66a.91.91 0 0 1-.906-.91V7.91c0-.5.406-.91.906-.91h2.705c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.04h1.796zm-4.17 3.32a.908.908 0 0 1-.877-.68l-2.14-6.54a.91.91 0 0 1 1.73-.567l1.287 3.93 1.287-3.93a.91.91 0 1 1 1.73.567l-2.14 6.54a.908.908 0 0 1-.877.68zm-4.7 0a.91.91 0 0 1-.91-.91V7.91c0-.5.41-.91.91-.91s.91.41.91.91v4.36a.91.91 0 0 1-.91.91zm-2.73-.02a.91.91 0 0 1-.644-.263L5.04 10.82v2.33a.91.91 0 1 1-1.82 0V7.91a.91.91 0 0 1 1.554-.643l2.08 2.08V7.91a.91.91 0 1 1 1.82 0v4.36a.91.91 0 0 1-.91.89z" />
      <path d="M12 2C6.48 2 2 6.02 2 10.96c0 4.43 3.93 8.13 9.23 8.82.36.08.85.24 1 .47.12.2.08.52.04.73l-.17.99c-.05.3-.24 1.17 1.03.64 1.27-.53 6.85-4.03 9.35-6.9C23.56 13.45 24 12.26 24 10.96 24 6.02 19.52 2 12 2z" />
    </svg>
  );
}

export function LineModal() {
  const titleId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(LINE_MODAL_EVENT, onOpen);
    return () => window.removeEventListener(LINE_MODAL_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const hasQrImage = Boolean(siteConfig.lineQrImage);
  const qrSrc = hasQrImage
    ? withBasePath(siteConfig.lineQrImage)
    : `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(siteConfig.lineUrl)}`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/55 p-4"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-[360px] rounded-[16px] bg-white p-5 shadow-2xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="ปิด"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-[var(--light-gray)] hover:text-[var(--dark-text)]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2.5 pr-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#06C755] text-white">
            <LineIcon className="h-6 w-6" />
          </span>
          <div>
            <h2 id={titleId} className="text-base font-bold text-[var(--dark-text)]">
              เพิ่มเพื่อนทางไลน์
            </h2>
            <p className="text-xs text-[var(--muted)]">สแกนคิวอาร์โค้ดเพื่อติดต่อเรา</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc}
            alt="คิวอาร์โค้ดไลน์สำหรับเพิ่มเพื่อน"
            width={280}
            height={280}
            className="h-[220px] w-[220px] rounded-[12px] border border-[var(--border)] bg-white object-contain p-2 sm:h-[240px] sm:w-[240px]"
          />
          <p className="mt-3 text-sm font-semibold text-[var(--dark-text)]">
            ไลน์ไอดี {siteConfig.lineId}
          </p>
          <p className="mt-1 text-center text-xs leading-relaxed text-[var(--muted)]">
            เปิดแอปไลน์แล้วกดสแกนคิวอาร์โค้ดนี้
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2.5">
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full !bg-[#06C755] !shadow-[0_6px_16px_rgba(6,199,85,0.28)] hover:!brightness-95"
          >
            <LineIcon className="h-5 w-5" />
            เปิดแอปไลน์
          </a>
          <a href={`tel:${siteConfig.phoneTel}`} className="btn btn-outline w-full">
            โทร {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
