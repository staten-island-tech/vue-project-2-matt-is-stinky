<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  setup() {
    const blogs = ref([
      { title: 'peanut butter is orange', id: 1},
      { title: 'beans are not very cool', id:2},
      { title: 'why i like to eat paper', id:3}
    ])
    return {
      blogs
    }
  },
  computed:{
    points() {
      return this.$store.state.points
    }
  }
}
</script>
