<template>
    <div>
        <h1>Register</h1>
        <input type="name" name="name" v-model="name" placeholder="Name" />
        <br>
        <input type="role" name="role" v-model="role" placeholder="Role" />
        <br>
        <input type="email" name="email" v-model="email" placeholder="Email" />
        <br>
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <br>
        <button @click="register">
            Register
        </button>
        <br>
        <div class="error" v-html="message"></div>
        <br>
        <router-link to="/">
            Already have an account? Login
        </router-link>
    </div>
    <!-- v-model: bind input data to variables -->
</template>

<script>
import AuthService from '@/services/AuthService'
import Vue from 'vue'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      role: '',
      email: '',
      password: '',
      message: null
    }
  },
  watch: {
    $route () {
      Vue.set(this.$data, 'message', '')
    }
  },
  methods: {
    async register () {
      // console.log('register', this.Email, this.Password)
      try {
        await AuthService.register({
          name: this.name,
          role: this.role,
          email: this.email,
          password: this.password
        })
        Vue.set(this.$data, 'message', 'Registration successful. Redirecting to home page.')
        setTimeout(() => {
          this.$router.push('/')
        }, 2000)
      } catch (error) {
        Vue.set(this.$data, 'message', error.response.data)
        // console.log(error.response.data)
      }
    }
  }
}
</script>

<style scoped>
.error {
    color: red;
    white-space: pre-line;
}
</style>
