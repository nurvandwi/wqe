<template>
  <div class="mx-3 my-auto">
    <div class="listShadow mt-5 p-3 mb-3">
      <div class="pb-5 pt-1">
        <h1 class="text-dark font22 text-left m-0">Rincian Transaksi</h1>
        <p class="text-dark text-left m-0 pt-1 font14">Berikut adalah informasi penjualan anda</p>
      </div>
      <div v-for="(detail,index) in detailTransaksi" :key="index">
        <div class="d-flex justify-content-between">
          <h5 class="text-dark font15">Produk</h5>
          <p class="text-dark font14">{{detail.kode_transaksi}}</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5 class="text-dark font15">Jumlah</h5>
          <p class="text-dark font14">{{detail.quantity}}</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5 class="text-dark font15">Tanggal Transaksi</h5>
          <p class="text-dark font14">29 June 2020 3:05 PM</p>
        </div>
        <div class="d-flex justify-content-between">
          <h5 class="text-dark font15">Nominal</h5>
          <p class="text-dark font14">Rp 1.000.000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailTransaksi: Object,
    kode_transaksi: String,
    tanggal_transaksi: Date,
    quantity: Number,
    nominal: Number
  }
};
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