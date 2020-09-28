import api from './api.service'

export default {
  addMessage (message) {
    return api.post('', message).then((res) => { return res })
  },
  updateMessage (id, message) {
    return api.patch('/' + id, message).then((res) => { return res })
  },
  getMessage (id) {
    return api.get('/' + id).then((res) => { return res })
  },
  deleteMessage (id) {
    return api.delete('/' + id).then((res) => { return res })
  },
  getAllMessages (queryParam) {
    if (!queryParam._sort) {
      queryParam._sort = 'datetime'
    }
    return api.get('', { params: queryParam }).then((res) => { return res })
  }
}
