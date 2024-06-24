<script>
import CartItemVue from '../components/CartItem.vue';

  export default {
    name: 'cart',

    components:{
      CartItemVue,
    },

    data() {
      return {
        orderList: [],
        cartList: [],
        subTotal: 0
      }
    },

    methods: {
      getOrderList() {
        console.log('funziona');
        this.orderList = JSON.parse(localStorage.getItem('cart')) || [];
        this.cartList = [];
        this.subTotal = 0;
        this.orderList.forEach(orderItem => {
          this.subTotal = this.subTotal + parseInt(orderItem.price);
          if (!this.cartList.some(item => JSON.stringify(item) === JSON.stringify(orderItem))) {
            this.cartList.push(orderItem)
          }
        });
        this.cartList.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.cartList);
      },
    },

    mounted() {
      this.getOrderList();
    }
  }
</script>

<template>
  <div class="container my_cont my_h_100 pb-5">
    <div class="my_round">
      <h1>Carrello</h1>
      <CartItemVue v-for="cartItem in cartList" :key="cartItem.id" :dish = "cartItem" @update1="getOrderList()" @update2="getOrderList()"/>
      <h2 class="text-center my-4" v-if="cartList.length === 0">Il carrello é vuoto</h2>
      <h2>Totale Ordine</h2>
      <div class="container flex-column">
        <div class="boxettino d-flex justify-content-between align-items-center">
          <div>
            Totale
          </div>
          <div>
            &euro;{{ subTotal }}
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
.my_h_100 {
  padding-top: 100px;
  min-height: 90vh;
}

.my_cont {
  padding-top: 100px;
}

.my_round {
  margin-top: 20px;
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
