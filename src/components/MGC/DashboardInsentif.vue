<template>
  <div>
    <router-link
      v-bind:to="'/mgc/dashboardinsentif/'+`${$route.params.outlet_id}`"
      style="color: #FFF;"
      class="m-auto font18"
    >
      <div
        class="col-md-12 text-left d-flex flex-row align-items-center my-3 py-2 px-3"
        style="background-color:white !important; border: 1px #dbdbdb solid;border-style: solid;"
      >
        <img class="imagecustom pr-3" src="https://i.imgur.com/GuKapYv.png" alt />
        <div class="align-items-center">
          <h5 class="formh2 caption4 p-0 m-0" style="color:black !important">Dashboard Insentif</h5>
          <p class="formp section3 p-0 m-0">Klik untuk lihat detail Promosi yang diklaim</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.imagecustom {
  background-size: cover;
  height: 30px;
}
</style>