//The flat() method creates a new array with all sub-array elements concatenated into it.

//Syntax: flat(depth)
//Depth like 1,2,3…. How much depth you want to concat the array.

const arr1 = [1, 2, [3, 4]];
arr1.flat();
console.log(arr1); //[1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
console.log(arr2); //[1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
console.log(arr3); //[1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
console.log(arr4); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
