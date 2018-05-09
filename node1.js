// Node is Used for Primarily building web applications.
// Hello World using HTTP SERVER.
// HTTP SERVER
// http.createServer() => return new server object.
// http.listen() => Begins accepting connections on the specified port and hostname.
// http.createClient() => act as a client and makes requests to other servers.
// http.serverRequest() => passes incomming requests to request handlers.
// http.serverResponse() => output of the requestHandlers.

let http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
