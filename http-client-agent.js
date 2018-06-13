// HTTP Client with Core http
const http = require('http')
const url = 'http://localhost/page/mark'
http.get(url, (response) => {
  let c = 0
  response.on('data', (chunk) => {
    c++
    console.log(chunk.toString('utf8'))
  })
  response.on('end', () => {
    console.log(`Response has ended with ${c} chunk(s)`)
  })
}).on('error', (error) => {
  console.log(`Got Error: ${error.message}`)
})
