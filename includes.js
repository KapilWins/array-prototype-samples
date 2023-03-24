//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//syntax:
//array.includes(searchElement)
//array.includes(searchElement, fromIndex)

const array = ["gfg", "cse", "geeks", "portal"];

//Example:
const result = array.includes("gfg");
// Printing result of includes()
console.log(result); //true

//Example:
const result2 = array.includes("cat");
// Printing result of includes()
console.log(result2); //false
