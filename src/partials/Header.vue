<script>
  // store
  import { store } from '../data/store';
  import CanvasCart from '../components/CanvasCart.vue';

  export default {
    name: "HeaderComponent",
    components: {
      CanvasCart,
    },
    data() {
      return {
        store,
        update: true,
      }
    },

    methods:{
      updatePage(){
        if(this.update === true){
          location.reload();
        }
      },

      closeCanvass(){
        this.update = false;
        document.getElementById('closeCanvass').click();
      }
    }
  };
</script>

<template>
  <div class="fixer">
    <header class="container">
      <div class="row align-content-center header_d">
        <router-link class="col col-5 logo p-0 d-flex text-decoration-none" :to="{name: 'home'}" @click="store.typesSelected = {}, store.restaurants = store.originalRestaurants">
          <img src="/src/assets/img/logo.jpg" alt="Logo" class="logo_img"/>
          <h1 class="text_my_red fw-bold ps-2 lh_header">DeliveBoo</h1>
        </router-link>
        <nav class="nav col col-7 d-flex justify-content-end p-0">
          <router-link class="my_btn text-decoration-none" :to="{name: 'restaurants'}">Ristoranti</router-link>
          <!-- <router-link class="my_btn text-decoration-none" :to="{name: 'cart'}"><i class="fa-solid fa-cart-shopping"></i></router-link> -->
          
          <!-- offcanvas 
          <button @click="store.getOrderList(), store.checkCart()" class="my_btn text-decoration-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="offcanvasScrolling">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          -->

          <!-- bottone con badge -->
          <button  @click="store.getOrderList(), store.checkCart()" class="my_btn text-decoration-none position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="offcanvasScrolling">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black my_badge" >
              {{ store.orderList.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>

          <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
            <button @click="updatePage()" id="closeCanvass" type="button" class="btn-close mt-3 fs-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <CanvasCart @closeCanvass="closeCanvass()"/>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;
.offcanvas-end {
    width: 50%;
    overflow: auto;
  }

.fixer {
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

.lh_header {
  height: 50px;
  line-height: 50px;
  font-size: 2rem;
}

.my_badge{
  outline: 1px solid $primary-red;
}

@media screen and (max-width: 768px) {
  .offcanvas-end {
    width: 100%;
  }
}

@media screen and (max-width: 575px) {
  .header_d {
    border-radius: 0;
    margin-top: 0;
  }
  .lh_header {
    font-size: 1.3rem;
  }
}
</style>

