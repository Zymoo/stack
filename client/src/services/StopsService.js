import Api from '@/services/Api'

export default {
  fetchStop (stop) {
    return Api().get('stop', {
      params: {
        id: stop
      }})
  }
}
