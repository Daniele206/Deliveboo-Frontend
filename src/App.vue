<script>
import Header from "./partials/Header.vue";
import Footer from "./partials/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <div class="fixer_pt">
    <router-view></router-view>
  </div>
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/variables" as *;

body {
  background-color: $primary_red;
  .fixer_pt{
    padding-top: 100px;
  }
}
</style>
