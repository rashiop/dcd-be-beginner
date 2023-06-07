/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const path = require('path')
const fs = require('fs')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
  highWaterMark: 10,
})
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'))

readableStream.on('readable', () => {
  try {
    writableStream.write(`${readableStream.read() || ''}\n`)
  } catch (error) {
    console.error(error)
  }
})

readableStream.on('end', () => {
  console.log('done read')
})
