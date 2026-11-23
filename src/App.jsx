import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
