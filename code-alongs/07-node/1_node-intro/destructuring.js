//normal way to do it
var fruits = ['manfo', 'kiwi', 'bannana']
var myFavFruit = fruits[0]
console.log(myFavFruit)


//Sort oflike another feature call -> pattern matching
var [favFruit, meh, dontCare] = ['manfo', 'kiwi', 'bannana']
console.log(favFruit)

var [a, b] = fruits
console.log(a)

//It is actually just syntax for
var a = fruits[0]
var b = fruits[1]

//Object example
function getUser() {
    //Imagine lost fo complex logic
    return {
        nickname: 'not sure',
        id: 39
    }
}

// var user = getUser()
// var name = user.nickname
// var name = getUser().nickname

var { nickname: name, id } = getUser()
console.log(name)
console.log(id)


//Spread operator
var numbers = [1, 2, 3, 4, 5, 6, 7]
var [first, second, ...rest] = numbers
console.log(rest)