const EventEmmiter = require('events')

class Job extends EventEmmiter {}
job = new Job()

job.on('done', function (timeDone) {
  console.log('Job was pronouced done', timeDone)
})

job.emit('done', new Date())
job.removeAllListeners()
