import { FaArrowUp } from "react-icons/fa";
import profile from "../data/profile.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p>© 2026 {profile.name}. All Rights Reserved.</p>
          <p className="muted">{profile.tagline}</p>
        </div>
        <SocialLinks />
        <button className="btn btn-outline small" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
}
