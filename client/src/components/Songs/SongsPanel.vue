<template>
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
    <div 
      v-for="song in songs" 
      :key="song.id"
      class="song"
    >
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          
          <v-btn
            dark
            class="cyan"
            @click="navigateTo({
              name: 'song',
              params: {
                songId: song.id
              }
            })"
          >
          View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-cover" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
      {{song.albm}}
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: []
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
.album-cover{
  width: 70%;
  margin: 0 auto;
}
</style>