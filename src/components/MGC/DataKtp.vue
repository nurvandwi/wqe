<template>
  <div>
    <router-link :to="`/Mgc/registrasi/${this.$route.params.outlet_id}`">
      <div>
        <div
          class="col-md-12 text-left d-flex flex-row align-items-center my-3 py-2 px-3"
          style="background-color:white !important; border: 1px #dbdbdb solid;border-style: solid;border-radius:15px;"
        >
          <img class="imagecustom pr-3" src="https://i.imgur.com/g4sAQkz.png" alt />

          <div class="align-items-center">
            <h5 class="formh2 caption4 p-0 m-0 text-dark">Data KTP & Buku Bank</h5>
            <p class="formp section3 p-0 m-0 text-dark">Klik untuk lengkapi data eKTP & Buku Bank</p>
          </div>
          <img class="iconcustom ml-auto" src="https://i.imgur.com/5qg2kk5.png" alt />
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
.iconcustom {
  background-size: cover;
  height: 15px;
}
</style>