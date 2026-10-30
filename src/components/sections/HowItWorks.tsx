import { FileText, Calculator, Package, Truck } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

const stepIcons = [FileText, Calculator, Package, Truck];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-site">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 id="how-it-works-heading" className="section-title text-2xl text-[var(--dark-text)] md:text-3xl">
            ขั้นตอนการใช้บริการ
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            ใช้งานง่าย เริ่มต้นเพียงไม่กี่ขั้นตอน
          </p>
        </ScrollReveal>

        <ol className="m-0 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {siteConfig.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const isLast = index === siteConfig.steps.length - 1;

            return (
              <li key={step.id} className="relative">
                <ScrollReveal delay={index * 0.07} className="h-full">
                  <article className="relative flex h-full flex-col items-center px-3 text-center">
                    <div className="relative mb-4 flex w-full items-center justify-center">
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-red)] text-sm font-bold text-white shadow-sm">
                        {step.id}
                      </span>

                      {!isLast && (
                        <span
                          className="absolute left-[calc(50%+28px)] right-[-28px] top-1/2 hidden h-0 -translate-y-1/2 border-t-2 border-dotted border-[var(--primary-red)]/35 lg:block"
                          aria-hidden
                        />
                      )}
                    </div>

                    <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-[12px] border border-[var(--border)] bg-[var(--light-gray)] text-[var(--primary-red)] shadow-sm">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>

                    <h3 className="text-[15px] font-bold text-[var(--dark-text)] md:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-[var(--muted)] md:text-sm">
                      {step.description}
                    </p>
                  </article>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
