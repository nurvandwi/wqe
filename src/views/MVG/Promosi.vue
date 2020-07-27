<template>
  <div class="container bgpromosi">
    <div class="row justify-content-center p-4">
      <div class="col-md-12 mt-4 mb-3">
        <img class="logo" src="../../assets/4.png" alt />
      </div>
      <boxtitle firstTitle="Spesial Promosi" />
      <CarouselPromosi />
      <div class="col-md-12 col-12 mt-4 p-0">
        <h5 style="color:black !important" class="text-left">Data Kegiatan Promosi</h5>
        <DetailClaim />
        <DataKtp />
      </div>
    </div>
  </div>
</template>
<script>
import boxtitle from "@/components/MVG/BoxTitle.vue";
import CarouselPromosi from "@/components/MVG/CarouselPromosi.vue";
import DetailClaim from "@/components/MVG/DetailClaim.vue";
import DataKtp from "@/components/MVG/DataKtp.vue";
export default {
  components: {
    boxtitle,
    CarouselPromosi,
    DetailClaim,
    DataKtp
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