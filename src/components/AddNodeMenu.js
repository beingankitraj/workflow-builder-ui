export default function AddNodeMenu({ onAdd }) {
  return (
    <div className="add-node-menu">
      <button onClick={() => onAdd("action")}>➕ Action</button>
      <button onClick={() => onAdd("branch")}>🔀 Branch</button>
      <button onClick={() => onAdd("end")}>⏹ End</button>
    </div>
  );
}
