// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(element, node = null){
    this.data = element;
    this.next = node;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(element){
    if(this.length === 0){
      let node = new Node(element);
      this.head = node;
      this.tail = node;
    }
    else{
      let first = new Node(element,this.head);
      this.head = first;
    }
    this.length++;
  }

  size(){
    return this.length;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    return this.tail;
  }

  clear(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  removeFirst(){
    if(this.head.next)
      this.head = this.head.next;
    else{
      this.head = null;
      this.tail = null;
    }
    this.length--;
  }

  removeLast(){
    if(this.length <= 1){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    else{
      let curr = this.head;
      while(curr.next.next){
        curr = curr.next;
      }
      curr.next = null;
      this.tail = curr;
    }
    this.length--;
  }

  insertLast(element){
    if(this.length === 0){
      this.insertFirst(element);
    }
    else{
      let node = new Node(element);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  getAt(index){
    if(index > this.length)
      return null;

    let curr = this.head;
    for(let i = 0; i < index; i++){
      curr = curr.next;
    }
    return curr;
  }

  removeAt(index){
    if(index > this.length || this.length === 0 || index < 0)
      return null;
    if(index === this.length)
      return this.removeLast();

    if(index === 0){
      return this.removeFirst();
    }

    let curr = this.head;
    let tmp = curr;
    for(let i = 0; i < index; i++){
      tmp = curr;
      curr = curr.next;
    }
    tmp.next = curr.next;
    this.length--;
  }

  insertAt(element, index){
    if(index === 0)
      return this.insertFirst(element);
    if(index > this.length)
      return this.tail.next = new Node(element);

    let curr = this.head;
    let tmp = curr;
    for(let i = 0; i< index; i++){
      tmp = curr;
      curr = curr.next;
    }
    tmp.next = new Node(element,curr);
    this.length++;
  }
}

module.exports = { Node, LinkedList };
