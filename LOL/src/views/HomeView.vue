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
import { ref } from 'vue'

export default {
  setup() {
    const Champions = ref([
      { name: 'thing 1', id: 1},
      { name: 'thing 2', id:2},
      { name: 'thing 3', id:3}
    ])
    return {
      Champions
    }
  },
  methods: {
    updatePoints(points) {
      this.$store.commit('updatePoints', points)
    }
  },
  computed:{
    points() {
      return this.$store.state.points
    }
  }
}
</script>
