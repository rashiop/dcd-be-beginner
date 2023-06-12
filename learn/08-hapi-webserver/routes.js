const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const response = h.response('Homepage').code(200)
      response.type('text/plain')
      response.header('X-Custom', 'value')
      return response
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return {
        message: 'Method not allowed',
      }
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { email, password } = request.payload || {}
      const response = h.response(`Welcome ${email}`).code(201)
      return response
    },
  },
  {
    method: 'GET',
    path: '/user/{username?}',
    handler: (request, h) => {
      const { username = 'anon' } = request.params
      return `Hi ${username}!`
    },
  },
  {
    method: 'GET',
    path: '/hello/{username?}',
    handler: (request, h) => {
      const { username = 'stranger' } = request.params
      const { location = 'wonderland' } = request.query
      return `Hello ${username}; are you going to ${location}?`
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return {
        message: 'About',
      }
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return {
        message: 'Method not allowed',
      }
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return {
        message: 'Page not found',
      }
    },
  },
]

module.exports = routes
