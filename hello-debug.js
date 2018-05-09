// Code Node.js Debugger
// The best debugger is console.log()
// Using debugger statements in your code and using $ node

var http = require('http')
debugger
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/palin'})
  debugger
  res.end('Hello World\n')
}).listen(1337, '127.0.0.1')

console.log('Server Running at http://127.0.0.1:1337')