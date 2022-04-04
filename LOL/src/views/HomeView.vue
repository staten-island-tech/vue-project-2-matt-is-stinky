<template>
<div>
  <div class="post-card-wrap">
    <div class="toggle-edit">
          <span class="span">Toggle Editing Posts</span>
          <input type="checkbox"  v-model="editPost">
        </div>
      <div class="blog-cards">
        <PostCard  v-for="post in Posts" :key="post.name" :name="post.name" :content="post.PostContent" :image="post.PostImage" :date="post.PostDate" />
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
    PostCard
  },
  data(){
    return {    
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
body {
  color: black;
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
</style>