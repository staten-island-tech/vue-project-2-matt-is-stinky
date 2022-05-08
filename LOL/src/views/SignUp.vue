<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" to="/Log-In">LogIn</router-link>
      </p>
      <h2>Create Your League of Legends Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/auth";
import db from "../firebase/config";

export default {
  name: "SignUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassowrd(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.fireName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style scoped>
h2 {
  max-width: 21.875rem;
  text-align: center;
  font-size: 2rem;
  color: #303030;
  margin-bottom: 2.5rem;
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