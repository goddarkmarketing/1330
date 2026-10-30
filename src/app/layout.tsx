import type { Metadata } from "next";
import { Kanit, Prompt, Sriracha } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sriracha = Sriracha({
  variable: "--font-script",
  subsets: ["thai", "latin"],
  weight: "400",
  display: "swap",
});

const pagesUrl = "https://goddarkmarketing.github.io/1330/";
const canonical = siteConfig.seo.canonicalUrl || undefined;

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  metadataBase: new URL(canonical || pagesUrl),
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: "th_TH",
    type: "website",
    siteName: siteConfig.companyName,
    images: [
      {
        url: "/images/ceada462-3c85-4c8e-b31d-bf25cd6e959e.png",
        width: 2172,
        height: 724,
        alt: "บริการขนส่งทั่วประเทศ THAI FAST TRANSPORT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/images/ceada462-3c85-4c8e-b31d-bf25cd6e959e.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${prompt.variable} ${sriracha.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
