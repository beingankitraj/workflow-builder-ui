import NodeActions from "./NodeActions";

export default function Node({ node, workflow, setWorkflow, renderNode }) {
  return (
    <div className={`node ${node.type}`}>
      <input
        value={node.label}
        onChange={(e) => {
          const updated = {
            ...workflow,
            nodes: {
              ...workflow.nodes,
              [node.id]: { ...node, label: e.target.value }
            }
          };
          setWorkflow(updated);
        }}
      />

      <NodeActions node={node} workflow={workflow} setWorkflow={setWorkflow} />

      <div className="children">
        {node.type === "branch" ? (
          <>
            <div>
              <span>True</span>
              {renderNode(node.children.true)}
            </div>
            <div>
              <span>False</span>
              {renderNode(node.children.false)}
            </div>
          </>
        ) : (
          renderNode(node.children.main)
        )}
      </div>
    </div>
  );
}
