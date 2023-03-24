//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

//syntax:
//array.unshift(element0)
//array.unshift(element0, element1)
//array.unshift(element0, element1, /* … ,*/ elementN)

//Example:
const arr = [23, 76, 19, 94];
arr.unshift(28, 65);
console.log(arr); //[ 28, 65, 23, 76, 19, 94 ]

//Example:
const languages = ["Java", "Python", "C"];
languages.unshift("JavaScript");
console.log(languages); //[ 'JavaScript', 'Java', 'Python', 'C' ]
