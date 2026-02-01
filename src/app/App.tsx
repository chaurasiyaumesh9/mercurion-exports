import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { ValueProposition } from "@/app/components/ValueProposition";
import { About } from "@/app/components/About";
import { Features } from "@/app/components/Features";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { SEO } from "@/app/components/SEO";

export default function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}