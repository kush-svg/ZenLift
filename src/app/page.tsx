import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyZenLift from "@/components/WhyZenLift";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Marquee />
      <Services />a
      <WhyZenLift />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}
