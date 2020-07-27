<template>
  <div
    class="container-fluid d-flex space-between flex-column justify-content-center styleLoginMondelez"
  >
    <loginmvg @getLogin="getLogin" />
  </div>
</template>
<script>
import axios from "axios";
import loginmvg from "@/components/MVG/LoginMvg.vue";
export default {
  components: {
    loginmvg
  },

  methods: {
    getLogin(username, password, regid, version) {
      const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
      urlencoded.append("regid", regid);
      axios
        .post("http://www.inosis.co.id/mgc2020_api/api.php/login", urlencoded)
        .then(response => {
          let result = response.data;

          if (result.api_status === 1) {
            localStorage.token = result.token;
            this.$router.push(`point/${username}/${version}`);
          } else {
            console.log(alert("user Id dan password anda salah"));
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style>
.styleLoginMondelez {
  min-height: 100vh;
  padding: 0px 10px 0px 10px !important;
  background-color: #653366;
  color: white !important;
}
@media screen and (max-width: 1000px) {
}
</style>