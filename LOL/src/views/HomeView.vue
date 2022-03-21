<template>
<div class="home">
  <BlogPost :post="post" v-for="(post, index) in Posts" :key="index"/>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import BlogPost from '../components/CardPost.vue'
export default {
  components:{
    BlogPost
  },
  data(){
    return {
      Posts: [
        {
          title: "test",
          PostContent: "test",
          PostImage: "test",
        },
        {
          title: "test2",
          PostContent: "test2",
          PostImage: "test2",
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
</style>