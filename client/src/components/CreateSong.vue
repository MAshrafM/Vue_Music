<template>
  <v-layout>
    <v-flex xs4">
      <panel title="Song Metadata">
        <v-text-filed 
          label="Title" 
          required
          :rules="[required]"
          v-model="song.title">
        </v-text-filed>
        <v-text-filed 
          label="Artist" 
          required
          :rules="[required]"
          v-model="song.artist">
        </v-text-filed>
        <v-text-filed 
          label="Genre" 
          required
          :rules="[required]"
          v-model="song.genre">
        </v-text-filed>
        <v-text-filed 
          label="Album" 
          required
          :rules="[required]"
          v-model="song.album">
        </v-text-filed>
        <v-text-filed 
          label="Cover" 
          required
          :rules="[required]"
          v-model="song.albumImageUrl">
        </v-text-filed>
        <v-text-filed 
          label="Youtube" 
          required
          :rules="[required]"
          v-model="song.youtubeId">
        </v-text-filed>
      </panel>
    </v-flex>
    <v-flex xs7 class="ml-2">
      <panel title="Song Structure">
        <v-text-filed
          label="Lyrics" 
          required 
          :rules="[required]" 
          multi-line
          v-model="song.lyrics">
        </v-text-filed>
        <v-text-filed
          label="Chords" 
          required 
          :rules="[required]" 
          multi-line 
          v-model="song.cords">
        </v-text-filed>
      </panel>
      
      <div 
        class="danger-alert" 
        v-if="error"
      >
        {{error}}
      </div>
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
      },
      error: null,
      required: (value) => !value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please Fill in all the required fields.'
        return
      }
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