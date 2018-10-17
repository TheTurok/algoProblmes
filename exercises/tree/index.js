// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }

  add(element){
    this.children.push(new Node(element));
  }
  remove(element){
    this.children = this.children.filter(node => {
      return node.data !== element;
    });
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    const nodes = [this.root];
    for(let i = 0; i < nodes.length; i++){
      fn(nodes[i]);
      nodes.push(...nodes[i].children);
    }
  }

  traverseDF(fn){
    const nodes = [this.root];

    while(nodes.length){
      const curr = nodes.pop();
      fn(curr);
      while(curr.children.length ){
        nodes.push(curr.children.pop());
      }
    }

  }
}

module.exports = { Tree, Node };
