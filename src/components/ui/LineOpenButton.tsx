"use client";

import type { ReactNode } from "react";
import { openLineModal } from "@/lib/line-modal";

type LineOpenButtonProps = {
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export function LineOpenButton({ className = "", children, ...rest }: LineOpenButtonProps) {
  return (
    <button type="button" onClick={openLineModal} className={className} {...rest}>
      {children}
    </button>
  );
}
