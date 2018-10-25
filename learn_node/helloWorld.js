var http = require('http');

http.createServer(function (request, response) {
  var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Homepage');
      break;
    case '/about':
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('About');
      break;
    default:
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('Not Found');
      break;
  }
}).listen(3030);

console.log('Serve started on localhost:3030; press Ctrl-C to terminate');