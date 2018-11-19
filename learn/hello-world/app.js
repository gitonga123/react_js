var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.set('appName', 'hello-world');

app.set('port', process.env.PORT || 3030);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.all('*', function(request, response) {
	response.render('index', {msg: 'Welcome to the Practical Node.js Tutorial'});
});
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express Server listening on port ' + app.get('port'));
});