// let randomNum = Math.floor(Math.random() * 10)
// let guess = prompt("Guess a number between 0 and 10")
// console.log(randomNum)
// console.log(guess)
// while (randomNum !== Number(guess)) {
//     debugger
//     if (guess > randomNum) {
//         guess = prompt("Too high guess again between 0 and 10")
//     } else {
//         guess = prompt("Too low guess again between 0 and 10")
//     }
// }
// alert("Well done you got it!")

//String concat example
// let children = 1;
// let partnerName = "Candice";
// let location1 = "Wdonga";
// let title = "Engineer";
// alert("You will be " + title + " in " + location1 + ", and married to " + partnerName + " with " + children + " kids.")

// //Age example
// let currentYear = 2020;
// let birthYear = 1989;
// let age1 = currentYear - birthYear;
// let age2 = currentYear - birthYear - 1;
// alert("You are either " + age1 + " or " + age2)

//WD40 example
// let doesMove = false;
// let shouldIt = true;
// console.log(`Does it move? - ${doesMove} \nShould it move? - ${shouldIt}`)
// if (doesMove) {
//     if (shouldIt) {
//         console.log("No problem")
//     } else {
//         console.log("use some duct tape!")
//     }
// } else {
//     if (shouldIt) {
//         console.log("use some wd40!")
//     } else {
//         console.log("No problem")
//     }
// }

//Count backwards from 10
let counter = 24;
while (counter > 0) {
    console.log(counter)
    counter -= 2
}

let multiplier = 0;
while (multiplier <= 10) {
    console.log('----------------')
    console.log(`9 times ${multiplier} is ${9*multiplier}`)
    multiplier++
}