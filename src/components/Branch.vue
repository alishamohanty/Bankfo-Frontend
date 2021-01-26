<template>
  <div class="branch">
    <v-row class="welcome">
      <h1>Welcome to the branch section!!</h1>
    </v-row>
    <v-row no-gutters mt-10>
      <v-col cols="10" sm="5" md="7">
        <v-text-field
          v-model="search"
          label="Search"
          dense
          solo
        ></v-text-field>
      </v-col>
      <v-spacer />
      <v-col cols="6" md="4">
        <v-select
          v-model="city"
          :items="cities"
          label="Cities"
          v-on:change="onChange"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: ["Bangalore", "Delhi", "Pune", "Chennai", "Hyderabad"]
    };
  },
  name: "",
  components: {},
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  justify-content: center;
  margin: 1rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
}
</style>
