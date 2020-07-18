'use strict';

const HashMap = require('../lib/hashmap.js');

describe('Testing Hashmap features', () => {
  it('should be able to hash deterministically', () => {
    const map = new HashMap(1024);
    let input = 'Jacob';
    let output = 201;
    expect(map.hash(input)).toEqual(output);
  });

  it('Should be able to place values into a bucket', () => {
    const map = new HashMap(1024);
    let entry = { key: 'Jacob', value: 'instructor' };
    let output = 201;
    expect(map.set(entry.key, entry.value)).toEqual(output);
  });

  it('Should be able to fetch values by key', () => {
    const map = new HashMap(1024);
    let entry = { key: 'Jacob', value: 'instructor' };
    map.set(entry.key, entry.value);
    expect(map.get(entry.key)).toBe('instructor');
  });
});