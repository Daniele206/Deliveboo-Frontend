<script>
  export default {
    
  }
</script>

<template>
<section>
  <div class="where text-center">
    <p>Dove vuoi...</p>
  </div>

  <div class="my-text">
    <div class="my_img">
      <img src="/src/assets/img/wave.svg" alt="">
    </div>
    
    <div class="container consegna d-flex flex-column align-items-center justify-content-center justify-content-lg-start mt-3">
      <div class="d-flex flex-column flex-md-row align-items-center mb-5">
        <div class="flex-grow-1 text-center text-md-left">
          <p class="my_consegna">
            Consegna gratuita 7 giorni alla settimana
          </p>
        </div>
        
        <div class="d-none d-lg-block ml-md-4">
          <img src="/src/assets/img/itinerario.png" alt="">
        </div>
      </div>

      <div class="icon d-flex flex-column flex-md-row align-items-center mt-md-0 pb-4">
        <!-- prima icona -->
        <div class="mb-4 mb-md-0 mx-md-4 text-center">
          <img src="/src/assets/img/hamb.png" alt="">
          <p class="text-black">I migliori ristoranti della tua città</p>
        </div>


        <!-- seconda icona -->
        <div class="mb-4 mb-md-0 mx-md-4 text-center">
          <img src="/src/assets/img/rider.png" alt="">
          <p class="text-black">Consegna rapida</p>
        </div>

        <!-- terza icona -->
        <div class="mb-4 mb-md-0 mx-md-4 text-center">
          <img src="/src/assets/img/gnam.png" alt="">
          <p class="text-black">Gusta il tuo ordine!</p>
        </div>
        
      </div>
    </div>
    <div class="my_img second_img">
      <img src="/src/assets/img/wave.svg" alt="">
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.where {
  color: white;
  font-size: 3rem;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 70px;

  p {
    margin-bottom: 0px;
  }
}

.consegna {
  font-size: 3.5rem;
  
  .my_consegna {
    width: 100%;
    text-align: center;
  }
  
  p {
    color: #E0454D;
    font-weight: bold;
  }

  img {
    width: 300px;
  }

  @media (max-width: 768px) {
    .my_consegna {
      width: 100%;
      text-align: center;
    }

    p {
      margin-bottom: 20px;
      text-align: center;
    }
  }

  @media (min-width: 992px) {
    .text-container {
      text-align: center;
    }
  }

  .icon {
    img {
      height: 100%;
      width: 55px;
    }

    p {
      font-size: 1.5rem;
    }

    .point {
      img {
        height: 100%;
        width: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
}

.my-text {
  background-color: $text-w;

  .my_img {
    img {
      width: 100%;
      transform: rotate(-180deg);
    }
  }
  .second_img{
    img{
      transform: rotate(-360deg);
    }
  }
}
</style>
