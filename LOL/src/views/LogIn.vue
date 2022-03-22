<template>
   <div class="form-warp">
       <form class="login">
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
            <div class="angle"></div>
       </form>
       <div class="background"></div>
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
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 90%;
}
form {
    padding: 0 1rem;
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

</style>