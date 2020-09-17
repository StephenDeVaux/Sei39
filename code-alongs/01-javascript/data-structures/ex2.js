// ## The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
let book1 = {
    title: "The hobbit",
    author: "J.R.R. Tolkien",
    haveRead: true,
}
let book2 = {
    title: "Lord of the Flies",
    author: "William Golding",
    haveRead: false,
}
let book3 = {
    title: "Lady Chatterley's Love",
    author: "DH Lawrence",
    haveRead: false,
}
let book4 = {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    haveRead: false,
}
let bookList = [book1, book2, book3, book4]

for (i = 0; i < bookList.length; i++) {
    if (bookList[i].haveRead) {
        console.log(`You already read "${bookList[i].title}" by ${bookList[i].author}`)
    } else {
        console.log(`You still need to read "${bookList[i].title}" by ${bookList[i].author}`)
    }
}



// ## The Movie Database
// It's like IMDB, but much much smaller!
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
let movie = {
    title: "Star Wars",
    duration: 125,
    stars: ["Luke", "Darth", "Hansolo", "Chewi"]
}

function printOutMovie(movie) {
    let printOut = `${movie.title} lasts for ${movie.duration} minutes. Stars: `
    for (i = 0; i < movie.stars.length; i++) {
        if (i === 0) {
            printOut += ` ${movie.stars[i]}`
        } else {
            printOut += `, ${movie.stars[i]}`
        }
    }
    printOut += "."
    console.log(printOut)
    return printOut
}

printOutMovie(movie)



// # Which number's bigger?
// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(`The greater number of 5 and 10 is ${greaterNum(5, 10)}`)
console.log(`The greater number of 321 and -93149 is ${greaterNum(-93149, 321)}`)
console.log(`The greater number of 6 and 6 is ${greaterNum(6, 6)}`)



// # The Age Calculator
// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 17 or 18"
// - Call the function three times with different sets of values.
function calculateAge(birthyear, currentYear) {
    age1 = currentYear - birthyear - 1;
    age2 = currentYear - birthyear;
    console.log(`You are either ${age1} or ${age2}`)
}
calculateAge(1989, 2020)
calculateAge(1954, 2020)
calculateAge(2013, 2020)



// # The World Translator
// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(langauge) {
    let phrases = { //I assume you wanted to do this with if and if else statements but I had seen this somewhere and wanted to try it
        afr: "Hello Wêreld",
        de: "Hallo Welt",
        fr: "Bonjour le monde",
        en: "Hello world"
    }
    if (phrases.hasOwnProperty(langauge)) {
        return phrases[langauge];
    }
    return "Hello world";
}
console.log(helloWorld("en"))
console.log(helloWorld("afr"))
console.log(helloWorld("de"))
console.log(helloWorld("fr"))
console.log(helloWorld("xyc"))



// # The Grade Assigner
// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.
function assignGrade(score) {
    if (score > 90) {
        return "A"
    } else if (score > 80) {
        return "B"
    } else if (score > 70) {
        return "C"
    } else if (score > 60) {
        return "D"
    } else {
        return "F"
    }
}
console.log(assignGrade(95))
console.log(assignGrade(82))
console.log(assignGrade(79))
console.log(assignGrade(66))
console.log(assignGrade(10))



// # The Pluralizer
// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(number, noun) {
    if (number === 1) {
        return `1 ${noun}`
    }
    let specialCases = {
        sheep: "sheep",
        goose: "geese",
        foot: "feet",
        man: "men"
    }
    if (specialCases.hasOwnProperty(noun)) {
        return `${number} ${specialCases[noun]}`
    }
    return `${number} ${noun}s`
}
console.log(pluralize(5, "tree"))
console.log(pluralize(20, "goose"))
console.log(pluralize(1, "goose"))
console.log(pluralize(0, "man"))
console.log(pluralize(198, "dog"))
console.log(pluralize(2, "foot"))
console.log(pluralize(22, "sheep"))
console.log(pluralize(1, "sheep"))