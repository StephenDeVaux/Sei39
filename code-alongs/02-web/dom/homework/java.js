// given the markup in index.html:
// use javascript to:

// step 1 - select the second h1 element and assign it to a variable
let variable1 = document.querySelectorAll("h1")[1]

// step 2 - change the contents of the h1 element from `goodbye` to `Friend`
variable1.textContent = "Friend"

// step 3 - when the click me button is clicked the background colour of the div with class box changes to red
let button = document.querySelectorAll("button")[0]

button.addEventListener("click", function() {
    let divToEdit = document.querySelector(".box")
    divToEdit.style.backgroundColor = "red"
})

// step 4 - console log the number of children elements in the shopping-list unordered list programmatically.
let numOfItems = document.querySelectorAll("li").length
console.log(`Number of shopping list items is ${numOfItems}`)

// step 5 - when the draw number button is clicked generate a random number between 1 and 45 and show in the lucky number paragraph
let buttonDrawNum = document.querySelectorAll("button")[2]

buttonDrawNum.addEventListener("click", function() {
    let randomNum = Math.ceil(Math.random() * 45)
    let luckyNumParagraph = document.querySelector(".lucky-number")
    luckyNumParagraph.textContent = `You lucky number is ${randomNum}!`
})