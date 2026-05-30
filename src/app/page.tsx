import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductVisual from "./components/ProductVisual";
import Pillars from "./components/Pillars";
import Problem from "./components/Problem";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductVisual />
        <Pillars />
        <Problem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
