// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const levelWidth = [];
  let tmp = [];
  let nodes = [root];

  while(nodes.length){
    levelWidth.push(nodes.length);
    while(nodes.length){
      tmp.push(...nodes.pop().children);
    }
    nodes = tmp;
    tmp = [];
  }

  return levelWidth;
}

module.exports = levelWidth;
