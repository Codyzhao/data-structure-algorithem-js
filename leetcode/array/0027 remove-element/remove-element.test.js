const removeElement = require('./remove-element');

test('remove element', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
});
