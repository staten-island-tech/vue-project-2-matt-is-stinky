<template>
<div class="container">
 <Navbar2/>
</div>
  <router-view/>
</template>

<script>
import Navbar2 from './components/NavBar2'
export default {
  components: {
     Navbar2, 
  }
}
</script>

<style>
#app {
  text-align: center;
}

</style>
