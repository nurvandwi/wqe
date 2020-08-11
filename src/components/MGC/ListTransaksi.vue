<template>
  <div>
    <ul class="list-unstyled mt-2 mb-5 pb-5">
      <li
        class="effectShadow list-group-item-action mt-2"
        v-for="(transaksi,index) in listTransaksi.data"
        :key="index"
      >
        <router-link
          v-bind:to="'/mgc/detailTransaksi/'+`${$route.params.outlet_id}/`+listTransaksi.data[index].kode_transaksi"
          style="color: #FFF;"
          class="m-auto font18"
        >
          <div class="media-body px-3 py-2 mt-2">
            <div class="d-flex justify-content-between">
              <h5 class="text-dark text-left font14">{{transaksi.kode_transaksi}}</h5>
              <h5 class="text-dark text-left font14">{{transaksi.quantity}}</h5>
            </div>
            <p class="my-auto text-dark text-left"></p>
            <div class="d-flex justify-content-between my-auto">
              <p class="text-dark m-0 font10">{{transaksi.tanggal_transaksi}}</p>
              <p class="text-dark m-0 font10">Lihat Detail</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listTransaksi: Object,
    kode_transaksi: String,
    tanggal_transaksi: Date,
    quantity: Number
  }
};
</script>

<style>
.effectShadow {
  -webkit-box-shadow: 6px 6px 15px -12px #bababa !important;
  box-shadow: 6px 6px 15px -12px #bababa !important;
  border-radius: 5px;
  border-style: solid;
  border-color: #e4e4e4;
  border-width: thin;
}
@media screen and (max-width: 1000px) {
  .effectShadow {
    -webkit-box-shadow: 6px 6px 15px -12px #bababa !important;
    box-shadow: 6px 6px 15px -12px #bababa !important;
    border-radius: 5px;
  }
  .font14 {
    font-size: 14px;
  }
}
</style>