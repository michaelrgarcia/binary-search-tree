function Node() {
  const data = null;
  const left = null;
  const right = null;

  return { data, left, right };
}

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

function removeDupes(array) {
  const noDupes = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });

  noDupes.sort((a, b) => a - b);

  return noDupes;
}

function Tree() {
  let root = null;

  function buildTree(array, end = array.length) {
    if (array.length === 1) return null;

    const middle = Math.round(end / 2);

    const left = array.slice(0, middle);
    const right = array.slice(middle, end + 1);

    const root = Node();
    root.data = array[middle];

    root.left = buildTree(left);
    root.right = buildTree(right);

    return root;
  }

  return { root, buildTree };
}

const noDupes = removeDupes([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const bst = Tree(noDupes);

bst.root = bst.buildTree(noDupes);

prettyPrint(bst.root);
