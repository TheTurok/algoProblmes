// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   if(n <= 0)
//     throw new Error('Number is not positive!');
//
//   const poundArray = new Array(n).fill(' ');
//
//   for(var i = 0; i < n; i++){
//       poundArray[i] = '#';
//       console.log(poundArray.join(''));
//   }
// }

function steps(n, row = 0,stair = ''){
  if(n === row)
    return;


  if(n === stair.length){
    console.log(stair);
    return steps(n,row + 1);
  }

  if(stair.length <= row){
    stair += '#';
  }
  else {
    stair += ' ';
  }

  steps(n,row,stair);
}


module.exports = steps;
