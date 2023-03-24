//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

//syntax:
//array.find(function (element, index, array) { /* … */ }, thisArg)  ||
//array.find((element, index, array) => { /* … */ })

//element is required.

//Example:
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "bananas", quantity: 0 },
	{ name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

//Example:
const array = [10, 20, 30, 40, 50];

// Method (return element > 20).
const found = array.find(function (element) {
	return element > 20;
});

console.log(found); //30
