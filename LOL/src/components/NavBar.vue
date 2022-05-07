<template>
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
              <!-- <li><router-link class="links" to "">Your Profile</router-link></li> -->
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

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
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

<style>
a,
button {
  font-weight: 500;
  font-size: 1.6rem;
  color: white;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 1rem;
  height: 1rem;
}

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
}
</style>