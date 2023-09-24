import Api from '@/services/Api'

export default {
  updateInfo (newUser) {
    return Api().post('updateInfo', newUser)
  }
}
