<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="post in sampleBlogCards" :key="post" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
  name: "Blog-View",
  components: {
    BlogCard,
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
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
.blog-cards {
  position: relative;
}

.toggle-edit {
  display: flex;
  align-items: center;

  top: -7rem;
  right: 0;
}

span {
  margin-right: 1.6rem;
}

input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: white;
  outline: none;
  width: 8rem;
  height: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
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