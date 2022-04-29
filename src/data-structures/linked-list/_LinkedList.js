import LinkedListNode from './_LinkedListNode';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.next = null;
  }

  toArray() {
    const nodes = [];

    if (this.next === null) {
      return [];
    }
    let currentNode = this.next;
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

  findListEnd() {
    if (this.next === null) {
      return this.head;
    }

    let currentNode = this.next;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  append(value) {
    const node = new LinkedListNode(value);
    const endOfList = this.findListEnd();
    if (endOfList === this.head) {
      this.next = node;
      return;
    }
    endOfList.next = node;
  }
}
// const linkedList = new LinkedList();
// linkedList.append(1);
// linkedList.append(2);
export default LinkedList;
