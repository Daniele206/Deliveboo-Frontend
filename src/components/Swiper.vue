<script>
  // Importa i componenti Swiper per Vue.js
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Importa gli stili di Swiper
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  // Importa i moduli richiesti
  import { Pagination, Autoplay } from 'swiper/modules';

  // store
  import { store } from '../data/store';
  // store

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },

    props: {
      types: Array
    },

    data() {
      return {
        store,
        modules: [Pagination, Autoplay],
      };
    },

    methods:{
      slectType(nameType, i){
        if(this.store.typesSelected[i] === (nameType)){
          delete this.store.typesSelected[i];
        }else{
          this.store.typesSelected[i] = nameType;
        }
        this.store.selectType();
      }
    }
  };
</script>

<template>
  <div>
    <p class="text text-center">Ordina online dai tuoi ristoranti preferiti</p>
  </div>

  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :modules="modules"
    class="mySwiper"
    :loop="true"
    :autoplay="{ delay: 3000}"
    :breakpoints="{
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }"
  >
    <swiper-slide v-for="(oneType, i) in types" :key="oneType.id">
      <router-link class="my_btn text-decoration-none" :to="{name: 'restaurants'}" @click="slectType(oneType.name, i)">{{ oneType.name }}</router-link>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.text {
  color: $text-w;
  font-size: 3rem;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 80px;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-top: 30px;
}

.swiper-slide {
  text-align: center;
  a{
    font-size: 2rem;
  }
  color: white;
  text-transform: uppercase;
  font-weight: bold;

  /* Centra il testo della diapositiva verticalmente */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
