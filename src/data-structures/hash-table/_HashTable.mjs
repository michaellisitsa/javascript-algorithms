import LinkedList from '../linked-list/LinkedList';
import LinkedListNode from '../linked-list/LinkedListNode';

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  hash(value) {
    const hashValue = Array.from(value).reduce((prev, current) => {
      return prev + current.charCodeAt();
    }, 0);
    return hashValue % this.buckets.length;
  }

  set(key, value) {
    const node = new LinkedListNode({ key, value });
    const hashKey = this.hash(key);
    this.keys[key] = hashKey;
    const bucket = this.buckets[hashKey];
    if (!bucket.head) {
      bucket.head = node;
      bucket.tail = bucket.head;
      return node;
    }

    let currentNode = bucket.head;
    if (currentNode.value.key === key) {
      currentNode.value.value = value;
      return node;
    }
    while (currentNode.next && currentNode.next.value.value < value) {
      if (currentNode.next.value.key === key) {
        currentNode.next.value.value = value;
      }
      currentNode = currentNode.next;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    return node;
  }

  get(key) {
    const hashKey = this.hash(key);
    const bucket = this.buckets[hashKey];
    if (!bucket.head) {
      return undefined;
    }
    let currentNode = bucket.head;
    while (currentNode && currentNode.value.key !== key) {
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode.value.value : undefined;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
}
