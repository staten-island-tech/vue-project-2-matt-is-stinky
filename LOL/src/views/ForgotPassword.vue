<template>
  <div class="reset-password">
      <EmailModal v-if="modalActive" v-on:close-modal="closeModal"/>
      <LoadingPage v-if="loading"/>
      <div class="form-wrap">
          <form class="reset">
              <h2>Reset Password</h2>
              <p>Forgot your password? Enter your email to reset it</p>
              <div class="inputs">
                  <div class="input">
                     <input type="text" placeholder="Email" v-model="email" /> 
                  </div>
              </div>
              <button>Reset</button>
              <div class="angle"></div>
          </form>
          <div class="background"></div>
      </div>
  </div>
</template>

<script>
import EmailModal from "../components/EmailModal"
import LoadingPage from "../components/LoadingPage"
export default {
    name: "forgotPassword", 
    components: {
        EmailModal,
        LoadingPage,
    },
    data() {
        return {
          email: null,
          modalActive: false,
          modalMessage: "",
          loading: null,
        };
    },
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = "";
        },
    },
};
</script>

<style>
.reset-password{
    position: relative;
}
h2{
    margin-bottom: .5rem;
}
p{
    text-align: center;
    margin-bottom: 2rem;
}
</style>