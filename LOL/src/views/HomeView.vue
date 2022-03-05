<template>
<div>
  <div v-for="Champion in Champions" :key="Champion.id">
    <h3>{{Champion.name}}</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const Champions = ref([
      { name: 'thing 1', id: 1},
      { name: 'thing 2', id:2},
      { name: 'thing 3', id:3}
    ])

    const store = useStore()

    console.log(store.state.user)
    store.commit('setUser', 'sans')
  
    return {
      Champions, 
    }
  },
}
</script>
