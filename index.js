'use strict'

const path = require('path')
const childProcess = require('child_process')
const phantomjs = require('phantomjs-prebuilt')
const crypto = require('crypto')
const os = require('os')

const render = (options, size = '320x320') => {
  return new Promise((resolve, reject) => {
    const output = path.join(os.tmpdir(), `chart-${crypto.randomBytes(4).readUInt32LE(0)}.png`)

    const childArgs = [
      path.join(__dirname, 'exporter.js'),
      output,
      JSON.stringify(options),
      size
    ]

    childProcess.execFile(phantomjs.path, childArgs, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else if (stderr !== '') {
        reject(new Error(stderr))
      } else {
        resolve(output)
      }
    })
  })
}

module.exports = render
