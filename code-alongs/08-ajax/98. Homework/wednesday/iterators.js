////////////////
function countIntegers(arr) {
    return arr.reduce((total, element) => {
        Number.isInteger(element) ? total++ : total
        return total
    }, 0)
}
console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]))

////////////////
function lengths(arrStrings) {
    return arrStrings.map(string => string.length)
}
console.log(lengths(['my', 'cake', 'pudding']))

////////////////
function getSquares(arr) {
    return arr.map(num => num ** 2)
}
console.log(getSquares([1, 2, 3, 4, 5]))

////////////////
var inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]
console.log(
    inventory
    .filter(item => item.type === "machine")
    .reduce((total, el) => (total + el.value), 0)
)

console.log(
    inventory
    .filter(item => item.type === "machine")
    .filter(item => item.value > 500)
)