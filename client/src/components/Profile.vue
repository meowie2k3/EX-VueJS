<template>
  <div>
    <h1>Profile</h1>
    <p>uid: {{ user.uid }}</p>
    <p>email: {{ user.email }}</p>
    <p>role: {{ user.role }}</p>
    <p v-if="user.location">location: {{ user.location }}</p>
    <div v-if="!user.location">
      <input type="text" v-model="location" placeholder="location">
      <button @click="updateInformation">Update Location</button>
    </div>
    <br>
    <p v-if="user.description">description: {{ user.description }}</p>
    <div v-if="!user.description">
      <input type="text" v-model="description" placeholder="description">
      <button @click="updateInformation">Update Description</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import UpdateService from '@/services/UpdateService'
export default {
  name: 'Profile',
  created () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push('/')
    }
  },
  data () {
    return {
      user: this.$store.state.user,
      location: '',
      description: ''
    }
  },
  watch: {
    $route () {
      Vue.set(this.$data, 'user')
    }
  },
  methods: {
    async updateInformation () {
      // fill in missing information to create new user object
      const user = {
        uid: this.user.uid,
        email: this.user.email,
        role: this.user.role,
        location: this.user.location || this.location,
        description: this.user.description || this.description
      }
      // console.log(user)
      // TODO: update user information in database
      // update client user object
      this.$store.dispatch('setUser', user)
      Vue.set(this.$data, 'user', user)
    }
  }
}
</script>
