<template>
  <div class="blog-card">
    <div v-show="editPosts" class="editButtons">
      <div class="editting">
        <button class="delete" @click="deletePost">Delete</button>
      </div>
    </div>
    <router-link
      :to="{ name: 'View Blog', params: { postID: this.post.postID } }"
    >
      <img :src="post.postPhoto" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  methods: {
    deletePost() {
      this.$store.dispatch("deletePost", this.post.postID);
    },
  },
  computed: {
    editPosts() {
      return this.$store.state.editPost;
    },
  },
};
</script>

<style scoped>
.blog-card{
  height: 14rem;
  display: flex;
}

.blog-card:hover {
  transform: rotateZ(-1deg) scale(1.01);
  background-color: #000;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

.editButtons {
  display: grid;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 99;
}

.editting {
  display: flex;
  justify-content: content;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.5s ease all;
  z-index: 5;
}

.editting:hover {
  background: #303030;
}

.edit path {
  fill: #fff;
}

.delete path {
  fill: #fff;
}
button {
  background: none;
}
/*
.card-post {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  margin: 2rem auto;
}*/
</style>