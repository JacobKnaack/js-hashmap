'use strict';

const LinkedList = require('../lib/linkedlist.js');

describe('Tests for linked list class', () => {
  it('should have a head and methods', () => {
    let list = new LinkedList('');
    expect(list.head).toBe(null);
    expect(list.add).toBeTruthy();
    expect(list.remove).toBeTruthy();
  });

  it('should be able to add a value to the list', () => {
    let list = new LinkedList();
    list.add('some value');
    expect(list.values()).toEqual(['some value']);
  });

  it('should be able to remove a value from the list', () => {
    let list = new LinkedList();
    list.add('some value');
    list.add('removed');
    list.remove('removed');
    expect(list.values()).toEqual(['some value']);
  });
});

