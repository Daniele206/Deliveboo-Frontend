<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <div class="container">
    <header class="row">
      <img src="" alt="Logo" class="logo" />
      <nav class="nav">
        <button>Accedi</button>
        <button>Registrati</button>
        <button>Aiuto</button>
      </nav>
    </header>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: $white-100;
  color: black;
}

.logo {
  height: 50px;
}

.nav button {
  margin-left: 10px;
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 16px;
  cursor: pointer;
}

.nav button:hover {
  text-decoration: underline;
}
</style>
