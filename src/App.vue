<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

html,
body {
  font-family: 'Karla', sans-serif;
}

#app {
  font-family: 'Karla', sans-serif;
}
</style>
