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
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 8rem;
  transition: 0.5s ease all;
}

.blog-card:hover {
  transform: rotateZ(-1deg) scale(1.01);
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

img {
  display: block;
  z-index: 1;
  width: 100%;
  border-radius: 2rem;
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 3.2rem 1.6rem;
  color: #000;
  visibility: hidden;
}

.info:hover {
  visibility: visible;
}

h4 {
  padding-bottom: 0.8rem;
  font-size: 2rem;
  font-weight: 300;
}

h6 {
  font-weight: 400;
  font-size: 1.2rem;
  padding-bottom: 1.6rem;
}

.link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  font-weight: 500;
  padding-top: 2rem;
  font-size: 1.2rem;
  padding-bottom: 0.4rem;
  transition: 0.5s ease-in all;
}

.link:hover {
  color: rgba(48, 48, 48, 0.8);
}

.editButtons {
  display: grid;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 9;
}

.editting {
  display: flex;
  justify-content: content;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #303130;
  transition: 0.5s ease all;
  z-index: 5;
}

.editting:hover {
  background: #fff;
}

.delete path {
  fill: #fff;
}
button {
  background: none;
}
</style>