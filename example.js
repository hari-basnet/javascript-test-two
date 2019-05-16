// - Learn if a number or a word is a palindrome or not


const checkPalindrome = (sentence) => {
    const alphanumerics = /[\W_]+/g;
    let passedItems = []

    if (Array.isArray(sentence)) {

        for (let i = 0; i < sentence.length; i++) {

            let trimmedSentence = sentence[i].toString().replace(alphanumerics, '').split('').join('').toLowerCase();
            // console.log(trimmedSentence);
            let reverseSentence = trimmedSentence.split('').reverse().join('');

            if (trimmedSentence === reverseSentence) {
                passedItems.push(trimmedSentence);
            }
            // trimmedSentence === (reverseSentence) ? 'this is a palindrome' : 'This is not a Palindrome';

        }
        return `dear palindromes are ${passedItems}`;
    } else {

        let trimmedSentence = sentence.toString().replace(alphanumerics, '').split('').join('').toLowerCase();
        console.log(trimmedSentence);
        let reverseSentence = trimmedSentence.split('').reverse().join('');

        return trimmedSentence === (reverseSentence) ? 'this is a palindrome' : 'This is not a Palindrome';


    }



}



const shoppingCart = ['koray', 'mom', 'dad', 'madam']
const para = 'this is a ramdom sentence';
console.log(checkPalindrome(shoppingCart))
console.log(checkPalindrome(para));
console.log(checkPalindrome('Never odd, or even.'));
console.log(checkPalindrome(['Never', 'odd', 'or', 'even']));
console.log(checkPalindrome(121));


const solveQuadraticEquation = (a, b, c) => {

    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) return 'the solution does not exist';
    else if (delta === 0) {
        let result = -b / (2 * a);
        return `the solution is ${result}`;
    } else {
        let result1 = (-b + Math.sqrt(delta)) / (2 * a);
        let result2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `there are two solutions: ${result1} and ${result2}`;
    }
}

console.log(solveQuadraticEquation(6, 20, -8));


function solvQuadEquation(a, b, c) {
    //the solution for quadratic equation is 
    // x = (-b +- sqrt(bsquare -4ac)/2a
    //quadratic equation always have to value of x so we create two solutions 

    var x1 = (-1 * b + Math.sqrt(Math.abs(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
    var x2 = (-1 * b - Math.sqrt(Math.abs(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

    return "The solution is " + x1 + "," + x2;
}
console.log(solvQuadEquation(6, 20, -8));
