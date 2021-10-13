const MyHashSet = require('./design-hashset');

test('MyHashSet', () => {
  const hashset = new MyHashSet();
  hashset.add(1);
  hashset.add(2);
  expect(hashset.contains(1)).toBe(true);

  hashset.add(2);
  expect(hashset.contains(2)).toBe(true);
  hashset.remove(2);
  expect(hashset.contains(2)).toBe(false);
});
