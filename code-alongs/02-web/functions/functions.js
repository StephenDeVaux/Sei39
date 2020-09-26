console.log("functions 102")

function double(num) {
    return num * 2;
}
double(8)

var letters = ['a', 'b', 'c', 'd']

function upperCase(arr) {
    let upperCaseArray = []
    for (let i = 0; i < arr.length; i++) {
        upperCaseArray[i] = arr[i].toUpperCase()
    }
    return upperCaseArray
}

console.log(`Convert to upper case - ${upperCase(letters)}`)