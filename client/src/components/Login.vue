<template>
<div class="login">
  <div class="login-wrapper border border-light">
    <form class="form-signin" v-on:submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="username" class="sr-only">Username</label>
      <input v-model="username" type="username" id="inputusername" class="form-control" placeholder="Username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
  <users/>
</div>
</template>

<script>
import Users from '@/components/Users'
import LoginService from '@/services/LoginService'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    login () {
      LoginService.signin(this.username, this.password).then(request => this.loginSuccessful(request)).catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
      if (req.data == null) {
        this.loginFailed()
        return
      }
      this.$store.commit('changeId', req.data._id)
      this.$store.commit('changeUsername', req.data.login)
      this.$store.commit('changeStops', req.data.stops)
      this.error = false
      this.$router.replace(this.$route.query.redirect || '/signin')
    },
    loginFailed () {
      this.error = 'Login failed!'
    }
  },
  components: {
    'users': Users
  }
}
</script>

<style lang="css" scoped>

.login-wrapper {
  width: 100%;
  margin: auto;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="username"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
