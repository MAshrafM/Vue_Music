<template>
  <v-layout>
    <v-flex xs4">
      <panel title="Song Metadata">
        <v-text-filed 
          label="Title" 
          v-model="title">
        </v-text-filed>
        <v-text-filed 
          label="Artist" 
          v-model="artist">
        </v-text-filed>
        <v-text-filed 
          label="Genre" 
          v-model="genre">
        </v-text-filed>
        <v-text-filed 
          label="Album" 
          v-model="album">
        </v-text-filed>
        <v-text-filed 
          label="Cover" 
          v-model="albumImageUrl">
        </v-text-filed>
        <v-text-filed 
          label="Youtube" 
          v-model="youtubeId">
        </v-text-filed>
      </panel>
    </v-flex>
    <v-flex xs7 class="ml-2">
      <panel title="Song Structure">
        <v-text-filed
          label="Lyrics"
          multi-line
          v-model="lyrics">
        </v-text-filed>
        <v-text-filed
          label="Chords"
          multi-line
          v-model="cords">
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
export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      cords: null
    }
  },
  components: {
    Panel
  },
  methods: {
    create () {
      // call API
    }
  }
}
</script>

<style scoped>

</style>