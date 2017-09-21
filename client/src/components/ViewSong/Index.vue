<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>
    
    <v-flex xs6 class="ml-2">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
  
  <v-layout>
    <v-flex xs6>
      <chords :song="song" />
    </v-flex>
    <v-flex xs6 class="ml-2 mt-2">
      <lyrics :song="song" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from '@/components/ViewSong/SongMetadata'
import Panel from '@/components/Panel'
import YouTube from '@/components/ViewSong/YouTube'
import Lyrics from '@/components/ViewSong/Lyrics'
import Chords from '@/components/ViewSong/Chords'

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
    YouTube,
    Lyrics,
    Chords
  }
}
</script>

<style scoped>

</style>