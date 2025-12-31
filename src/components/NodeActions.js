import { addNode, deleteNode } from "../utils/workflowUtils";

export default function NodeActions({ node, workflow, setWorkflow }) {
  if (node.type === "end") return null;

  return (
    <div className="actions">
      <button onClick={() => setWorkflow(addNode(workflow, node.id, "action"))}>
        + Action
      </button>
      <button onClick={() => setWorkflow(addNode(workflow, node.id, "branch"))}>
        + Branch
      </button>
      <button onClick={() => setWorkflow(addNode(workflow, node.id, "end"))}>
        + End
      </button>

      {node.type !== "start" && (
        <button onClick={() => setWorkflow(deleteNode(workflow, node.id))}>
          🗑
        </button>
      )}
    </div>
  );
}
