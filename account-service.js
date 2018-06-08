// Import core modules/packages, e.g., const filesystem = require('fs')
// Import npm modules/packages, e.g., const express = require('express')
// Import single file in a project, e.g., const server = require('./boot/server.js')
// Import single JSON files, e.g., const databaseConfigs = require('./configs/database.json')
// Import folders in a project (an alias for importing an index.js in that folder), e.g.,const routes = require('./routes')

const sum = require('./utility.js')

let checkingAccountBalance = 200
let SavingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance = sum([checkingAccountBalance, SavingsAccountBalance, retirementAccountBalance])

console.log(totalBalance)
