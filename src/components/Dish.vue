<script>
  export default {
    name: 'restaurant-card',
    props:{
      dish: Object
    },

    data(){
      return{
        arrayData: []
      }
    },

    methods:{
      setData(dish){
        if(!localStorage.getItem('cart')){
          localStorage.setItem('cart', JSON.stringify([dish]))
          console.log(localStorage.getItem('cart'));
        }else{
          this.arrayData = JSON.parse(localStorage.getItem('cart'));
          console.log(this.arrayData);
          if(dish.restaurant_id === this.arrayData[0].restaurant_id){
            this.arrayData.push(dish);
            localStorage.setItem('cart', JSON.stringify(this.arrayData));
            console.log(localStorage.getItem('cart'));
          }else{
            return alert('Non puoi aggiungere un piatto di un altro ristorante')
          }
        }
      }
    }
  }
</script>

<template>
  <div v-if="dish.is_visible == 1" class="card mx-3 my-4" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card_title">{{ dish.name }}</h2>
    <h2 class="card_title">{{ dish.restaurant_id }}</h2>
    <img class="card_img" :src="dish.image" :alt="dish.name">
    <p class="card_description">{{ dish.description }}</p>
    <div class="d-flex align-items-end justify-content-between">
      <span>&euro;{{ dish.price }}</span>
      <button @click="setData(dish)" class="my_btn"><i class="fa-solid fa-cart-plus"></i></button>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card_title{
  height: 80px;
}

.card_img{
  width: 100%;
  aspect-ratio: 14/9;
  object-fit: cover;
  margin-bottom: 30px;
}

.card_description{
  height: 60px;
}

.my_btn{
  padding-top: 25px;
  padding-bottom: 25px;
  height: 40px;
  margin: 0;
}

.card_img{
  width: 100%;
  aspect-ratio: 14/9;
  object-fit: cover;
  margin-bottom: 30px;
}

.card_address{
  height: 40px;
}

.types_container{
  height: 200px;
}
</style>