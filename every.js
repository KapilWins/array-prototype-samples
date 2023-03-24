//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//syntax:
//every((element, index, array) => { /* … */ })
//every(function (element, index, array) { /* … */ }, thisArg)

//element is required.

//Example:
const arr = [56, 92, 18, 88, 12];

const value = arr.every((element) => {
	return element < 60;
});
console.log(value); //false (In this example the method every() checks if a number is less than 60 for every element of the array. Since the array does not contain negative elements therefore this method returns false as the answer.)

//Example:
const value2 = arr.every((element) => {
	return element < 93;
});
console.log(value2); //true (In this example the method every() checks if a number is less than 93 for every element of the array. Since the array does not contain negative elements therefore this method returns true as the answer.)
