<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>
    
    <v-flex xs6 ml-2>
      <panel title="Youtube>
      
      </panel>
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
export default {
  import 'SongsService' from '@/services/SongsService'
  import 'Panel' from '@/components/Panel'
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
    Panel
  }
}
</script>

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