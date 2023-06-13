import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const token =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzNjE3NDA3IiwidW5pcXVlX25hbWUiOiJTaG9wRG9vcmFUZXN0IE1heSIsImdyb3Vwc2lkIjoiNTciLCJyb2xlIjoiMyIsInByaW1hcnlzaWQiOiIiLCJuYmYiOjE2ODA2ODY1MTYsImV4cCI6MTcxMjIyMjUxNiwiaWF0IjoxNjgwNjg2NTE2LCJpc3MiOiJ0aGloYXNvZSJ9.gq5loY48iHVBxwww7gj-omjQSopQYQWqQM-2hneiSZ4euXfkP5UnjVPxjqUO-N24WiwYs1QBLu9acDLwV8Y9iA'

const getData = axios.create({
  baseURL: 'https://vapepiapi.shopdoora.com/vapepi/api/',
  headers: { authorization: `Bearer ${token}` },
})

const getImages = async (endpoint) => {
  const { data } = await getData.get(endpoint)
  return data
}

export default function useFetchImages(endpoint) {
  return useQuery(['images', endpoint], () => getImages(endpoint))
}
