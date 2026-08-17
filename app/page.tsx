import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import PhilosophySection from "./components/PhilosophySection";
import AboutSection from "./components/AboutSection";
import CreatorSection from "./components/CreatorSection";
import TelegramSection from "./components/TelegramSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import PageEffects from "./components/PageEffects";

export default function Home() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <Hero />
      <ProductSection />
      <PhilosophySection />
      <AboutSection />
      <CreatorSection />
      <TelegramSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
