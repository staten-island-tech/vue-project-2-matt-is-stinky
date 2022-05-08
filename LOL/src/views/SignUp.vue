<template>
   <div class="form-wrap">
      <form class="register">
          <p class="login-register">Already have an account?
              <router-link class="router-link" to="/Log-In">LogIn</router-link>
          </p>
          <h2>Create Your League of Legends Account</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="First Name" v-model="firstName">
              </div>
              <div class="input">
                  <input type="text" placeholder="Last Name" v-model="lastName">
              </div>
              <div class="input">
                  <input type="text" placeholder="Username" v-model="username">
              </div>   
              <div class="input">
                  <input type="text" placeholder="Email" v-model="email">
              </div>
              <div class="input">
                  <input type="password" placeholder="Password" v-model="password">
              </div>
          </div>
          <button>Sign Up</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
export default {
    name:"SignUp",
    data() {
        return {
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            password: null,
        };
    },
};
</script>

<style>
h2{
    max-width: 21.875rem;
}
</style>