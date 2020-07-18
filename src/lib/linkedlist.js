'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  remove(value) {
    let result = null;
    let current = this.head;

    if (current.value === value) {
      result = current;
      this.head = current.next;
      return result.value;
    }

    while (current) {
      if (current.next.value === value) {
        result = current.next;
        current.next = current.next.next;
        break;
      }
    }
    return result.value;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

module.exports = LinkedList;
