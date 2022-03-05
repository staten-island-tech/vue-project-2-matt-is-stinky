<template>
<nav>
    <img alt="logo" src="../assets/ugly.png">
    <div>
        <router-link to="/">Home</router-link>
    </div>
    <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
    </div>
    <div v-if="!user">
        <router-link to="/Log-In">Login</router-link>
        <router-link to="/Sign-Up">Signup</router-link>
    </div>
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
            user: computed(() => store.state.user)
        }
    }
}

</script>