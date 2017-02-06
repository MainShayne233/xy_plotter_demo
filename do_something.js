var plotter = require('xy-plotter')()

const job = plotter.Job('do_something')

job.text('Honey Bear', 87, 55)

job.svg('heart.svg', {
  height: 75,
  width: 75,
})

const serial = plotter.Serial('/dev/ttyUSB0')
serial.send(job).then(() => {
  console.log('done!')
})
