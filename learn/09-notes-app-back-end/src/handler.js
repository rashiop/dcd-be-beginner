/* eslint-disable import/no-extraneous-dependencies */
const { nanoid } = require('nanoid')

const notes = require('./notes')

const addNoteHandler = (request, h) => {
  const { tags, title, body } = request.payload

  const id = nanoid(16)
  const createdAt = new Date().toISOString()
  const updatedAt = createdAt
  const newNote = {
    createdAt,
    id,
    tags: tags || [],
    title,
    updatedAt,
    body,
  }
  notes.push(newNote)

  const isSuccess = notes.some((note) => note.id === id)
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      error: false,
      message: 'New note added',
      data: {
        noteId: id,
      },
    })

    response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com')
    response.code(201)
    return response
  }

  const response = h.response({
    status: 'fail',
    error: true,
    message: 'Failed to add note',
  })
  response.code(500)
  return response
}

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes: notes || [],
  },
})

const getNoteByIdHandler = (request, h) => {
  const { id: noteId } = request.params
  const note = notes.find(({ id }) => id === noteId)

  if (note) {
    return {
      status: 'success',
      data: {
        note: note || {},
      },
    }
  }

  const response = h.response({
    status: 'fail',
    error: true,
    message: 'Note not found',
  })
  response.code(404)
  return response
}

const editNoteHandler = (request, h) => {
  const { id: noteId } = request.params
  const { tags, title, body } = request.payload
  const noteIdx = notes.findIndex(({ id }) => id === noteId)

  if (noteIdx === -1) {
    const response = h.response({
      status: 'fail',
      error: true,
      message: 'Note not found',
    })
    response.code(404)
    return response
  }

  const updatedNote = {
    ...notes[noteIdx],
    tags: tags || notes.tags,
    title: title || notes.title,
    body: body || notes.body,
    updatedAt: new Date().toISOString(),
  }
  notes[noteIdx] = updatedNote
  const response = h.response({
    status: 'success',
    error: false,
    message: 'Success to update note',
  })
  response.code(200)
  return response
}

const deleteNoteByIdHandler = (request, h) => {
  const { id: noteId } = request.params
  const index = notes.findIndex(({ id }) => id === noteId)

  if (!index) {
    const response = h.response({
      error: true,
      status: 'fail',
      message: 'Note not found',
    })
    response.code(404)
    return response
  }

  notes.splice(index, 1)
  const response = h.response({
    error: false,
    message: 'Success to delete note',
    status: 'success',
  })
  response.code(200)
  return response
}
module.exports = {
  addNoteHandler,
  deleteNoteByIdHandler,
  editNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
}
