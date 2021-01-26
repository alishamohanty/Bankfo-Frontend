<template>
  <v-footer padless absolute>
    <v-col
      class="text-center bg-color"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Brankrate</strong>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.bg-color{
  background-color: #c7c7c7;
}
</style>