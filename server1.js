// HTTP Server with core http
const http = require('http')
const port = 8089

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Tpe': 'text/plain'})
  res.end('Hello World\n')
}).listen(port)

console.log(`Server Running at http://localhost:${port}`)
