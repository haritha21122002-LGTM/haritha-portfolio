import { FaUser, FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import profile from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const facts = [
    [FaUser, "Name", profile.name],
    [FaBriefcase, "Role", profile.role],
    [FaGraduationCap, "Qualification", profile.qualification],
    [FaMapMarkerAlt, "Location", profile.location],
    [FaEnvelope, "Email", profile.email],
  ];
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle title="About Me" />
        <Reveal className="about-grid">
          <div className="about-text">
            <p>I am Haritha K, a Junior Data Analyst with a Master of Commerce in Computer Applications. I have hands-on experience in data cleaning, exploratory data analysis, dashboard development, SQL, Python programming, and Machine Learning.</p>
            <p>I enjoy analyzing datasets, identifying trends and patterns, building interactive dashboards, and developing machine learning models. I am passionate about using data-driven insights to support business decision-making.</p>
            <p>I am continuously improving my technical skills in Data Analytics and Data Science through practical projects and professional training.</p>
          </div>
          <ul className="glass facts">
            {facts.map(([Icon, label, value]) => (
              <li key={label}>
                <Icon className="fact-icon" />
                <div><small>{label}</small>{label === "Email" ? <a href={`mailto:${profile.email}`}>{value}</a> : <span>{value}</span>}</div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
