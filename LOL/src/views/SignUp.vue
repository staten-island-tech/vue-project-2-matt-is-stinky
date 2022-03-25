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
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 100%;
}
form {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
}

h2 {
    text-align: center;
    font-size: 3.2rem;
    color: #000000;
    margin-bottom: 4rem;
}
.inputs {
    width: 100%;
    max-width: 35rem;
}

.input {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
}
input {
    width: 100%;
    border: none;
    background-color: #FFFFFF;
    padding: 0.4rem 0.4rem 0.4rem 3rem;
    height: 5rem;
}

body {
    background-size:cover;
    background-image: url("../assets/notstolenbtw.jpg");
}
</style>