//The flat() method creates a new array with all sub-array elements concatenated into it.

//Syntax: flat(depth)
//Depth like 1,2,3…. How much depth you want to concat the array.

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); //[1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat()); //[1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2)); //[1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
