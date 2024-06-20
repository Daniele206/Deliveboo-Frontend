<script>
import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";

  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from './data/store';
  // store


export default {
  components: {
    Header,
    Footer,
  },


  data(){
    return{
      store
    }
  },

  methods:{
    getApi(){
      axios.get(this.store.apiUrl + '/restaurants')
        .then(result => {
          this.store.redyReedRestaurants = true;
          this.store.restaurants = result.data;
          this.store.originalRestaurants = result.data;
            console.log(this.store.restaurants);
          })
          .catch(error => {
            console.log(error);
          })
    }
  },

  mounted(){
    this.getApi()
  }
};
</script>

<template>
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/variables" as *;

body {
  background-color: $primary_red;
}
</style>
