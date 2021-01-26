<template>
  <v-app>
    <div id="app">
      <Branch msg="Welcome to Your Vue.js App"/>
    </div>
  </v-app>
</template>

<script>
import Branch from './components/Branch.vue'

export default {
  name: 'App',
  components: {
    Branch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
