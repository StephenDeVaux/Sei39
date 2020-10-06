// Write a Deaf Grandma program using prompts, alerts and a loop.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!
// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!
// You can't stop talking to grandma until you shout BYE.

let whatYouSay = ""

while (whatYouSay !== "BYE") {
    whatYouSay = prompt("Say something to Grandma")
    if (whatYouSay === "BYE") {
        alert("BYE, SONNY")
    } else if (whatYouSay.toUpperCase() === whatYouSay) {
        alert("NO, NOT SINCE 1938?")
    } else {
        alert("HUH?! SPEAK UP, SONNY!")
    }
}