const addToFrontOrBack = (arr,value,isFront) => {
  if(isFront){
    arr.unshift(value);
  }else{
    arr.push(value);
  }
};

const reverseString = (str) => {
  let newStr ='';
  for(let i = str.length-1; i>=0; i--){
    newStr += str[i];
  }
  return newStr;
};

const newArrayFullOf = (value,numOfValue) => {
  const fillArray = new Array(numOfValue);
  for(let i =0;i<numOfValue;i++){
    fillArray[i]=value;
  }
  return fillArray;
};

const insertIntoMiddle = (arr,value) => {
  const mid = Math.floor(arr.length/2);
  arr.splice(mid,0,value);
};

const deleteFromMiddle = (arr) => {
  const mid = Math.floor(arr.length/2);
  arr.splice(mid,1);
};

const isRightIndex = (arr,value,index) => {
  return (arr.includes(value) && arr[index] === value);
};

const roundAllNumsDown = (arr) => {
  const newArr = new Array(arr.length);
  for(let i = 0;i <arr.length;i++){
    newArr[i] = Math.floor(arr[i]);
  }
  return newArr;
};

const getAllYCoordinates = (arrOfCoords) => {
  const yCoords = new Array(arrOfCoords.length)
  for(let i = 0;i<arrOfCoords.length;i++){
    yCoords[i] = arrOfCoords[i][1];
  }
  return yCoords;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
