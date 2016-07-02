//FREECODECAMP SORTED UNION

// FOR LOOPS

/*
function uniteUnique(arr) {

  var args = Array.from(arguments);
  var result = [];

  for (var i = 0; i < args.length; i++) {

    for (var j = 0; j < args[i].length; j++) {

      if (result.indexOf(args[i][j]) == -1) {

        result.push(args[i][j]);

      }

    }
  }
return result;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

*/


// ARRAY REDUCE

function uniteUnique(arr) {

  var args = Array.from(arguments);
  // var result = []

  var result = args.reduce(function (a, b) {
    return a.concat(b);
  })
  .reduce(function (a, b) {
    return 
  }, 0);

console.log(result);
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
