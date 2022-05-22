<template>
     <div class="post-view" v-if=currentPost >
      <h2>{{ this.currentPost[0].postTitle }}</h2>
      <img :src="this.currentPost[0].postPhoto" alt="" />
      <div class="post-content" v-html="this.currentPost[0].postContent"></div>
  </div>  
</template>

<script>
export default {
    name: "ViewBlog",
    data() {
        return{
            currentPost: null,
        };
    },
    async mounted() {
        this.currentPost = await this.$store.state.blogPosts.filter((post) => {
            return post.postID === this.$route.params.postID
        })
    },
};
</script>

<style>

</style>