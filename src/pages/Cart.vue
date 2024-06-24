
<script>
 import axios from 'axios';
 import { store } from '../data/store';


  export default {
    name: 'cart',

    data(){
        return{
          store,
        }
      },
     

  }

</script>


<template>
  <div class="container my_cont">
    <div class="my_round">
     <table class="table">
  <thead class="">
      <tr>
        
        <th scope="col">prodotto </th>
        <th scope="col">prezzo</th>
        <th scope="col">quantità</th>
        <th scope="col">totale</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div class=" d-flex p-2">
          <div class="p-2">
            img
          </div>
          <div class="p-2">
            descrizione prodotto
          </div>

        </div>

      </th>
      <td>Mark</td>
      <td >
        <input class="my_number" type="number" min="0">
      </td>
      <td>@mdo</td>
    </tr>
    
    
  </tbody>
</table>

    <h2>cart total</h2>

    <div class="container flex-column ">

      <div class="boxettino d-flex justify-content-between  align-items-center ">
        <div> 
          subtotal
        </div>
        <div>
          22
        </div>
      </div>
      <div class="boxettino d-flex justify-content-between  align-items-center ">
        <div>
          shipping
        </div>
        <div>
          22
        </div>
      </div>
      <div class="boxettino d-flex justify-content-between  align-items-center">
        <div>
          total
        </div>
        <div>
          22
        </div>
      </div>


    </div>


    <div class=" d-flex justify-content-center align-items-center my-3">
      <button type="button" class="btn btn-danger">procedi al pagamento </button>
    </div>

    </div>

    

</div>
  
</template>


<style lang="scss" scoped>
.my_cont{
  padding-top: 100px;

}
.my_round{
  margin-top: 20px;
  padding: 10px 30px;
  background-color: white;
  border: 1px solid red;
  color: black;
  border-radius: 50px;
}
.my_number{
  border-radius: 35%;
  width: 70px;
  height: 40px;
  line-height: 25px;
  border: 2px solid red;

}
.boxettino{
  
  height: 60px;
  border-top: 2px solid grey;
  border-bottom:2px solid grey ;
}



</style>