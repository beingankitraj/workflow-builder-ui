export const uid = () => Math.random().toString(36).slice(2);

export function addNode(workflow, parentId, type) {
  const id = uid();
  const newNode = {
    id,
    type,
    label: type.toUpperCase(),
    children:
      type === "branch"
        ? { true: null, false: null }
        : type === "end"
        ? {}
        : { main: null }
  };

  const parent = workflow.nodes[parentId];
  const updatedParent = { ...parent };

  if (parent.type === "branch") {
    if (!parent.children.true) updatedParent.children.true = id;
    else updatedParent.children.false = id;
  } else {
    updatedParent.children.main = id;
  }

  return {
    ...workflow,
    nodes: {
      ...workflow.nodes,
      [parentId]: updatedParent,
      [id]: newNode
    }
  };
}

export function deleteNode(workflow, nodeId) {
  const nodes = { ...workflow.nodes };
  delete nodes[nodeId];

  Object.values(nodes).forEach((n) => {
    Object.keys(n.children || {}).forEach((k) => {
      if (n.children[k] === nodeId) {
        n.children[k] = workflow.nodes[nodeId]?.children?.main || null;
      }
    });
  });

  return { ...workflow, nodes };
}
