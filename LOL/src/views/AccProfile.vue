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
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
          <div class="action">
          <button @click="updateProfile">Save Changes</button>
        </div>
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
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 32px;
  margin-top: 1rem;
}
.profile-info {
  border-radius: 2rem;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1),
    0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.6);
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  width: 44%;
  margin: 2rem auto;
  height: 24rem;
}
.initials {
  position: initial;
  widows: 5rem;
  height: 10rem;
  font-size: 2rem;
  background-clip: #303030;
  color: #fff;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
label {
  font-size: 0.875rem;
  display: block;
  padding-bottom: 0.375rem;
  align-self: center;
}
input {
  align-self: center;
  width: 75%;
  border: none;
  padding: 1rem;
  height: 3.125rem;
  background-color: #02122a;
  color: #fff;
}
input:focus {
  outline: none;
}
.profile-info{
  background-color: #010b1a;
}
.action{
  width: 100%;
  padding: 1rem;
  justify-content: center;
  display: flex;
}

</style>