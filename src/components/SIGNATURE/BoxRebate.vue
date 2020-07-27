<template>
  <div class="col-md-12 mt-2">
    <div class="row borderTop" style="background-color: #ffb84d;">
      <div class="col-md-6 col-6 my-1 borderRightStyle">
        <p class="fontSize10px my-auto">Total Rebate</p>
        <h5 class="font12 mt-auto mb-auto">{{ totalRebate }}</h5>
      </div>

      <div class="col-md-6 col-6 my-1">
        <p class="fontSize10px my-auto">Saldo Rebate</p>
        <h5 class="font12 my-auto">{{ carry_over }}</h5>
      </div>
    </div>

    <div class="row borderStyle">
      <table class="table table-sm mx-3" style="border-right:none;border-left:none;  ">
        <thead>
          <tr>
            <th
              scope="col "
              class="fontSize10px borderRightStyle"
              style="border-color: #e3e3e3 ; font-weight:100;  "
            >Bulan/Quarter</th>
            <th
              scope="col "
              class="fontSize10px borderRightStyle"
              style="border-color:   #e3e3e3 ;  font-weight:100;  "
            >Nilai (Rupiah)</th>
            <th scope="col" class="fontSize10px" style=" font-weight:100; ">Tgl Transfer</th>
          </tr>
        </thead>
        <tbody v-for="point in points.data_rebate" :key="point.id">
          <tr>
            <td class="font14 mb-0">{{ point.rebate_periode }}</td>
            <td class="font14 mb-0 text-center">{{ point.rebate_value }}</td>
            <td class="font14 mb-0 text-center">{{ point.rebate_tanggal_transfer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxRebate",
  props: ["totalRebate", "carry_over", "points"]
};
</script>
<style scoped>
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
  .font12 {
    font-size: 12px !important;
  }
  .font14 {
    font-size: 14px !important;
  }
}
</style>
