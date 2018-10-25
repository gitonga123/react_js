var http = require('http');
var fs = require('fs');

function serveStaticFile(response, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;

  fs.readFile(__dirname + path, function (error, data) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('500 - Internal Server Error');
    } else {
      response.writeHead(responseCode, {'Content-Type': contentType});
      response.end(data);
    }
  });
} 

http.createServer(function (request, response) {
  var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      serveStaticFile(response, '/public/home.html', 'text/html')
      break;
    case '/home':
      serveStaticFile(response, '/public/home.html', 'text/html')
      break;
    case '/about':
      serveStaticFile(response, '/public/about.html', 'text/html')
      break;
    case '/public/img/vue.png':
      serveStaticFile(response, '/public/img/vue.png', 'image/jpeg')
      break;
    default:
      serveStaticFile(response, '/public/404.html', 'text/html', 404);
      break;
  }
}).listen(3030);

console.log('Serve started on localhost:3030; press Ctrl-C to terminate');