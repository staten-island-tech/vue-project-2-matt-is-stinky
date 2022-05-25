<template>
  <div class="container">
    <div class="post-view" v-if="currentPost">
      <img :src="this.currentPost[0].postPhoto" alt="" />
      <h2>{{ this.currentPost[0].postTitle }}</h2>
      <h3 class="post-content" v-html="this.currentPost[0].postContent"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      currentPost: null,
    };
  },
  async mounted() {
    this.currentPost = await this.$store.state.blogPosts.filter((post) => {
      return post.postID === this.$route.params.postID;
    });
  },
};
</script>

<style scoped>
img {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
}

h2 {
  font-size: 3rem;
  color: #ffffff;
}
h3 {
  font-size: 1rem;
  color: #ffffff;
}

.container {
  margin-top: 1rem;
  background: #010b1a;
  border-radius: 2rem;
  width: 40%;
}

.post-view {
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
</style>