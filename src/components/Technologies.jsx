import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

export default function Technologies() {
  const [items, setItems] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const addToStack = (technology) => {
    if (stack.some(item => item.id === technology.id)) return;
    setStack(current => [...current, technology]);
  };

  const removeFromStack = (technology) => {
    setStack(current => current.filter(item => item.id !== technology.id));
  };

  const removeAll = () => setStack([]);

  return (
    <section id="technologies" className="technology-section container">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="technology-layout">
        <div className="tech-grid">
          {items.map(tech => (
            <TechnologyCard key={tech.id} tech={tech} selected={stack.some(item => item.id === tech.id)} onAdd={addToStack} />
          ))}
        </div>
        <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
      </div>
    </section>
  );
}
