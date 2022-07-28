import _axios from 'axios'
import {api} from './api'

export const {isAxiosError} = _axios

export function formatAxiosError(error: any) {
  if (isAxiosError(error)) {
    return error.message
  }
  return `Unknown: ${error}`
}

export * from './types'
export default api
