const blocks = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['T', 'G'],
    ['Q', 'D'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['A', 'N'],
    ['E', 'R'],
    ['F', 'S'],
    ['L', 'Y'],
    ['P', 'C'],
    ['Z', 'M']
]


function canMakeWord(word) {
    let letters = word.split("")
    for (let i = 0; i < blocks.length; i++) {
        let letterIndex1 = letters.indexOf(blocks[i][0])
        let letterIndex2 = letters.indexOf(blocks[i][1])
        if (letterIndex1 != -1) {
            letters.splice(letterIndex1, 1)
        } else if (letterIndex2 != -1) {
            letters.splice(letterIndex2, 1)
        }
    }
    if (letters.length > 0) {
        console.log(`${word} is false`)
        return false
    } else {
        console.log(`${word} is True`)
        return letters
    }
}

canMakeWord("A")
canMakeWord("BARK")
canMakeWord("BOOK")
canMakeWord("TREAT")
canMakeWord("COMMON")
canMakeWord("SQUAD")
canMakeWord("CONFUSE")
canMakeWord("BOUGHT")
