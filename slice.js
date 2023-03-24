//The slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.

//syntax:
//array.slice(begin, end)

//begin: This parameter defines the starting index from where the portion is to be extracted. If this argument is missing then the method takes begin as 0 as it is the default start value.

//end: This parameter is the index up to which the portion is to be extracted (excluding the end index). If this argument is not defined then the array till the end is extracted as it is the default end value If the end value is greater than the length of the array, then the end value changes to the length of the array.

//Example:
const array = [23, 56, 87, 32, 75, 13];
// Extracted array
const newArray = array.slice(2, 4);
console.log(array); //[ 23, 56, 87, 32, 75, 13 ]
console.log(newArray); //[ 87, 32 ]

//Example:
const array2 = [23, 56, 87, 32, 75, 13];
//Extracted array
const newArray2 = array2.slice();
console.log(array2); //[ 23, 56, 87, 32, 75, 13 ]
console.log(newArray2); //[ 23, 56, 87, 32, 75, 13 ]

//Example:
const array3 = [23, 56, 87, 32, 75, 13];
//Extracted array
const newArray3 = array3.slice(2);
console.log(array3); //[ 23, 56, 87, 32, 75, 13 ]
console.log(newArray3); //[ 87, 32, 75, 13 ]
