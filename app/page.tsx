import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import MarketingTech from "@/components/sections/MarketingTech";
import AIAutomation from "@/components/sections/AIAutomation";
import DevOps from "@/components/sections/DevOps";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Services />
        <MarketingTech />
        <AIAutomation />
        <DevOps />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
