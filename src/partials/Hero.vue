<script>
  export default {

  }
</script>

<template>
  <section>
    <div class="my_container">
      <div class="title">
        <div class="my_bg_black text-white">
          <div class="container content-wrapper">
            <div class="text-content">
              <h1 class="fame">HAI FAME?</h1>
              <h1>TI BASTA DELIVEBOO!</h1>
            </div>
            <div class="logo d-none d-md-block">
              <img src="/src/assets/img/logo_hero.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <img src="https://ilfattoalimentare.it/wp-content/uploads/2022/11/Depositphotos_139278610_L.jpg" alt="">
    </div>
  </section>
</template>




<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.my_container {
  position: relative;
  height: 100vh; 
  width: 100%;  
  img {
    height: 100%;
    width: 100%;
    object-fit: cover; 
  }

  .title {
    position: absolute;
    bottom: 100px;
    width: 100%;
    
    .fame {
      margin-bottom: 30px;
    }
    
    h1 {
      font-size: 3.7rem;
      font-weight: bold;
      width: 350px;
      margin-left: 0;
    }

    .my_bg_black {
      background-color: rgba(0, 0, 0, 0.50); 
      height: 280px;
      width: 100%;
      padding-top: 15px;
      
      .content-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 576px) {
          flex-direction: column;
          align-items: center;
          
          h1 {
            width: auto;
            text-align: center;
          }
        }
      }

      .text-content {
        flex: 1;
        padding-left: 20px;

        @media screen and (max-width: 576px) {
          padding-left: 0;
        }
      }

      .logo {
        padding-right: 20px;
        img {
          width: 130px;
        }
      }
    }
  }
}
</style>
