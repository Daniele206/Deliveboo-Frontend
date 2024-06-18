<script>
//axios
import axios from "axios";
//axios

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
  <Footer />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
* {
  padding: 0;
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: rgb(255, 255, 255);
}
</style>
