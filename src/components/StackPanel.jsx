export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  const countText = stack.length === 0
    ? "No technology selected yet."
    : `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`;

  return (
    <aside className="stack-panel">
      <h2>Your Stack</h2>
      <p className="stack-count">{countText}</p>
      {stack.length === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map(item => (
              <div className="stack-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div><strong>{item.name}</strong><small>{item.category}</small></div>
                <button onClick={() => onRemove(item)} aria-label={`Remove ${item.name}`}>×</button>
              </div>
            ))}
          </div>
          <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  );
}
