class BankAccount {

    constructor(type) {
        //the special this keyword
        this.type = type;
        this.balance = 0;
        this.transactionHistory = []
    }

    getType() {
        return this.type
    }
    withdraw(amount) {
        this.balance -= amount;
        this.transactionHistory.push({
            amount: -amount,
            transactionType: "Withdrawal"
        })
        return this.balance;

    }
    deposit(amount) {
        this.balance += amount;
        this.transactionHistory.push({
            amount,
            transactionType: "Deposit"
        })
        return this.balance;

    }
    showBalance() {
        return this.balance;
    }
    getHistory() {
        return {
            balance: this.balance,
            history: this.transactionHistory,
        }
    }

}

module.exports = BankAccount 