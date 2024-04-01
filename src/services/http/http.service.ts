import axios from 'axios'
import { api } from '../../api'

interface RequestNoData {
  url: string
  params?: any
}

interface RequestWithData<Data> extends RequestNoData {
  data: Data
}


export const getHttp = async <Response>({ url, params }: RequestNoData) => {
  return await api.get<Response>(url, { params })
}


