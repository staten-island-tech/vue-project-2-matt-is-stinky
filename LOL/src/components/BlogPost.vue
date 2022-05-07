<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preivew" v-else>{{ post.blogHTML }}</p>
        <!-- <router-link class="link link-light" v-if="post.welcomeScreen" to="#"
          >Login/Register</router-link
        >
        <router-link else>View the Post</router-link> -->
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/images/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="require(`../assets/images/${post.blogCoverPhoto}.jpg`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post"],
};
</script>

<style scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
  min-width: 120rem;
  min-height: 65rem;
}

.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
  order: 1;
}

div {
  max-width: 37.5rem;
  padding: 7.2rem 2.4rem;
}

h2 {
  font-size: 3.2rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
}

p {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.7;
}

.content-preview {
  font-size: 1.3rem;
  max-height: 2.4rem;
  width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.link {
  display: inline-flex;
  align-items: center;
  margin-top: 3.2rem;
  padding-bottom: 0.4rem;
  border-bottom: 0.1rem solid transparent;
  transition: 0.5s ease-in all;
}

.link:hover {
  border-bottom-color: #303030;
}

.link-light:hover {
  border-bottom-color: #ffffff;
}

.blog-photo {
  order: 2;
  flex: 3;
  box-shadow: 0 0.4rem 0.6rem -0.1rem rgba(0, 0, 0, 0.1),
    0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-user:first-child {
  background-color: #303030;
  color: white;
}
</style>