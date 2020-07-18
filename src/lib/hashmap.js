'use strict';

const LinkedList = require('./linkedlist.js');

/**
 * Hashmap structure for efficient storage
 *  { method } : hash - returns an index for a hashed value
 *  { method } : set - adds an item to the data structure and returns the index for the hashed value
 *  { method } : get - locates the value for a stored value and returns the value
 */

class Hashmap {
  constructor(size) {
    this.buckets = new Array(size);
    this.size = size;
  }

  /** 
   * A simple hashing algorithm, that determines the index by
   *  summing the ascii values in the key
   *  multiplying by a prime number
   *  using modulo to find a particular index based on the size of the input
   */
  hash(key) {
    let stringified = typeof (key) === 'string' ? key : key.toString();
    let hashSum = stringified.split('').reduce((total, char) => {
      return total + char.charCodeAt(0);
    }, 0) * 599;
    return hashSum % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }

    let entry = { [key]: value };
    this.buckets[index].add(entry);
    return index;
  }

  get(key) {
    let index = this.hash(key);

    if (this.buckets[index]) {

      let current = this.buckets[index].head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        }
        current = current.next;
      }
    }
    return null;
  }

  contains(key) {

    return false;
  }

  remove(key) {
    let index = this.hash(key);

    if (this.buckets[index]) {
      let current = this.buckets[index].head;
      while (current) {
        if (current.value[key]) {
          this.buckets[index].remove(current.value);
          return current.value[key];
        }
        current = current.next;
      }
    }
    return null;
  }
}

module.exports = Hashmap;
