import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

export function Services() {
  return (
    <section
      id="services"
      className="section-pad bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <ScrollReveal className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="services-heading"
              className="section-title text-2xl text-[var(--dark-text)] md:text-3xl"
            >
              บริการของเรา
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[var(--muted)] md:text-[15px]">
              ครบทุกความต้องการด้านการขนส่ง ให้บริการโดยทีมงานมืออาชีพ
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-yellow !min-h-[42px] shrink-0 self-start sm:self-auto"
          >
            ดูบริการทั้งหมด
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {siteConfig.services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <a
                href="#contact"
                className="card-service group flex h-full min-h-[132px] flex-row items-stretch text-inherit no-underline"
              >
                <div className="relative w-[38%] min-w-[110px] max-w-[150px] shrink-0 overflow-hidden bg-white">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    unoptimized
                    loading="lazy"
                    sizes="150px"
                    className="object-contain p-2.5 transition-transform duration-300 group-hover:scale-[1.03] sm:p-3"
                  />
                </div>

                <div className="relative flex min-w-0 flex-1 flex-col justify-center py-3.5 pl-3.5 pr-11 sm:pl-4">
                  <h3 className="text-[14px] font-bold leading-snug text-[var(--dark-text)] md:text-[15px]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>
                  <span className="absolute bottom-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-red)] text-white shadow-sm transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
