var map1 = [
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "X", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"]
];


function treasureFinder(mapArr) {
    let col = -1
    let row = -1
    let functionthis = this
    mapArr.forEach(function(mapRow, rowIndex, functionthis) {
        console.log(functionthis)
        colIndex = mapRow.indexOf("X")
        if (colIndex !== -1) {
            col = colIndex
            row = rowIndex
        }
    });
    return [row, col]
}

function testFunc() {
    arr = [1, 2]
    let thisFunction = this
    anotherFunc(thisFunction)
}

function anotherFunc(something) {
    console.log(something)
}

treasureFinder(map1)