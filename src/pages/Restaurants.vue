<script>
  //axios
  import axios from 'axios';
  //axios

  // store
  import { store } from '../data/store';
  // store

  // components
  import RestaurantCard from '../components/RestaurantCard.vue';
  import TypeSelector from '../components/TypeSelector.vue';
  // components


  export default {
    name: 'restaurants',

    components:{
      RestaurantCard,
      TypeSelector
    },

    data(){
      return{
        store,
        restaurants: [],
        originalRestaurants: [],
        redyReedRestaurants: false,
        types: [],
        redyReedTypes: false
      }
    },

    methods:{
      getApi(){
        axios.get(this.store.apiUrl + '/restaurants')
        .then(result => {
          this.redyReedRestaurants = true;
          this.restaurants = result.data;
          this.originalRestaurants = result.data;
            console.log(this.restaurants);
          })
          .catch(error => {
            console.log(error);
          })

        axios.get(this.store.apiUrl + '/types')
          .then(result => {
            this.redyReedTypes = true;
            this.types = result.data;
            console.log(this.types);
          })
          .catch(error => {
            console.log(error);
          })
      },

      // selecteType(){
      //   console.log('parte');
      //   console.log(this.store.typesSelected);
      //   if(Object.keys(this.store.typesSelected).length === 0){
      //     this.restaurants = this.originalRestaurants;
      //   }else{
      //     this.restaurants = this.originalRestaurants.map()
      //   }
      //   console.log('finisce');
      // },

      selectType() {
        const selectedTypes = Object.values(this.store.typesSelected);

        if (selectedTypes.length === 0) {
            this.restaurants = this.originalRestaurants;
        } else {
            this.restaurants = this.originalRestaurants.filter(restaurant => {
                // Verifica che ogni tipo selezionato sia presente nei tipi del ristorante
                return selectedTypes.every(selectedType =>
                    restaurant.types.some(type => type.name === selectedType)
                );
            });
        }

      }
    },
    mounted(){
      this.getApi();
    }
  }
  
</script>

<template>
  <div class="my_padding my_h">
    <h1 class="text-center mt-4 mb-5 fw-bold text-light">Tutti i nostri ristoranti</h1>
    <div v-if="redyReedTypes && redyReedRestaurants" class="checkbox_container d-flex justify-content-center">
      <TypeSelector 
        :types="types"
        @typeChek="selectType()"
      />
    </div>
    <div class="container pb-3">
      <div v-if="redyReedTypes && redyReedRestaurants" class="card_container d-flex flex-wrap justify-content-center">
        <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id"
        :restaurant="restaurant"
        />
      </div>
      <!-- <div v-else class="d-flex justify-content-center my_h">
        <div  class="loader mt-5 "></div>
      </div> -->
      <div v-else class="d-flex justify-content-center  ">
        <div id="cooking">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div id="area">
            <div id="sides">
                <div id="pan"></div>
                <div id="handle"></div>
            </div>
            <div id="pancake">
                <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .my_padding{
    padding-top: 100px;
  }
  .my_h{
    min-height: 100vh;
  }
  
// --------padella-------

@import url("https://fonts.googleapis.com/css?family=Amatic+SC");


#cooking {
  position: relative;
  margin: 0 auto ;
  top: 0;
  width: 75vh;
  height:50vh;
  overflow: hidden;
}
#cooking .bubble {
  position: absolute;
  border-radius: 100%;
  box-shadow: 0 0 0.25vh #ededede8;
  opacity: 0;
}
#cooking .bubble:nth-child(1) {
  margin-top: 2.5vh;
  left: 58%;
  width: 2.5vh;
  height: 2.5vh;
  background-color: #ffffff;
  animation: bubble 2s cubic-bezier(0.53, 0.16, 0.39, 0.96) infinite;
}
#cooking .bubble:nth-child(2) {
  margin-top: 3vh;
  left: 52%;
  width: 2vh;
  height: 2vh;
  background-color: #ffffff;
  animation: bubble 2s ease-in-out 0.35s infinite;
}
#cooking .bubble:nth-child(3) {
  margin-top: 1.8vh;
  left: 50%;
  width: 1.5vh;
  height: 1.5vh;
  background-color: #ffffff;
  animation: bubble 1.5s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.55s infinite;
}
#cooking .bubble:nth-child(4) {
  margin-top: 2.7vh;
  left: 56%;
  width: 1.2vh;
  height: 1.2vh;
  background-color: #fdfdfd;
  animation: bubble 1.8s cubic-bezier(0.53, 0.16, 0.39, 0.96) 0.9s infinite;
}
#cooking .bubble:nth-child(5) {
  margin-top: 2.7vh;
  left: 63%;
  width: 1.1vh;
  height: 1.1vh;
  background-color: #ffffff;
  animation: bubble 1.6s ease-in-out 1s infinite;
}
#cooking #area {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  background-color: transparent;
  transform-origin: 15% 60%;
  animation: flip 2.1s ease-in-out infinite;
}
#cooking #area #sides {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 15% 60%;
  animation: switchSide 2.1s ease-in-out infinite;
}
#cooking #area #sides #handle {
  position: absolute;
  bottom: 18%;
  right: 80%;
  width: 35%;
  height: 20%;
  background-color: transparent;
  border-top: 1vh solid #fdfdfd;
  border-left: 1vh solid transparent;
  border-radius: 100%;
  transform: rotate(20deg) rotateX(0deg) scale(1.3, 0.9);
}
#cooking #area #sides #pan {
  position: absolute;
  bottom: 20%;
  right: 30%;
  width: 50%;
  height: 8%;
  background-color: #ffffff;
  border-radius: 0 0 1.4em 1.4em;
  transform-origin: -15% 0;
}
#cooking #area #pancake {
  position: absolute;
  top: 24%;
  width: 100%;
  height: 100%;
  transform: rotateX(85deg);
  animation: jump 2.1s ease-in-out infinite;
}
#cooking #area #pancake #pastry {
  position: absolute;
  bottom: 26%;
  right: 37%;
  width: 40%;
  height: 45%;
  background-color: #fffefe;
  box-shadow: 0 0 3px 0 #ffffff;
  border-radius: 100%;
  transform-origin: -20% 0;
  animation: fly 2.1s ease-in-out infinite;
}

@keyframes jump {
  0% {
    top: 24%;
    transform: rotateX(85deg);
  }
  25% {
    top: 10%;
    transform: rotateX(0deg);
  }
  50% {
    top: 30%;
    transform: rotateX(85deg);
  }
  75% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(85deg);
  }
}
@keyframes flip {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(-27deg);
  }
  30%, 50% {
    transform: rotate(0deg);
  }
  55% {
    transform: rotate(27deg);
  }
  83.3% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes switchSide {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
@keyframes fly {
  0% {
    bottom: 26%;
    transform: rotate(0deg);
  }
  10% {
    bottom: 40%;
  }
  50% {
    bottom: 26%;
    transform: rotate(-190deg);
  }
  80% {
    bottom: 40%;
  }
  100% {
    bottom: 26%;
    transform: rotate(0deg);
  }
}
@keyframes bubble {
  0% {
    transform: scale(0.15, 0.15);
    top: 80%;
    opacity: 0;
  }
  50% {
    transform: scale(1.1, 1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.33, 0.33);
    top: 60%;
    opacity: 0;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1, 1);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.2, 1);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0.25;
  }
}

</style>