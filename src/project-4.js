/* eslint-disable no-confusing-arrow */

const getFirstItem = (collection, cb) => cb(collection[0]);

const getLength = (collection, cb) => cb(collection.length);

const getLastItem = (collection, cb) => cb(collection[collection.length - 1]);

const sumNums = (x, y, cb) => cb(x + y);

const multiplyNums = (x, y, cb) => cb(x * y);

const contains = (collection, item, cb) => collection.indexOf(item) !== -1 ? cb(true) : cb(false);

const removeDuplicates = (collection, cb) => {
  const seen = {};
  return cb(collection.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  }));
};

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
