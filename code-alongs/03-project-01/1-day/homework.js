// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: 
// combineWords('dog', 'house');
// "doghouse"
console.log("Question 1");
var combineWords = function(word1, word2) {
    return word1 + word2
}
console.log(combineWords('dog', 'house'))

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
// Example: 
// lengths(['my', 'cake', 'pudding']);
// [2,4,7]
console.log("Question 2");

function lengths(arr) {
    let numberArr = []
    for (let i = 0; i < arr.length; i++) {
        numberArr.push(arr[i].length)
    }
    return numberArr
}
console.log(lengths(['my', 'cake', 'pudding']))

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.
console.log("Question 3");

function transmogrifier(num1, num2, num3) {
    return Math.pow(num1 * num2, num3)
}
console.log(transmogrifier(2, 3, 4))

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// Example: 
// wordReverse('we are good friends')
// "friends good are we"
console.log("Question 4")

function wordReverse(sentance) {
    let sentanceArr = sentance.split(" ")
    return sentanceArr.reverse().join(" ")
}
console.log(wordReverse("we are good friends"))

// 5. findLongestWord
// Write a function findLongestWord that takes an array of words 
// and returns the length of the longest word in the array.
console.log("Question 5")

function findLongestWord(wordArr) {
    let longestLength = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (longestLength < wordArr[i].length) {
            longestLength = wordArr[i].length;
        }
    }
    return longestLength;
}
console.log(findLongestWord(["cat", "doggy", "table", "aiodfhaldjfhaoidfh"]))

// 6. average age
// given the following students
var students = [
        { name: "roger", age: 38 },
        { name: "rafael", age: 34 },
        { name: "novak", age: 10 },
    ]
    // write a function to calculate the average age of all students
console.log("Question 6")

function averageAge(studentArr) {
    let aveAge = 0;
    for (let i = 0; i < studentArr.length; i++) {
        aveAge += studentArr[i].age / studentArr.length
    }
    return aveAge
}
console.log(averageAge(students))

// 7. Check for Palindromes
// write a function that return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// check http://www.palindromelist.net/ for some palindromes to test against
console.log("Question 7")

function isPalindrome(string) {
    stringConditioned = string.toLowerCase().replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)| |“|”|’|/g, "");
    const reversedString = stringConditioned.split("").reverse().join("");
    if (reversedString === stringConditioned) {
        console.log(`${string} is a palindrome`)
        return true
    }
    console.log(`${string} is NOT a palindrome`)
    return false
}


console.log(isPalindrome("A dog, a plan, a canal: pagoda."))
console.log(isPalindrome("A dog! A panic in a pagoda!"))
console.log(isPalindrome("A dog! Ax panic in a pagoda!"))
console.log(isPalindrome("Animal loots foliated detail of stool lamina."))
console.log(isPalindrome('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.'))