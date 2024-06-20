<script>
  export default {
    
  }
</script>

<template>

  <section>
    <div class="container">
      <div class="text-center">
        <p class="vuoi">...con chi vuoi!</p>
      </div>

      <div class="d-flex flex-wrap justify-content-center text-center">

        <div class="margin_store">
          <p>
            Scarica l'app!
          </p>
          <p class="descrizione mb-5">
            Scarica l’app di LOGO e ordina dove vuoi, qualunque cosa desideri.
          </p>
          <div class="mb-5">
            <img class="w-100" src="/src/assets/img/cosi.png" alt="">
          </div>
        </div>

        <div>
          <p>
            <img class="w-100" src="/src/assets/img/cell.png" alt="">
          </p>
        </div>

      </div>
      
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

p{
  color: white;
  font-size: 3rem;
}
.vuoi{
    margin-bottom: 70px;
}
.descrizione{
  font-size: 1rem;
}

.margin_store{
  margin-right: 50px;
}

@media (max-width: 1200px) {
  .margin_store{
  margin-right: 0;
  }
}

</style>