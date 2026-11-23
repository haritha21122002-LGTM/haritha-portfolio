import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import certifications from "../data/certifications.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle title="Certifications & Professional Training" />
        <Reveal className="cert-grid">
          {certifications.map((c) => (
            <article className="glass card cert-card" key={c.id}>
              <span className="icon-badge big"><FaCertificate /></span>
              <h3>{c.title}</h3>
              <p className="inst">{c.institution}</p>
              {c.course && <p className="muted">Course: {c.course}</p>}
              <div className="cert-meta">
                <span className="chip">{c.status}</span>
                {c.score && <span className="chip">Score: {c.score}</span>}
                {c.certId && <span className="chip">ID: {c.certId}</span>}
              </div>
              <div className="tags">{c.skills.map((s) => <span key={s}>{s}</span>)}</div>
              {c.file && (
                <a className="btn btn-outline small" href={c.file} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> View Certificate
                </a>
              )}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
