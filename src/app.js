new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://www.inosis.co.id/mondelez_grosir/api/latest.php/dashboard-outlet?outlet_id=501000-0350')
      .then(response => (this.info = response))
  }
})