var text = "Switch caSe FoR eVery letter";

function switchCase(sentance) {
    var ans = sentance.split('').map(function(c) {
        return c === c.toUpperCase() ?
            c.toLowerCase() :
            c.toUpperCase()
    }).join('')
    return ans
}