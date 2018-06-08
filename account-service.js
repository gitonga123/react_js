const sum = require('./utility.js')

let checkingAccountBalance = 200
let SavingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance = sum([checkingAccountBalance, SavingsAccountBalance, retirementAccountBalance])

console.log(totalBalance)
