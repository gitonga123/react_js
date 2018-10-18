var queryString = require('querystring');

function start (response, postData) {
  console.log('Start Function');
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
    '</head> <title> File Upload</title>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload (response, postData) {
  console.log(queryString.parse(postData));
  console.log('Upload Function');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You\'ve sent: ' + queryString.parse(postData).text );
  response.end();
}

exports.start = start;
exports.upload = upload;
