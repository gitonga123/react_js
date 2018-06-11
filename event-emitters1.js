const EventEmitter = require('events')
class Emitter extends EventEmitter {}

let emitter = new Emitter()

emitter.on('knock', function () {
  console.log('Who\'s there ?')
})

emitter.on('knock', function () {
  console.log('Go Away!')
})

emitter.emit('knock')
// emitter.emit('knock')
