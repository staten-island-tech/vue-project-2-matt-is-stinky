<template>
<nav>
    <div class="logo">
    <img alt="logo" src="../assets/ugly.png">
    </div>
    <template v-if="authIsReady">
    <div>
        <router-link class="links" to="/">Home</router-link>
    </div>
    <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
    </div>
    <div v-if="!user">
        <router-link class="links" to="/Log-In">Login</router-link>
        <router-link class="links" to="/Sign-Up">Signup</router-link>
        <router-link class="links" to="/Create-Card">AddCard</router-link> 
    </div>
    </template>
</nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    setup() {
        const store = useStore()
        const handleClick = () => {
            store.dispatch('logout')
        }
        return { 
            handleClick,
            user: computed(() => store.state.user),
            authIsReady: computed(() => store.state.authIsReady),
        }
    }
}

</script>
<style>
 nav {
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
}
.links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3.2rem;
}

nav a,
nav button,
nav span {
  margin-left: 40rem;
  text-transform: uppercase;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

nav span {
  color: white;
}

button {
  background: red;
  border: 0;
  padding: 1rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: blue;
}

</style>