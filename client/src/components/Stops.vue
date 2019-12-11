<template>
  <div class="users">
    <br><br>
    <h1>Check out your busses!</h1>
    <br><br>
    <div class="tablestyle">
    <single-stop v-for="stop in stops" :key="stop" :stopid="stop">
    </single-stop>
    </div>
  </div>
</template>

<script>
import SingleStop from '@/components/SingleStop'
import Vue from 'vue'

Vue.component('single-stop', {
  props: ['stopid'],
  template: '#single-stop'
})

export default {
  name: 'stops',
  data () {
    return {
      stops: []
    }
  },
  mounted () {
    this.getStops()
  },
  methods: {
    async getStops () {
      var stopIds = this.$store.getters.stops
      this.stops = stopIds
      console.log(stopIds)
    }
  },
  components: {
    'single-stop': SingleStop
  }
}
</script>

<style scoped>

.tablestyle {
  width: 50%;
  margin: auto;
}
</style>
