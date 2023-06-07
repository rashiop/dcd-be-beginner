const fs = require('fs')

const readableStream = fs.createReadStream('learn/05-readable-stream/article.txt', {
  start: 2,
  // end: 99,
  highWaterMark: 10,
})

readableStream.on('readable', () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`)
  } catch (err) {
    console.error(err)
  }
})

readableStream.on('end', () => {
  console.log('Done')
})
