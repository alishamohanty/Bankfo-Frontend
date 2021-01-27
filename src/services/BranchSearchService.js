import Api from './Api'
export default {
  search(city) {
    return Api().get(`branches?q=${city}`)
  }
}