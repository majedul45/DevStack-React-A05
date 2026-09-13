

export default function TechnologyCard({ tech, selected, onAdd }) {
  return (
    <article className={`tech-card ${selected ? "selected" : ""}`}>
      <div className="card-top">
        <div className="tech-icon-wrap">
          <img
            src={tech.icon}
            alt={`${tech.name} icon`}
            className="tech-icon"
            loading="lazy"
          />
        </div>

        {tech.badge && <span className="badge">{tech.badge}</span>}
      </div>

      <h3>{tech.name}</h3>

      <p className="description">{tech.description}</p>

      <div className="meta">
        <span className="chip">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="rating">
          <span aria-hidden="true">★</span> {tech.rating}
        </span>
      </div>

      <button
        className={`add-btn ${selected ? "added" : ""}`}
        disabled={selected}
        onClick={() => onAdd(tech)}
      >
        {selected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}