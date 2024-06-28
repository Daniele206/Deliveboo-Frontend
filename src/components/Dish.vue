<script>

  import  Alert from '../components/Alert.vue';

  import { store } from '../data/store';

  export default {
    name: 'restaurant-card',
    props:{
      dish: Object
    },

    components:{
      Alert,
    },

    data(){
      return{
        store,
        arrayData: [],
        dishQuantity: [],
        nItem: 0
      }
    },

    methods:{
      
      addItem(dish) {
        if (!localStorage.getItem('cart') || localStorage.getItem('cart') === JSON.stringify([])) {
          this.arrayData = [dish];
          localStorage.setItem('cart', JSON.stringify(this.arrayData));
          this.dishQuantity = [{ [dish.id]: 0 + 1 }];
          localStorage.setItem('dishQuantity', JSON.stringify(this.dishQuantity));
        } else {
          this.arrayData = JSON.parse(localStorage.getItem('cart'));
          this.dishQuantity = JSON.parse(localStorage.getItem('dishQuantity'));
          if (this.dish.restaurant_id === this.arrayData[0].restaurant_id) {
            this.arrayData.push(dish);
            for (let i = 0; i < this.dishQuantity.length; i++) {
              if (this.dishQuantity[i][dish.id] !== undefined) {
                this.nItem = this.dishQuantity[i][dish.id];
                this.dishQuantity.splice(i, 1);
                break;
              }else{
                this.nItem = 0;
              }
            }
            this.dishQuantity.push({ [dish.id]: this.nItem + 1 });
            localStorage.setItem('cart', JSON.stringify(this.arrayData));
            localStorage.setItem('dishQuantity', JSON.stringify(this.dishQuantity));
          } else {
            document.getElementById('alert_btn').click();
          }
        }
      },

      removeItem(dish){
        if(!localStorage.getItem('cart') || localStorage.getItem('cart') === JSON.stringify([])){
          return alert('Il carrello é vuoto');
        }else{
          this.arrayData = JSON.parse(localStorage.getItem('cart'));
          
          this.dishQuantity = JSON.parse(localStorage.getItem('dishQuantity'));
          if(this.arrayData.some(item => JSON.stringify(item) === JSON.stringify(dish))){
            for (let i = 0; i < this.arrayData.length; i++) {
              if (JSON.stringify(this.arrayData[i]) === JSON.stringify(dish)) {
                this.arrayData.splice(i, 1);
                localStorage.setItem('dishQuantity', JSON.stringify(this.dishQuantity));
                    break;
                }
            }
            for (let i = 0; i < this.dishQuantity.length; i++) {
              if (this.dishQuantity[i][dish.id] !== undefined) {
                this.nItem = this.dishQuantity[i][dish.id];
                this.dishQuantity.splice(i, 1);
                break;
              }
            }
            if(this.nItem - 1 != 0){
              this.dishQuantity.push({ [dish.id]: this.nItem - 1 });
            }
            localStorage.setItem('cart', JSON.stringify(this.arrayData));
            localStorage.setItem('dishQuantity', JSON.stringify(this.dishQuantity));
          }else{
            return alert('Questo piatto non é nel carrello')
          }
        }
      },

      count(dish){
        this.nItem = 0;
        this.arrayData = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < this.arrayData.length; i++) {
          if (JSON.stringify(this.arrayData[i]) === JSON.stringify(dish)) {
            this.nItem++
          }
        }
      },
    },

    mounted(){
      this.store.getDishQuantity();

      if(localStorage.getItem('cart')){
        this.count(this.dish)
      }
    }
  }
</script>

<template>
  <button id="alert_btn" type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
  <Alert />
  <div v-if="dish.is_visible == 1" class="card mx-3 my-4" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card_title">{{ dish.name }}</h2>
    <img class="card_img" :src="dish.image" :alt="dish.name">
    <p class="card_description">{{ dish.description }}</p>
    <div class="d-flex align-items-end justify-content-between">
      <span>&euro;{{ dish.price }}</span>
      <div class="d-flex">

        

        <button v-if="!store.dishQuantity.find(obj => dish.id in obj)" @click="addItem(dish), count(dish), store.getOrderList(), store.getDishQuantity()" class="my_btn"><i class="fa-solid fa-cart-plus"></i></button>
        <div v-else class="d-flex align-items-center ">
          <button  @click="removeItem(dish), count(dish), store.getOrderList(), store.getDishQuantity()" class="my_btn me-1"> <i class="fa-solid fa-chevron-down"></i></button>
          <div v-for="(dishQ, i) in store.dishQuantity" :key="i" class="d-flex align-items-center">
            <span v-if="dishQ[dish.id]">{{ dishQ[dish.id] }}</span>
          </div>
          <button  @click="addItem(dish), count(dish), store.getOrderList(), store.getDishQuantity()" class="my_btn ms-1"> <i class="fa-solid fa-chevron-up"></i></button>
        </div>
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
  // padding-top: 15px;
  // padding-bottom: 15px;
  padding:15px 10px;
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