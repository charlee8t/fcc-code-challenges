// FREECODECAMP WHERE ART THOUGH


function where(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);
  // var

  collection.forEach(function (obj) {

    if (obj.hasOwnProperty(sourceKeys)) {
      console.log("true");
      arr.push(obj);
    }

  })

  // What's in a name?
  // return arr;
  console.log(arr);
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet", nickname: "pepe" });
