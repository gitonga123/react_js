var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

var fortunes = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  'Do not fear what you don\'t know.',
  'You will have a pleasant surprise.',
  'Whenever possible, keep it simple.',
]
app.use(express.static(__dirname + '/public/'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3030);

app.use(function (request, response, next) {
  request.locals.showTests = app.get('env') !== 'production' &&
  request.query.text === '1';

  next();
});
app.get('/', function (request, response) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  console.log(randomFortune);

  response.render('home', {fortune: randomFortune});
});

app.get('/about', function(req, res) {
  res.render('about', {fortune: fortune.getFortune(),
                        pageTestScript: '/qa/tests-about.js' } );
});

app.get('/tours/hood-river', function (req, res) {
  res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function (req, res) {
  res.render('tours/request-group-rate');
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