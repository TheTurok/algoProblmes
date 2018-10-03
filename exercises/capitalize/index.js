// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){
  let space = true;
  str = str.split('');
  for(i = 0; i < str.length; i ++){
    if( space === true){
      str[i] = str[i].toUpperCase();
      space = false;
    }
    if(str[i] === ' ')
      space = true;
  }
  return str.join('');
}

// function capitalize(str){
//   const words = [];
//
//   for(let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

// function capitalize(str) {
//   let space = true;
//
//   for(i = 0; i < str.length ; i++){
//     if(space === true){
//       str = str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length);
//       space = false;
//     }
//     if(str.charAt(i) === ' ')
//       space = true;
//   }
//
//   return str;
// }

module.exports = capitalize;
