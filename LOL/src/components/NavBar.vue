<!--<template>
  <header>
    <img class="logo" src="../assets/logo.png" alt="logo" />
    <nav>
      <template v-if="authIsReady">
        <ul class="navigationLinks">
          <li><router-link class="links" to="/">Home</router-link></li>
          <li class="userSection" v-if="user">
            <ul>
              <li>
                <span>Logged in as {{ user.email }}</span>
              </li>
              <li>
                <button class="logoutButton" @click="handleClick">
                  Logout
                </button>
              </li>
              <li><router-link class="links" to "">Your Profile</router-link></li>
              <li>
                <router-link class="links" to="/Create-Card"
                  >Add Card</router-link
                >
              </li>
            </ul>
          </li>
          <li class="userSection" v-if="!user">
            <ul>
              <li>
                <router-link class="links" to="/Log-In">Login</router-link>
              </li>
              <li>
                <router-link class="links" to="/Sign-Up">Signup</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </nav>
  </header>
</template>
-->
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
          <router-link class="link" to="/Blogs-View">Blogs</router-link>
          <router-link class="link" to="/Create-Card">Create Card</router-link>
          <router-link class="link" to="/Log-In">Login</router-link>
          <router-link class="link" to="/Sign-Up">Register</router-link>
        </ul>
        <div class="profile" ref="profile">
          <span>{{ this.$store.state.profileInitials }}</span>
          <div class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
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

export default {
  name: "NavBar",
  components: {},
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
};
</script>

<style scoped>
/*a,
button {
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
  text-decoration: none;
}*/

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

/*
.logo {
  cursor: pointer;
}

.navigationLinks {
  list-style: none;
}

.navigationLinks ul {
  padding: 0rem;
}

.navigationLinks li {
  display: inline-block;
  padding: 0.5rem;
  margin-left: 1.5rem;
}

.navigationLinks .userSection {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

.logoutButton {
  background-color: red;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
}*/
</style>