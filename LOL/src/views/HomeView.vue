<template>
<div>
  <div>points: {{ points }}</div>
  <button @click="updatePoints(1)">add a point</button>
  <button @click="updatePoints(-1)">remove a point</button>
  <div v-for="Champion in Champions" :key="Champion.id">
    <h3>{{Champion.name}}</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from 'vue'
import { useStore} from 'vuex'

export default {
  setup() {
    const Champions = ref([
      { name: 'thing 1', id: 1},
      { name: 'thing 2', id:2},
      { name: 'thing 3', id:3}
    ])

    const store = useStore()
    const points = computed(() => store.state.points)
    const updatePoints = (p) => {
      store.commit('updatePoints', p)
    }

    return {
      Champions, 
      points,
      updatePoints
    }
  },
}
</script>
