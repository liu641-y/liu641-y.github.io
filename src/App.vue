<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
body ,html,#app{
  /* background-color: black;*/
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: black;

  font-size: 50px;
}
</style>
