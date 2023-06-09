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
  const { url, method } = request

  response.setHeader('Content-Type', 'text/html')
  response.setHeader('X-Powered-By', 'NodeJS')
  response.statusCode = 200

  switch (url) {
    case '/': {
      if (method === 'GET') return response.end('Ini adalah homepage')

      response.statusCode = 401
      return response.end(JSON.stringify({ message: `Halaman tidak dapat diakses dengan ${method} request` }))
    }
    case '/about': {
      if (method === 'GET') {
        return response.end('<h1>Halo! Ini adalah halaman about</h1>')
      }
      if (method === 'POST') {
        // Test
        // curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Poppy\"}"
        let body = []
        request.on('data', (chunk) => body.push(chunk))
        request.on('end', () => {
          body = Buffer.concat(body).toString()
          const { name } = JSON.parse(body) || {}
          return response.end(JSON.stringify({ message: `Hi ${name}` }))
        })
      } else {
        response.statusCode = 401
        return response.end(JSON.stringify({ message: `Halaman tidak dapat diakses dengan ${method} request` }))
      }
      break
    }
    default: {
      response.statusCode = 404
      response.statusMessage = 'User is not found'
      return response.end(JSON.stringify({ message: `User not found` }))
    }
  }
}

const server = http.createServer(requestListener)
server.listen(PORT, HOST, () => {
  console.log(`Server berjalan pada http://${HOST}:${PORT}`)
})
