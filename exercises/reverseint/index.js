// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var negative = false;
  if(n < 0)
    negative = true;

  n = Math.abs(n);

  n = parseInt(n.toString().split('').reverse().join(''));

  if(negative)
    n = n * -1;

  return n;
}

//Math.sign(n) gives sign of number 1 or -1

module.exports = reverseInt;
