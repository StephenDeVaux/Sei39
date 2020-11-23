module.exports = {
    findShortestWords: (sentance) => {
        let words = sentance.split(" ").map( word => word.toLowerCase())
        let lengths = words.map(word => word.length)
        let shortest = lengths[0]
        lengths.forEach(length => {
            if (shortest > length) {
                shortest = length
            }
        })
        return words.filter( word => word.length === shortest ).sort()
    },
    maskify: (details) => {
        let splitLength = details.length - 4
        let hiddenPart = Array(splitLength).fill("#").join("")
        let exposedPart = details.split("").slice(splitLength).join("")
        return hiddenPart + exposedPart
    },
    truncate: (sentance, num) => {
        return sentance.split("").slice(0, num).join("")
    },
    capitalize: (sentance) => {
        return sentance
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    },
    objectToQueryString: (object) => {
        let paramString = "?"
        for (const [key, value] of Object.entries(object)) {
            paramString += `${key}=${value}&`
          }
          return paramString.slice(0, -1) 
    },
}