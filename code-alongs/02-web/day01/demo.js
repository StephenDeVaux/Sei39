function checkNumberOfTrueStatments(gold) {
    let numTrueStatments = 0
    if (gold === 1) {
        numTrueStatments += 1
    }
    if (gold === 1 || gold === 3) {
        numTrueStatments += 1
    }
    if (gold !== 1) {
        numTrueStatments += 1
    }
    return numTrueStatments
}

// console.log(`If Chest 1 has gold, Number of true statments - ${checkNumberOfTrueStatments(1)}`)
// console.log(`If Chest 2 has gold, Number of true statments - ${checkNumberOfTrueStatments(2)}`)
// console.log(`If Chest 3 has gold, Number of true statments - ${checkNumberOfTrueStatments(3)}`)