import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

export default function Technologies() {
  const [items, setItems] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    fetch("/technologies.json")
      .then(response => {
        if (!response.ok) throw new Error("Unable to load technology data.");
        return response.json();
      })
      .then(data => { if (mounted) setItems(data); })
      .catch(() => {
        if (!mounted) return;
        setError("Technology data could not be loaded. Please refresh the page.");
        toast.error("Failed to load technologies.");
      })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, []);


  const addToStack = (technology) => {
  if (stack.some(item => item.id === technology.id)) {
    toast.warning(`${technology.name} is already in your stack.`);
    return;
  }

  setStack(current => [...current, technology]);
  toast.success(`${technology.name} added to your stack.`);
};




  const removeFromStack = (technology) => {
    setStack(current => current.filter(item => item.id !== technology.id));
    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="technology-section container">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      {loading ? (
        <div className="loading" role="status"><span className="spinner" />Loading technologies...</div>
      ) : error ? (
        <div className="error-state">{error}</div>
      ) : (
        <div className="technology-layout">
          <div className="tech-grid">
            {items.map(tech => (
              <TechnologyCard key={tech.id} tech={tech} selected={stack.some(item => item.id === tech.id)} onAdd={addToStack} />
            ))}
          </div>
          <StackPanel stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
        </div>
      )}
    </section>
  );
}
