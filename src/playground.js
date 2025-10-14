const { clearArr, getFirstItem } = require('./debug');
const {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
} = require('./from-scratch');
const { uppercaseAll, destructureCoordinates } = require('./modify');
console.log(reverseString('hello'));
const arr1 = [1, 2, 3, 4, 5];
insertIntoMiddle(arr1, 6);