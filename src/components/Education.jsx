import { FaGraduationCap } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const education = [
  { degree: "Master of Commerce in Computer Applications (M.Com CA)", school: "St. Joseph's College", city: "Tiruchirappalli", score: "77%", year: "2025" },
  { degree: "Bachelor of Commerce in Computer Applications (B.Com CA)", school: "Shrimati Indra Gandhi College", city: "Tiruchirappalli", score: "77.21%", year: "2023" },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle title="Education" />
        <Reveal className="timeline">
          {education.map((e) => (
            <div className="timeline-item" key={e.degree}>
              <span className="timeline-dot"><FaGraduationCap /></span>
              <div className="glass card">
                <span className="chip year">{e.year}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}, {e.city}</p>
                <p className="muted">Percentage: <b>{e.score}</b></p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
