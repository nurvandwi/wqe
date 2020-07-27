<template>
  <div class="mx-3 my-auto">
    <div class="listShadow">
      <img class="w-75" src="https://i.imgur.com/YEE46H0.jpg" alt />
    </div>
    <div class="listShadow mt-5 p-3 mb-3">
      <div class="pb-5 pt-1">
        <h1 class="text-dark font22 text-left m-0">Rincian Transaksi</h1>
        <p class="text-dark text-left m-0 pt-1 font14">Berikut adalah informasi penjualan anda</p>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="text-dark">Produk</h5>
        <p class="text-dark">Oreo Soft Cake</p>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="text-dark">Jumlah</h5>
        <p class="text-dark">100 Karton</p>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="text-dark">Tanggal</h5>
        <p class="text-dark">29 June 2020 3:05 PM</p>
      </div>
      <div class="d-flex justify-content-between">
        <h5 class="text-dark">Nominal</h5>
        <p class="text-dark">Rp 1.000.000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.listShadow {
  -webkit-box-shadow: 2px 2px 8px -5px #898989;
  box-shadow: 0px 2px 8px -5px #898989;
  border-radius: 5px;
}
@media screen and (max-width: 1000px) {
  .font14 {
    font-size: 14px;
  }
  .font22 {
    font-size: 22px;
  }
}
</style>