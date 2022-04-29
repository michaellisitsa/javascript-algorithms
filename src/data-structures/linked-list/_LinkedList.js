class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.next = null;
  }

  toArray() {
    const nodes = [];

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
}
// const linkedList = new LinkedList();
// console.log('Value of empty list is:' linkedList.toString(), '!');

export default LinkedList;
