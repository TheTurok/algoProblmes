// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  let validL = true;
  let validR = true;

  if(node.left && (node.left.data > node.data ||
      (min && node.left.data < min)))
    return false

  if(node.right && (node.right.data < node.data ||
      (max && node.right.data > max)))
    return false


  if(node.left)
    validL = validate(node.left, min, node.data);
  if(node.right)
    validR = validate(node.right, node.data, max);

  return validL && validR;
}

module.exports = validate;
