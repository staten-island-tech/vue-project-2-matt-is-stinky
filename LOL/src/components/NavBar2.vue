  <template>
    <nav>
        <img class="logo" src="../assets/ugly.png" alt="logo">
        <template v-if="authIsReady">
            <ul class="navigationLinks">
                <li><router-link class="links" to="/">Home</router-link></li>
            </ul>
            <div v-if="user">
                <span>Logged in as {{ user.email }}</span>
                <button @click="handleClick">Logout</button>
            </div>
            <div v-if="!user">
                <ul class="navigationLinks">
                <li><router-link class="links" to="/Log-In">Login</router-link></li>
                <li><router-link class="links" to="/Sign-Up">Signup</router-link></li>
                <li><router-link class="links" to="/Create-Card">Add Card</router-link></li>
                </ul>
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