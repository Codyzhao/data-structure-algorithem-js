const plusOne = (digits) => {
  if (digits[0] === 0) return [1];
  // if the new value is not greater than 9

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] !== 10) {
      return digits;
    }

    // carry one digit
    digits[i] = 0;
  }

  // all carry
  digits[0] = 1;
  digits.push(0);

  return digits;
};

module.exports = plusOne;
