export default function getCheeseyName(ingredients) {
    let cheeseNames = {
        0: "",
        1: "",
        2: "double cheese",
        3: "triple cheese",
        4: "quadruple cheese",
        5: "maximum cheese"
    }

    let numCheese = ingredients.filter(i => i === "cheese").length

    if (numCheese <= 5) {
        return cheeseNames[numCheese]
    } else {
        return cheeseNames[5]
    }

}