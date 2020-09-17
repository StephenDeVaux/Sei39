var recipe = {
    title: "lasagna",
    servings: 20,
    ingredients: ["mince", "cheese", "pasta", "tomatoe"],
}

console.log(recipe.title)
console.log("Serves: " + recipe.servings)
console.log("Ingredients:")
for (i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i])
}

console.log(`\n \n`)

var topChoices = ["blue", "green", "yellow", "pink", "indigo", "raindow", "aqua"]
for (i = 0; i < topChoices.length; i++) {
    if (i === 0) {
        console.log(`My 1st choice is ${topChoices[i]}`)
    } else if (i === 1) {
        console.log(`My 2nd choice is ${topChoices[i]}`)
    } else if (i === 2) {
        console.log(`My 3rd choice is ${topChoices[i]}`)
    } else {
        console.log(`My ${i + 1}th choice is ${topChoices[i]}`)
    }
}