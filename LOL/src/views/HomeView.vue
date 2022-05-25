<template>
  <div class="home">
    <div class="toggle-edit" v-if="user">
      <span>Toggle Editing Post</span>
      <input type="checkbox" v-model="editPost" />
    </div>
    <div class="blog-card-wrap">
      <div class="container">
        <div class="blog-cards">
          <BlogCard :post="post" v-for="post in blogPosts" :key="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Home-View",
  components: {
    BlogCard,
  },
  data() {
    return {
      search: "",
    };
  },
  setup() {
    const store = useStore();
    return {
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
  },
  beforeUnmount() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style scoped>
.blog-cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
}

.toggle-edit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

span {
  margin-right: 1.6rem;
}

input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: #fff;
  outline: none;
  width: 8rem;
  height: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
  transition: ease-out 1s;
}

.searchBar {
  width: 50rem;
  height: 4rem;
  background: #000000;
  border-radius: 20rem;
  color: white;
  border: none;
}

.searchBar:hover {
  box-shadow: inset 77rem 0 0 0 rgb(39, 39, 39);
  cursor: pointer;
}
input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  top: 0;
  left: 0;
  background: white;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

input:checked[type="checkbox"]:before {
  background: red;
  left: 5.2rem;
}
</style>