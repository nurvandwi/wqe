<template>
  <div class="container-fluid d-flex space-between flex-column justify-content-center">
    <login @getLogin="getLogin" />
  </div>
</template>
<script>
import axios from "axios";
import login from "@/components/MRC/Login.vue";
export default {
  components: {
    login
  },

  methods: {
    getLogin(username, password, regid, version) {
      const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
      urlencoded.append("regid", regid);
      axios
        .post("http://www.inosis.co.id/mrc2020_api/api.php/login", urlencoded)
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
