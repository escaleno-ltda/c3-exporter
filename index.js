'use strict'

const path = require('path')
const childProcess = require('child_process')
const phantomjs = require('phantomjs-prebuilt')
const crypto = require('crypto')
const os = require('os')
const fs = require('fs')

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
        const chunks = []
        let totalLength = 0
        const fileStream = fs.createReadStream(output)
        fileStream.on('data', chunk => {
          chunks.push(chunk)
          totalLength += chunk.length
        })
        fileStream.on('end', () => {
          fs.unlink(output, err => {
            if (err) {
              reject(err)
            } else {
              resolve(Buffer.concat(chunks, totalLength))
            }
          })
        })
        fileStream.on('error', reject)
      }
    })
  })
}

module.exports = render
