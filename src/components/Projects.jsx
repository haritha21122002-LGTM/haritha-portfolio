import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects, { categories } from "../data/projects.js";
import SectionTitle from "./SectionTitle.jsx";
import ProjectPreview from "./ProjectPreview.jsx";
import Reveal from "./Reveal.jsx";

function ProjectCard({ p }) {
  return (
    <article className="glass card project-card">
      <ProjectPreview type={p.preview} />
      <div className="project-body">
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="btn-row">
          {p.github ? (
            <a className="btn btn-outline small" href={p.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
          ) : (
            <button className="btn btn-outline small" disabled title="Add the repository URL in src/data/projects.js"><FaGithub /> GitHub</button>
          )}
          {p.demo && (
            <a className="btn btn-primary small" href={p.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle title="Projects" subtitle="Dashboards, models and applications built end to end." />
        <div className="filters" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={filter === c} className={filter === c ? "active" : ""} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <Reveal className="projects-grid">
          {shown.map((p) => <ProjectCard key={p.id} p={p} />)}
        </Reveal>
      </div>
    </section>
  );
}
