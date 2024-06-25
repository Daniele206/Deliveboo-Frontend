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
          <button @click="deleteCart" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Svuota Carrello</button>
          <button @click="redirectMenu" type="button" class="btn btn-primary" data-bs-dismiss="modal">Ritorna Menu Ristorante Ordine</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>