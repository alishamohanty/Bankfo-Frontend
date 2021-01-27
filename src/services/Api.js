import axios from 'axios'
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'
export default () => {
  return axios.create({
    baseURL: ``,
    headers: { 'Cache-Control': 'no-cache' },
    adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter))
  })
}