<template>
<header>
        <img class="logo" src="../assets/ugly.png" alt="logo">
        <nav>
        <template v-if="authIsReady">
            <ul class="navigationLinks">
                <li><router-link class="links" to="/">Home</router-link></li>
            <div v-if="user">
                <span>Logged in as {{ user.email }}</span>
                <button class="logoutButton" @click="handleClick">Logout</button>
            </div>
            <div v-if="!user">
                <li><router-link class="links" to="/Log-In">Login</router-link></li>
                <li><router-link class="links" to="/Sign-Up">Signup</router-link></li>
                <li><router-link class="links" to="/Create-Card">Add Card</router-link></li>
                </div>
            </ul>
        </template>
    </nav>
    </header>
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

li, a, button {
    font-weight: 500;
    font-size: 1.6rem;
    color: white;
    text-decoration: none;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 1rem;
}

.logo {
    cursor: pointer;
}

.navigationLinks {
    list-style: none;
}

.navigationLinks li {
    display: inline-block;
    padding: 0rem 2rem;
}

.logoutButton {
    padding: 0.9rem 2.5rem;
    background-color: red;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
}

</style>