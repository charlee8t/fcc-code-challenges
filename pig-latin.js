//FREECODECAMP PIG LATING

function translatePigLatin(str) {

  var ay = "ay";
  var way = "way";
  var vowels = ["a", "e", "i", "o", "u"];
  var str = str.toLowerCase();
  var firstLetter = str[0];

  if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u") {
      return str + way;

  } else {
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < vowels.length; j++) {
        if (str.charAt(i) === vowels[j]) {
          str = str.substring(i) + str.substring(0, i);
          return str + ay;
        }
      }
    }
  }
}

translatePigLatin("california");
