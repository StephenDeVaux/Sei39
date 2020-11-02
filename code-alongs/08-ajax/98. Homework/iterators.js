// using for, forEach, map, filter, sort, reduce
var users = [
    { id: 1, username: "Apple", active: true, age: 20 },
    { id: 2, username: "Banana", active: false, age: 35 },
    { id: 3, username: "Ear", active: false, age: 60 },
    { id: 4, username: "Dog", active: true, age: 65 },
    { id: 5, username: "Cat", active: true, age: 80 },
    { id: 6, username: "Ear", active: true, age: 95 },
];

// write code to get an array of all users that have the username "Ear"
console.log("Users with username ear")
console.log(users.filter(user => user.username === "Ear"))

// write code to get an array of all users with an age of 60 or over
console.log("Users over 60")
console.log(users.filter(user => user.age >= 60))

// write code to get an array of all ids in users
console.log("All ids")
console.log(users.map(user => user.id))

// write a function that calculate the average age of all users 
console.log("Average user age")
console.log(
    users.map(user => user.age)
    .reduce((total, itereator) => total + itereator) / users.length
)

// sort the users by username in ascending order
console.log("Sorted users")
const compare = (a, b) => { return a.username.localeCompare(b.username) }
console.log(users.sort(compare))

var words = [
    "apple", "banana", "cat", "cake pudding", "Dog", "ear", "flower", "flower", "goat", "Halloween", "cakepudding", "penapplepineapplepen"
];

// console log each word in words in uppercase excluding the first word
words.slice(1).forEach(word => console.log(word.toUpperCase()))

// write code to count the number of words with more than 5 letters 
console.log("Number of words with more than 5 letters")
console.log(words.filter(word => word.length > 5).length)

// get an array of words with each word's first character capitalize (just the first character of each string)
console.log("Capitalised words")
console.log(words.map(word => { return word.charAt(0).toUpperCase() + word.slice(1) }))