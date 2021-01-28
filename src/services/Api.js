import axios from 'axios'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'
export default () => {
  return axios.create({
    baseURL: process.env.backend_url || `https://bankfo-backend.herokuapp.com/` ,
    headers: { 'Cache-Control': 'no-cache' },
    adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
  })
}