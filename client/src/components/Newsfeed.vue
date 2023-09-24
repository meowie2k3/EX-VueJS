<template>
  <div>
    <button
    @click = "logout">Logout</button>
    <br>
    <br>
    <button
    @click = "gotoProfile">Profile Page</button>
  </div>
</template>

<script>
export default {
  name: 'Newsfeed',
  created () {
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push('/')
    }
  },
  data () {
    return {
      user: this.$store.state.user
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    },
    gotoProfile () {
      this.$router.push('/profile')
    }
  }
}
</script>
