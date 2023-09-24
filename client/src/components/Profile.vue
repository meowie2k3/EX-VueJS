<template>
  <div>
    <h1>Profile</h1>
    <p>uid: {{ uid }}</p>
    <p>email: {{ email }}</p>
    <p>role: {{ role }}</p>
    <p v-if="location">location: {{ location }}</p>
    <div v-if="!location">
      <input type="text" v-model="location" placeholder="location">
      <button @click="updateLocation">Update Location</button>
    </div>
    <br>
    <p v-if="description">description: {{ description }}</p>
    <div v-if="!description">
      <input type="text" v-model="description" placeholder="description">
      <button @click="updateDescription">Update Description</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      uid: this.$store.state.user.uid,
      email: this.$store.state.user.email,
      role: this.$store.state.user.role,
      location: this.$store.state.user.location,
      description: this.$store.state.user.description
    }
  },
  methods: {
    updateLocation () {
      this.$store.dispatch('updateLocation', this.location)
    },
    updateDescription () {
      this.$store.dispatch('updateDescription', this.description)
    }
  }
}
</script>
