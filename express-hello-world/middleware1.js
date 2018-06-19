// Using bodyParser Middleware
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
	console.log(`${req.method}: ${req.url}`)
})

app.get('/accounts', (res, req) => {
	console.log(req.body)
	res.send({msg: 'accounts'})
})

app.use((error, req, res, next) => {
	res.status(500).send(error)
})

app.listen(3089)