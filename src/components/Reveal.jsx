import { useEffect, useRef, useState } from "react";

// Light fade-in when a block scrolls into view (runs once).
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`}>{children}</div>;
}
