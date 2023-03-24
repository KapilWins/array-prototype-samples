//The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

//syntax:
//array.at(index)

const cart = ["apple", "banana", "pear"];

console.log(cart.at(0)); //'apple'

console.log(cart.at(-1)); //'pear'

// Add an item to our 'cart' array
cart.push("orange"); //["apple", "banana", "pear","orange"]

console.log(cart.at(-1)); // 'orange'
