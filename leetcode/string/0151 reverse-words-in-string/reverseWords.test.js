const { expect } = require('@jest/globals');
const reverseWords = require('./reverseWords');

test('reverseWords', () => {
  expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
  expect(reverseWords('  hello world  ')).toEqual('world hello');
  expect(reverseWords('a good   example')).toEqual('example good a');
  expect(reverseWords('  Bob    Loves  Alice   ')).toEqual('Alice Loves Bob');
  expect(reverseWords('Alice does not even like bob')).toEqual(
    'bob like even not does Alice'
  );
});
