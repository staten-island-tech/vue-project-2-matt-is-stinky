<template>
  <div class="post-card-wrap">
      <div class="blog-cards">
        <PostCard :post="post" v-for="(post, index) in Posts" :key=index />
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
          PostContent: "Super awesome, mafiaboss, can do situps, ionian gigachad,",
          PostImage: 'sett',
          PostDate: "date",
        },
        {
          name: "talon",
          PostContent: "talon",
          PostImage: "test3",
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
}
</script>

<style>
body {
  color: black;
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