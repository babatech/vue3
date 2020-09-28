import api from './api.service'

export default {
  addMessage (message) {
    return api.post('/messages', message).then((res) => { return res })
  },
  updateMessage (id, message) {
    return api.patch('/messages/' + id, message).then((res) => { return res })
  },
  getMessage (id) {
    return api.get('/messages/' + id).then((res) => { return res })
  },
  deleteMessage (id) {
    return api.delete('/messages/' + id).then((res) => { return res })
  },
  getAllMessages (queryParam) {
    if (!queryParam._sort) {
      queryParam._sort = 'datetime'
    }
    return api.get('/messages', { params: queryParam }).then((res) => { return res })
  }
}
