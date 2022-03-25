<template>
<div class="home">
  <div class="post-card-wrap">
    <div class="container">
      <h3>View More Recent Posts</h3>
      <div class="blog-cards">
        <Cards v-for="(post, index) in Posts" :key/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Cards from '../components/PostCard.vue'
export default {
  components:{
    Cards
  },
  data(){
    return {
      Posts: [
        {
          title: "test",
          PostContent: "test",
          PostImage: "test",
          PostDate: "test",   
        },
        {
          title: "test2",
          PostContent: "test2",
          PostImage: "test2",
          PostDate: "test",
        }
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
}
</script>

<style>
body {
  color: black;
}
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
}
</style>