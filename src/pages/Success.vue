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
      }
    }

   
  
    
   
  }
</script>

<template>
  <div class="container my_padding my_h">
   <h1>Ordine effettuato con successo</h1>
   <PaymentItem v-for="cartItem in store.cartList" :key="cartItem.id" :dish = "cartItem" @update1="store.getPaymentList()" @update2="store.getPaymentList()"/>
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