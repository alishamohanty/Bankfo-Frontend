<template>
  <v-footer padless>
    <v-col
      class="text-center bg-color"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Bankfo</strong>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.bg-color{
  background-color: #e6dde7;
}
.footer{
  margin-top:2rem;
}
</style>