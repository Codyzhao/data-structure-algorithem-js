const canConstruct = require('./canConstruct');

test('canConstruct', () => {
  expect(canConstruct('a', 'b')).toBe(false);
  expect(canConstruct('aa', 'ab')).toBe(false);
  expect(canConstruct('aa', 'aab')).toBe(true);
});
