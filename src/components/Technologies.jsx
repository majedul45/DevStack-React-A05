import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

export default function Technologies() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <section id="technologies" className="technology-section container">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="technology-layout">
        <div className="tech-grid">
          {items.map(tech => (
            <TechnologyCard key={tech.id} tech={tech} selected={false} onAdd={() => {}} />
          ))}
        </div>
        <StackPanel />
      </div>
    </section>
  );
}
