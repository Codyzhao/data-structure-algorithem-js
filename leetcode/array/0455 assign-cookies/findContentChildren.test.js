const findContentChildren = require('./findContentChildren');

test('findContentChildren', () => {
  expect(findContentChildren([1, 2, 3], [1, 1])).toEqual(1);
  expect(findContentChildren([1, 2], [1, 2, 3])).toEqual(2);
});
