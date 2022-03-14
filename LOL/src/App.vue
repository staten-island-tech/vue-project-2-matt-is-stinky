<template>
<div class="container">
  <Navbar/>
</div>
  <router-view/>
</template>

<script>
import Navbar from './components/NavBar'
export default {
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  text-align: center;
}
body {
  background-color: gray;
}

</style>
