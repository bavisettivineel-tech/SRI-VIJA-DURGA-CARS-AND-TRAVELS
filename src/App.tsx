import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Fleet } from "@/components/Fleet";
import { Packages } from "@/components/Packages";
import { Routes as RoutesSection } from "@/components/Routes";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function App() {
  return (
    <div className="bg-[#050505] text-foreground">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Packages />
        <RoutesSection />
        <WhyUs />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
