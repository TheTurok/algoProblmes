Number.prototype.toEnglish = function() {
    const AND = 'and';
    const DASH = '-';
    const NEGATIVE = 'negative';
    const ZERO = 'zero';
                          //zero is blank!
    const selfValue = ['','one','two','three','four','five','six','seven','eight','nine','ten',
                          'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen',
                          'seventeen', 'eighteen', 'nineteen'];

    const tyValue = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const HUNDRED = 'hundred';

    const tierValue = ['','thousand', 'million','billion','trillion','quadrillion'];

    var negativeBool = false;

    var word = '';
    var num = this.valueOf();

    if(num == 0) //if number is Zero base case
      return ZERO;

    if(num < 0) //checking for negative
      negativeBool = true;
    num = Math.abs(num); //getting absolute value

    var currentValue; //value of the every hundreth digit place
    var temp; //value of holding
    var tierValueIndex = 0;
    var tenthPlace;
    var hundrethPlace;
    var digit;

    while(num > 0){
      currentValue = num % 1000; //get last three digits
      num = (num - num % 1000) / 1000; //set the next set

      if(currentValue > 0) //Adding Tier Value
        word = tierValue[tierValueIndex] + ' ' + word;

      tenthPlace = currentValue % 100;
      if(tenthPlace <= 19 ){ //selfValue if it's less than 19
        word = selfValue[tenthPlace] + ' ' + word;
      }
      else{
        if(tenthPlace % 10 > 0){ //ty with a digit
          word = tyValue[(tenthPlace - tenthPlace % 10) /10] + DASH + selfValue[tenthPlace%10] + ' ' + word;
        }
        else{ //Just the ty hecause it's a zero.
          word = tyValue[(tenthPlace - tenthPlace %10) /10] + ' ' + word;
        }

      }

      var hundrethPlace = (currentValue - currentValue % 100 )/100;
      if(hundrethPlace > 0){ //Get the hundreth place
        word = selfValue[hundrethPlace] + ' ' + HUNDRED + ' ' + word;
      }

      tierValueIndex++;

    }

    if(negativeBool)
      word = NEGATIVE + ' ' + word;

    return word.trim();
 };
