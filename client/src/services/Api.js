import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://192.168.2.144:8081/`
  })
}
