import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
