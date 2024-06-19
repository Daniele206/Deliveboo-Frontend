<script>
export default {};
</script>

<template>
  <footer class="footer overlay">
    <div class="container flex-wrap">
      <div class="row">
        <div class="col">
          <h4>LET'S GET TOGHETHER</h4>
          

          <ul class="">
            <li><span><i class="fa-solid fa-location-dot"></i></span>Via Gherardo Luigi, 24</li>
            <li><span><i class="fa-solid fa-clock"></i></span>DOM 11:00-24:00</li>
            <li><span><i class="fa-solid fa-bag-shopping"></i></span>DOM 01:00-03:00 </li>
            <li><span><i class="fa-solid fa-phone-volume"></i></span>+39 3543653625 </li>
            

          </ul>
          <div class="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="col">
          <h4>CHI SIAMO</h4>
          
          <ul class="">
            <li> <a href="">Via Gherardo Luigi, 24</a></li>
            <li><a href="">DOM 11:00-24:00</a></li>
            <li><a href="">DOM 01:00-03:00 </a> </li>
            <li><a href="">+39 3543653625</a></li>
            

          </ul>
        </div>
        <div class="col">
          <h4>I NOSTRI MENU</h4>
          
          <ul class="">
            <li> <a href="">Via Gherardo Luigi, 24</a></li>
            <li><a href="">DOM 11:00-24:00</a></li>
            <li><a href="">DOM 01:00-03:00 </a> </li>
            <li><a href="">+39 3543653625</a></li>
            

          </ul>
        </div>
        <div class="col">
          <h4>INSTAGRAM</h4>
          <div class=" d-flex">
            <div class="boxettino"></div>
            <div class="boxettino"></div>
            <div class="boxettino"></div>
          </div>
          <div class=" d-flex">
            <div class="boxettino"></div>
            <div class="boxettino"></div>
            <div class="boxettino"></div>
          </div>
          
         
        </div>
      </div>
    </div>
      
    

    
    <div class="my_line container">
      
    </div>


    <div class="container d-flex justify-content-between">

      <div class=" d-flex my-3">
        <div><i class="fa-regular fa-copyright"></i></div> 
        <p>2024Deliverboo All ReservedRigths</p>

      </div>

      <div>
        <ul class=" d-flex my_links my-3 ">
          <li><a href="">About</a></li>
          <li><a href="">Delivery</a></li>
          <li><a href="">Contacts</a></li>

        </ul>

      </div>

    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.footer {
  background-color: black;
  color: white;
  height: 450px;
  width: 100%;
  padding: 20px 0;
  object-fit: contain;
  background-size: cover;
  
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/src/assets/img/footer-background.png');
  
  
}
.overlay {
  background-color: rgba(0, 0, 0, 0.1); 
  
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.boxettino{
  background-color: #007bff;
  height: 90px;
  width: 90px;
  border: 1px solid black;
}
h4{
  color: #EE4444;
  margin-bottom: 15px;
  
}

ul{
  margin: 0px;
  padding: 0px;
  li{
    list-style: none;
    margin: 0px;
    padding: 0px;
    line-height: 30px;
    
    a{
      text-decoration: none;
      color: white;
      padding: 10px;
      &:hover{
        color: #EE4444;
      }
      
    }
    span{
        padding-right: 10px;
    }

  }
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.col {
  flex: 1;
  padding: 0 10px;
}

.social-icons {
  padding-top: 25px;
 a {
  
  color: white;
  margin-right:10px;
  font-size: 24px;
  transition: color 0.3s;
}
}

.social-icons a:hover {
  color: #EE4444;
}

.my_line{
  border-bottom: 2px solid white;
  margin-top: 50px;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    align-items: center;
  }

  .col {
    flex: 1 1 100%;
    margin: 10px 0;
  }

  .bottom-bar {
    flex-direction: column;
  }
}
@media (max-width: 480px) {
  .footer {
    padding: 10px 0;
  }

  .container {
    padding: 0 10px;
  }

  .col h4 {
    font-size: 1.2em;
  }

  .col p {
    font-size: 0.9em;
  }

  .social-icons a {
    font-size: 20px;
  }

  .bottom-bar {
    align-items: center;
    text-align: center;
  }

  .bottom-bar nav a {
    display: block;
    margin: 5px 0;
  }
}
</style>
