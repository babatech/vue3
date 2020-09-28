import api from './api.service'

export default {
  addCategory (category) {
    return api.post('', category).then((res) => { return res })
  },
  updateCategory (id, category) {
    return api.patch('/' + id, category).then((res) => { return res })
  },
  getCategory (id) {
    return api.get('/' + id).then((res) => { return res })
  },
  deleteCategory (id) {
    return api.delete('/' + id).then((res) => { return res })
  },
  getAllCategorys (queryParam) {
    if (!queryParam._sort) {
      queryParam._sort = 'datetime'
    }
    return api.get('', { params: queryParam }).then((res) => { return res })
  }
}
