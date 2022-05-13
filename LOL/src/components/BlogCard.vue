<!-- <template>
  <div class="card-post">
    <router-link class="links" to="/View-Blog">
      <h2>{{ post.name }}</h2>
      <img :src="require(`../assets/images/${post.PostImage}.jpg`)" alt="" />
      <h2>{{ post.date }}</h2>
    </router-link>
  </div>
</template> -->
<template>
  <div class="blog-card">
    <div v-show="editPost" class="editButtons">
      <div class="editting">
        <button class="edit" @click="handleClick">Edit</button>
      </div>
      <div class="editting">
        <button class="delete" @click="handleClick">Delete</button>
      </div>
    </div>
    <img :src="require(`../assets/images/${post.blogCoverPhoto}.jpg`)" alt="" />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Posted on: {{ post.blogDate }}</h6>
      <!-- <router-link class="link" to="#"> View The Post </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    editPost() {
      return this.$store.state.editPost;
    },
  },
  /*
  computed: {
    computedBackgroundImage: function () {
        return this.background;
    }
},

methods: {
    returnBackground: function (post) {
        return this.background=`../assets/images/${post.PostImage}.jpg`
    }
}*/
};
</script>

<style scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 8rem;
  transition: 0.5s ease all;
}

.blog-card:hover {
  transform: rotateZ(-1deg) scale(1.01);
  background-color:#000;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

img {
  display: block;
  z-index: 1;
  width: 100%;
  object-fit: cover;
  margin: 2rem auto;
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

.info:hover{
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

/*
.card-post {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  margin: 2rem auto;
}*/
</style>