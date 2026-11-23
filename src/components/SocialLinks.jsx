import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../data/profile.js";

// Only renders links that actually have a URL, so nothing looks clickable but dead.
export default function SocialLinks() {
  return (
    <div className="social">
      {profile.github && (
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      )}
      {profile.linkedin && (
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      )}
      <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
    </div>
  );
}
