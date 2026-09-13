

import logo from "../assets/logo-text.png";

export default function Brand({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#home"
      aria-label="Dev Stack home"
    >
      <img
        className="brand-logo"
        src={logo}
        alt="Dev Stack"
      />
    </a>
  );
}