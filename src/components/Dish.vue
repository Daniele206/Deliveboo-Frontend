<script>
  export default {
    name: 'restaurant-card',
    props:{
      dish: Object
    },

    data(){
      return{
        arrayData: [],
        nItem: 0
      }
    },

    methods:{
      
      addItem(dish){
        if(!localStorage.getItem('cart') || localStorage.getItem('cart') === JSON.stringify([])){
          this.arrayData = [dish];
          localStorage.setItem('cart', JSON.stringify(this.arrayData));
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
      },

      removeItem(dish){
        if(!localStorage.getItem('cart') || localStorage.getItem('cart') === JSON.stringify([])){
          return alert('Il carrello é vuoto');
        }else{
          this.arrayData = JSON.parse(localStorage.getItem('cart'));
          if(this.arrayData.some(item => JSON.stringify(item) === JSON.stringify(dish))){
            for (let i = 0; i < this.arrayData.length; i++) {
              if (JSON.stringify(this.arrayData[i]) === JSON.stringify(dish)) {
                this.arrayData.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem('cart', JSON.stringify(this.arrayData));
            console.log(localStorage.getItem('cart'));
          }else{
            return alert('Questo piatto non é nel carrello')
          }
        }
      },

      count(){
        this.nItem = 0;
        this.arrayData = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < this.arrayData.length; i++) {
                if (JSON.stringify(this.arrayData[i]) === JSON.stringify(this.dish)) {
                  this.nItem++
                }
            }
      },
    },

    mounted(){
      if(localStorage.getItem('cart')){
        this.count()
      }
    }
  }
</script>

<template>
  <div v-if="dish.is_visible == 1" class="card mx-3 my-4" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card_title">{{ dish.name }}</h2>
    <img class="card_img" :src="dish.image" :alt="dish.name">
    <p class="card_description">{{ dish.description }}</p>
    <div class="d-flex align-items-end justify-content-between">
      <span>&euro;{{ dish.price }}</span>
      <div class="d-flex">
        <button v-if="nItem > 0" @click="removeItem(dish), count()" class="my_btn me-2"><i class="fa-solid fa-trash-can"></i></button>
        <button v-if="nItem === 0" @click="addItem(dish), count()" class="my_btn"><i class="fa-solid fa-cart-plus"></i></button>
        <button v-else @click="addItem(dish), count()" class="my_btn">{{ nItem }} +</button>
      </div>
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