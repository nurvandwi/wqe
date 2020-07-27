<template>
  <div class="col-md-12 mt-2">
    <div
      class="row borderTop"
      style="background-color: #F47536;"
      v-if="contentFor === 'archievement'"
    >
      <div class="col-md-5 col-5 mx-auto my-auto">
        <h5 class="section3 my-auto text-center">Ratio Pencapaian</h5>
        <h5 class="caption3 my-auto text-white">{{ archievement }}</h5>
      </div>
      <div class="col-md-2 col-2 align-self-center">
        <hr class="line" />
      </div>
      <div class="col-md-5 col-5 mx-auto my-auto">
        <h5 class="fontSize10px my-auto mt-2 text-center">Sisa Point</h5>
        <h5 class="fontsize2rem fontsize17px my-auto text-white">{{ saldo_sisa }}</h5>
      </div>
    </div>
    <div
      class="row borderTop my-custom"
      style="background-color:  #FF9966;"
      v-if="contentFor === 'archievementMonth'"
    >
      <div class="col-md-5 col-5 align-self-center">
        <h5 class="font14 my-auto text-center">{{ month }}</h5>
      </div>
      <div class="col-md-2 col-2">
        <hr class="line" />
      </div>

      <div class="col-md-5 col-5 align-self-center">
        <h5 class="font10 mb-1">Ratio Pencapaian</h5>
        <h5 class="font18 mb-0 text-white">{{ archievement }}</h5>
      </div>
    </div>
    <div class="row borderStyle">
      <div class="col-md-5 col-5 m-auto paddingStyle">
        <p style="color:black !important;" class="font10 mb-0" align="left">Target Penjualan</p>
        <h5
          style="color:black !important;"
          class="font16 mt-auto mb-auto"
          align="left"
        >Rp.{{ pointTargetPenjualan }}</h5>
      </div>
      <div class="col-md-1 col-1">
        <hr style="width: 0px; height: 18px; border: 0.2px #e3e3e3 solid;border-style: solid;" />
      </div>
      <div class="col-md-5 col-5 m-auto paddingStyle">
        <p style="color:black !important;" class="mb-0 font10" align="left">Aktual Penjualan</p>
        <h5
          style="color:black !important;"
          class="font16 mt-auto mb-auto text-left"
        >Rp.{{ pointAktualPenjualan }}</h5>
      </div>
      <div
        class="col-md-11 col-11 mx-auto"
        style=" height: 0px; border: 0.2px #e3e3e3 solid;border-style: solid;"
      ></div>

      <div class="col-md-5 col-5 m-auto text-center" style="padding : 8px 0px 2px 10px !important;">
        <p style="color:black !important;" class="mb-0 font10 text-left">Selisih Penjualan:</p>
        <p
          class="font7 mb-0 text-left"
          style="color:black !important;"
        >Diatas (+) atau Dibawah (-) Target</p>
      </div>
      <div class="col-md-1 col-1"></div>

      <div class="col-md-5 col-5 m-auto">
        <p
          v-bind:class="
            parseInt(selisihPenjualan) > 0
              ? 'black text-left font15'
              : 'red text-left font15'
          "
        >Rp.{{ selisihPenjualan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxAchievement",
  props: [
    "archievement",
    "month",
    "saldo_sisa",
    "pointTargetPenjualan",
    "pointAktualPenjualan",
    "selisihPenjualan",
    "contentFor"
  ]
};
</script>
<style scoped>
.line {
  width: 0px;
  height: 20px;
  border: 0.5px solid white;
}
.my-custom {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.borderTop {
  border-radius: 10px 10px 0 0;
  color: white;
}
.borderStyle {
  border: 1px #dedede solid;
  border-radius: 0 0 10px 10px;
}
.fontsize2rem {
  font-size: 2rem !important;
}
.paddingStyle {
  padding: 8px 0px 8px 10px !important;
}
.font15 {
  margin-bottom: 0px !important;
}

@media screen and (max-width: 1000px) {
  .line {
    width: 0px;
    height: 15px !important;
    border: 0.5px solid white;
  }
  .my-custom {
    margin-top: 0rem !important;
    margin-bottom: 0rem !important;
    padding: 0px !important;
  }
  .margin-custom {
    margin-top: 0rem !important;
    margin-bottom: 0rem !important;
  }
  .fontSize10px {
    font-size: 10px !important;
  }
  .fontsize17px {
    font-size: 17px !important;
  }

  .font16 {
    font-size: 16px !important;
  }
  .font7 {
    font-size: 7.5px !important;
  }
  .font14 {
    font-size: 14px !important;
  }
  .font15 {
    font-size: 15px !important;
    margin-bottom: 0px !important;
  }
}
</style>
