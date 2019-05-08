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

// random seven numbrs 
const createSevenRandomNumbers = () => {
    const random = []

    for (let i = 0; random.length < 7; i++) {
        
        let item = Math.floor(Math.random() * 10);
        if (random.indexOf(item) === -1) {
            random.push(item);
        }

    }
    return random;
}

console.log(createSevenRandomNumbers());


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

// 9 
// Calculate the total annual income of the person by extracting 
// the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 
//15000 euro online courses per month.'
const crazyCalculator = () => {
    const statement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
    console.log(statement)
    // spliting the big string to individual string
    let breakdown = statement.split(' ');
    console.log(breakdown);

    // change the array item into  type of number 
    const changetoNumber = breakdown.map((item) => {
        return parseInt(item)

    })
    console.log(changetoNumber);

    // filtering the numbers and getting a new array with only numbers
    const numberArray = changetoNumber.filter((item) => {
        if (typeof item === 'number')
            return item
    })

    // calculating the annual income 
    let totalAnnualIncome = numberArray[0] * 12 + numberArray[2] * 12 + numberArray[1];

    return totalAnnualIncome;
}

crazyCalculator()



// 10 
// Create a function that takes two strings and returns true if the first argument ends with the second argument; 
// otherewise return false . 
// Take two strings as arguments. 
// Determine if second string matches ending of first string. Return boolean value. Example

const checkEnding = (arg1, arg2) => {

    // if (arg1.match(arg2)) {
    //     return true;
    // } else {
    //     return false;
    // }
    return arg1.includes(arg2);

}

console.log(checkEnding('Hari', 'cri'));

