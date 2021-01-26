<template>
  <v-app-bar
    app
    color="primary"
    dark
    align-center
  >
  
    <div class="d-flex ">
      <h3 class="pl-3">Bankfo</h3>   
    </div>

    <v-spacer/>

    
      <router-link to="/branches">
      <v-btn>Branches</v-btn>
      </router-link>
    
      <router-link to="/about">
        <v-btn class="ma-2">About</v-btn>
      </router-link>
    
  </v-app-bar>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>