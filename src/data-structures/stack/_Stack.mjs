import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }

  push(value) {
    return this.linkedList.prepend(value);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }

  toArray() {
    const nodes = [];

    let currentNode = this.linkedList.head;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  pop() {
    const deletedNode = this.linkedList.deleteHead();
    if (!deletedNode) {
      return null;
    }
    return deletedNode.value;
  }
}
