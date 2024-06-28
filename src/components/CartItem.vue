<script>
  import { store } from '../data/store';

    export default {
    name: 'Cart-Item',
    props:{
      dish: Object
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
            this.$emit('update1');
          } else {
            return alert('Non puoi aggiungere un piatto di un altro ristorante');
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
            this.$emit('update2');
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
  <div class="w-100">
    <ul class="d-flex justify-content-between ul_h list-unstyled">
      <li class="line_name">
        <h4>{{ dish.name }}</h4>
      </li>
      <li class="line_description d-none d-xxl-block me-1">
        {{ dish.description }}
      </li>
      <li class="line_image d-none d-xxl-block">
        <img class="card_img" :src="dish.image" :alt="dish.name">
      </li>
      <li>
        &euro;{{ dish.price }}
      </li>
      <li class="line_quantity">
        <div class="d-flex align-items-center">
          <button @click="removeItem(dish), count(dish), store.getOrderList(), store.getDishQuantity()" class="my_btn me-1"><i class="fa-solid fa-chevron-down"></i></button>
          <div v-for="(dishQ, i) in store.dishQuantity" :key="i" class="d-flex align-items-center">
            <span v-if="dishQ[dish.id]">{{ dishQ[dish.id] }}</span>
          </div>
          <button @click="addItem(dish), count(dish), store.getOrderList(), store.getDishQuantity()" class="my_btn ms-1"><i class="fa-solid fa-chevron-up"></i></button>
        </div>
      </li>
      <li class="line_price d-flex justify-content-end">&euro;{{ dish.price * nItem }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.ul_h{
  max-height: 130px;
  li{
    color: black;
  }
}

.my_btn {
  padding: 10px;
}

.card_img {
  width: 100%;
  aspect-ratio: 14/9;
  object-fit: cover;
  margin-bottom: 30px;
}

.line_name{
  width: 200px;
}
.line_description{
  width: 200px;
  overflow: auto;
  margin-bottom: 20px;
}
.line_image{
  width: 160px;
}
.line_quantity{
  width: 120px;
}
.line_price{
  width: 100px;
}
</style>