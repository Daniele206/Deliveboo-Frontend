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
        originalRestaurants: [],
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
          this.originalRestaurants = result.data;
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

      // selecteType(){
      //   console.log('parte');
      //   console.log(this.store.typesSelected);
      //   if(Object.keys(this.store.typesSelected).length === 0){
      //     this.restaurants = this.originalRestaurants;
      //   }else{
      //     this.restaurants = this.originalRestaurants.map()
      //   }
      //   console.log('finisce');
      // },

      selectType() {
        const selectedTypes = Object.values(this.store.typesSelected);

        if (selectedTypes.length === 0) {
            this.restaurants = this.originalRestaurants;
        } else {
            this.restaurants = this.originalRestaurants.filter(restaurant => {
                // Verifica che ogni tipo selezionato sia presente nei tipi del ristorante
                return selectedTypes.every(selectedType =>
                    restaurant.types.some(type => type.name === selectedType)
                );
            });
        }

      }
    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <div class="container pb-3">
    <h1 class="text-center mt-4 mb-5 fw-bold text-light">Tutti i nostri ristoranti</h1>
    <div v-if="redyReedTypes && redyReedRestaurants" class="checkbox_container d-flex justify-content-center">
      <TypeSelector 
        :types="types"
        @typeChek="selectType()"
      />
    </div>
    <div v-if="redyReedTypes && redyReedRestaurants" class="card_container d-flex flex-wrap justify-content-center">
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id"
      :restaurant="restaurant"
      />
    </div>
    <h4 v-else class="d-flex justify-content-center mt-3 my_h">Loading...</h4>
  </div>
</template>

<style lang="scss" scoped>
  .my_h{
    height: 100vh;
  }
</style>