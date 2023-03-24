//The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

//syntax:
//findIndex((element, index, array) => { /* … */ })
//findIndex(function (element, index, array) { /* … */ }, thisArg)

//Example:
const array = [4, 6, 8, 12];
function isOdd(element, index, array) {
	return element % 2 == 1;
}

const index = array.findIndex(isOdd);
console.log(index); //-1

//Example:
const array2 = [10, 20, 30, 110, 60];

// Testing method (element > 25).
function finding_index(element) {
	return element > 25;
}

const result = array2.findIndex(finding_index);
console.log(result); //2
