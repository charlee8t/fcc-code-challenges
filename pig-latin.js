console.log("hello!");

function translatePigLatin(str) {
  var ay = "ay",
      vowels = ["a", "e", "i", "o", "u"],
      str = str.toLowerCase(),
      splitStr = str.split("");

  for(var i = 0; i < vowels.length; i++){
    if(splitStr.indexOf(vowels[i]) !== 0){
        console.log("Doesnt start with a vowel");
    } else {
      console.log("Starts with a vowel!");
      return;
    }
  }
  return splitStr+ay;
}

var result =  translatePigLatin("Alfajor");
console.log(result);
// translatePigLatin("consonant");
