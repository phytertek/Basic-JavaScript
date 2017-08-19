/* eslint-disable no-confusing-arrow */
// Do not change any of the function names

const getBiggest = (x, y) => x >= y ? x : y;

const greeting = (language) => {
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    case 'Chinese':
      return 'Ni Hao!';
    default:
      return 'Hello!';
  }
};

const isTenOrFive = num => num === 10 || num === 5;

const isInRange = num => num < 50 && num > 20;

const isInteger = num => Math.abs(Math.floor(num)) > 0 || num === 0;

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

const isPrime = (num) => {
  let divisor = 3;
  const limit = Math.sqrt(num);

  if (num === 2 || num === 1) return false;
  if (num === 3) return true;
  if (num % 2 === 0) return false;

  while (divisor <= limit) {
    if (num % divisor === 0) return false;
    divisor += 2;
  }
  return true;
};

const returnFirst = arr => arr[0];

const returnLast = arr => arr[arr.length - 1];

const getArrayLength = arr => arr.length;

const incrementByOne = arr => arr.map(i => i + 1);

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = words => words.join(' ');

const contains = (arr, item) => arr.indexOf(item) !== -1;

const addNumbers = numbers => numbers.reduce((acc, cv) => acc + cv);

const averageTestScore = testScores => testScores.reduce((acc, cv) => acc + cv) / testScores.length;

const largestNumber = numbers => Math.max.apply(null, numbers);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
