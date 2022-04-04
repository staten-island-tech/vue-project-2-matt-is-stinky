<template>
<div class="main">
  <input class="searchBar" type="text" v-model="search" placeholder="SEARCH FOR CHAMPION">
  <div class="post-card-wrap">
      <div class="blog-cards">
        <PostCard  v-for="post in searchPosts" :key="post.name" :name="post.name" :content="post.PostContent" :image="post.PostImage" :date="post.PostDate" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import PostCard from '../components/PostCard'
export default {
  components:{
    PostCard,
  },
  data(){
    return {   
      Posts: [
        {
          name: "Yasuo",
          PostContent: "Kinda cool, has a brother, killed him tho :/",
          PostImage: "../assets/images/yasuo.jpg",
          PostDate: "date",   
        },
        {
          name: "irelia",
          PostContent: "Super cringe, not a wife, ionian menace,",
          PostImage: "../assets/images/irelia.jpg",
          PostDate: "date",
        },
        {
          name: "sett",
          PostContent: "Super awesome, mafiaboss, can do situps, ionian gigachad,",
          PostImage: "../assets/images/sett.jpg",
          PostDate: "date",
        },
        {
          name: "talon",
          PostContent: "talon",
          PostImage: "../assets/images/talon.jpg",
          PostDate: "date", 
        },
      ],  
      search: '' 
    }
  },
  setup() {
    const Champions = ref([
      { name: 'thing 1', id: 1},
      { name: 'thing 2', id: 2},
      { name: 'thing 3', id: 3}
    ])

    const store = useStore()
  
    return {
      Champions, 
      user: computed(() => store.state.user)
    }
  },
  computed: {
        searchPosts: function() {
            return this.Posts.filter((Post) => {
                return Post.name.match(this.search);
            })
        }
    }
}
</script>

<style>
body {
    background-image: url("../assets/runeterra.png");
}
.post-card-wrap {
  flex-wrap: wrap;
}
.blog-cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.searchBar {
  width: 77rem;
  height: 5rem;
  background: #000000;
  border-radius: 20rem;
  color: white;
}
</style>