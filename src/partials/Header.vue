<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <div class="fixer">
    <header class="container">
      <div class="row align-content-center header_d">
        <router-link class="col col-5 logo p-0 d-flex text-decoration-none" :to="{name: 'home'}">
          <img src="/src/assets/img/logo.jpg" alt="Logo" class="logo_img"/>
          <h1 class="text_my_red fw-bold ps-2 lh_header">DeliveBoo</h1>
        </router-link>
        <nav class="nav col col-7 d-flex justify-content-end p-0">
          <router-link class="my_btn text-decoration-none" :to="{name: 'restaurants'}">Ristoranti</router-link>
          <router-link class="my_btn text-decoration-none" :to="{name: 'cart'}"><i class="fa-solid fa-cart-shopping"></i></router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;

.fixer{
  position: fixed;
  width: 100%;
  z-index: 999;
}

.header_d {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: white;
  border: 1px solid $primary_red;
  color: black;
  border-radius: 50px;
}

.logo {
  height: 50px;
}

.lh_header{
  height: 50px;
  line-height: 50px;
  font-size: 2rem;
}

@media screen and (max-width: 576px) {
  .header_d{
    border-radius: 0;
    margin-top: 0;
  }
  .lh_header{
    font-size: 1.3rem;
  }
}
</style>
