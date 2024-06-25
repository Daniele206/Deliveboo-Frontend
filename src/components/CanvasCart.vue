<script>
import CartItemVue from '../components/CartItem.vue';
import { store } from '../data/store';

  export default {
    name: 'cart',

    components:{
      CartItemVue,
    },

    data() {
      return {
        store
      }
    },


    mounted() {
      this.store.getOrderList();
    }
  }
</script>

<template>
  <div class="container my_cont my_h_100 pb-5">
    <div class="my_round">
      <h1>Carrello</h1>
      <CartItemVue v-for="cartItem in store.cartList" :key="cartItem.id" :dish = "cartItem" @update1="store.getOrderList()" @update2="store.getOrderList()"/>
      <h2 class="text-center my-4" v-if="store.cartList.length === 0">Il carrello é vuoto</h2>
      <h2>Totale Ordine</h2>
      <div class="container flex-column">
        <div class="boxettino d-flex justify-content-between align-items-center">
          <div>
            Totale
          </div>
          <div>
            &euro;{{ store.subTotal }}
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center my-2">
        <button type="button" class="btn btn-danger">Procedi al pagamento</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .my_h_100 {
//   padding-top: 100px;
//   min-height: 90vh;
// }

.my_cont {
  padding-top: 30px;
}

.my_round {
  // height: 100vh;
  // margin-top: 20px;
  padding: 10px 30px;
  background-color: white;
  border: 1px solid red;
  color: black;
  border-radius: 50px;
}

.my_number {
  border-radius: 10px;
  width: 70px;
  height: 40px;
  line-height: 25px;
  border: 2px solid red;
}

.boxettino {
  height: 60px;
  border-top: 2px solid grey;
}

@media (max-width: 767px) {
  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
