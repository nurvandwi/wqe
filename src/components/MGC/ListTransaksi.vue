<template>
  <div>
    <ul class="list-unstyled mx-2">
      <li
        class="listShadow list-group-item-action"
        v-for="(transaksi,index) in listTransaksi.data"
        :key="index"
      >
        <router-link
          v-bind:to="'/mgc/detailTransaksi/'+`${$route.params.outlet_id}/`+listTransaksi.data[index].kode_transaksi"
          style="color: #FFF;"
          class="m-auto font18"
        >
          <div class="media-body px-3 py-2 mt-4">
            <div class="d-flex justify-content-between">
              <h5 class="text-dark text-left font12">{{transaksi.kode_transaksi}}</h5>
              <h5 class="text-dark text-left">{{transaksi.quantity}}</h5>
            </div>
            <p class="my-auto text-dark text-left"></p>
            <div class="d-flex justify-content-between my-auto">
              <p class="text-dark m-0 font14">{{transaksi.tanggal_transaksi}}</p>
              <p class="text-dark m-0 font14">Lihat Detail</p>
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
.listShadow {
  -webkit-box-shadow: 2px 2px 8px -5px #898989;
  box-shadow: 0px 2px 8px -5px #898989;
  border-radius: 5px;
}
@media screen and (max-width: 1000px) {
  .font14 {
    font-size: 14px;
  }
}
</style>