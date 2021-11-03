const reverseLeftWords = require('./reverseLeftWords');

test('reverseLeftWords', () => {
  expect(reverseLeftWords('abcdefg', 2)).toBe('cdefgab');
  expect(reverseLeftWords('lrloseumgh', 6)).toBe('umghlrlose');
});
