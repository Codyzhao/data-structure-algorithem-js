const replaceSpace = require('./replaceSpace');

test('replaceSpace', () => {
  expect(replaceSpace('We are happy.')).toBe('We%20are%20happy.');
  expect(replaceSpace('We are happy. ')).toBe('We%20are%20happy.%20');
});
