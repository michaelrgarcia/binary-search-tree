function Node(data) {
  let left = null;
  let right = null;

  return { data, left, right };
}

function sortArrayForTree(array) {
  const arr = array;
  const filtered = arr.filter((item, index) => arr.indexOf(item) === index);
  filtered.sort((a, b) => a - b);

  return filtered;
}

function prettyPrint(node, prefix = "", isLeft = true) {
  // from The Odin Project
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

function Tree(array) {
  function buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) {
      return null;
    }

    const middle = Math.floor((start + end) / 2);
    const node = Node(array[middle]);

    node.left = buildTree(array, start, middle - 1);
    node.right = buildTree(array, middle + 1, end);

    return node;
  }

  const root = buildTree(array);

  return { buildTree };
}

const sample = [1, 7, 7, 2, 5, 10, 11, 200, 643];
const sorted = sortArrayForTree(sample);

const bst = Tree(sorted);

prettyPrint(bst.buildTree(sorted));
