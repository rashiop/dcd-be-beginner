const http = require('http')

const HOST = 'localhost'
const PORT = 5000
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
  const { method } = request

  response.setHeader('Content-Type', 'text/html')
  response.statusCode = 200

  if (method === 'GET') {
    return response.end('<h1>HTTP server GET</h1>')
  }
  if (method === 'POST') {
    // Test
    // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Poppy\"}"
    let body = []
    request.on('data', (chunk) => body.push(chunk))
    request.on('end', () => {
      body = Buffer.concat(body).toString()
      const { name } = JSON.parse(body) || {}
      return response.end(`<h1>Hi ${name}</h1>`)
    })
  }
}

const server = http.createServer(requestListener)
server.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`)
})
