<script>
    export default {
    name: 'Payment-Item',
    props:{
      dish: Object,
      orderList: Array
    },

    data(){
      return{
        arrayData: [],
        nItem: 0
      }
    },

    methods:{
      count(dish){
        this.nItem = 0;
        this.arrayData = JSON.parse(localStorage.getItem('lastOrder'));
        for (let i = 0; i < this.arrayData.length; i++) {
          if (this.arrayData[i].id === dish.id) {
            this.nItem++
          }
        }
      },
    },

    mounted(){
      if(localStorage.getItem('lastOrder')){
        this.count(this.dish);
      }
    }
  }
</script>

<template>
  <div class="w-100">
    <ul class="d-flex justify-content-between ul_h list-unstyled my_br">
      <li class="line_name">
        <h4>{{ dish.name }}</h4>
      </li>
      <li class="line_description d-none d-lg-block">
        {{ dish.description }}
      </li>
      <li class="line_image d-none d-lg-block">
        <img class="card_img" :src="dish.image" :alt="dish.name">
      </li>
      <li class="line_price d-flex justify-content-end">&euro;{{ dish.price }}</li>
      <li class="line_quantity">
        <div class="d-flex align-items-center">
        
          <div class="ms-1 ms-2">
            {{ nItem }}
          </div>
          
        </div>
      </li>
      <li class="line_price d-flex justify-content-end">&euro;{{ dish.price * nItem }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.my_br{
  border-bottom: 1px solid black;
}

.ul_h{
  max-height: 130px;
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