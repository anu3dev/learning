import LinkListNode from './linkListNode';

const noop = () => {};

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new LinkListNode(value, this.head);
    this.head = newNode;
  }

  append(value) {
    const newNode = new LinkListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  delete(value) {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      return false;
    }
    if (prevNode === null) {
      this.head = null;
    } else {
      prevNode.next = currentNode.next;
    }
    return true;
  }

  traverse(cb = noop) {
    let currentNode = this.head;
    while (currentNode) {
      cb(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return !!currentNode;
  }

  length() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }
}
