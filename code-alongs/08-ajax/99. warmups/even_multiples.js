function evenMultiples(listOfNums) {
    return listOfNums.filter(num => num % 2 == 0 || num % 5 == 0)
}

console.log(evenMultiples([14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5]))