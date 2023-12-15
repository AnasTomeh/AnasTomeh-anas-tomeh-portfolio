import Intro from "@/components/Intro/Intro";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Experiences from "@/components/Experiences/Experiences";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4" role="main" aria-label="Home Page">
        <Intro/>
        <SectionDivider/>
        <About/>
        <Projects/>
        <Skills/>
        <Experiences/>
        <Contact/>
    </main>
  )
}
