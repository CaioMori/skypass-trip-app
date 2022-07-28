import {AxiosInstance} from 'axios'

export function injectAxiosDebug(axios: AxiosInstance): void {
  axios.interceptors.response.use(
    (response) => {
      /* eslint-disable no-console */
      return response
    },
    (error) => {
      if (error?.response?.config) {
        /* eslint-disable no-console */
      }
      throw error
    },
  )
}
