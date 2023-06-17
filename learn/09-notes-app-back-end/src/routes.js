const {
  addNoteHandler,
  deleteNoteByIdHandler,
  editNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
} = require('./handler')

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: addNoteHandler,
    // for certain route & method
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    path: '/notes',
    method: 'GET',
    handler: getAllNotesHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: getNoteByIdHandler,
  },
  {
    path: '/notes/{id}',
    method: 'PUT',
    handler: editNoteHandler,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: deleteNoteByIdHandler,
  },
]

module.exports = routes
