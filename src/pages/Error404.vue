<template>
  <div class="container text-center containerError align-content-center">
    <!-- <div class="imgContainer">
      <img src="/src/assets/img/sad-folder.png" alt="">
    </div> -->
    <!-- <div class="imgContainer">
      <img src="/src/assets/img/girl-icecream.png" alt="">
    </div> -->
    <div class="imgContainer">
      <img src="/src/assets/img/sad-icecream.png" alt="">
    </div>
    <p class="error">Error 404 <i class="fa-solid fa-triangle-exclamation"></i></p>
   
    <p class="notFound">Pagina Non Trovata</p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.imgContainer{
  height: 200px;
 
  // img{
  //   -webkit-filter: invert(100%);
  //   filter: invert(100%);
  // }
}
.containerError{
height: 400px;
line-height: 35px;
color: white;
.sad{
  font-size: 4rem;
}
.error{
  font-size: 3.5rem;
  font-weight: 600;

}
.notFound{
  font-size: 2.5rem;
}

}

</style>