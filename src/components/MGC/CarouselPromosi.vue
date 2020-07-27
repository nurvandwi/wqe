<template>
  <div>
    <!-- v-for="item in listItem" :key="item.id" -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div
          v-bind:class="['carousel-item' , { 'active': index === 0 }]"
          v-for="(list,index) in listItem.data"
          :key="index"
        >
          <div
            class="col-md-12 col-12 mt-3 justify-content-center mx-auto px-5"
            style="background-color: white; border: 1px #dbdbdb solid;border-style: solid;"
          >
            <img v-bind:src="list.img" style="height:200px;" alt />
            <hr
              style=" height: 0px;  border: 1px #f7f7f7 solid;border-style: solid;padding:0px !important"
            />
            <div class="row justify-content-center">
              <div class="col-md-8 col-12">
                <h4 class="text-left font12" style="color:black !important;">{{list.nama_produk}}</h4>
                <p class="text-left font11" style="color:gray !important;">{{list.deskripsi}}</p>
              </div>
              <div class="col-md-2 col-12">
                <router-link
                  v-bind:to="'/mgc/claimpromotion/'+`${$route.params.outlet_id}/`+list.kode_produk"
                  class="btn col-md-12 col-12 colorMondelez text-white p-1 mb-2"
                  style="border-radius: 10px !important;"
                >
                  <p class="text-white my-auto font15">Claim</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["img", "nama_produk", "deskripsi", "listItem"]
  props: {
    listItem: Object,
    img: String,
    nama_produk: String,
    deskripsi: String
  }
};
</script>

<style>
.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s linear !important;
}
.icon {
  width: 50% !important;
  z-index: 10;
  position: relative;
}
@media screen and (max-width: 1000px) {
  .icon {
    width: 75% !important;
    z-index: 10;
    position: relative;
  }

  .font11 {
    font-size: 11px !important;
  }
  .font12 {
    font-size: 12px !important;
  }
  .font15 {
    font-size: 18px !important;
  }
}
</style>