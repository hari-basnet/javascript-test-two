// 7
//Write a function which takes any number of arguments and return the sum of the arguments

const sumOfArguments = (...args) => {
    return args.reduce((amount, item) => amount += item);
}

// console.log(sumOfArguments(1, 2, 3));

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
// console.log(sum(1, 2, 3, 10));

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

// console.log(createSevenRandomNumbers());


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

// console.log(removeMiddleItem(cities, 'Helsinki', 'Espoo', 'Vantaa'));

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

// crazyCalculator()



// 10 
// Create a function that takes two strings and returns true if the first argument ends with the second argument; 
// otherewise return false . 
// Take two strings as arguments. 
// Determine if second string matches ending of first string. Return boolean value. Example

const checkEnding = (arg1, arg2) => {
    return arg1.includes(arg2);
}

// console.log(checkEnding('Hari', 'cri'));


// create a function that checks ages greater than 18
const agesArray = [45, 33, 9, 13, 22, 100, 19, 18, 17, 77];

function isUserEighteen(arr) {
    let filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 18) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// console.log(isUserEighteen(agesArray));


// create a function that check if the array elements are unique 

const isArrayUnique = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // console.log('the array is not unique');
                return false;
            }
        }
    }
    return true;
}

// console.log(isArrayUnique(agesArray));

// write a function named shuffle. it takes an array parameter and it returns a shuffled array


const shuffleAnArray = (arr) => {
    const shuffledArray = [];
    // if the shuffled array's length is not equal to the original array 
    // run the loop and check for duplicate values 
    for (let i = 0; shuffledArray.length < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (shuffledArray.indexOf(arr[randomIndex]) === -1) {
            shuffledArray.push(arr[randomIndex]);
        }
    }
    return shuffledArray;
}

console.log(shuffleAnArray(agesArray));


// bonus question 
//  

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];

const scoresGreaterThan85 = (arr) => {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].scores > 85) {
            newArray.push(arr[i].name)
        }
    }
    return newArray

}
console.log('Students who has scores > 85: ', scoresGreaterThan85(users));

const addUser = (arr, newUser) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === newUser.name) {
            return 'User already exists';
        }
    }
    arr.push(newUser);

    return arr
}

const addUserSkill = (arr, userName, skill) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === userName) {
            arr[i].skills.push(skill);
        } else {
            console.log('user not found')
        }

        // arr[i].name === userName ? arr[i].skills.push(skill) : "user doesnot esits"
    }
    return arr
}

const editUser = (arr, name, newUser) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            arr[i] = newUser
        }
    }
    return arr
}


const yazan = {
    name: 'Yazan',
    age: 16,
    score: 99,
    skills: ['Html', 'CSS']
}
// rubbish 

// const addUser = (arr, newUser) => {
//     for (const user of arr) {
//         if (user['name'] === newUser.name) {
//             return 'A user does exist';
//         }
//     }
//     arr.push(newUser)
//     return arr;
// }

// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(test_prime(37));


// //Sets up the counter (1-100 right now)
// for (var counter = 1; counter <= 100; counter++)

// //Creates a variable called not_prime and automatically sets it to false for each of the counter numbers 
// {
//     var not_prime = false;

// //Creates a for loop with a variable called div. The loop increases by one each time until it gets to one less than the counter.
//     for (var div = 2; div <= (counter - 1); div++) 

// //If the current number divided by the "div"ider number has a remainder of 0, then it's not a prime number and not_prime is set to true.    
//     {
//         if (counter % div === 0) 
//         {not_prime = true;}
//     }

// //If after going through all the numbers between 2 and one less than the number and none of them were evenly divided (no remainder) not_prime will still be false and the console will print the number.
//     if (not_prime === false) 
//     {console.log(counter);}
// }

// const findPrimeNumbers = () => {
//     for (var counter = 0; counter <= 100; counter++) {

//         var notPrime = false;
//         for (var i = 2; i <= counter; i++) {
//             if (counter % i === 0 && i !== counter) {
//                 notPrime = true;
//             }
//         }
//         if (notPrime === false) {
//             console.log(counter);
//         }
//     }
// }
// console.log('Prime Numbers: ', findPrimeNumbers())

function isPrime(num) {
    if (num < 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    let i = 5
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false
        }
        i += 6
    }
    return true
}

function arrayRange(min, max) {
    return (new Array(max - min + 1).fill(0).map((item, idx) => min + idx));
}
console.log(isPrime(arrayRange(0, 10)))
const findPrimeNumbers = () => {

    let primeNumbers = []
    for (let i = 1; i < 30; i++) {

        if (i === 2 || i === 3 || i === 5) {
            primeNumbers.push(i);

        }
        if (i !== 1 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {

            primeNumbers.push(i);

        }
    }

    return primeNumbers;
}

console.log(findPrimeNumbers());

// console.log(addUser(users, { name: 'John', scores: 88, skills: ['HTML', 'CSS'], age: 200 }));
// console.log(addUserSkill(users, "Koray", "Mongo"));
// console.log(editUser(users, "Brook", yazan));


const product = [{
    name: 'Iphone 7',
    description: 'Cool shit',
    ratings: [3.5, 2, 5, 4, 3],
    likes: ['user1', 'user2', 'user3'],
    disLikes: []
}, {

    name: 'iPad Pro',
    description: 'dope',
    ratings: [3.5, 2, 1, 4, 3, 1],
    likes: ['user1', 'user3'],
    disLikes: []
}

]


const updateLikes = (newUser, productName, likeOrDislike) => {

    for (let i = 0; i < product.length; i++) {
        // if(products[i].likes[i] === newUser)
        if (product[i].name === productName) {
            if (product[i].likes[i] !== newUser) {
                if (likeOrDislike === true) {
                    product[i].likes.push(newUser);
                } else if (likeOrDislike === false) {
                    product[i].disLikes.push(newUser);
                }
            }
        }
    }

    return product
}

console.log(updateLikes('Koray', 'iPad Pro', false))

const calculateRatings = (productName) => {

    let rating = 0
    let totalNumberOfRatings = 0
    let found = false
    for (let i = 0; i < product.length; i++) {
        if (product[i].name === productName) {
            found = true
            for (let j = 0; j < product[i].ratings.length; j++) {
                rating = (rating + product[i].ratings[j])
            }
            totalNumberOfRatings = rating / product[i].ratings.length
        }
    }
    if (!found) {
        return 'Not found'
    }
    return totalNumberOfRatings.toFixed(1)
}

console.log(calculateRatings('iPad Pro'))
console.log(calculateRatings('Iphone 7'))