// FREECODECAMP Missing Letter

function fearNotLetter(str) {
  var result;
  var currentLetter = str.charCodeAt(0);

  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) == currentLetter + 1) {
      currentLetter = str.charCodeAt(i);
    } else {
      result = String.fromCharCode(currentLetter + 1);
    }
  }
  return result;
}

fearNotLetter("abce");
