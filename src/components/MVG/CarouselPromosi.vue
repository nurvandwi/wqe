<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="col-md-12 col-12 mt-3 justify-content-center mx-auto"
            style="background-color: white;padding:0px !important; border: 1px #dbdbdb solid;border-style: solid;padding:0px !important"
          >
            <img src="https://i.imgur.com/YEE46H0.jpg" style="height:200px" alt />
            <hr
              style=" height: 0px;  border: 1px #f7f7f7 solid;border-style: solid;padding:0px !important"
            />
            <div class="row justify-content-center">
              <div class="col-md-8 col-8">
                <h5 class="text-left caption4" style="color:black !important;">Oreo Soft Cake</h5>
                <p class="text-left section3" style="color:gray !important;">
                  Minimum Order per Bulan: 10 Box Periode Promosi:Juli sd Agustus
                  2020
                </p>
              </div>
              <div class="col-md-2 col-2">
                <router-link
                  :to="{ path: '/mvg/claimpromotion' }"
                  style="color: #FFF;"
                  class="m-auto font18"
                >
                  <img class="icon" src="https://i.imgur.com/G24IIHE.png" alt />
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="col-md-12 col-12 mt-3 justify-content-center mx-auto"
            style="background-color: white;padding:0px !important; border: 1px #dbdbdb solid;border-style: solid;padding:0px !important"
          >
            <img src="https://i.imgur.com/8hzxHnF.jpg" style="height:200px" alt />
            <hr
              style=" height: 0px;  border: 1px #f7f7f7 solid;border-style: solid;padding:0px !important"
            />
            <div class="row justify-content-center">
              <div class="col-md-8 col-8">
                <h5 class="text-left caption4" style="color:black !important;">Oreo LUP 2000</h5>
                <p class="text-left section3" style="color:gray !important;">
                  Minimum Order per Bulan: 4 Box Periode Promosi:Juli sd Agustus
                  2020
                </p>
              </div>
              <div class="col-md-2 col-2">
                <router-link
                  :to="{ path: '/mvg/claimpromotion' }"
                  style="color: #FFF;"
                  class="m-auto font18"
                >
                  <img class="icon" src="https://i.imgur.com/G24IIHE.png" alt />
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
export default {};
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
}
</style>