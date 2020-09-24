var basket = []
var fruits = ['banana', 'mango', 'kiwi'];
fruits.push('apple');
// console.log(fruits[4 - 1]);

const words = ['couches', 'bed', 'dog', 'egg', 'plant', 'apple'];
const result = words.filter(word => word.length > 3);
const final = result.slice(1);
// console.log(final);

var team = ["allison", "peter", "felipe", "sannan", "naveen", "sara", "stuart", "linda", "callum"]

for (i = -6; i < team.length; i++) {
    // console.log(team.length)
    // console.log("one round + " + i)
    if (i % 2 != 0) {
        team.pop()
        team.shift()
    }
}
// console.log(team);

//2
function countVowels(word) {
    var lowerCaseWord = word.toLowerCase();
    var wordArray = lowerCaseWord.split("");
    var numVowels = 0;
    var vowels = ["a", "e", "i", "o", "u"]
    for (i = 0; i < wordArray.length; i++) {
        if (vowels.includes(wordArray[i])) {
            numVowels++;
        }
    }
    if (wordArray[wordArray.length - 1] === "y") {
        console.log("Special vowel - y is at the end of a word")
        numVowels++
    } else if (wordArray.includes("y") && numVowels === 0) {
        console.log("Special vowel - y the only vowel in the word")
        numVowels++
    }

    return numVowels
}


console.log(`Gym - ${countVowels("gym")}`)
console.log(`Sky - ${countVowels("sky")}`)
console.log(`Year - ${countVowels("year")}`)
console.log(`Stealing - ${countVowels("Stealing")}`)