//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//syntax:
//array.splice(start)
//array.splice(start, deleteCount)
//array.splice(start, deleteCount, item1)
//array.splice(start, deleteCount, item1, item2, itemN)

//Example:
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

console.log(removed); // [], no elements removed
console.log(myFish); // ["angel", "clown", "drum", "mandarin", "sturgeon"]

//Example:
const removed2 = myFish.splice(3, 1);
console.log(removed2); // ["mandarin"]
console.log(myFish); // ["angel", "clown", "drum", "sturgeon"]
