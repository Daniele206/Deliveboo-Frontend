<script>
//axios
import axios from "axios";
//axios

import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";
import Hero from "./partials/Hero.vue";

export default {
  components: {
    Header,
    Footer,
    Hero,
  },
};
</script>

<template>
  <Header />
  
  <Hero />

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
