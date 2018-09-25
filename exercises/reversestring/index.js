// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';

  for (let character of str){
    reversed = character + reversed;
  }
  return reversed;

//#1
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');

//#2
  // return str.split('').reduce( (rev,char) => char + rev , '');



module.exports = reverse;
