<template>
  <panel title="Search">
    <v-btn 
      icon 
      slot="action"
      fab
      dark
      medium
      absolute
      right
      middle
    >
      <v-icon>search</v-icon>
    </v-btn>
    <v-text-field
    label= "Search songs"
    v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>