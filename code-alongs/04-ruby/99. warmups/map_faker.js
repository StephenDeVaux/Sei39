// # Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map.
// # It should be filled with the 'A' character

function mapFaker(rows, cols) {
    let map = []
    let column = []
    for (let i = 0; i < cols; i++) {
        column.push("A")
    }
    for (let i = 0; i < rows; i++) {
        map.push(column)
    }
    return map
}