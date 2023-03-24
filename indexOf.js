//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

//syntax:
//array.indexOf(searchElement)
//array.indexOf(searchElement, fromIndex)

//Example:
const array = ["gfg", "cse", "geeks", "portal"];
const result = array.indexOf("gfg");
console.log(result); //0

const result2 = array.indexOf("geeks");
console.log(result2); //2

const result3 = array.indexOf("category");
console.log(result3); //-1
