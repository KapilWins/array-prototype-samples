//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

//syntax:
//array.some((element, index, array) => { /* … */ })
//array.some(function (element, index, array) { /* … */ }, thisArg)

//element is required.

//Example:
const arr = [2, 5, 8, 1, 4];

const result = arr.some((element) => {
	return element === 5;
});
console.log(result); //true (In this example the method some() checks for any number that is greater than 5. Since there exists an element that satisfies this condition, thus the method returns true.)

//Example:
const result2 = arr.some((element) => {
	return element === 15;
});
console.log(result2); //false (In this example the method some() checks for any number that is greater than 5. Since there exists an element that satisfies this condition, thus the method returns false.)
