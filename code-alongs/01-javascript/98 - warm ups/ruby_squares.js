//same as ruby version but in javascsript!

function getSquares(numArray) {
    let squares = []
    numArray.forEach(function(num) {
        if (Math.sqrt(num) % 1 === 0) {
            squares.push(num)
        }
    });
    uniq = [...new Set(squares)];
    return uniq.sort((a, b) => a - b)
}

getSquares([4, 1, 16, 1, 10, 35, 22])

var uniqSquares = [...new Set(squares)];