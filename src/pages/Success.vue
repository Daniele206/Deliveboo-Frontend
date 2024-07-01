<script>
  import PaymentItem from '../components/PaymentItem.vue';
  import Payment from '../components/Payment.vue';
  
  //store
  import { store } from '../data/store';
  //store

  export default {
    name: 'success',

    components:{
      PaymentItem,
      Payment
    },
    data(){
      return{
        store,
        paymentCart: [],
        paymentSubtotal: '',
        restaurantName: '',
        orderList: [],
      }
    },

    methods:{
      getPayElement(){
        localStorage.setItem('lastOrderCompact', JSON.stringify(this.store.cartList));
        this.paymentCart = JSON.parse(localStorage.getItem('lastOrderCompact'));
        localStorage.setItem('lastSubtotal', JSON.stringify(this.store.subTotal));
        this.paymentSubtotal = JSON.parse(localStorage.getItem('lastSubtotal'));
        localStorage.setItem('lastOrderRestaurantName', localStorage.getItem('restaurantName'));
        this.restaurantName = localStorage.getItem('lastOrderRestaurantName');

        localStorage.setItem('lastOrder', localStorage.getItem('cart'));

        localStorage.removeItem('cart');
        localStorage.removeItem('dishQuantity');
        localStorage.removeItem('restaurantName');
        this.store.getOrderList();
      },

      getPayElement2(){
        this.paymentCart = JSON.parse(localStorage.getItem('lastOrderCompact'));
        this.paymentSubtotal = JSON.parse(localStorage.getItem('lastSubtotal'));
      }
    },

    mounted(){
      if(localStorage.getItem('cart')){
        this.getPayElement()
      }else{
        this.getPayElement2()
      }
    }
  }
</script>

<template>
  <div class="container my_padding my_h">
    <h1 class="text-center text-light fw-bold pt-2">Ordine effettuato con successo</h1>
    <h2 class="text-center text-light fw-bold pb-2">{{ restaurantName }}</h2>
    <div class="bg-white p-3 rounded-5">
      <PaymentItem v-for="cartItem in paymentCart" :key="cartItem.id" :dish="cartItem" :orderList="orderList"/>
      <h2>Totale Ordine</h2>
        <div class="container flex-column">
          <div class="boxettino d-flex justify-content-between align-items-center">
            <div>
              Totale
            </div>
            <div>
              &euro;{{ paymentSubtotal }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .my_padding{
    padding-top: 100px;
  }
  .my_h{
    min-height: 100vh;
  }

</style>