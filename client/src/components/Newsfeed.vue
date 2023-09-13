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
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>
