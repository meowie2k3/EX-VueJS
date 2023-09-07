<template>
    <div>
        <h1>Homepage</h1>
        <input type="email" name="email" v-model="email" placeholder="Email" />
        <br>
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <br>
        <button @click="login">
            Login
        </button>
        <br>
        <div class="error" v-html="message"></div>
        <br>
        <router-link to="/register">
            Don't have an account? Register
        </router-link>
    </div>
    <!-- v-model: bind input data to variables -->
</template>

<script>
import AuthService from '@/services/AuthService'
import Vue from 'vue'
export default {
  name: 'Home',
  data () {
    return {
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
    async login () {
      try {
        await AuthService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        Vue.set(this.$data, 'message', error.response.data)
        // console.log(error.response.data)
      }
    }
  }
}
</script>
