const MyHashMap = require('./hashmap');

test('MyHashMap', () => {
  const myHashMap = new MyHashMap();
  myHashMap.put(1, 1); // The map is now [[1,1]]
  myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
  expect(myHashMap.get(1)).toBe(1);
  expect(myHashMap.get(3)).toBe(-1);
  myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
  expect(myHashMap.get(2)).toBe(1); // return 1, The map is now [[1,1], [2,1]]
  myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
  expect(myHashMap.get(2)).toBe(-1); // return -1 (i.e., not found), The map is now [[1,1]]
});
