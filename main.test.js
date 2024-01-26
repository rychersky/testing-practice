const {
  analyzeArray,
  caesarCipher,
  Calculator,
  capitalize,
  reverseString,
} = require('./main');

test('capitalize', () => {
  const result = capitalize('test');
  expect(result).toEqual('Test');
});

test('reverseString', () => {
  const result = reverseString('test');
  expect(result).toEqual('tset');
});

describe('Calculator', () => {
  test('add', () => {
    const result = Calculator.add(1, 2);
    expect(result).toEqual(3);
  });

  test('subtract', () => {
    const result = Calculator.subract(2, 1);
    expect(result).toEqual(1);
  });

  test('multiply', () => {
    const result = Calculator.multiply(2, 2);
    expect(result).toEqual(4);
  });

  test('divide', () => {
    const result = Calculator.divide(4, 2);
    expect(result).toEqual(2);
  });
});

describe('caesarCipher', () => {
  test('wrapping from z to a', () => {
    const result = caesarCipher('z', 1);
    expect(result).toEqual('a');
  });

  test('maintain letter case', () => {
    const result = caesarCipher('a', 26);
    expect(result).toEqual('a');
  });

  test('punctuation is unaffected', () => {
    const result = caesarCipher('Look, it is a brown dog!', 10);
    expect(result).toEqual('Vyyu, sd sc k lbygx nyq!');
  });
});

test('analyzeArray', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
