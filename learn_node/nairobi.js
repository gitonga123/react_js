var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3030);

app.get('/', function (request, response) {
  response.render('home');
});

app.get('/about', function (request, response) {
  response.render('about');
});

app.use(function (request, response) {
  response.status(404);
  response.render('404');
});

app.use(function (error, request, response, next) {
  console.log(error.stack);
  response.status(500);
  response.render('500');
});

app.listen(app.get('port'), function () {
  console.log('Express started on localhost:3030' + app.get('port') +
   ' ; press Ctrl-C to terminate.');
});