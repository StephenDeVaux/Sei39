///// Warm up
function printTimesTable(num) {
    console.log(`=== ${num} times table ===`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num *i}`)
    }
}

for (let i = 1; i <= 10; i++) {
    // printTimesTable(i)
}


///For each loop
var numbers = [4, 5, 6, 7]

function primt(stuff) {
    console.log(stuff)
}

function myForeach(arr, fn) {
    for (i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}

// myForeach(numbers, primt)