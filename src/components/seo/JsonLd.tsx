import { siteConfig } from "@/config/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    alternateName: siteConfig.companyNameTh,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
      streetAddress: siteConfig.address,
    },
    openingHours: "Mo-Sa 08:00-18:00",
    url: siteConfig.seo.canonicalUrl || undefined,
    image: siteConfig.logo,
    areaServed: {
      "@type": "Country",
      name: "Thailand",
    },
    sameAs: [siteConfig.facebookUrl, siteConfig.lineUrl, siteConfig.youtubeUrl].filter(
      Boolean,
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
