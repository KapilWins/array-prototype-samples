//The filter() method creates a new array filled with elements that pass a test provided by a function. This method does not execute the function for empty elements. This method does not change the original array.

//syntax:
//array.filter(function(currentValue, index, arr), thisValue)
//currentValue is required.

const pilots = [
	{
		id: 2,
		name: "Wedge Antilles",
		faction: "Rebels",
	},
	{
		id: 8,
		name: "Ciena Ree",
		faction: "Empire",
	},
	{
		id: 40,
		name: "Iden Versio",
		faction: "Empire",
	},
	{
		id: 66,
		name: "Thane Kyrell",
		faction: "Rebels",
	},
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels); // [{ id: 2, name: 'Wedge Antilles', faction: 'Rebels' }, { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }]

const empire = pilots.filter((pilot) => pilot.faction === "Empire");
console.log(empire); // [{ id: 8, name: 'Ciena Ree', faction: 'Empire' }, { id: 40, name: 'Iden Versio', faction: 'Empire' }]
