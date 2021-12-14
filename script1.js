
// 1.Do the below programs in anonymous function
// //a)PRINT ODD NUMBERS IN AN ARRAY
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let odds = array.filter(n => n % 2);
console.log(odds)

//b)CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING 
titleCaps = function () {
    const array = ["my", "name", "is", "mounica", "kadapagunta"];

    for (var i = 0; i <= array.length; i++) {
        const result = array[i][0].toUpperCase() + array[i].substr(1);
        console.log(result)
    }
}
titleCaps();


//c)SUM OF ALL NUMBERS IN AN ARRAY

sumAllNumbers = function () {
    let array = [10, 201, 1010]
    console.log(array.reduce((current, sum) => sum + current, 0)
    )
}
sumAllNumbers();
//d)RETURN ALL THE PRIME NUMBERS IN AN ARRAY

prime = function () {
    let numbers = [10, 79, 90, 7808, 90]
    for (var val of numbers) {
        if (val % 2 === 0) {
            console.log("prime number:", val);
        }
    }
}
prime();


//e)RETURN ALL THE PALINDROMES OF AN ARRAY
let palindromes = function (arr) {
    let arr1 = [];
    for (let i in arr) {
        if (arr[i].split("").reverse().join("") === arr[i].split("").join("")) { arr1.push(arr[i]); }
    } return arr1;
};
console.log(palindromes(["palap", "malam", "lavish", "nayan", "aya"]));

//f)RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE

getMedian = function (ar1, ar2, n) {
    var i = 0; // Current index of i/p array ar1[]
    var j = 0; // Current index of i/p array ar2[]
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n; count++) {

        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        // equals sign because if two arrays have some common elements
        if (ar1[i] <= ar2[j]) {
            m1 = m2; //Store the prev median
            m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2; // Store the prev median
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2) / 2;
}
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2) {
    console.log("Median is " + getMedian(ar1, ar2, n1));
}



//g)REMOVE DUPLICATES FROM AN ARRAY

let inputArray = [
    1, 2, 3, 4, 4, 2, 5, 6, 7
]
let uniqueArray = [new Set(inputArray)];
console.log(uniqueArray);




//h)ROTATE AN ARRAY BY K TIMES
rotate = function () {
    var arr = [1, 3, 4, 5, 6, 8]
    let k = 5;
    k = k % arr.length;
    for (i = 0; i < arr.length; i++) {
        if (i < k) {
            console.log(arr[arr.length + i - k] + " ");
        }
        else {
            console.log((arr[i - k]) + " ")
        }
    }
}
rotate();
