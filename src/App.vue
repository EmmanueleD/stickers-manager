<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>Stickers Manager</h1>

  <div class="firma">
    <a href="https://www.emmd.dev"><img src="./assets/emmd_logo.gif" alt=""></a>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.firma {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: calc(100vh - 350px);
}


.firma img {
  width: 75px
}
</style>
