import Api from '@/services/Api'

export default {
    register (credentials) {
        // do post request to /register endpoint on our backend
        return Api().post('register', credentials)
    }
}

// AuthService.register({
//     email: '',
//     password: ''
// })