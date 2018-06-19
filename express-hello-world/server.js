// Imports
const express = require('express')
// Instantiations
const app = express()
//Middleware
//series of processing units connected together
// Two types of mildleware, NPM and Custom
app.use((req, res, next) =>{
	console.log(` ${req.method}: ${req.url}`)
	next()
})
//Rutes
app.get('/', (req, res) => {
	res.send('hello World')
})

app.get('/account', (req, res) => {
	res.send('hello account')
})

app.get('/transactions', (req, res) => {
	res.send('hello transactions')
})
//bootup
app.listen(8089)