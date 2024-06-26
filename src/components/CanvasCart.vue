<script>
import CartItemVue from './CartItem.vue';
import Payment from './Payment.vue';

//store
import { store } from '../data/store';
//store

  export default {
    name: 'cart',

    components:{
      CartItemVue,
      Payment
    },

    data() {
      return {
        store,
        data: {},
        orderForm: '',
        name: '',
        telefon: '',
        address: '',
        errorName: '',
        errorTelefon: '',
        errorAddress: '',
        validName: true,
        validTelefon: true,
        validAddress: true,
      }
    },

    methods:{
      checkCart(){
        if(JSON.parse(localStorage.getItem('cart')).length > 0){
          return true
        }else{
          return false
        }
      },

      sendOrders(){
        this.orderForm = document.getElementById('order-form');
        this.name = document.getElementById('name').value;
        this.telefon = document.getElementById('telefon').value;
        this.address = document.getElementById('address').value;

        this.errorName = document.getElementById('error-name');
        this.errorTelefon = document.getElementById('error-telefon');
        this.errorAddress = document.getElementById('error-address');

        this.validName = true;
        this.validAddress = true;
        this.validTelefon = true;

        this.errorName.innerHTML = '';
        this.errorAddress.innerHTML = '';
        this.errorTelefon.innerHTML = '';


        if (this.name.length < 3 || this.name.length > 30) {
          this.validName = false;
            this.errorName.innerHTML = 'Il nome deve avere minimo 3 caratteri e massimo 30';
        }

        if (this.address.length < 5 || this.address.length > 100) {
            this.validAddress = false;
            this.errorAddress.innerHTML = "L'indirizzo deve avere minimo 5 caratteri e massimo 100"
        }

        if(isNaN(this.telefon) || this.telefon.length !== 10){
          this.validTelefon = false;
          this.errorTelefon.innerHTML = "Il numero di telefono deve contenere 10-numeri"
        }

        if(this.validName === true && this.validAddress === true && this.validTelefon === true){
          this.data = {
            'name': this.name,
            'address': this.address,
            'telefon': this.telefon,
          }
          this.orderForm.classList.add('d-none');
          document.getElementById('payment').classList.remove('d-none');
        }
      }
    },

    mounted(){
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
        <form id="order-form" v-if="checkCart()" class="form-control" @submit.prevent="sendOrders()">
          <label for="name">Nome</label>
          <input type="text" id="name" class="form-control" placeholder="Nome">
          <p id="error-name" class="text-danger"></p>
          <label for="telefon">Numero di telefono</label>
          <input type="text" id="telefon" class="form-control" placeholder="Numero di telefono">
          <p id="error-telefon" class="text-danger"></p>
          <label for="address">Indirizzo</label>
          <input type="text" id="address" class="form-control" placeholder="Indirizzo">
          <p id="error-address" class="text-danger"></p>
          <button type="submit" class="my_btn ms-0 mt-3">Procedi al check-out</button>
        </form>
      </div>
      <div class="d-flex justify-content-center align-items-center my-2">
        <!-- <button type="button" class="btn btn-danger">Procedi al pagamento</button> -->
        <Payment id="payment" class="d-none" :data="data"/>
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
