
function counter() {
    var count = 0
    console.log(count)
}

//Makes no difference how many times you call it as there is no state
counter()
counter()
counter()

class Counter {
    constructor() {
        this.count = 0
    }

    tick() {
        this.count++
    }

}

let c1 = new Counter()
console.log(c1)
c1.tick()
c1.tick()
c1.tick()
console.log(c1)
c1.count = "bananas"
console.log(c1)

//Closures syntax - bizarre!!!
function createCounter() {

    let count = 0
    function tick() {
        count++
    }

    function getCounter() {
        return count
    }

    return {
        tick,
        getCounter
    }
}

let c2 = createCounter()
c2.tick()
c2.tick()
console.log(c2.getCounter())
console.log(c2)

let c3 = createCounter() 
c3.tick() 
console.log(c3.getCounter())
console.log(c3)


//iife - immideitally invocked frunction expression 
// is how require works
( function () { 
    //module
    var secret = 232323232
    var _ = {

    }
    return _
})()