import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import BrandIntro from "./sections/BrandIntro";
import AboutKanishka from "./sections/AboutKanishka";
import Classes from "./sections/Classes";
import Benefits from "./sections/Benefits";
import Journey from "./sections/Journey";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Instagram from "./sections/Instagram";
import Booking from "./sections/Booking";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <BrandIntro />
        <AboutKanishka />
        <Classes />
        <Benefits />
        <Journey />
        <Gallery />
        <Testimonials />
        <Instagram />
        <Booking />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
