<template>
  <div>
    <button
    v-if="$store.state.isUserLoggedIn"
    @click = "logout">Logout</button>
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
    }
  }
}
</script>
