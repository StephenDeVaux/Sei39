let shoppingList = [
    "Salmon tins",
    "Ice-cream",
    "Frozen berries",
    "chocolate",
    "Pasta",
    "Tomatoes",
    "Spinach",
    "Toilet paper"
]

for (i = shoppingList.length - 3; i < shoppingList.length; i++) {
    console.log(`Shopping item - ${shoppingList[i]}`)
}

console.log(shoppingList.slice(4))
console.log(shoppingList)

function checkItem(item) {
    if (shoppingList.includes(item)) {
        console.log("yes, if you do all your chores")
    } else {
        console.log("no, it will rot your teeth")
    }
}

checkItem("chocolate")