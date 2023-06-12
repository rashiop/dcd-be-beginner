const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage'
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
