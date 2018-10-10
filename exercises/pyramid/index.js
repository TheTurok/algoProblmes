// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid2(n , row = 0, stacks = '#') {
  if(n === row)
    return;

    if( (n + (n-1)) === stacks.length){
      console.log(stacks);
      return pyramid(n, row+1);
    }

    else if(stacks.length <= (row + (row-1))){
      stacks += '#';
      stacks = '#' + stacks;
    }
    else {
      stacks += ' ';
      stacks = ' ' + stacks;
    }

    return pyramid(n, row, stacks);

}

function pyramid(n){
  const stacks = new Array(n + (n-1)).fill(' ');

  for(let i = 0; i < n ; i++){
    stacks[ Math.floor(stacks.length /2 ) + i] = '#';
    stacks[ Math.floor(stacks.length /2 ) - i] = '#';
    console.log(stacks.join(''));
  }
}

module.exports = pyramid;
