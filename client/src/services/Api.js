import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://secure-tadpole-daily.ngrok-free.app`
  })
}
