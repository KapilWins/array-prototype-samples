//The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

//syntax:
//array.flatMap(function callback(current_value, index, Array)) { It returns the new array's elements. }

let arr = [1, 2, 3, 4, 5];

// Mapping with map function.
let a = arr.map((x) => [x * 3]);
console.log(a); //[ [ 3 ], [ 6 ], [ 9 ], [ 12 ], [ 15 ] ]

// Mapping and flatting with flatMap() function.
let b = arr.flatMap((x) => [x * 3]);
console.log(b); //[ 3, 6, 9, 12, 15 ]

// Mapping and flatting with flatMap() function.
let c = arr.flatMap((x) => [[x * 3]]);
console.log(c); //[ [ 3 ], [ 6 ], [ 9 ], [ 12 ], [ 15 ] ]
