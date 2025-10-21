/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  while(arr.length>0){
    arr.pop();
  }
};

const getFirstItem = (array) => {
  return array[0];
};

module.exports = {
  clearArr,
  getFirstItem,
};
