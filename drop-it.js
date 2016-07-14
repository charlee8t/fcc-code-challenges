
function dropElements(arr, func) {

  var iterations = arr.length;
  // Drop them elements.

  for (var i = 0; i < iterations; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  
  console.log(arr);
  // return arr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
dropElements([0, 1, 0, 1], function(n) {return n === 1;})
// dropElements([1, 2, 3, 4], function(n) {return n > 5;})
