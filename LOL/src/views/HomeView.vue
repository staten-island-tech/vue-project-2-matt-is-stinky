<template>
  <div class="post-card-wrap">
      <div class="blog-cards">
        <SomeCards v-for="(post, index) in Posts" :key="index"/>
      </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import SomeCards from '../components/PostCard.vue'
export default {
  components:{
    SomeCards
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
.post-card-wrap {
  position: relative;
  padding: 5rem 1rem;
  background-color: #f1f1f1;
}
.blog-cards{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>