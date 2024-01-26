function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return [...string].reverse().join('');
}

const Calculator = {
  add(x, y) {
    return x + y;
  },

  subract(x, y) {
    return x - y;
  },

  multiply(x, y) {
    return x * y;
  },

  divide(x, y) {
    return x / y;
  },
};

function caesarCipher(string, shiftFactor) {
  if (shiftFactor < 0) return string;
  // lower case [a - z] => [97 - 122]
  // upper case [A - Z] => [65 - 90]
  const lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
  const upperCase = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  return [...string]
    .map((char) => {
      if (lowerCase.includes(char)) {
        const code = char.charCodeAt(0) + shiftFactor;
        const newCode = code > 122 ? (code % 122) + 96 : code;
        return String.fromCharCode(newCode);
      } else if (upperCase.includes(char)) {
        const code = char.charCodeAt(0) + shiftFactor;
        const newCode = code > 90 ? (code % 90) + 64 : code;
        return String.fromCharCode(newCode);
      } else {
        return char;
      }
    })
    .join('');
}

function analyzeArray(arr) {
  const average = arr.reduce((a, b) => a + b) / arr.length;
  const min = arr.reduce((a, b) => Math.min(a, b));
  const max = arr.reduce((a, b) => Math.max(a, b));
  const length = arr.length;
  return { average, min, max, length };
}

module.exports = {
  analyzeArray,
  caesarCipher,
  Calculator,
  capitalize,
  reverseString,
};
