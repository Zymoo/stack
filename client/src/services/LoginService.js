import Api from '@/services/Api'

export default {
  signin (username, password) {
    return Api().get('signin', {
      params: {
        login: username,
        password: password
      }})
  }
}
