"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Zap, Clock, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

const trustIcons = {
  nationwide: MapPin,
  express: Zap,
  hours: Clock,
  safe: Shield,
} as const;

/** สัดส่วนจริงของภาพ hero PNG */
const HERO_IMAGE_WIDTH = 2172;
const HERO_IMAGE_HEIGHT = 724;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const fadeUp = (delay = 0) => {
    if (reduceMotion || !ready) {
      return { initial: false as const };
    }
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" as const, delay },
    };
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#f3f4f6] max-md:min-h-[min(100svh,640px)] md:aspect-[2172/724]"
      aria-label="หน้าแรก"
    >
      <Image
        src={siteConfig.hero.image}
        alt="ขบวนรถบรรทุกขนส่งสินค้าบนทางหลวงยามเช้า"
        width={HERO_IMAGE_WIDTH}
        height={HERO_IMAGE_HEIGHT}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[18%_center] md:object-contain md:object-center"
      />

      <div className="container-site relative z-10 flex h-full flex-col justify-center py-10 max-md:pb-8 md:py-10 lg:py-12">
        <motion.p
          className="pointer-events-none absolute right-2 top-4 hidden max-w-[200px] text-right font-[family-name:var(--font-script)] text-[1.65rem] leading-snug text-[var(--primary-red)] md:right-4 md:top-6 md:block lg:text-[1.9rem]"
          aria-hidden
          {...fadeUp(0.3)}
        >
          {siteConfig.hero.accent}
        </motion.p>

        <div className="max-w-[560px]">
          <motion.p
            className="mb-1.5 text-[15px] font-bold text-[var(--dark-text)] md:text-lg"
            {...fadeUp(0.05)}
          >
            {siteConfig.hero.headline}
          </motion.p>

          <motion.h1
            className="section-title text-[1.85rem] leading-[1.15] sm:text-[2.75rem] lg:text-[3.25rem]"
            style={{ color: "#D9000D" }}
            {...fadeUp(0.1)}
          >
            <span className="block" style={{ color: "#D9000D" }}>
              {siteConfig.hero.highlightLine1}
            </span>
            <span className="block" style={{ color: "#D9000D" }}>
              {siteConfig.hero.highlightLine2}
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 max-w-md text-[13px] leading-relaxed text-[var(--dark-text)]/75 sm:mt-4 sm:text-sm md:text-[15px]"
            {...fadeUp(0.18)}
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3"
            {...fadeUp(0.25)}
          >
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="btn btn-primary w-full !px-5 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden />
              โทรปรึกษาฟรี
            </a>
            <a href="#contact" className="btn btn-outline w-full !px-5 sm:w-auto">
              <MessageCircle className="h-4 w-4" aria-hidden />
              ติดต่อทีมงาน
            </a>
          </motion.div>
        </div>

        <motion.ul
          className="relative z-20 mt-6 grid w-full max-w-lg list-none grid-cols-2 gap-2 rounded-[12px] border border-white/80 bg-white/80 p-2.5 shadow-[0_10px_30px_rgba(21,21,21,0.08)] backdrop-blur-xl sm:mt-8 md:mt-10 md:flex md:w-fit md:max-w-full md:flex-nowrap md:items-center md:gap-0 md:p-0 md:px-4 md:py-3"
          {...fadeUp(0.35)}
        >
          {siteConfig.trustItems.map((item, index) => {
            const Icon = trustIcons[item.key];
            const isLast = index === siteConfig.trustItems.length - 1;
            return (
              <li
                key={item.key}
                className={`flex items-center gap-2 rounded-[10px] bg-white/70 px-2.5 py-2 md:rounded-none md:bg-transparent md:px-4 md:py-1.5 ${
                  !isLast ? "md:border-r md:border-black/10" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#D9000D] shadow-[0_2px_8px_rgba(21,21,21,0.12)] md:h-10 md:w-10">
                  <Icon className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.4} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-bold leading-tight text-[#151515] sm:text-[13px] md:text-sm">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[10px] leading-snug text-[#151515]/80 sm:text-[11px] md:text-xs">
                    {item.description}
                  </span>
                </span>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
