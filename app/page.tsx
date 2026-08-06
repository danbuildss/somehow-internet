import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import PhilosophySection from "./components/PhilosophySection";
import AboutSection from "./components/AboutSection";
import CreatorSection from "./components/CreatorSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <ProductSection />
      <PhilosophySection />
      <AboutSection />
      <CreatorSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
