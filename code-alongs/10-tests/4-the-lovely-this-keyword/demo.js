const Fish = require('./fish')

let f1 = new Fish('nemo') 

console.log(f1)

// the this keyword
// its hard to google
// like a pronoun, what it refers to depends on the context
// dont use it unless you have to, prefer to be explicit

//how to work out what the this keyword is refering to
// the context
// 1. default binding
// When you call a function by itself (how you call a function the callsite)
// If you call this inside a browser it would give you the window object
function hello() { 
    console.log(this)
}

//2. Implicit binding
var account = {
    balance: 10, 
    deposit: function {
        this.balance += amount
    }
}

account.deposit(15)
var doDeposit = account.deposit

//3. Explicit binding 
var ndedsAcount = {
    balance: 100000000000000
}

account.deposit.call(ndedsAcount, 1)

//4. haaarrrddd binding
var newDeposit = account.deposit.bind(nedsAccount)

newDeposit(32412431)

// 5. puff magic binding
//using new keyword
