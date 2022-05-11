<template>
  <div class="profile">
    <EmailModal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="emial">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmailModal from "../components/EmailModal";
export default {
  name: "AccProfile",
  components: {
    EmailModal,
  },
  data() {
    return {
      modalMessage: "Changes were saved",
      modalActive: false,
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
    },
    updateProfile() {
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.profileFirstName;
      },
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.profileLastName;
      },
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      set(payload) {
        this.$store.commit("changeUsername", payload);
      },
    },
    email() {
      return this.$store.state.profileEmail;
    },
  },
};
</script>

<style scoped>
button {
  align-self: center;
}
h2 {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 32px;
}
.container {
  max-width: 62.5rem;
  padding: 3.75rem 1.5625rem;
}
.profile-info {
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.6);
  padding: 2rem;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 37.5rem;
  margin: 2rem auto;
}
.initials {
  position: initial;
  widows: 5rem;
  height: 5rem;
  font-size: 2rem;
  background-clip: #303030;
  color: #fff;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.input {
  margin: 1rem 0;
}
label {
  font-size: 0.875rem;
  display: block;
  padding-bottom: 0.375rem;
}
input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 0.5rem;
  height: 3.125rem;
}
input:focus {
  outline: none;
}
</style>