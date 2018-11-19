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
<<<<<<< HEAD
app.use(function (request, response, next) {
  response.locals.showTests = app.get('env') !== 'production' && request.query.test === '1'
=======
<<<<<<< HEAD

app.use(function (request, response, next) {
  request.locals.showTests = app.get('env') !== 'production' &&
  request.query.text === '1';

  next();
=======
app.use(function (request, response, next) {
  response.locals.showTests = app.get('env') !== 'production' && request.query.test === '1'
>>>>>>> f958357d45d93910483cf5ba06e1b1280c814436
>>>>>>> blog
});
app.get('/', function (request, response) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  console.log(randomFortune);

  response.render('home', {fortune: randomFortune});
<<<<<<< HEAD
=======
});

<<<<<<< HEAD
app.get('/about', function(req, res) {
  res.render('about', {fortune: fortune.getFortune(),
                        pageTestScript: '/qa/tests-about.js' } );
>>>>>>> blog
});

app.get('/tours/hood-river', function (req, res) {
  res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function (req, res) {
  res.render('tours/request-group-rate');
=======
app.get('/about', function (request, response) {
  response.render('about', pageTestScript: '/qa/tests-about.js');
>>>>>>> f958357d45d93910483cf5ba06e1b1280c814436
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
  console.log('Express started on localhost:' + app.get('port') +
   ' ; press Ctrl-C to terminate.');
});