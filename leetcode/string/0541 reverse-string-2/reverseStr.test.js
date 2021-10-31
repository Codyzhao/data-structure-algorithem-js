const { expect } = require('@jest/globals');
const reverseStr = require('./reverseStr');

test('reverseStr', () => {
  expect(reverseStr('abcdefg', 2)).toEqual('bacdfeg');
  expect(reverseStr('abcd', 2)).toEqual('bacd');
});
