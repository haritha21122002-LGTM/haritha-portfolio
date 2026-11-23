import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import profile from "../data/profile.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle title="Get in Touch" subtitle="Have a project in mind or want to discuss data analytics? I'd love to hear from you." />
        <Reveal className="contact-grid">
          <div className="glass card contact-info">
            <h3>Contact Information</h3>
            <a className="contact-detail" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
              <span className="contact-icon"><FaEnvelope /></span>
              <span><strong>Email Me</strong><span>{profile.email}</span></span>
            </a>
            <div className="contact-detail">
              <span className="contact-icon"><FaMapMarkerAlt /></span>
              <span><strong>Location</strong><span>{profile.location}</span></span>
            </div>
            {profile.linkedin && <a className="contact-detail" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><FaLinkedin /></span><span><strong>LinkedIn</strong><span>View my profile</span></span></a>}
            {profile.github && <a className="contact-detail" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-icon"><FaGithub /></span><span><strong>GitHub</strong><span>View my projects</span></span></a>}
          </div>
          <div className="glass card contact-info">
            <h3>Professional Details</h3>
            <div className="contact-detail">
              <span className="contact-icon"><FaGraduationCap /></span>
              <span><strong>Education</strong><span>{profile.qualification}</span></span>
            </div>
            <div className="contact-detail">
              <span className="contact-icon"><FaBriefcase /></span>
              <span><strong>Role</strong><span>{profile.role}</span></span>
            </div>
          </div>
        </Reveal>
        <div className="glass card collaborate-card">
          <h3>Let’s Collaborate</h3>
          <p>I’m interested in opportunities in data analytics and data science. If you have a project idea or would like to discuss a potential collaboration, I’d be happy to connect.</p>
        </div>
      </div>
    </section>
  );
}
