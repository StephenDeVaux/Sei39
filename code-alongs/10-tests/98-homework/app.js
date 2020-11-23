const BankAccount = require("./bank_account");

let account = new BankAccount("cheque")

console.log(account)
console.log(account.getType())
console.log(account.deposit(2000))
console.log(account.withdraw(5))
console.log(account.showBalance())
console.log(account.getHistory())