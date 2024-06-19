<script>
import Hero from "../partials/Hero.vue"
import Swiper from "../partials/Swiper.vue";
import Consegna from "../partials/Consegna.vue";
import Scarica from "../partials/Scarica.vue";

  export default {
    components:{
      Hero,
      Swiper,
      Consegna,
      Scarica,
    }

  }
</script>

<template>
  <Hero />
  
  <Swiper />

  <Consegna />

  <Scarica />
</template>


<style lang="scss" scoped>

</style>