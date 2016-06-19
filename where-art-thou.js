// FREECODECAMP WHERE ART THOUGH


function where(collection, source) {
  var arr = [];
  var hasProperties = false;
  var sourceKeys = Object.keys(source);

  collection.forEach(function (object) {

    for(var prop in source) {
      console.log(prop);
      if (!object.hasOwnProperty(prop)) {
        console.log("no!");
        return;
      } else if (object[prop] == source[prop]) {
        console.log("Yes!");
        hasProperties = true;
      } else {
        hasProperties = false;
      }
    }
    if (hasProperties) {
      arr.push(object);

    }
  })

  // What's in a name?
  // return arr;
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet"}], { last: "Capulet", nickname: "Pepe"});
