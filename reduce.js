//The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

//syntax:
//array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

//total: It is a required parameter and used to specify the initialValue or the previously returned value of the function.
//currentValue: It is a required parameter and is used to specify the value of the current element.
//initialValue: It is an optional parameter and is used to specify the value to be passed to the function as the initial value.

//Example:
const arr = [10, 20, 30, 40, 50, 60];

const result = arr.reduce((sum, num) => {
	return sum + num;
});
console.log(result); //210

//Example:
const array = [1.5, 20.3, 11.1, 40.7];

const result2 = array.reduce((sum, num) => {
	return sum + Math.round(num);
}, 0);

console.log(result2); //74
