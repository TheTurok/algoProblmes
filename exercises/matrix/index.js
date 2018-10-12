// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const spiral = [n,n];
  let startCol = 0;
  let startRow = 0;
  let endCol = n-1;
  let endRow = n-1;   //starting values
  let currCol = 0;
  let currRow = 0;

  for(let i = 0; i < n ; i++){
    spiral.push([]);
  }

  let count = 1;

  while(startCol <= endCol && startRow <= endRow){ //left to right
    console.log("r: " + currRow);
    console.log("c: " + currCol);
    while(currCol <= endCol){
      spiral[currRow][currCol] = count;
      count++; currCol++;
    }
    startRow++; currRow++; currCol--;
    while(currRow <= endRow){ //top to bottom
      spiral[currRow][currCol] = count;
      count++; currRow++;
    }
    endCol--; currCol--; currRow--;
    while(currCol >= startCol){ //right to left
      spiral[currRow][currCol] = count;
      count++; currCol--;
    }
    endRow--; currRow--; currCol++;
    while(currRow >= startRow){ //right to left
      spiral[currRow][currCol] = count;
      count++; currRow--;
    }
    startCol++; currCol++; currRow++;
  }

  return spiral;
}

module.exports = matrix;
