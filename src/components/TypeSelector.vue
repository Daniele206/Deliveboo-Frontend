<script>

  // store
  import { store } from '../data/store';
  // store

  export default {
    name: 'type-selector',

    props:{
      types: Array
    },

    data(){
      return{
        store
      }
    },

    methods:{
      slectType(nameType, i){
        if(this.store.typesSelected[i] === (nameType)){
          delete this.store.typesSelected[i];
        }else{
          this.store.typesSelected[i] = nameType;
        }
        this.$emit('typeChek');
      }
    }
  }
</script>

<template>
  <div>
    <h6 class="text-light fw-bold mb-3 text-center">Filtro per tipologia</h6>
    <div class="btn-group justify-content-center align-items-center flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
      <div  v-for="(oneType, i) in types" :key="oneType.id" class="mx-2 my-1">
        <input @click="slectType(oneType.name, i)" type="checkbox" class="btn-check my_w" :id="'btncheck' + i" autocomplete="off">
        <label class="btn btn-outline-warning my_w text-capitalize" :for="'btncheck' + i">{{ oneType.name }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.my_w{
  width: 120px;
}

</style>