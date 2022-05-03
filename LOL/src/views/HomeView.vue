<template>
<div class="main">
  <input class="searchBar" type="text" v-model="search" placeholder="SEARCH FOR CHAMPION">
  <div v-if="user" class="toggle-edit">
    <div>
      <span class="span">Toggle Edit</span>
      <input class="checkbox" type="checkbox" v-model="editPost">
      </div>
  </div>
  <div class="post-card-wrap">
      <div class="blog-cards">
        <PostCard :post="post" v-for="post in searchPosts" :key="post.name" :name="post.name" :content="post.PostContent" :image="post.PostImage" :date="post.PostDate" />
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
      search: "",
      Posts: [
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
    ],    
    }
  },
  computed: {
    searchPosts: function() {
        return this.Posts.filter((Post) => {
          return Post.name.match(this.search);
      })
    },
  },
  setup() {
    const Champions = ref([])

    const store = useStore()
  
    return {
      Champions, 
      user: computed(() => store.state.user)
    }
  },
}
</script>

<style>
.post-card-wrap {
  flex-wrap: wrap;
}

.blog-cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: left;
}

.toggle-edit {
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: .16rem;
  padding:.1rem;
}
.blog-cards:hover {
  animation: 1s cardCover infinite; 
}

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