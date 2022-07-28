import {simplifiedToday, tomorrow, yesterday} from '../../helpers/days'
import axios from './axios'
import {
  ApiResponse,
  DriverAuthentication,
  DriverAuthenticationResponse,
  RouteInfo,
  serviceInfo,
  TripInfo,
  tripPostBody,
  tripPutBody,
  tripResponse,
  vehicleInfo,
} from './types'

export const api = {
  auth: {
    login(body: DriverAuthentication): DriverAuthenticationResponse {
      return axios.post('/authentication/driver-sign-in', body)
    },
  },
  route: {
    listAll(): ApiResponse<Array<RouteInfo>> {
      return axios.get('/trips/route')
    },
  },
  trip: {
    listAll(): ApiResponse<Array<TripInfo>> {
      return axios.get(`/trips/trip/${yesterday}/${tomorrow}`)
    },
    post(body: tripPostBody): tripResponse {
      return axios.post('/trips/trip', body)
    },
    put(body: tripPutBody): tripResponse {
      return axios.put('/trips/trip', body)
    },
  },
  vehicles: {
    listAll(): ApiResponse<Array<vehicleInfo>> {
      return axios.get(`/trips/vehicle`)
    },
  },
  services: {
    listByDate(date: string): ApiResponse<Array<serviceInfo>> {
      return axios.get(`/services/services?active=A&manual=N&executionDate=${date}`)
    },
  },
  setAccessToken(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  removeAccessToken() {
    axios.defaults.headers.common.Authorization = ''
  },
  axios,
}
