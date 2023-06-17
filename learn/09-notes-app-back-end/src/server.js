const Hapi = require('@hapi/hapi')
// commmon modules
require('dotenv').config()

const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: process.env.SERVER_PORT,
    host: 'localhost',
    // for all routes
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  })
  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
