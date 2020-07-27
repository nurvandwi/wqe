<template>
  <div>
    <div class="mx-3 mt-3">
      <boxtitle firstTitle="TRANSAKSI" class="mb-2" />
    </div>
    <div class="mx-3 my-auto">
      <div class="listShadow mt-5 p-3 mb-3">
        <div class="pb-5 pt-1">
          <h1 class="text-dark font22 text-left m-0">Rincian Transaksi</h1>
          <p class="text-dark text-left m-0 pt-1 font14">Berikut adalah informasi penjualan anda</p>

          <div class="border-bottom mt-4 mb-2"></div>
        </div>
        <div class="mt-2">
          <div class="d-flex justify-content-between">
            <h5 class="text-dark font14">Tanggal Transaksi</h5>
            <h5 class="text-dark font14">{{detailTransaksi.tanggal_transaksi }}</h5>
          </div>
          <div class="d-flex justify-content-between">
            <h5 class="text-dark font14">ID Transaksi</h5>
            <h5 class="text-dark font14">{{detailTransaksi.kode_transaksi}}</h5>
          </div>
          <div class="d-flex justify-content-between">
            <h5 class="text-dark font14">Produk</h5>
            <h5 class="text-dark font14">Oreo</h5>
          </div>
          <div class="d-flex justify-content-between">
            <h5 class="text-dark font14">Jumlah</h5>
            <h5 class="text-dark font14">{{detailTransaksi.quantity }}</h5>
          </div>
          <div class="d-flex justify-content-between">
            <h5 class="text-dark font14">Nominal</h5>
            <h5 class="text-dark font14">{{detailTransaksi.nominal }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import boxtitle from "@/components/MGC/BoxTitle.vue";
export default {
  components: {
    boxtitle
  },
  data() {
    return {
      detailTransaksi: []
    };
  },
  mounted() {
    axios
      .get("https://www.inosis.co.id/mv_promosi_api/api.php/detail-transaksi", {
        params: {
          outlet_id: this.$route.params.outlet_id,
          kode_transaksi: this.$route.params.kode_transaksi,
          token: localStorage.token
        }
      })
      .then(res => (this.detailTransaksi = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>