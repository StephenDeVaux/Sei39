var group = {
    A: 20,
    B: 15,
    C: 10,
    steve: 13,
    bo: 8,
}

function splitTheBill(spentArr) {
    let people = Object.keys(spentArr);
    let total = Object.values(spentArr).reduce((total, el) => total + el);
    let share = total / people.length;

    let owed = {}
    people.forEach(person => owed[person] = Math.round(spentArr[person] - share * 100) / 100)

    owed2 = people.reduce((owed, person) => {
        owed[person] = Math.round(spentArr[person] - share * 100) / 100
        return owed
    }, {})

    return owed2
}


console.log(splitTheBill(group)) // returns {A: 5, B: 0, C: -5}

// console.log(Object.entries(group))