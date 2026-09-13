
import stackImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#technologies">
            Explore Technologies
          </a>

          <a className="btn btn-secondary" href="#about">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <img src={stackImage} alt="" />
      </div>
    </section>
  );
}