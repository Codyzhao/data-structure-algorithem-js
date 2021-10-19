const generateMatrix = require('./generateMatrix');

test('generateMatrix', () => {
  // expect(generateMatrix(3)).toEqual([
  //   [1, 2, 3],
  //   [8, 9, 4],
  //   [7, 6, 5],
  // ]);
  expect(generateMatrix(1)).toEqual([[1]]);
});
