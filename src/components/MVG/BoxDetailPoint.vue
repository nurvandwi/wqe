<template>
  <div class="col-md-12 mt-2">
    <div class="row borderTop" style="background-color: #CC3399;">
      <div class="col-md-3 col-3 margin-custom borderRightStyle">
        <p class="fontSize10px mb-0">Total Point</p>
        <h5 class="font12 mt-auto mb-auto" style="color:white !important">{{ totalPoint }}</h5>
      </div>

      <div class="col-md-3 col-3 my-3 borderRightStyle margin-custom">
        <p class="fontSize10px mb-0">Carry Over</p>
        <h5 class="font12 mt-auto mb-auto" style="color:white !important">{{ carryOver }}</h5>
      </div>
      <div class="col-md-3 col-3 margin-custom borderRightStyle">
        <p class="fontSize10px mb-0">Redemption</p>
        <h5 class="font12 mt-auto mb-auto" style="color:white !important">{{ redeemtion }}</h5>
      </div>
      <div class="col-md-3 col-3 margin-custom borderRightStyle">
        <p class="fontSize10px mb-0">Sisa Point</p>
        <h5 class="font12 mt-auto mb-auto" style="color:white !important">{{ sisaPoint }}</h5>
      </div>
    </div>

    <div class="row borderStyle" v-if="contentFor === 'A'">
      <div
        v-for="point in points.data"
        :key="point.id"
        class="col-md-4 col-4 mx-auto mt-2 mb-2 text-center borderRightStyle"
        style="border-color:#dedede"
      >
        <p style="color:black !important;" class="fontSize10px mb-0">{{ point.bulan }}</p>
        <h5 style="color:black !important;" class="font14 mb-0">{{ point.point_satuan }}</h5>
      </div>
    </div>
    <!-- <div class="row borderStyle" v-if="contentFor === 'B'">
      <div
        v-for="point in points.data"
        :key="point.id"
        class="col-md-4 col-4 mx-auto mt-2 mb-2 text-center  borderRightStyle"
        style="border-color:#dedede"
      >
        <p style="color:black !important;" class="fontSize10px  mb-0">
          {{ point.bulan }}
        </p>
        <h5 style="color:black !important;" class="font14 mb-0">
          {{ point.point_satuan }}
        </h5>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "BoxDetailPoint",
  props: [
    "totalPoint",
    "carryOver",
    "redeemtion",
    "sisaPoint",
    "points",
    "contentFor"
  ]
};
</script>
<style scoped>
.margin-custom {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
.borderTop {
  border-radius: 10px 10px 0 0;
  color: white;
}
.borderRightStyle {
  border-right: 1px white dashed;
}
.borderStyle {
  border: 1px #dedede solid;
  border-radius: 0 0 10px 10px;
}
.fontsize2rem {
  font-size: 2rem !important;
}
.paddingStyle {
  padding: 10px 0px 8px 10px !important;
}

@media screen and (max-width: 1000px) {
  .margin-custom {
    margin-top: 0.4rem !important;
    margin-bottom: 0.4rem !important;
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
}
</style>
