// 7
//Write a function which takes any number of arguments and return the sum of the arguments

const sumOfArguments = (...args) => {
    return args.reduce((amount, item) => amount += item);
}

console.log(sumOfArguments(1, 2, 3));

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 10));



// 8 
// Write a function which removes items from the middle of an array and replace with three items.
const cities = ['kathmandu', 'pokhara', 'chitwan', 'Dolakha', 'Salyan', 'Mustang']

const removeMiddleItem = (arr, city1, city2, city3) => {

    let middleItem = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        arr.splice((middleItem - 1), 2, city1, city2, city3);

    } else if (arr.length % 2 !== 0) {
        arr.splice(middleItem, 1, city1, city2, city3);

    } else {
        console.log('Error...')
    }
    return arr;
}

console.log(removeMiddleItem(cities, 'Helsinki', 'Espoo', 'Vantaa'));

// 10 
// Create a function that takes two strings and returns true if the first argument ends with the second argument; 
// otherewise return false . 
// Take two strings as arguments. 
// Determine if second string matches ending of first string. Return boolean value. Example

const checkEnding = (arg1, arg2) => {

    const pattern = new RegExp(arg2);

    if (arg1.match(pattern)) {
        return true;
    } else {
        return false;
    }

}

console.log(checkEnding('Hari', 'vri'));