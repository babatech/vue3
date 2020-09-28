import api from './api.service'

export default {
  addCategory (category) {
    return api.post('/categories', category).then((res) => { return res })
  },
  updateCategory (id, category) {
    return api.patch('/categories/' + id, category).then((res) => { return res })
  },
  getCategory (id) {
    return api.get('/categories/' + id).then((res) => { return res })
  },
  deleteCategory (id) {
    return api.delete('/categories/' + id).then((res) => { return res })
  },
  getAllCategories (queryParam) {
    if (!queryParam._sort) {
      queryParam._sort = 'datetime'
    }
    return api.get('/categories', { params: queryParam }).then((res) => { return res })
  }
}
