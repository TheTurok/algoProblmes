

function oscillatingTreeTraversal(node){
  const right = [node];
  const left = [];
  const oscillate = [];

  var current;


  while(left.length > 0 || right.length > 0){
    while(right.length > 0){
      current = right.pop();

      oscillate.push(current.data);

      if(current.left) //left to right
        left.push(current.left);
      if(current.right)
        left.push(current.right);
    }

    while(left.length > 0){
      current = left.pop();

      oscillate.push(current.data);

      if(current.right) //right to left
        right.push(current.right);
      if(current.left)
        right.push(current.left);
    }

  }

  return oscillate.join(', ');
}

module.exports = oscillatingTreeTraversal;
