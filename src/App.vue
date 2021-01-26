<template>
  <div id="app">
      <v-app>
        <page-header/>
        <v-content>
          <v-container>
            <router-view/>
          </v-container>
        </v-content>
        <page-footer/>
      </v-app>
  </div>
</template>

<script>
// import Branch from './components/Branch.vue'
import PageHeader from './components/Footer.vue'
import PageFooter from './components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
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
  /* margin-top: 60px; */
}
</style>
