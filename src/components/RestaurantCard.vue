<script>
  export default {
    name: 'restaurant-card',
    props:{
      restaurant: Object
    }
  }
</script>

<template>
  <div class="card mx-3 my-4" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card_title fw-bold">{{ restaurant.name }}</h2>
    <img class="card_img" v-if="restaurant.img" :src="restaurant.img" :alt="restaurant.name">
    <img class="card_img" v-else :src="restaurant.image" :alt="restaurant.name">
    <h6 class="card_address">{{ restaurant.address }}</h6>
    <div class="types_container" v-if="restaurant.types.length > 0">
      <h5 class="fw-bold">Tipologie di cibo</h5>
      <ul class="list-unstyled">
        <li v-for="oneType in restaurant.types" :key="oneType.id">
          <h6>
            <span class="badge text-bg-warning">{{ oneType.name }}</span>
          </h6>
        </li>
      </ul>
    </div>
    <div class="types_container fw-bold" v-else>
      <h5 class="fw-bold">Nessuna tipologia...</h5>
    </div>
    <button class="my_btn">Menú</button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card_title{
  height: 100px;
}

.card_img{
  max-width: 100%;
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