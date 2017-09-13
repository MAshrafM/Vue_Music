<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn 
          class="cyan accent-2"
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          fab
          light
          medium
          absolute
          right
          middle
        >
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.albm}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route);
    }
  },
  async mounted () {
    // do a req for the backend for the songs
    // .data for axios
    this.songs  = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>