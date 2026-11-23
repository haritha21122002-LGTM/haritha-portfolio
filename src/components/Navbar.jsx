import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"], ["education", "Education"],
  ["certifications", "Certifications"], ["projects", "Projects"], ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)} aria-label="HK, home">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M8 10v20M19 10v20M8 20h11" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M25 10v20M33 11l-8 9 8 9" stroke="#67e8f9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>HK</span>
        </a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
