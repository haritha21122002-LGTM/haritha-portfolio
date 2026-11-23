import skills from "../data/skills.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

function SkillCard({ title, icon: Icon, items }) {
  return (
    <div className="glass card skill-card">
      <div className="skill-head"><span className="icon-badge"><Icon /></span><h3>{title}</h3></div>
      <div className="skill-tags">
        {items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle title="Technical Skills" subtitle="Tools and techniques I use to turn raw data into decisions." />
        <Reveal className="skills-grid">
          {skills.map((c) => <SkillCard key={c.title} {...c} />)}
        </Reveal>
      </div>
    </section>
  );
}
