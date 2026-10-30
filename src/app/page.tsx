import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coverage } from "@/components/sections/Coverage";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </>
  );
}
