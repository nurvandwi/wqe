<template>
  <div
    class="container-fluid d-flex space-between flex-column justify-content-center styleLoginMondelez"
  >
    <loginmondelez @getLogin="getLogin" />
  </div>
</template>
<script>
import axios from "axios";
import loginmondelez from "@/components/MGC/LoginMondelez.vue";
export default {
  components: {
    loginmondelez
  },

  methods: {
    getLogin(username, password) {
      const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
      axios
        .post(
          "https://www.inosis.co.id/mv_promosi_api/api.php/login",
          urlencoded
        )
        .then(response => {
          let result = response.data;

          if (result.api_status === 1) {
            localStorage.token = result.token;
            this.$router.push(`registrasi`);
          } else {
            console.log(alert("user Id dan password anda salah"));
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
