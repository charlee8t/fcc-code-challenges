
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  str = str.replace(/(?=[A-Z])/g, " ")
  .replace(/[  _]+/g, " ")
  .trim()
  .split(" ")
  .join("-")
  .toLowerCase();
  console.log(str);
}

spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
