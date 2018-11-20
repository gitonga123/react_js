const express = require('express')
const http = require('http')
const path = require('path')
const app = express()
const pug = require('pug')

app.set('appName', 'Blog Express');

app.set('port', process.env.PORT || 3030)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// app.get("/home", function(request, response) {
// 	const pugTemplate = `body
// 		div
// 			h1 Practical Node.js
// 			p.
// 				Complete tutorial guide for Node js
// 				one of zee best
// 		div
// 			a(href=url, data-active=isActive)
// 			label
// 				input(type="checkbox", checked=isChecked)
// 				| yes / no
// 		div
// 			footer $copy; KenyaMpya`
// 	const htmlString = pug.render(pugTemplate, {pretty: true})
// 	console.log(htmlString);
// })

app.all('*', function(request, response) {
	response.render('index', {msg: 'Welcome to the Practical Node.js Tutorial'});
})


const server = http.createServer(app);

const boot = () => {
	server.listen(app.get('port'), () => {
		console.info(`Express server listening on port ${app.get('port')}`)
	})
}

const shutdown = () => {
	server.close()
}

if (require.main === module) {
	boot() // node app.js command
} else {
  console.info('Running app as a module')
  exports.boot = boot
  exports.shutdown = shutdown
  exports.port = app.get('port')
}
