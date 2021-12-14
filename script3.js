// 3.Do the below programs in arrow functions
// a)Print odd numbers in an array
arr = [13, 45, 67, 43, 2, 8]
let prime = arr.filter((n) => {
    for (var i = 0; i <= arr.length; i++) {
        if (n % 2 === 0) return false;
    }
    return true;
});

console.log(prime)

// // b)Convert all the strings to title caps in a string array
function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

console.log(titleCase('iron man'));
console.log(titleCase('iNcrEdible hulK'));

// // c)Sum of all numbers in an array

let arrayNumbers = [3, 5, 6, 700]
let sum = arrayNumbers.reduce((curr, sum) => curr + sum, 0)
console.log(sum)



// // d)Return all the prime numbers in an array
let array = [13, 45, 67, 43, 2, 8]
let primeNumbers = array.filter((n) => {
    for (var i = 0; i <= array.length; i++) {
        if (n % 2 === 0) return false;
    }
    return true;
});
console.log(primeNumbers)

// // e)Return all the palindromes in an array
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

console.log(getAllPalindromes(["hello", "noon"]));
