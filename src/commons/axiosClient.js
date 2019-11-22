import axios from "axios"

export const baseURL = 'https://pokeapi.co/api/v2/pokemon'

const client = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

export const axiosLongRequest = axios.create({
  baseURL: baseURL,
  timeout: 60000
})

export default client
