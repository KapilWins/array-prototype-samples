//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//syntax:
//array.shift()

//Example:
const myFish = ["angel", "clown", "mandarin", "surgeon"];

const shifted = myFish.shift();

console.log("myFish after:", myFish); // myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted); // Removed this element: angel

//Example:
const array = [34, 234, 567, 4];

const value = array.shift();
console.log(value); //34
console.log(array); //[ 234, 567, 4 ]

//Example:
const array2 = [];

const result = array2.shift();

console.log(result); //undefined
console.log(array2); //[]
