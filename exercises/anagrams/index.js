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
  const arrayA = {};
  const arrayB = {};

  var cmA = buildCharMap(stringA);
  var cmB = buildCharMap(stringB);

  if(Object.keys(cmA).length !== Object.keys(cmB).length)
    return false;

  for(let char in cmA){
    if(cmA[char] !== cmB[char])
      return false;
  }

  return true;
}

function buildCharMap(str){
  const charMap = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase() ){
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

//next solution
function anagrams2(stringA, stringB){
  return clean(stringA) === clean(stringB);
}

function clean(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
