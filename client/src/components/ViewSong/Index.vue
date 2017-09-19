<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>
    
    <v-flex xs6 ml-2>
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
  
  <v-layout>
    <v-flex xs6>
      <panel title="Chords">
        <textarea
          readonly
          v-model="song.cords"
        ></textarea>
      </panel>
    </v-flex>
    <v-flex xs6 ml-2>
      <panel title="Lyrics">
        <textarea
          readonly
          v-model="song.lyrics">
        </textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import Panel from '@/components/Panel'
import YouTube from '@/components/ViewSong/YouTube'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height:  600px;
  border-style: none;
  border-color: transparent;
  outline: none;
  overflow: auto;
  padding: 40px;
}
</style>