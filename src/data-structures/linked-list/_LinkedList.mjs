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

  prepend(value) {
    const node = new LinkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    const currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    return this;
  }

  insert(value, rawIndex) {
    const node = new LinkedListNode(value);
    // go to the start of the list
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    // navigate via next pointers until you get to the index you're looking for.
    let currentNode = this.head;
    const index = rawIndex < 0 ? 0 : rawIndex;
    let currentIndex = 0;
    while (currentIndex < index - 1 && currentNode.next) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    if (!node.next) {
      this.tail = node;
    }
    return this;
    // if there is no next pointer, just append to the tail.
  }
}
// const linkedList = new LinkedList();
// linkedList.append(10);
// linkedList.append(11);
// linkedList.append(12);
// linkedList.append(13);
// linkedList.insert(2, 4);
// linkedList.insert(3, 5);
// linkedList.insert(4, 6);

export default LinkedList;
