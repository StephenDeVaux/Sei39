module.exports = (arr) => {
    if (arr.length < 3) {
        return arr.join(" and ")
    } else { 
        let lastWord = arr.pop()
        return `${arr.join(", ")} and ${lastWord}`
    }
}