
function convertHTML(str) {
  // &colon;&rpar;
  // return str;
  var str = str.replace(/[&<>"']/g, function (char) {
    console.log(char);
    switch (char) {
      case "&":
        return "&amp;";
        break;
      case "<":
        return "&lt;";
        break;
      case ">":
        return "&gt;";
        break;
      case "\"":
        return "&quot;";
        break;
      case "\'":
        return "&apos;";
    }
  });

  return str;

}

convertHTML("Dolce & Gabbana");
