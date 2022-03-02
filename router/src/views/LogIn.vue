<template>
    <form @submit.prevent="handleSubmit">        
    <h3> LogIn</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>
    
    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>LogIn</button>
    </form>
</template>
<script>
import { ref } from 'vue'

export default {
    name:'LogInView',
    components: { },
    methods: { },
}
</script>