// FREECODECAMP ROMAN NUMBERS


function convert(num) {

  var roman = [["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["","X","XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]];

  var test = num;
  var num = num.toString().split("");
  var result = "";


  if (num.length < 2) {
    result = roman[0][num];

  } else if (num.length < 3) {

    var index = 0

    for (var i = num.length - 1; i > -1; i--) {
      result += roman[i][num[index]];
      index++;
    }

    // result = roman[1][num[0] - 1] + roman[0][num[1] - 1];

  } else if (num.length < 4) {
    var index = 0

    for (var i = num.length - 1; i > -1; i--) {
      result += roman[i][num[index]];
      index++;
    }
    // result = roman[2][num[0] - 1] + roman[1][num[1] - 1] + roman[0][num[2] - 1];

  }

}

convert(process.argv[2]);
