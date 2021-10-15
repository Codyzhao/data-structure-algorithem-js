/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const values = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case 'C':
        values.pop();
        break;
      case 'D':
        values.push(values[values.length - 1] * 2);
        break;
      case '+':
        values.push(values[values.length - 1] + values[values.length - 2]);
        break;
      default:
        values.push(Number(ops[i]));
        break;
    }
  }

  return values.reduce((acc, val) => acc + val);
};

module.exports = calPoints;
