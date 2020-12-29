function findDuplicate(arr) {
    return arr.find(num => arr.filter(i => num === i).length > 1)
}

console.log(findDuplicate([6, 7, 4, 5, 3, 5, 1]))