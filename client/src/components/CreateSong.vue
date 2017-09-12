<template>
  <v-layout>
    <v-flex xs4">
      <panel title="Song Metadata">
        <v-text-filed 
          label="Title" 
          v-model="song.title">
        </v-text-filed>
        <v-text-filed 
          label="Artist" 
          v-model="song.artist">
        </v-text-filed>
        <v-text-filed 
          label="Genre" 
          v-model="song.genre">
        </v-text-filed>
        <v-text-filed 
          label="Album" 
          v-model="song.album">
        </v-text-filed>
        <v-text-filed 
          label="Cover" 
          v-model="song.albumImageUrl">
        </v-text-filed>
        <v-text-filed 
          label="Youtube" 
          v-model="song.youtubeId">
        </v-text-filed>
      </panel>
    </v-flex>
    <v-flex xs7 class="ml-2">
      <panel title="Song Structure">
        <v-text-filed
          label="Lyrics"
          multi-line
          v-model="song.lyrics">
        </v-text-filed>
        <v-text-filed
          label="Chords"
          multi-line
          v-model="song.cords">
        </v-text-filed>
      </panel>
      <v-btn
        dark
        class="cyan"
        @click="create">
      Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        cords: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        // call API
        await SongsService.post(this.song)
        // redirect
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>