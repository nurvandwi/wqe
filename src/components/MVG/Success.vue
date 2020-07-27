<template>
  <div id="success" class="boxtitle3 col-md-8 mt-5">
    <h2>Registrasi Berhasil</h2>
    <h5>{{ambiltanggal.date}}</h5>
  </div>
</template>
<script>
export default {
  name: "Success",
  computed: {
    ambiltanggal() {
      return {
        date: new Date().toLocaleString()
      };
    }
  }
};
</script>