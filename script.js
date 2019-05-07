// 7
//Write a function which takes any number of arguments and return the sum of the arguments

const sumOfArguments = (...args) => {
    return args.reduce((amount, item) => amount += item);
}

console.log(sumOfArguments(1, 2, 3));


// 8 
// Write a function which removes items from the middle of an array and replace with three items.
const cities = ['kathmandu', 'pokhara', 'chitwan', 'Dolakha', 'Salyan', 'Mustang']

const removeMiddleItem = (arr, ...args) => {

    let middleItem = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {

        arr.splice((middleItem - 1), 2, args);
    }

    if (arr.length % 2 !== 0) {

        arr.splice(middleItem, 1, args);
    }
    return arr
}

console.log(removeMiddleItem(cities, 'Helsinki', 'Rovaniemi'));