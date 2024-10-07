import Image from "next/image";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
         
    </div>
    
  );
}
