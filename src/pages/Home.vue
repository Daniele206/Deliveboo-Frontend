<script>
import Hero from "../partials/Hero.vue"
import Swiper from "../components/Swiper.vue";
import Consegna from "../partials/Consegna.vue";
import Scarica from "../partials/Scarica.vue";

  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from '../data/store';
  // store

  export default {
    components:{
      Hero,
      Swiper,
      Consegna,
      Scarica,
    },

    data(){
      return{
        store,
        types: [],
        redyReedTypes: false
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl + '/types')
          .then(result => {
            this.redyReedTypes = true;
            this.types = result.data;
            console.log(this.types);
          })
          .catch(error => {
            console.log(error);
          })
      }
    },

    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <Hero />
  
  <Swiper 
  :types="types"
  />

  <Consegna />

  <Scarica />
</template>


<style lang="scss" scoped>

</style>