<template>
  <div class="col-md-12 col-12 p-0">
    <!-- v-for="item in listItem" :key="item.id" -->

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div
          v-bind:class="['carousel-item', { active: index === 0 }]"
          v-for="(list, index) in listItem.data"
          :key="index"
        >
          <div
            class="col-md-12 col-12 mt-3 p-0 m-0 justify-content-center"
            style="background-color: white; border: 1px #dbdbdb solid;border-style: solid;"
          >
            <img v-bind:src="list.img" class="w-100 p-0 m-0" style="min-height:100%" alt />
            <div class="row justify-content-center d-flex spaceCarousel mt-5">
              <div class="col-md-8 col-8">
                <h4
                  class="text-left font13 my-0 py-0"
                  style="color:black !important;"
                >{{ list.nama_produk }}</h4>
                <p class="text-left font10" style="color:gray !important;">{{ list.deskripsi }}</p>
              </div>
              <div class="col-md-2 col-4 px-3">
                <router-link
                  v-bind:to="
                    '/mgc/claimpromotion/' +
                      `${$route.params.outlet_id}/` +
                      list.kode_produk
                  "
                  class="btn col-md-12 col-12 colorMondelez text-white p-1 mb-2"
                  style="border-radius: 10px !important;"
                >
                  <p class="text-white my-auto font11">Claim</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          v-bind:class="[{ active: index === 0 }]"
          v-for="(list, index) in listItem.data"
          :key="index"
        ></li>
      </ol>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
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
.carousel-control-prev-icon {
  background-image: url(../../assets/prev.svg) !important;
}
.carousel-control-next-icon {
  background-image: url(../../assets/next.svg) !important;
}

.carousel-indicators {
  position: relative !important;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #e19e29 !important;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}

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
.spaceCarousel {
  padding: 0px !important;
}
@media screen and (max-width: 1000px) {
  .icon {
    width: 75% !important;
    z-index: 10;
    position: relative;
  }
  .spaceCarousel {
    padding: 0px 1rem 0px 1rem !important;
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
