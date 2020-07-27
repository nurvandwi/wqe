<template>
  <div class="container">
    <div class="row justify-content-center p-4">
      <div class="col-md-12 mt-4 mb-3">
        <img class="logo" src="../../assets/4.png" alt />
      </div>
      <boxtitle firstTitle="Spesial Promosi" />

      <CarouselPromosi :listItem="listItem" />
      <div class="col-md-12 col-12 mt-4 p-0">
        <h5 style="color:black !important" class="text-left">Data Kegiatan Promosi</h5>
        <DashboardInsentif />
        <DataKtp class="mb-5 pb-3" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import boxtitle from "@/components/MGC/BoxTitle.vue";
import CarouselPromosi from "@/components/MGC/CarouselPromosi.vue";
import DashboardInsentif from "@/components/MGC/DashboardInsentif.vue";
import DataKtp from "@/components/MGC/DataKtp.vue";
export default {
  components: {
    boxtitle,
    CarouselPromosi,
    DashboardInsentif,
    DataKtp
  },
  data() {
    return {
      listItem: {
        data: []
      }
    };
  },
  mounted() {
    axios
      .get("https://www.inosis.co.id/mv_promosi_api/api.php/list-product", {
        params: {
          outlet_id: this.$route.params.outlet_id,
          token: localStorage.token
        }
      })
      .then(res => (this.listItem = res.data))
      .catch(err => console.log(err));
  }
};
</script>
<style >
.bgpromosi {
  background-image: url(https://i.imgur.com/9HX6hd6.jpg);
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
}
.logo {
  background-size: cover;
  height: 70px;
}
@media screen and (max-width: 1000px) {
  .logo {
    background-size: cover;
    height: 50px;
  }
}
</style>