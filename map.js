//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

//syntax:
//array.map((element, index, array) => { /* … */ })
//array.map(function (element, index, array) { /* … */ }, thisArg)

//element is required.

//Example:
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]

//Example:
const arr = [2, 5, 6, 3, 8, 9];

const newArr = arr.map(function (val, index) {
	return { key: index, value: val * val };
});

console.log(newArr); //[ { key: 0, value: 4 },{ key: 1, value: 25 },{ key: 2, value: 36 },{ key: 3, value: 9 },{ key: 4, value: 64 },{ key: 5, value: 81 }]
