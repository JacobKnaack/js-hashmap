'use strict';

const HashMap = require('../lib/hashmap.js');
let testmap;

beforeAll(() => {
  testmap = new HashMap(1024);
});

describe('Testing Hashmap features', () => {
  it('should be able to hash deterministically', () => {
    let input = 'Jacob';
    let output = 201;
    expect(testmap.hash(input)).toEqual(output);
  });

  it('Should be able to place values into a bucket', () => {
    let entry = { key: 'Jacob', value: 'instructor' };
    let output = 201;
    expect(testmap.set(entry.key, entry.value)).toEqual(output);
  });

  it('should have a contains method for ', () => {
    expect(testmap.contains('Jacob')).toEqual(true);
    expect(testmap.contains('wrong')).toEqual(false);
  });

  it('Should be able to consume keys and values of all types', () => {
    let entry = { key: 19283, value: (a) => { console.log(a); } };
    let output = testmap.set(entry.key, entry.value);
    expect(output).toBeTruthy();
  });

  it('Should be able to fetch values by key', () => {
    let entry = { key: 'Tester', value: 'a test string' };
    testmap.set(entry.key, entry.value);
    expect(testmap.get(entry.key)).toBe(entry.value);
  });

  it('should be able to remove a value stored with a key', () => {
    let entry = { key: 'Jacob', value: 'instructor' };

    let index = testmap.set(entry.key, entry.value);
    let output = testmap.remove(entry.key);
    expect(testmap.buckets[index].values().includes(entry)).toEqual(false);
    expect(output).toEqual(entry.value);
  });

  it('should return null if we remove something that is not there', () => {
    let output = testmap.remove('wrong');
    expect(output).toEqual(null);
  });
});
