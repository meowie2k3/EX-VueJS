<template>
    <div>
        <h1>Register</h1>

        <input type="email" name="email" v-model="email" placeholder="Email" />
        <br>
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <br>
        <button @click="register">
            Register
        </button>
    </div>
    <!-- v-model: bind input data to variables -->
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register () {
            //console.log('register', this.Email, this.Password)
            const response = await AuthService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
        }
    }
}
</script>

<style scoped></style>