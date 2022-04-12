<template>
<div class="main">
  <input class="searchBar" type="text" v-model="search" placeholder="SEARCH FOR CHAMPION">
  <div class="post-card-wrap">
    <div v-if="user" class="toggle-edit">
          <span class="span">Toggle Editing Posts</span>
          <input type="checkbox" v-model="editPost">
        </div>
      <div class="blog-cards">
        <PostCard v-for="post in searchPosts" :key="post.name" :name="post.name" :content="post.PostContent" :image="post.PostImage" :date="post.PostDate" />
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
    }
  },
  computed: {
    Posts() {
      return this.$store.state.Posts
    },
    editPost:{
      get() {
        return this.$store.state.editPost
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
    searchPosts: function() {
        return this.Posts.filter((Post) => {
          return Post.name.match(this.search);
      })
    },
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