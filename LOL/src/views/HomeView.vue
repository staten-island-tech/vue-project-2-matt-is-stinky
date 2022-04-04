<template>
<div class="main">
  <div class="inputs">
    <input type="text" id="SearchBar" placeholder="SEARCH FOR CHAMPION">
    </div>
  <div v-for="Champion in Champions" :key="Champion.id">
    <h3>{{Champion.name}}</h3>
    <div class="icons" v-if="user">
      <span class="material-icons">thumb_up</span>
      <span class="material-icons">thumb_down</span>
    </div>
  <div class="post-card-wrap">
      <div class="blog-cards">
        <PostCard  v-for="post in Posts" :key="post.name" :name="post.name" :content="post.PostContent" :image="post.PostImage" :date="post.PostDate" />
      </div>

    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import PostCard from '../components/PostCard'
export default {
  components:{
    PostCard
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
      ]   
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
  background-color: #f1f1f1;
}
.blog-cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>