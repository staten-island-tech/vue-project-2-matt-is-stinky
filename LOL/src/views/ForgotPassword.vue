<template>
  <div class="reset-password">
    <EmailModal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <LoadingPage v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" to="/Log-In">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import EmailModal from "../components/EmailModal";
import LoadingPage from "../components/LoadingPage";
import firebase from "firebase/compat/app";
import "firebase/auth";
export default {
  name: "forgotPassword",
  components: {
    EmailModal,
    LoadingPage,
  },
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exists, you will receive a email.";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style>
.reset-password {
  position: relative;
}
h2 {
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 2rem;
  color: #303030;
}
p {
  text-align: center;
  margin-bottom: 2rem;
}

.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
}
.login-register {
  margin-bottom: 2rem;
}
.router-link {
  color: #000;
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
.forgot-password {
  text-decoration: nopne;
  color: #000;
  cursor: pointer;
  font-size: 0.875rem;
  margin: 1rem 0 2rem;
  border-bottom: 0.0625rem solid transparent;
}
.inputs {
  width: 100%;
  max-width: 21.875rem;
}
.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}
input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 0.25rem 0.25rem 0.25rem 1.875rem;
  height: 3.25rem;
}
input:focus {
  outline: none;
}

.angle {
  display: none;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 3.75rem;
  right: -1.875rem;
  height: 101%;
}
.background {
  display: none;
  flex: 2;
  background-size: cover;
  background-image: url("../assets/secondBackground.jpg");
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 900px) {
  .background {
    display: initial;
  }
  .angle {
    display: initial;
  }
  h2 {
    font-size: 2.5rem;
  }
  form {
    padding: 0 3.125rem;
  }
  .form-wrap {
    width: 100%;
  }
}
button {
  font-family: "Trade Winds", cursive;
  width: 6rem;
  height: 2.5rem;
  border: none;
  background: #f2f7f6;
  border-radius: 0.7rem;
  transition: ease-out 0.3s;
  outline: none;
}
</style>