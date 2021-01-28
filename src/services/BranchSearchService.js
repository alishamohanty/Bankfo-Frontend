import Api from './Api'

export default {
  search(city, limit) {
    return Api().get(`/api/branches?q=${city}&limit=${limit}&offset=0`, { useCache: true})
  }
}