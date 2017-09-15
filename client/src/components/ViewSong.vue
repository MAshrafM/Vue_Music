<template>

</template>

<script>
export default {
  import 'SongsService' from '@/services/SongsService'
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = await SongsService.show(songId)
  }
}
</script>

<style scoped>

</style>