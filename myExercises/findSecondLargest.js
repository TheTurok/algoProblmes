function findSecondLargest(root){
  let curr = root;
  let contender = null;
  let max = root.value

  if(!curr.left && !curr.right)
    throw new Error('Only one node. No possible second largest value.')

  while(curr.left || curr.right){
    if(curr.right){
      curr = curr.right;
      if(max < curr.value){ //if going to right and new max
        contender = max;
        max = curr.value;
      }
      else if(contender < curr.value){ //max is greater than current value
        contender = curr.value; //and contender is greater than value
      }
    }
    if(curr.left && !curr.right){
      curr = curr.left;
      if(contender < curr.value)
        contender = curr.value;
    }
  }
  return contender;
}

module.exports = findSecondLargest;
