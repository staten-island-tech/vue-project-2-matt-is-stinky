<template>
<div>
  <div v-for="Champion in Champions" :key="Champion.id">
    <h3>{{Champion.name}}</h3>
    <div class="icons" v-if="user">
      <span class="material-icons">thumb_up</span>
      <span class="material-icons">thumb_down</span>
    </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
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
