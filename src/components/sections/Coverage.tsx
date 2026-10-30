import { siteConfig } from "@/config/site";

/** ไฟล์ต้นฉบับจากที่แนบ — คัดลอกตรงๆ ไม่ผ่าน resize / recompress */
const DESKTOP = {
  src: "/images/coverage-desktop.jpg",
  width: 1024,
  height: 341,
} as const;

const MOBILE = {
  src: "/images/coverage-mobile.jpg",
  width: 1024,
  height: 1024,
} as const;

export function Coverage() {
  const { coverage } = siteConfig;

  return (
    <section
      id="coverage"
      className="relative w-full overflow-hidden bg-[#f7f8fa] max-md:bg-[#eef1f4]"
      aria-labelledby="coverage-heading"
    >
      <h2 id="coverage-heading" className="sr-only">
        {coverage.heading}
      </h2>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={DESKTOP.src}
        alt="ให้บริการขนส่งทั่วประเทศไทย ครอบคลุม 77 จังหวัด พร้อมแผนที่พื้นที่ให้บริการ"
        width={DESKTOP.width}
        height={DESKTOP.height}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className="hidden h-auto w-full max-w-none md:block"
      />

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MOBILE.src}
        alt="ให้บริการขนส่งทั่วประเทศไทย ครอบคลุม 77 จังหวัด พร้อมแผนที่พื้นที่ให้บริการ"
        width={MOBILE.width}
        height={MOBILE.height}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className="mx-auto block h-auto w-full max-w-[560px] md:hidden"
      />
    </section>
  );
}
