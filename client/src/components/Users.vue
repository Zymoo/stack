<template>
  <div class="users">
    <br><br>
    <h3>Join us now! Our current society:</h3>
    <br>
    <div v-for="user in users" :key="user.id">
        <h2><b-badge>{{ user.login }}</b-badge></h2>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const response = await UserService.fetchUsers()
      this.users = response.data
    }
  }
}
</script>
