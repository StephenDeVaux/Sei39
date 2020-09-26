var users = {
    theresa: {
        party: "Conserative",
        favoriteNumbers: [12, 42, 75]
    },
    Lord_Buckethead: {
        party: "Gremloids",
        favoriteNumbers: [8, 12, 24, 9]
    },
    mr_fishfinger: {
        party: "Independent",
        favoriteNumbers: [12, 14, 85]
    }
}

console.log("JS-OBJECTS HOMEWORK")
    // How would you access theresa's party (i.e. the string "Conservative")?
console.log(users.theresa.party)
    // How would you access Lord Buckethead's party (i.e. the string "Gremloids")?
console.log(users.Lord_Buckethead.party)
    // How would you add the number 42 to Lord Buckethead's favourite numbers?
users.Lord_Buckethead.favoriteNumbers.push(42)

/*
How would you add yourself to the users object?
for example:
  
dt's party is "parrot"
dt's favorite numbers are 7 and 400
  
var dt = {
 party: "parrot",
 favoriteNumbers: [7, 400]
}
  
how can you add this to the existing users object?∫
*/
var steve = {
    party: "banana",
    favoriteNumbers: [1, 2, 3]
}
users.steve = steve;

// How would you retrieve the array of Lord Buckethead's favourite numbers?
let favNumArray = users.Lord_Buckethead.favoriteNumbers;
console.log(favNumArray);
// How would you retrieve an array of Lord Buckethead's favourite numbers that is even?
var evenArray = favNumArray.filter(number => number % 2 === 0)
console.log(evenArray)