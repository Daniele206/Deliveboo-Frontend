<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from '../data/store';
  // store

  // components
  import RestaurantCard from '../components/RestaurantCard.vue';
  import TypeSelector from '../components/TypeSelector.vue';
  // components


  export default {
    name: 'restaurants',

    components:{
      RestaurantCard,
      TypeSelector
    },

    data(){
      return{
        store,
        restaurants: [],
        redyReedRestaurants: false,
        types: [],
        redyReedTypes: false
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl + '/restaurants')
          .then(result => {
            this.redyReedRestaurants = true;
            this.restaurants = result.data;
            console.log(this.restaurants);
          })
          .catch(error => {
            console.log(error);
          })

        axios.get(this.store.apiUrl + '/types')
          .then(result => {
            this.redyReedTypes = true;
            this.types = result.data;
            console.log(this.types);
          })
          .catch(error => {
            console.log(error);
          })
      },
    },

    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <div class="container">
    <h1 class="text-center mt-4 mb-5 fw-bold text-light">Tutti i nostri ristoranti</h1>
    <div v-if="redyReedTypes && redyReedRestaurants" class="checkbox_container d-flex justify-content-center">
      <TypeSelector 
        :types="types"
      />
    </div>
    <div v-if="redyReedTypes && redyReedRestaurants" class="card_container d-flex flex-wrap justify-content-center">
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id"
      :restaurant="restaurant"
      />
    </div>
    <h4 v-else class="d-flex justify-content-center mt-3">Loading...</h4>
  </div>
</template>

<style lang="scss" scoped>

</style>