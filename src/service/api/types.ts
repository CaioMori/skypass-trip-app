import {AxiosRequestConfig, AxiosResponse} from 'axios'

export type ApiResponse<T> = Promise<AxiosResponse<T>>

export type ApiConfig = AxiosRequestConfig

export type DriverAuthentication = {
  cpf: string
}

export type DriverAuthenticationResponse = ApiResponse<{
  username: string
  token: string
}>

export type ListAllResponse<T> = ApiResponse<{
  content: Array<T>
}>

export type RouteInfo = {
  id: number
  clientId: number
  routeDescription: string
}

export type TripInfo = {
  id: number
  vehicle: vehicleInfo
  service: serviceInfo
  driverId: number
  startOdometer: number
  endOdometer: number
  status: string
  startDateAt: string
  endDateAt: string
  startDateCreatedAt: string
  endDateCreatedAt: string
  startReceivedAt: string
  endReceiveAt: string
  startLongitude: number
  startLatitude: number
  endLongitude: number
  endLatitude: number
}

export type vehicleInfo = {
  id: number
  clientId: number
  plate: string
  internalId: number
  brand: string
  model: string
}

export type serviceInfo = {
  id: number
  cdServico: number
  nrInternoServico: number
  cdCliente: number
  cdLinha: number
  nrInternoLinha: number
  dsOrigem: string
  dsDestino: string
  hrInicio: string
  hrFim: string
  inSentido: string
  qtdLugares: number
  qtdSecoes: number
  inManual: string
  inAtivo: string
  inGerado: string
  recorrencia: undefined
  dsOrgaoCedente: string
  dtExecucao: string
  templateStopByService: string
}

export type tripPostBody = {
  vehicle: {
    id: number
  }
  service: {
    id: number
  }
  startDateCreatedAt: string
  startOdometer: number
  startDateAt: string
  startLatitude: number
  startLongitude: number
}

export type tripPutBody = {
  id: number
  startDateCreatedAt: string
  startOdometer: number
  startDateAt: string
  service: {
    id: number
  }
  vehicle: {
    id: number
  }
  startLatitude: number
  startLongitude: number
  endOdometer: number
  endDateAt: string
  endDateCreatedAt: string
  endLatitude: number
  endLongitude: number
}

export type tripResponse = ApiResponse<{
  id: number
  vehicle: vehicleInfo
  service: serviceInfo
  driverId: number
  startOdometer: number
  endOdometer: number
  status: string
  startDateAt: string
  endDateAt: string
  startDateCreatedAt: string
  endDateCreatedAt: string
  startReceivedAt: string
  endReceiveAt: string
  startLongitude: number
  endLongitude: number
  startLatitude: number
  endLatitude: number
}>
