<template>
<div class="form-warp">
    <form @submit.prevent="handleSubmit">        
        <h2>Sign Up</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email" required />
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password" required />
                </div>
            </div>
            <button>Register</button>
        <div v-if="error">{{ error }}</div>
    </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')
        const error = ref(null)
        
        const store = useStore()
        const router = useRouter()

        const handleSubmit = async () => {
            try {
                await store.dispatch('signup', {
                    username: username.value,
                    email: email.value,
                    password: password.value
                })
                router.push("/")
            } catch (err) {
                error.value = err.message
            }
        }
        return { handleSubmit, username, email, password, error }
    }
}
</script>

<style>

body {
    background-image: url("../assets/notstolenbtw.jpg");
}
</style>