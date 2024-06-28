<script>

   // store
  import { store } from '../data/store';
  // store

  export default {
    data(){
      return{
        store,
        restaurant: {},
        cart: JSON.parse(localStorage.getItem('cart')),
      }
    },

    methods:{

      deleteCart(){
        localStorage.removeItem('cart');
        localStorage.removeItem('dishQuantity');
      },

      redirectMenu(){
        this.store.restaurants.forEach(restaurant => {
          if(restaurant.id === this.cart[0].restaurant_id){
            this.restaurant = restaurant
          }
        });
        localStorage.setItem('dishes', JSON.stringify(this.restaurant.dishes))
        localStorage.setItem('restaurantName', this.restaurant.name)
        location.reload();
      }
    }
  }
</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ordine Univoco</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Non puoi ordinare da piú risotranti contemporaneamente!</p>
        </div>
        <div class="modal-footer">
          <button @click="deleteCart(), store.getOrderList()" type="button " class="btn btn-secondary empty" data-bs-dismiss="modal">Svuota Carrello</button>
          <button @click="redirectMenu(), store.getOrderList()" type="button " class="btn btn-primary restaurant" data-bs-dismiss="modal">Ristorante precedente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-content{
  color: white;
  background-color: rgb(199, 71, 71);
  border-bottom: 2px;
  .empty{
    background-color: rgb(255, 212, 71);
    color: black;
    border: none;
  }
  .restaurant{
    background-color: white;
    color: black;
    border: none;
  }
  .modal-title{
    font-weight: 700;
  }
  .modal-body{
    text-align: center;
  }
 
 
}


</style>