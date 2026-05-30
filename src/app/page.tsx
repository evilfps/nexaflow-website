import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ProductVisual from "./components/ProductVisual";
import Pillars from "./components/Pillars";
import Company from "./components/Company";
import SocialProof from "./components/SocialProof";
import DemoVideo from "./components/DemoVideo";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AmbientAudio from "./components/AmbientAudio";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <ProductVisual />
        <Pillars />
        <Company />
        <SocialProof />
        <DemoVideo />
        <CTA />
      </main>
      <Footer />
      <AmbientAudio />
    </div>
  );
}
