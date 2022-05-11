<!-- <template>
  <div class="main">
    <input
      class="searchBar"
      type="text"
      v-model="search"
      placeholder="SEARCH FOR CHAMPION"
    />
    <div v-if="user" class="toggle-edit"></div>
    <div class="post-card-wrap">
      <div class="blog-cards">
        <BlogCard
          :post="post"
          v-for="post in sampleBlogCards"
          :key="post"
        />
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="home">
    <!-- <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="post in sampleBlogPost" :key="post" /> -->
    <input
      class="searchBar"
      type="text"
      v-model="search"
      placeholder="SEARCH FOR CHAMPION"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="post in sampleBlogCards" :key="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*import BlogPost from "../components/BlogPost.vue";*/
import BlogCard from "../components/BlogCard";
/*import { ref, computed } from "vue";
import { useStore } from "vuex";*/
export default {
  name: "HomeView",
  components: {
    /*BlogPost,*/
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "irelia",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "sett",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "talon",
        },
      ],
      search: "",
      /*Posts: [
        {
          name: "Yasuo",
          PostContent: "Kinda cool, has a brother, killed him tho :/",
          PostImage: "yasuo",
          PostDate: "date",
        },
        {
          name: "irelia",
          PostContent: "Super cringe, not a wife, ionian menace,",
          PostImage: "irelia",
          PostDate: "date",
        },
        {
          name: "sett",
          PostContent:
            "Super awesome, mafiaboss, can do situps, ionian gigachad,",
          PostImage: "sett",
          PostDate: "date",
        },
        {
          name: "talon",
          PostContent: "talon",
          PostImage: "talon",
          PostDate: "date",
        },
      ],*/
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    searchPosts: function () {
      return this.Posts.filter((Post) => {
        return Post.name.match(this.search);
      });
    },
  },
};
</script>

<style>
h3 {
  font-weight: 300;
  font-size: 2.8rem;
  margin-bottom: 3.2rem;
}
.blog-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: left;
}
/*
.toggle-edit {
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 0.16rem;
  padding: 0.1rem;
}
.blog-cards:hover {
  animation: 1s cardCover infinite;
}*/

.searchBar {
  width: 50rem;
  height: 4rem;
  background: #000000;
  border-radius: 20rem;
  color: white;
  border: none;
  background: black;
  transition: ease-out 1s;
  outline: none;
}

.searchBar:hover {
  box-shadow: inset 77rem 0 0 0 rgb(39, 39, 39);
  cursor: pointer;
}
</style>