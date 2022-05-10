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
    if (index === 0) {
      this.prepend(value);
      return this;
    }
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

  delete(value) {
    let deletedNode = null;
    if (!this.head) {
      return null;
    }

    while (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
        return deletedNode;
      }
    }

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      deletedNode = currentNode.next;
      this.tail = currentNode;
      this.tail.next = null;
    }

    return deletedNode;
  }

  deleteTail() {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    if (this.head === this.tail) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }
    // Find the item that is one from the last set its next to null.
    // set tail to the above.
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    deletedNode = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    return deletedNode;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    if (this.head === this.tail) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    deletedNode = this.head;
    this.head = this.head.next;
    return deletedNode;
  }
}

export default LinkedList;
