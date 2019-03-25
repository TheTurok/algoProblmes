function smlSub(string){
  const data = {};
  let result;

  for(let i =0; i < string.length; i++){
    let char = string.charAt(i);
    data[char] = data[char] + 1 || 1;
  }

  let i = 0;
  let j = string.length -1;

  let icont, jcont = true;
  while(icont || jcont){
    icont = true;
    jcont = true;
    let charStart = string.charAt(i);
    let charEnd = string.charAt(j);
    if(data[charStart] > 1){
      i++;
      data[charStart] -= 1;
    }
    else{
      icont = false;
    }
    if(data[charEnd] > 1){
      j--;
      data[charEnd] -= 1;
    }
    else{
      jcont = false;
    }
  }
  return j-i;
}

console.log(smlSub("abcefgaabc"));
