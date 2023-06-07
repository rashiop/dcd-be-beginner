// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs')

const fileReadCallback = (error, data) => {
  if (error) throw error
  console.log(data)
}

fs.readFile('learn/04-filesystem/notes.txt', 'utf8', fileReadCallback)
