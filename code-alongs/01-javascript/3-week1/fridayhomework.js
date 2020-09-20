////////////////Javascript Assessmenet////////////////////
//Variables
let captain = "Jack"
let phrase = `Oh ${captain}, my ${captain}!`
console.log(phrase)

//Arrays and Loops
var days = ['Thursday', 'Friday', 'Saturday', 'Sunday']
for (let i = 0; i < days.length; i++) {
    console.log(`${i} ${days[i]}`)
}

var prices = [20, 10, 10, 7, 12, 50, 13]
let totalCost = 0;
for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i]
}
console.log(`The total cost is ${totalCost}`)

//Objetcs
var brain = {
    energyLevel: 10
}
brain.energyLevel = 1000;
brain.dream = "electric sheep"
console.log(brain)

var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink',
    toys: ['bone', 'pizza', 'donut']
}
console.log(Object.keys(dog))

console.log("Fluffy's Toys")
let fluffiesToys = dog.toys
for (let i = 0; i < fluffiesToys.length; i++) {
    console.log(fluffiesToys[i])
}

//JS functions
function isOdd(num) {
    if (num % 2 !== 0) {
        return true
    }
    return false
}
console.log(`is 2 odd - ${isOdd(2)}`)
console.log(`is 3 odd - ${isOdd(3)}`)
let result = isOdd(6)

function min(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1
    } else if (num2 < num3) {
        return num2
    }
    return num3
}
console.log(`Min of 2, 10, 1, is ${min(2, 10, 1)}`)
console.log(`Min of 2, 3, 4, is ${min(2, 3, 4)}`)
console.log(`Min of 3, 1, 5, is ${min(3, 1, 5)}`)

//Final question
function fahrenheitToCelsius(fahrn) {
    return (fahrn - 32) * 5 / 9
}
console.log(`32F is ${fahrenheitToCelsius(32)} degC`)
console.log(`100F is ${fahrenheitToCelsius(100)} degC`)