<script>
export default {};
</script>

<template>
  <footer class="footer overlay">
    <div class="container flex-wrap">
      <div class="row">
        <div class="col">
          <h4>INCONTRIAMOCI</h4>

          <ul class="fw-medium">
            <li>
              <span><i class="fa-solid fa-location-dot"></i></span>Via Gherardo
              Luigi, 24
            </li>
            <li>
              <span><i class="fa-solid fa-clock"></i></span>LUN-SAB 11:00-24:00
            </li>
            <li>
              <span><i class="fa-solid fa-bag-shopping"></i></span>DOM
              11:00-03:00
            </li>
            <li>
              <span><i class="fa-solid fa-phone-volume"></i></span>+39
              3543653625
            </li>
          </ul>
          <div class="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <!-- <div class="col">
          <h4>CHI SIAMO</h4>
          
          <ul class=" fw-medium">
            <li> <a href=""> La nostra storia</a></li>
            <li><a href="">Il nostro team</a></li>
            <li><a href="">Il nostro cibo </a> </li>
            <li><a href="">Opportunità di lavoro</a></li>
            

          </ul>
        </div>
        <div class="col">
          <h4>I NOSTRI MENU</h4>
          
          <ul class=" fw-medium">
            <li> <a href="">Hamburger di manzo</a></li>
            <li><a href="">Hamburger di pollo</a></li>
            <li><a href="">Hamburger a base vegetale </a> </li>
            <li><a href="">Bevande</a></li>
            

          </ul>
        </div> -->
        <div class="col d-flex flex-column align-items-end">
          <h4>INSTAGRAM</h4>
          <div class="d-flex">
            <div class="boxettino">
              <img
                src="/src/assets/img/hamburger-gourmet.png"
                alt="hamburger-gourmet.png"
              />
            </div>
            <div class="boxettino">
              <img src="/src/assets/img/ham-3-g.png" alt="ham-3-g.png" />
            </div>
            <div class="boxettino">
              <img src="/src/assets/img/ham-1.png" alt="ham-1.png" />
            </div>
          </div>
          <div class="d-flex">
            <div class="boxettino">
              <img src="/src/assets/img/ham-3-g.png" alt="ham-3-g.png" />
            </div>
            <div class="boxettino">
              <img src="/src/assets/img/ham-1.png" alt="ham-1.png" />
            </div>
            <div class="boxettino">
              <img
                src="/src/assets/img/hamburger-gourmet.png"
                alt="hamburger-gourmet.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my_line container"></div>

    <div class="container d-flex justify-content-between flex-wrap">
      <div class="d-flex my-3 fw-medium">
        <div><i class="fa-regular fa-copyright"></i></div>
        <p>2024Deliverboo All ReservedRigths</p>
      </div>
      <div>
        <ul class="d-flex my_links my-3 fw-medium">
          <li><a href="#">About</a></li>
          <li><a href="#">Delivery</a></li>
          <li><a href="#">Contacts</a></li>
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
  width: 100%;
  padding: 20px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/src/assets/img/footer-background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
img {
  max-width: 100%;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.1);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.boxettino {
  height: 90px;
  width: 90px;
  object-fit: contain;
}
h4 {
  color: #ee4444;
  margin-bottom: 15px;
}

ul {
  margin: 0px;
  padding: 0px;
  li {
    list-style: none;
    margin: 0px;
    padding: 0px;
    line-height: 30px;

    a {
      text-decoration: none;
      color: white;
      padding: 10px;
      &:hover {
        color: #ee4444;
      }
    }
    span {
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
    margin-right: 10px;
    font-size: 24px;
    transition: color 0.3s;
  }
}

.social-icons a:hover {
  color: #ee4444;
}

.my_line {
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

  // .container {
  //   padding: 0 10px;
  // }

  .col h4 {
    font-size: 1.2em;
  }
  .col li {
    flex-direction: column;
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
