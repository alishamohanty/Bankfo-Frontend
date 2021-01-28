<template>
  <div id="app">
      <v-app>
        <page-header/>
        <v-main>
          <v-container>
            <transition>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </transition>
          </v-container>
        </v-main>
        <page-footer/>
      </v-app>
  </div>
</template>

<script>
// import Branch from './components/Branch.vue'
import PageFooter from './components/Footer.vue'
import PageHeader from './components/Header.vue'
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
  font-family: 'Roboto';
  text-align: center;
  color: #2c3e50;
}
</style>
