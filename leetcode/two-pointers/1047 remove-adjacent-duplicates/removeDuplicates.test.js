const removeDuplicates = require('./removeDuplicates');

test('removeDuplicates', () => {
  expect(removeDuplicates('abbaca')).toBe('ca');
  expect(removeDuplicates('azxxzy')).toBe('ay');
});
