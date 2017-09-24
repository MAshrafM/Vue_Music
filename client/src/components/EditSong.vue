<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field 
          label="Title" 
          required
          :rules="[required]"
          v-model="song.title">
        </v-text-field>
        <v-text-field 
          label="Artist" 
          required
          :rules="[required]"
          v-model="song.artist">
        </v-text-field>
        <v-text-field 
          label="Genre" 
          required
          :rules="[required]"
          v-model="song.genre">
        </v-text-field>
        <v-text-field 
          label="Album" 
          required
          :rules="[required]"
          v-model="song.album">
        </v-text-field>
        <v-text-field 
          label="Cover" 
          required
          :rules="[required]"
          v-model="song.albumImageUrl">
        </v-text-field>
        <v-text-field 
          label="Youtube" 
          required
          :rules="[required]"
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>
    <v-flex xs7 class="ml-2">
      <panel title="Song Structure">
        <v-text-field
          label="Lyrics" 
          required 
          :rules="[required]" 
          multi-line
          v-model="song.lyrics">
        </v-text-field>
        <v-text-field
          label="Chords" 
          required 
          :rules="[required]" 
          multi-line 
          v-model="song.cords">
        </v-text-field>
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
        @click="save">
      Save Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
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
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please Fill in all the required fields.'
        return
      }
      
      const songId = this.$store.state.route.params.songId
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>