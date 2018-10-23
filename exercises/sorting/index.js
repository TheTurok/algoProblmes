// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr){
  let tmp;
  for(let i = 0; i < arr.length; i ++){
    for(let j = 1 + i; j < arr.length ; j++){
      if(arr[i]>arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  let minIndex;
  let tmp;
  for(let i = 0 ; i < arr.length; i++){
    minIndex = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex])
        minIndex = j;
    }
    if(minIndex !== i){
      tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }

  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length === 1)
    return arr;

  let left = arr.slice(0, Math.floor(arr.length/2));
  let right = arr.slice(Math.floor(arr.length/2));

  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
  let merged = [];

  while(left.length > 0 || right.length > 0){
    if(left.length === 0 && right[0])
      merged.push(right.shift());
    if(right.length === 0 && left[0])
      merged.push(left.shift());

    if(left.length > 0 && right.length > 0){
      if(left[0] > right[0]){
        merged.push(right.shift());
      }
      else {
        merged.push(left.shift());
      }
    }
  }

  return merged;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
