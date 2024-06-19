<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <div>
    <header class="container">
      <div class="row align-content-center header_d">
        <router-link class="col logo p-0" :to="{name: 'home'}">
          <img src="/src/assets/img/logo.jpg" alt="Logo" class="logo_img"/>
        </router-link>
        <nav class="nav col d-flex justify-content-end p-0">
          <router-link class="my_btn text-decoration-none" :to="{name: 'restaurants'}">Ristoranti</router-link>
          <router-link class="my_btn text-decoration-none" :to="{name: 'cart'}"><i class="fa-solid fa-cart-shopping"></i></router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;
.header_d {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: white;
  color: black;
  border-radius: 50px;
}

.logo {
  height: 50px;
}
</style>
