import Image from "next/image";
import { Phone, Headset } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M19.365 9.86c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.49h1.796c.5 0 .906.41.906.91s-.405.91-.906.91H16.66a.91.91 0 0 1-.906-.91V7.91c0-.5.406-.91.906-.91h2.705c.5 0 .906.41.906.91s-.405.91-.906.91H17.57v1.04h1.796zm-4.17 3.32a.908.908 0 0 1-.877-.68l-2.14-6.54a.91.91 0 0 1 1.73-.567l1.287 3.93 1.287-3.93a.91.91 0 1 1 1.73.567l-2.14 6.54a.908.908 0 0 1-.877.68zm-4.7 0a.91.91 0 0 1-.91-.91V7.91c0-.5.41-.91.91-.91s.91.41.91.91v4.36a.91.91 0 0 1-.91.91zm-2.73-.02a.91.91 0 0 1-.644-.263L5.04 10.82v2.33a.91.91 0 1 1-1.82 0V7.91a.91.91 0 0 1 1.554-.643l2.08 2.08V7.91a.91.91 0 1 1 1.82 0v4.36a.91.91 0 0 1-.91.89z" />
      <path d="M12 2C6.48 2 2 6.02 2 10.96c0 4.43 3.93 8.13 9.23 8.82.36.08.85.24 1 .47.12.2.08.52.04.73l-.17.99c-.05.3-.24 1.17 1.03.64 1.27-.53 6.85-4.03 9.35-6.9C23.56 13.45 24 12.26 24 10.96 24 6.02 19.52 2 12 2z" />
    </svg>
  );
}

const contactChannels = [
  {
    key: "phone",
    href: `tel:${siteConfig.phoneTel}`,
    label: "โทรศัพท์",
    value: siteConfig.phone,
    iconBg: "bg-[var(--primary-red)] text-white",
    Icon: Phone,
  },
  {
    key: "line",
    href: siteConfig.lineUrl,
    label: "LINE Official",
    value: siteConfig.lineId,
    iconBg: "bg-[#06C755] text-white",
    Icon: LineIcon,
    external: true,
  },
  {
    key: "support",
    href: `tel:${siteConfig.phoneTel}`,
    label: "บริการตลอด",
    value: "24 ชั่วโมง*",
    iconBg: "bg-[var(--primary-red)] text-white",
    Icon: Headset,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-0 scroll-mt-24 overflow-hidden bg-[#F8F9FA] py-8 pb-24 md:py-12 md:pb-12 lg:py-14 lg:pb-14"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 xl:gap-10">
          <ScrollReveal>
            <div className="flex h-full flex-col">
              <h2
                id="contact-heading"
                className="section-title text-left text-[1.5rem] text-[var(--dark-text)] md:text-[1.75rem]"
              >
                ขอใบเสนอราคา
              </h2>
              <p className="mt-1.5 text-[13px] text-[var(--muted)] md:text-sm">
                กรอกข้อมูลเพื่อให้ทีมงานติดต่อกลับและประเมินค่าขนส่ง
              </p>
              <div className="mt-4 flex-1 md:mt-5">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="w-full">
            <div className="flex w-full flex-col gap-4">
              <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-[12px] lg:mx-0 lg:max-w-none">
                <Image
                  src="/images/delivery-staff.jpg"
                  alt="พนักงานขนส่งเสื้อแดงถือกล่องพัสดุ"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {contactChannels.map((item) => {
                  const Icon = item.Icon;
                  const external = "external" in item && item.external;
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-3 rounded-[12px] border border-[var(--border)] bg-white px-3 py-3 text-inherit no-underline shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] shadow-[0_4px_12px_rgba(21,21,21,0.08)] md:h-12 md:w-12 ${item.iconBg}`}
                      >
                        <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] text-[var(--muted)] md:text-xs">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[13px] font-semibold text-[var(--dark-text)] md:text-sm">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
