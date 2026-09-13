import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main container">
        <div className="footer-brand">
          <Brand footer />
          <p>Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="socials">
            <a href="#github">GitHub</a><a href="#twitter">Twitter</a><a href="#linkedin">LinkedIn</a>
          </div>
        </div>
        <div className="footer-col"><h4>PRODUCT</h4><a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#projects">Projects</a></div>
        <div className="footer-col"><h4>COMPANY</h4><a href="#about">About</a><a href="#contact">Contact</a><a href="#careers">Careers</a></div>
        <div className="footer-col"><h4>LEGAL</h4><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div>
      </div>
    </footer>
  );
}
