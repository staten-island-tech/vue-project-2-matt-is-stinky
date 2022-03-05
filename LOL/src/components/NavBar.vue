<template>
<nav>
    <img alt="logo" src="../assets/ugly.png">
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div>
        <span>Logged in as...</span>
        <button @click="handleClick">Logout</button>
    </div>
    <div>
        <router-link to="/Log-In">Login</router-link>
        <router-link to="/Sign-Up">Signup</router-link>
    </div>
</nav>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const handleClick = () => {
            store.dispatch('logout')
        }
        return { handleClick }
    }
}

</script>