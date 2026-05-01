import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Certificates />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
