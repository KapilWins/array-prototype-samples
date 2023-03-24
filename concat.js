//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//syntax:
//array.concat()
//array.concat(value0)
//array.concat(value0, value1)
//array.concat(value0, value1, /* … ,*/ valueN)

//Example:
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]

//Example:
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const concatedNum = num1.concat(num2, num3);

console.log(concatedNum); // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
