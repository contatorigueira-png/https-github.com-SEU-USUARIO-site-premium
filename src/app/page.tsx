import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SignatureDishes } from "@/components/SignatureDishes";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Reservation } from "@/components/Reservation";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <SignatureDishes />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </>
  );
}
