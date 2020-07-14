<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="info">
    <b-navbar-brand :href="'/'">
      Home
    </b-navbar-brand>
    </b-navbar>
    <img src="./assets/busy.jpg" width="100%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
