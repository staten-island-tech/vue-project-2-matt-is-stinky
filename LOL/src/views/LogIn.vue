<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" to="/Sign-Up">SignUp</router-link>
      </p>
        <p class="back-home">Go back to 
          <router-link class="router-link" to="/">Home</router-link>
        </p>
      <h2>Login to League of Legends</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" to="/Forgot-Password"
        >Forgot Password?</router-link
      >
      <button @click.prevent="signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/auth";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
          console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style scoped>
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
h2 {
  text-align: center;
  font-size: 2rem;
  color: #303030;
  margin-bottom: 2.5rem;
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