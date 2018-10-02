function removeInvalid(str){

	str = str.split('');

	var i = 0; //get rid of the ends that can't be helped.
	while(str[i] != "(" && i < str.length){
		if(str[i] == ")")
		  str[i] = '';
		i++;
	}

	var j = str.length - 1;
	while(str[j] != ")" && j > 0){
		if(str[j] == "(")
		  str[j] = '';
		j--;
	}

	str = str.join('').split('');

	var fullParen = 0;

	for(x = 0; x < str.length; x++ ){

		if(str[x] == "(" )
			fullParen++;
		if(str[x] == ")" )
			fullParen--;
		if(fullParen <= -1 ){
			str[x] = '';
			fullParen++;
		}

	}

	return str.join('');

}

module.exports = removeInvalid;
