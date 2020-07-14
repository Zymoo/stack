<template>
  <div class="single-stop">
    <h2> Stop {{this.stopid}} </h2>
      <vue-good-table
      :columns="columns"
      :rows="rows"/>
      <br><br>
  </div>
</template>

<script>
import StopsService from '@/services/StopsService'
export default {
  name: 'single-stop',
  props: ['stopid'],
  data () {
    return {
      columns: [
        {
          label: 'Direction',
          field: 'headsign',
          width: '50%'
        },
        {
          label: 'Time of arrival',
          field: 'timestamp',
          width: '25%'
        },
        {
          label: 'Line number',
          field: 'tripId',
          width: '25%'
        }
      ],
      rows: ''
    }
  },
  mounted () {
    this.getSingleStop()
  },
  methods: {
    async getSingleStop () {
      console.log(this.stopid)
      const response = await StopsService.fetchStop(this.stopid)
      this.rows = response.data.delay
      console.log(response.data.delay)
    }
  }
}
</script>
