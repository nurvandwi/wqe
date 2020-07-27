<template>
  <div>
    <div class="mx-2 mt-3">
      <boxtitle firstTitle="Transaksi" class="mb-2" />
    </div>
    <ListTransaksi :listTransaksi="listTransaksi" />
  </div>
</template>

<script>
import axios from "axios";
import boxtitle from "@/components/MGC/BoxTitle.vue";
import ListTransaksi from "@/components/MGC/ListTransaksi.vue";
export default {
  components: {
    boxtitle,
    ListTransaksi
  },
  data() {
    return {
      listTransaksi: {
        data: []
      }
    };
  },
  mounted() {
    axios
      .get("https://www.inosis.co.id/mv_promosi_api/api.php/list-transaksi", {
        params: {
          outlet_id: this.$route.params.outlet_id,
          kode_transaksi: this.$route.params.kode_transaksi,
          token: localStorage.token
        }
      })
      .then(res => (this.listTransaksi = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>