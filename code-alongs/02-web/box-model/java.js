let testArray = ["cake", "", "pudding", "", ""]

function countEmpty(arr) {
    let numEmpty = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            numEmpty++
        }
    }
    return numEmpty;
}

console.log(countEmpty(testArray))