<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/NavBar";
import firebase from "firebase/compat/app";
import "firebase/auth";

export default {
  name: "app",
  components: {
    Navigation,
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        console.log(this.$store.state.profileEmail);
      }
    });
    this.checkRoute();
    this.$store.dispatch("getPost");
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Log In" ||
        this.$route.name === "Sign Up" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&family=Roboto+Mono&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 144rem;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}

.link-light {
  color: #fff;
}

.blog-card-wrap {
  position: relative;
  height: 40rem;
  padding: 0rem 1.6rem;
  padding-top: 1rem;
}

.blog-cards {
  display: flex;
  gap: 3.2rem;
}

.error {
  text-align: center;
  font-size: 1.2rem;
  color: red;
}
</style>
