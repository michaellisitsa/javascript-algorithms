import LinkedListNode from './_LinkedListNode.mjs';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toArray() {
    const nodes = [];

    if (this.next === null) {
      return [];
    }
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }

  append(value) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;
    return this;
  }
}
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
export default LinkedList;
