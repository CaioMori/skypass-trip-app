import _axios from 'axios'
import config from '../config'
import {injectAxiosDebug} from '../utils/injectAxiosDebug'

const axios = _axios.create({
  baseURL: config.baseURL?.replace(/\/$/, ''),
})

injectAxiosDebug(axios)

export default axios
