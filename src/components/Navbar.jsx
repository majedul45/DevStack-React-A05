

import { useState } from "react";
import Brand from "./Brand";

const links = [
  ["Home", "#home"],
  ["Technologies", "#technologies"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
   
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className={`mobile-menu ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /><span /><span />
        </button>
        <Brand />
        <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href], index) => (
            <a key={label} href={href} className={index === 0 ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="#signin" className="signin">Sign In</a>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </div>
    </header>
  );
}