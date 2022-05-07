<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/NavBar";
export default {
  name: "app",
  components: {
    Navigation,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trade Winds", cursive;
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
  background: #f1f1f1;
}

.blog-cards {
  display: flex;
  gap: 3.2rem;
}
</style>
