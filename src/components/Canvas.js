import Node from "./Node";

export default function Canvas({ workflow, setWorkflow }) {
  const renderNode = (id) => {
    if (!id) return null;
    const node = workflow.nodes[id];

    return (
      <Node
        key={id}
        node={node}
        workflow={workflow}
        setWorkflow={setWorkflow}
        renderNode={renderNode}
      />
    );
  };

  return <div className="canvas">{renderNode(workflow.rootId)}</div>;
}
