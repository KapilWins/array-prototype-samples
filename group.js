//The group() method groups the elements of the calling array according to the string values returned by a provided testing function. The returned object has separate properties for each group, containing arrays with the elements in the group.

//syntax:
//array.group((element, index, array) => { /* … */ })
//array.group(function (element, index, array) { /* … */ }, thisArg)

//Example:
const inventory = [
	{ name: "asparagus", type: "vegetables", quantity: 5 },
	{ name: "bananas", type: "fruit", quantity: 0 },
	{ name: "goat", type: "meat", quantity: 23 },
	{ name: "cherries", type: "fruit", quantity: 5 },
	{ name: "fish", type: "meat", quantity: 22 },
];

const result = inventory.group(({ type }) => type);

console.log(result);
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
