<template>
  <panel title="Song Metadata">
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
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }"
        >
          Edit
        </v-btn>
        
        <v-btn 
          v-if="isUserLoggedIn && !isBookmarked"
          dark
          class="cyan"
          @click="bookmark"
        >
          Bookmark
        </v-btn>
        <v-btn 
          v-if="isUserLoggedIn && isBookmarked"
          dark
          class="cyan"
          @click="unbookmark"
        >
          Unbookmark
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-cover" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data () {
    isBookmarked: false
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song () {
      try {
        const bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
        this.isBookmarked = !!bookmark
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    }
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