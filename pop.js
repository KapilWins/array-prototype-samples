//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

//syntax:
//array.pop()

//Example:
const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();

console.log(popped); // 'sturgeon'

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

//Example:
const arr = [];

// popping the last element
const poppedArray = arr.pop();
console.log(poppedArray); //undefined
