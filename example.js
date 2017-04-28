const c3Exporter = require('c3-exporter')

const options = {
  data: {
    columns: [
      ['data1', 30, 150, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    type: 'spline'
  },
  padding: {
    top: 10,
    bottom: 10,
    right: 15,
    left: 15
  },
  size: {
    width: 320,
    height: 320
  }
}

await c3Exporter(options) // A Buffer with content of image chart
