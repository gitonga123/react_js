var Job = require('./job.js')
var job = new Job()

job.on('done', function (details) {
  console.log('weekely email job was completed at', details.completedOn)
})

job.emit('start')
