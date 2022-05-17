<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: Home }"
          >League of Legends</router-link
        >
        <!-- <img class="logo" src="../assets/logo.png" alt="logo" /> -->
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" to="/">Home</router-link>
          <router-link v-if="user" class="link" to="/Create-Card">Create Card</router-link>
          <router-link v-if="!user" class="link" to="/Log-In"
            >Login</router-link
          >
          <router-link v-if="!user" class="link" to="/Sign-Up"
            >Register</router-link
          >
        </ul>
        <div
          v-if="user"
          @click="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
          <span class="profileSpan">{{
            this.$store.state.profileInitials
          }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>{{ this.$store.state.profileUsername }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" to="/Acc-Profile">
                  <p class="routeNames">Profile</p>
                </router-link>
              </div>
              <div @click="signOut" class="option">
                <p class="routeNames">Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import firebase from "firebase/compat/app";
import "firebase/auth";

export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      profileMenu: null,
    };
  },
  setup() {
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
  methods: {
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
  computed: {},
};
</script>

<style scoped>
header {
  background-color: #000;
  padding: 0 2.5rem;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

.link {
  font-weight: 500;
  padding: 0 0.8rem;
  transition: 0.3s color ease;
}

.link:hover {
  color: red;
}

nav {
  display: flex;
  padding: 2.5rem 0;
}

.branding {
  display: flex;
  align-items: center;
}

.header {
  font-weight: 600;
  font-size: 2.4rem;
  color: white;
  text-decoration: none;
  margin-left: 3.2rem;
}

.nav-links {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

ul {
  margin-right: 3.2rem;
}

.link {
  margin-right: 3.2rem;
}

.link:last-child {
  margin-right: 0;
}

.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  color: #000;
  background-color: #fff;
  z-index: 50;
}

.profile-menu {
  position: absolute;
  top: 6rem;
  right: 0;
  width: 25rem;
  background-color: #fff;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

.info {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 0.1rem solid #000;
}

.initials {
  position: initial;
  width: 4rem;
  height: 4rem;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.right {
  flex: 1;
  margin-left: 2.4rem;
}

p:nth-child(1) {
  font-size: 1.4rem;
}
p:nth-child(2) p:nth-child(3) {
  font-size: 1.2rem;
}

.options {
  padding: 1.5rem;
}

.option {
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
}

.routeNames {
  font-size: 1.4rem;
  margin-left: 1.2rem;
}

.routNames:last-child {
  margin-bottom: 0rem;
}

.option:last-child {
  margin-bottom: 0rem;
}

.profileSpan {
  pointer-events: none;
}
</style>