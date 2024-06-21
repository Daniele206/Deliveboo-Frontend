<script>
  export default {
    name: 'restaurant-card',
    props:{
      dish: Object
    }
  }
</script>

<template>
  <div class="card mx-3 my-4" style="width: 18rem;">
  <div class="card-body">
    <h2>{{ dish.name }}</h2>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card_title{
  height: 100px;
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

.my_btn{
  height: 40px;
  margin: 0;
}
</style>