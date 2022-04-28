<template>
<div>
<div class="container">
 <Navbar/>
</div>
  <router-view/>
</div>
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

</style>
