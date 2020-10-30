testArr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

function oddInteger(arrInts) {
    oddIntsArr = []
    arrInts.forEach(function(int) {
        matchingArr = arrInts.filter(x => x === int)
        if (matchingArr.length % 2 !== 0 && oddIntsArr.findIndex(y => y === int)) {
            oddIntsArr.push(int)
        }
    })
    return oddIntsArr
}

oddInteger(testArr)