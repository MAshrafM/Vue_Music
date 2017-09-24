<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div v-html="error" class="error"/>
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
          <v-btn dark class="cyan" @click="login">Login</v-btn>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>