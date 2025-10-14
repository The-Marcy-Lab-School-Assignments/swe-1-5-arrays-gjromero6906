function uppercaseAll(...words) {
  let upperCaseArr = [];
  for(const word of words ){
    upperCaseArr.push(word.toUpperCase());
  }
  return upperCaseArr;
};

const destructureCoordinates = ([x,y]) => {
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
