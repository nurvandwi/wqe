<template>
  <div class="stylePromo">
    <img class="logoMondelez mb-4 d-block mx-auto" src="../../assets/mgc-logo.png" alt />
    <div class="col-10 col-md-8 mx-auto mb-4 mt-2 p-0">
      <h2 class="mt-3 mb-5 font15">
        <b>Dapatkan Promo Menarik untuk Pelanggan anda disini</b>
      </h2>
      <img class="logoPromo mb-4" src="../../assets/herobanner.jpg" alt />
    </div>
    <div class="col-md-11 col 10 styleUl mx-2">
      <ul class="text-left px-0 my-5 styleLi">
        <li class="text-left d-flex p-0 mb-3" type="none">
          <span class="col-2 col-md-1 align-items-center marginNumber">
            <h1 class="mb-0 p-0 font35">1.</h1>
          </span>
          <span class="col-md-10 col-10 p-0 align-items-center align-self-center">
            <h5
              class="p-0 m-0 align-items-center font12"
            >Registrasi atau masuk dengan username/password anda</h5>
          </span>
        </li>

        <li class="text-left d-flex p-0 mb-3" type="none">
          <span class="col-2 col-md-1 align-items-center marginNumber">
            <h1 class="mb-0 p-0 font35">2.</h1>
          </span>
          <span class="col-md-10 col-10 p-0 align-items-center align-self-center">
            <h5 class="p-0 m-0 align-items-center font12">Pilih Promo yang sedang berjalan</h5>
          </span>
        </li>
        <li class="text-left d-flex p-0 mb-3" type="none">
          <span class="col-2 col-md-1 align-items-center marginNumber">
            <h1 class="mb-0 p-0 font35">3.</h1>
          </span>
          <span class="col-md-10 col-10 p-0 align-items-center align-self-center">
            <h5 class="p-0 m-0 align-items-center font12">Masukkan Jumlah Produk yang ingin diklaim</h5>
          </span>
        </li>

        <li class="text-left d-flex p-0 mb-5" type="none">
          <span class="col-2 col-md-1 align-items-center marginNumber">
            <h1 class="mb-0 p-0 font35">4.</h1>
          </span>
          <span class="col-md-10 col-10 p-0 align-items-center align-self-center">
            <h5 class="p-0 m-0 align-items-center font12">Tunggu Dana Masuk ke Rekening anda!</h5>
          </span>
        </li>
      </ul>
    </div>
    <router-link :to="{ path: '/mgc/login' }" style="color: #FFF;" class="mx-auto font18">
      <button
        type="button"
        class="btn col-md-10 col-10 py-3 colorMondelez text-white"
        style="border-radius: 10px !important;"
      >
        <h3 class="my-0 font15">Selanjutnya</h3>
      </button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.marginNumber {
  margin: 0 1rem 0 0 !important;
}
.styleUl {
  padding: 0 3rem !important;
}
.styleLi {
  margin: 0 0.5rem !important;
}
.fontDapatkan {
  font-size: 30px;
}
.fontPromo {
  font-size: 40px;
}
.fontPelanggan {
  font-size: 25px;
}
.mobile-center {
  align-self: center;
}
.stylePromo {
  max-width: 100vw;
  min-height: 100vh;
  padding: 50px 10px 50px 10px !important;
  background-color: #653366;
  color: white !important;
}
.logoMondelez {
  background-size: cover;
  height: 70px;
}
.logoPromo {
  background-size: cover;
  max-width: 100%;
  min-height: 100%;
  border-radius: 10px;
}
.colorMondelez {
  background-color: #e19e29 !important;
  outline: none;
  border: #e19e29 !important;
}
@media screen and (max-width: 1000px) {
  .logoMondelez {
    background-size: cover;
    height: 50px;
  }
  .marginNumber {
    margin: 0 !important;
  }
  .styleUl {
    margin: 0 !important;
    padding: 0 1rem !important;
  }
  .styleLi {
    margin: 0rem !important;
  }
  .fontDapatkan {
    font-size: 15px;
  }
  .fontPromo {
    font-size: 20px;
  }
  .fontPelanggan {
    font-size: 15px;
  }
  .mobile-center {
    /*untuk caption ul*/
    align-self: auto;
  }
  .font35 {
    font-size: 35px !important;
  }
  .font15 {
    font-size: 18px !important;
  }
  .font12 {
    font-size: 18px !important;
    line-height: 30px;
  }
  .font18 {
    font-size: 18px !important;
  }
}
</style>



