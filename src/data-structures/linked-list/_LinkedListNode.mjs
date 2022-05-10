class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  toString(filter) {
    if (filter) {
      return filter(this.value);
    }
    return this.value.toString();
  }
}

export default LinkedListNode;
