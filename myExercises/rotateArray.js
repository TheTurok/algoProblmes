function rotateArray(sortedArray){
  if( sortedArray.length <= 0)
    return null;
  if(sortedArray.length === 1)
    return 0;

  let currNum = Math.floor(sortedArray.length/2);
  let minNum = 0; //bounds start and end Num
  let maxNum = sortedArray.length - 1;

  while(maxNum - minNum > 1){
    if(sortedArray[currNum] > sortedArray[minNum] &&
      sortedArray[currNum]< sortedArray[maxNum]){ //on the way left, meaning complet order!
      return minNum;
    }
    if(sortedArray[currNum] < sortedArray[minNum] &&
      sortedArray[currNum] < sortedArray[maxNum]){ //shift to left
      maxNum = currNum;
      currNum = Math.floor((maxNum - minNum) / 2) + minNum;
    }
    if(sortedArray[currNum] > sortedArray[minNum] &&
      sortedArray[currNum] > sortedArray[maxNum]){ //shift to right
      minNum = currNum;
      currNum = Math.floor((maxNum - minNum) / 2) + minNum;
    }
  }

  return sortedArray[minNum] < sortedArray[maxNum] ? minNum : maxNum;
}

module.exports = rotateArray;
