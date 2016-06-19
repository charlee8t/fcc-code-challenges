function translatePigLatin(str) {

  var ay = "ay";
  var way = "way";
  var str = str.toLowerCase();
  var firstLetter = str[0];
  var firstConsonant;


  if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u") {
    str = str + way;

  } else {
    str = str.split("");
    firstConsonant = str.shift();

    str = str.join("") +  firstConsonant + ay;
  }
  return str;
}

translatePigLatin("california");
