<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div v-html="error" class="danger-alert"/>
        <form
          name="vuemusic-form"
          autocomplete="off">
            <v-text-field
              label= "Email"
              v-model="email"
              ></v-text-field>
            <v-text-field
              label= "Password"
              v-model="password"
              type="password"
              ></v-text-field>
            <br />
            <v-btn dark class="cyan" @click="register">Register</v-btn>
        </form>
      </panel>
      
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>