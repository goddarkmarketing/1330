import Image from "next/image";
import { Gauge, Coins, Users, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

const icons = [Gauge, Coins, Users, ShieldCheck];

/** สัดส่วนจริงของ why-bg.jpg */
const WHY_BG_WIDTH = 1024;
const WHY_BG_HEIGHT = 185;

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden bg-[#D9000D] max-md:py-8 md:aspect-[1024/185]"
      aria-labelledby="why-us-heading"
    >
      <Image
        src="/images/why-bg.jpg"
        alt=""
        width={WHY_BG_WIDTH}
        height={WHY_BG_HEIGHT}
        unoptimized
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-contain"
      />

      <div className="container-site relative z-10 flex h-full flex-col justify-center gap-4 md:gap-4 md:py-5">
        <ScrollReveal className="text-center">
          <h2
            id="why-us-heading"
            className="font-[family-name:var(--font-prompt)] text-xl font-bold text-[#FFCC00] md:text-2xl lg:text-[1.75rem]"
          >
            ทำไมต้องเลือกเรา?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {siteConfig.whyUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={item.id} delay={index * 0.05}>
                <article className="flex h-full items-center gap-3 rounded-[10px] bg-white px-3.5 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.12)] md:px-3.5 md:py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9000D]/10 text-[#D9000D]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <h3 className="text-[13px] font-bold leading-tight text-[var(--dark-text)] md:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-[var(--muted)] md:text-xs">
                      {item.description}
                    </p>
                  </span>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
