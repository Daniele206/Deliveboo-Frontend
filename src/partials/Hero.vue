<script>
  export default {
    
  }
</script>

<template>
  <section class="container-fluid">
    <div class="row d-flex justify-content-center position-relative">

      <div class="col-sm-12 col-md-6 mt-4 img-container">
        <img src="/src/assets/img/hamburger.png" alt="">
      </div>

      <div class="col-sm-12 col-md-6 text-center mt-4 title text-overlay d-flex flex-column justify-content-center">
        <h1>HAI FAME?</h1>
        <h1 class="mt-4">TI BASTA DELIVEBOO!</h1>
      </div>

    </div>

    <div>
      <p class="text text-center mt-5">Ordina online dai tuoi ristoranti preferiti</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.container-fluid {
  height: 100vh;
  .img-container {
    position: relative;
    img {
      max-width: 100%;
    }
  }
  
  .title {
    h1 {
      color: $text-w;
      font-size: 4.5rem;
    }
  }
  
  .text{
      color: $text-w;
      font-size: 3rem;
      max-width: 80%;
      margin: 0 auto;
    }

  @media (max-width: 767px) {
    .text-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.5); // Optional: background for better readability
      padding: 10px;
      border-radius: 5px;
      h1 {
      color: $text-w;
      font-size: 3rem;
    }
    }

    .text{
      max-width: 100%;
      font-size: 3rem;
    }
  }
}
</style>
