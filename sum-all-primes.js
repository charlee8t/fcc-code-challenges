
function sumPrimes(num) {
  var result = 0;

  for (var i = 2; i <= num; i++) {
    console.log("loop:",i);

    var isPrime = false;

    if (i === 2) {
      isPrime = true;
    }

    for (var j = 2; j < i; j++) {

      if (i % j === 0) {
        isPrime = false
        console.log("not a prime:", i);
        break;
      } else {
        isPrime = true;
      }
    }
    if (isPrime) {
      result += i;
    }
  }

console.log(result);

}

sumPrimes(10);
