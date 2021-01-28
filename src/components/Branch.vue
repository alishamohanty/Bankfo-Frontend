<template>
  <div class="branch">
    <v-row class="welcome">
      <h1>Welcome to the Bankfo!</h1>
      <h2>Your one stop destination for all information regarding Banks Branches!!</h2>
    </v-row>
    <v-row no-gutters mt-10>
      <v-col cols="10" sm="5" md="7">
        <v-text-field
          v-model="search"
          label="Search Branches"
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
          v-on:change="onCityChange"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :loading="loading"
        v-model="bookmarked"
        :headers="tableHeaders"
        :items="banks"
        :search="search"
        show-select
        item-key="ifsc"
        :items-per-page="5"
      ></v-data-table>
    </v-row>
  </div>
</template>

<script>
import BranchSearchService from '../services/BranchSearchService'

export default {
  data() {
    return {
      bookmarked:[],
      limit:100, //to avoid overload of of data, the limit is set to 100, change the limit if you want
      loading:true,
      search:"",
      banks: [],
      city:"Bangalore",
      cities: ["Bangalore", "Delhi", "Pune", "Chennai", "Hyderabad"],
      tableHeaders: [
        { text: "IFSC", align: "center", value: "ifsc" },
        { text: "BANK ID", align: "center", value: "bank_id" },
        { text: "BRANCH", align: "center", value: "branch" },
        { text: "ADDRESS", align: "center", value: "address" },
        { text: "CITY", align: "center", value: "city" },
        { text: "DISTRICT", align: "center", value: "district" },
        { text: "STATE", align: "center", value: "state" },
      ],
    };
  },
  mounted() {
    this.loading = true
    if(localStorage.bookmarked)
    {
      this.bookmarked = JSON.parse(localStorage.bookmarked);
    }
    BranchSearchService.search(this.city, this.limit)
    .then( result => {
      this.banks = result.data.branches
      this.loading = false
    })
    .catch(err => {
      this.errors.push(err)
    })
  },
  methods:{
    onCityChange: function(){
      this.loading = true
      BranchSearchService.search(this.city, this.limit)
      .then(result => {
        this.banks = result.data.branches;
        this.loading = false
      })
      .catch(err => {
        this.errors.push(err)
      })
    }
  },
  watch: {
    bookmarked: {
      handler(){
        localStorage.setItem("bookmarked", JSON.stringify(this.bookmarked))
        console.log(this.bookmarked);
      },
      deep:true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome {
  justify-content: center;
  margin: 1rem;

}
</style>
