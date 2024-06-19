<script>
  export default {
    name: 'type-selector',
    props:{
      types: Array
    }
  }
</script>

<template>
    <div class="btn-group align-items-center" role="group" aria-label="Basic checkbox toggle button group">
      <h6 class="text-light fw-bold me-2">Filtro per tipologia:</h6>
      <div  v-for="(oneType, i) in types" :key="oneType.id" class="mx-2">
        <input type="checkbox" class="btn-check" :id="'btncheck' + i" autocomplete="off">
        <label class="btn btn-outline-warning" :for="'btncheck' + i">{{ oneType.name }}</label>
      </div>
    </div>
</template>

<style lang="scss" scoped>

</style>