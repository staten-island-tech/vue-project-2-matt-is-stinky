<template>
   <div class="form-warp">
       <form class="login" @submit.prevent="handleSubmit">
           <h2>Log In</h2>
           <div class="inputs">
               <div class="input">
                   <input type="text" placeholder="Email" v-model="email" required />
               </div>
               <div class="input">
                   <input type="password" placeholder="Password" v-model="password" required />
               </div>
           </div>
           <button>Sign In</button>
            <div v-if="error">Username or password is incorrect.</div>
       </form>
   </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const error = ref(null)
        
        const store = useStore()
        const router = useRouter()

        const handleSubmit = async () => {
            try {
                await store.dispatch('login', {
                    email: email.value,
                    password: password.value
                })
                router.push("/")
            } catch (err) {
                error.value = err.message
            }
        }

        return { handleSubmit, email, password, error }
    }
}
</script>
<style>

body {
    background-image: url("../assets/notstolenbtw.jpg");
}
</style>