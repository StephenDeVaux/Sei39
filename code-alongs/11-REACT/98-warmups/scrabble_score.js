class Scrabble {
    static score(word) {
        let points = {
            AEIOULNRST: 1,
            DG: 2,
            BCMP: 3,
            FHVWY: 4,
            K: 5,
            JX: 8,
            QZ: 10
        }

        return word
            .split("")
            .reduce((total, letter) => {
                let key = Object.keys(points).filter(letters => {
                    if (letters.includes(letter.toUpperCase())) {
                        return true
                    }
                })
                return total + points[key]
            }, 0)
    }
}

console.log(Scrabble.score("cat"))
console.log(Scrabble.score("Cabbage"))
console.log(Scrabble.score("quack"))