//map filter reduce
function doStuff(numbers) {
    return numbers.slice(2)
}

var numbers = [2, 3, 4, 5]

let doubleNumbers = numbers.map(num => num * 2)

let specialNumber = doStuff(doubleNumbers)

console.log(specialNumber.join(", "))

let accounts = [
    { balance: 100 },
    { balance: 100 },
    { balance: 100 },
    { balance: 100 },
    { balance: 100 },
]

console.log(accounts.map(account => account.balance))

let items = [
    { name: 'apple', type: 'fruit', full_price: 2, discount: 0 },
    { name: 'banana', type: 'fruit', full_price: 4, discount: 1 },
    { name: 'orange', type: 'fruit', full_price: 3, discount: 2 },
    { name: 'potato', type: 'vegie', full_price: 5, discount: 0 },
    { name: 'brocoli', type: 'vegie', full_price: 2, discount: 2 },
]

console.log(
    items
    .filter(item => item.type === "fruit")
    .map(item => item.full_price - item.discount)
    .reduce((total, price) => total + price)
)