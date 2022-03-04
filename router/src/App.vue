<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Sign-Up">Sign Up</router-link> |
    <router-link to="/Log-In">Log In</router-link>
  </nav>
<div class="container">
  <Navbar />
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