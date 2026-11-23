import { useEffect, useState } from "react";
import { FaDownload, FaProjectDiagram, FaPaperPlane } from "react-icons/fa";
import profile from "../data/profile.js";
import SocialLinks from "./SocialLinks.jsx";

const roles = ["Data Analyst", "Data Scientist", "Python Programmer", "Machine Learning Enthusiast", "Power BI Developer"];

// Typewriter effect cycling through roles
function useTypewriter(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = deleting ? 40 : text === word ? 1400 : 85;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") { setDeleting(false); return setI(i + 1); }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hello">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <h2 className="hero-role">{profile.tagline}</h2>
          <p className="typed">I'm a <span>{typed}</span><i className="caret" /></p>
          <p className="hero-text">
            M.Com (Computer Applications) graduate passionate about Data Analytics, Machine Learning, Data Visualization,
            and transforming data into meaningful business insights.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href={profile.resume} download><FaDownload /> Download Resume</a>
            <a className="btn btn-outline" href="#projects"><FaProjectDiagram /> Explore My Projects</a>
            <a className="btn btn-ghost" href="#contact"><FaPaperPlane /> Contact Me</a>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-visual">
          <img
            className="hero-photo"
            src="/Thoughtful%20Data%20Analyst%20Workspace.png"
            alt="Haritha working at her laptop in a data analyst workspace"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
