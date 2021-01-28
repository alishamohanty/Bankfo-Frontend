import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
export default () => {
  return axios.create({
    baseURL: process.env.backend_url || `https://bankfo-backend.herokuapp.com/` ,
    headers: { 'Cache-Control': 'no-cache' },
    adapter: (cacheAdapterEnhancer(axios.defaults.adapter))
  })
}