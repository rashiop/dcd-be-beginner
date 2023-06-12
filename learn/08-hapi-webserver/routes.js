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
