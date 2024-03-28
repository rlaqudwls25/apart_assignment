import axios from 'axios'

export enum Method {
  GET = 'get',
}

axios.defaults.baseURL = 'https://api.github.com/'

const customAxios = async (
  method: Method,
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const res = await axios[method](url, ...rest)

  return res.data
}

export default customAxios
