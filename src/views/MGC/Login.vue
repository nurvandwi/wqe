<template>
  <div
    class="container-fluid d-flex space-between flex-column justify-content-center styleLoginMondelez"
  >
    <login @getLogin="getLogin" />
  </div>
</template>
<script>
import axios from "axios";
import login from "@/components/MGC/Login.vue";
export default {
  components: {
    login
  },

  methods: {
    getLogin(username, password) {
      const urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);
      axios
        .post(
          "https://www.inosis.co.id/demo_promosi_api/api.php/login",
          urlencoded
        )
        .then(response => {
          let result = response.data;

          if (result.api_status === 1) {
            localStorage.token = result.token;
            this.$router.push(`registrasi/${username}`);
          } else {
            console.log(alert("user Id dan password anda salah"));
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
