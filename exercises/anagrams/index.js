// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const arrayA = [];
  const arrayB = [];

  var a = stringA.replace(/[^w]/g, '').toLowerCase();
  var b = stringB.replace(/[^w]/g, '').toLowerCase();

  for(let char of a){
      if(arrayA[char])
        arrayA[char] += 1;
      else
        arrayA[char] = 1;
  }
  for(let char of b){
    if(arrayB[char])
      arrayB[char] += 1;
    else
      arrayB[char] = 1;
  }

  return arrayA === arrayB;
}


module.exports = anagrams;
