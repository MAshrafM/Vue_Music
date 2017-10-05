<template>
  <div id="app">
    <v-app>
      <page-header /> 
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <footer class="cyan">
        <v-container>
          <div class="text-xs-center">&copy; 2017 All rights reserved. MAshraf || FreeCodeCamp </div>
        </v-container>
      </footer>
    </v-app>  
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert{
  color: red;
}
</style>
