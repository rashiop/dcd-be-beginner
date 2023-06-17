const Hapi = require('@hapi/hapi')
// commmon modules
require('dotenv').config()

const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: process.env.SERVER_PORT || 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
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
