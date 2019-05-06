// 7
//Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArguments (...args) {

     return args.reduce((amount, items) => amount += items);
}

console.log(sumOfArguments(1,2,3));


// 8 
// Write a function which removes items from the middle of an array and replace with three items.

function removeMiddleItem (arr) {

    let middleOfOdd = Math.floor(arr.length / 2); 
}
