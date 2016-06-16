// FREECODECAMP ROMAN NUMBERS


function convertToRoman(num) {

  var roman = [["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["","X","XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], ["", "M", "MM", "MMM"]];

  var num = num.toString().split("");
  var result = "";

  if (num.length < 2) {
    result = roman[0][num];

  } else {

    var index = 0

    for (var i = num.length - 1; i > -1; i--) {
      result += roman[i][num[index]];
      index++;
    }
  }
  console.log("Result: " + result);
}

convertToRoman(process.argv[2]);
