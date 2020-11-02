var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

var birdArr = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

function goose_filter(birds) {
    return birds.filter(bird => !geese.includes(bird))
}

console.log(
    goose_filter(birdArr)
)