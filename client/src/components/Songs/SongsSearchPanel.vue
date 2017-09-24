<template>
  <panel title="Search">
    <v-text-field
    label= "Search songs"
    v-model="search"
    ></v-text-field>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>

</style>