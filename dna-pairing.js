
function pairElement(str) {
  var pair = [];
  var result = [];
  var arr = str.split("");


  for (var i = 0; i < arr.length; i++) {

    switch (arr[i]) {

      case "C":

        pair = [];
        pair.push("C","G");
        result.push(pair);
        break;

      case "G":

        pair = [];
        pair.push("G", "C");
        result.push(pair);
        break;

      case "T":

        pair = [];
        pair.push("T", "A");
        result.push(pair);
        break;

      case "A":

        pair = [];
        pair.push("A", "T");
        result.push(pair);

    }
  }

  return result;
}

pairElement("GCG");
