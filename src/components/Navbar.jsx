import Brand from "./Brand";

const links = [
  ["Home", "#home"],
  ["Technologies", "#technologies"],
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href], index) => (
            <a key={label} href={href} className={index === 0 ? "active" : ""}>{label}</a>
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
