<template>
  <div class="col-md-12">
    <div class="row borderStyle">
      <div class="col-lg-2 col-2 m-auto paddingStyle">
        <h5 class="font16 mt-auto mb-auto text-warning" align="center">{{bulan}}</h5>
      </div>
      <div class="col-lg-5 col-5 m-auto paddingStyle">
        <p class="mb-0 font11" align="center">Nilai Insentif</p>
        <h5 class="font16 mt-auto mb-auto" align="center">Rp. {{ insentif_bulan }}</h5>
      </div>
      <div class="col-lg-4 col-4 m-auto p-3" v-if="tanggal_klaim == null  && insentif_bulan == 0 ">
        <button
          type="button"
          class="w-100 btn btn-warning font-weight-bold text-black"
          data-dismiss="modal"
          data-toggle="modal"
          :data-target="'#exampleModalCenter'+bulan"
          :id="'modal'+bulan"
          :disabled="inv_file == null || insentif_bulan == 0"
        >Tukar</button>
      </div>

      <div
        class="col-lg-4 col-4 m-auto p-3"
        v-else-if="tanggal_klaim !== null && tanggal_transfer != null && nomor_referensi != null"
      >
        <button
          type="button"
          class="btn btn-light w-100 p-1"
          data-dismiss="modal"
          data-toggle="modal"
          :data-target="'#exampleModalCenter'+bulan"
          :id="'modal'+bulan"
        >
          <h5 class="fontSize12px mb-0 text-dark">Selesai</h5>
        </button>
      </div>
      <div class="col-lg-4 col-4 m-auto p-3" v-else>
        <button
          type="button"
          class="btn btn-info w-100 p-1"
          data-dismiss="modal"
          data-toggle="modal"
          :data-target="'#exampleModalCenter'+bulan"
          :id="'modal'+bulan"
        >
          <h5 class="fontSize12px mb-0">Proses Transfer</h5>
        </button>
      </div>
    </div>

    <div
      class="modal fade"
      :id="'exampleModalCenter'+bulan"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-transparent modal-dialog-centered" role="document">
        <div class="modal-content v-for">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="mx-6">
              <div class="listShadow p-2 mb-4">
                <div class="pb-5 pt-1">
                  <h1
                    class="font22 font-weight-bold text-center mb-0 border-bottom"
                    style="color: #653366;"
                  >Rincian Transaksi</h1>
                </div>
                <div class="d-flex justify-content-between">
                  <h5 class="text-black-50 font15">Periode :</h5>
                  <p class="text-dark font-weight-bold font14">{{bulan}}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h5 class="text-black-50 font15">Nilai Insentif :</h5>
                  <p class="text-dark font-weight-bold font14">{{insentif_bulan}}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h5 class="text-black-50 font15">Tgl Redeem :</h5>
                  <p class="text-dark font-weight-bold font14">{{tanggal_klaim}}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h5 class="text-black-50 font15">Tgl Transfer :</h5>
                  <p class="text-dark font-weight-bold font14">{{tanggal_transfer}}</p>
                </div>

                <div class="d-flex justify-content-between">
                  <h5 class="text-black-50 font15">No. Ref :</h5>
                  <p class="text-dark font-weight-bold font14">{{nomor_referensi}}</p>
                </div>
                <div class="d-flex justify-content-between">
                  <h5 class="text-black-50 font15">Status :</h5>
                  <p class="text-dark font-weight-bold font14">{{status}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Keluar</button>
            <button
              @click="postInsentif(bulan)"
              type="button"
              data-dismiss="modal"
              class="btn text-light"
              style="background-color:#653366;"
              :hidden="tanggal_klaim != null "
            >Tukar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxAchievement",

  props: [
    "bulan",
    "insentif_bulan",
    "nomor_referensi",
    "tanggal_klaim",
    "tanggal_transfer",
    "inv_file"
  ],
  computed: {},
  methods: {
    postInsentif() {
      this.$emit("postInsentif", this.$route.params.outlet_id, this.bulan);
    }
  }
};
</script>
<style scoped>
.my-custom {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.borderTop {
  border-radius: 10px 10px 0 0;
}
.borderStyle {
  background: #653366;
  border-radius: 4px 4px 0 0px;
}
.fontsize2rem {
  font-size: 2rem !important;
}
.paddingStyle {
  padding: -1px 0px 8px 10px !important;
}
.font15 {
  margin-bottom: 0px !important;
}

.paddingStyle button {
  margin-top: 25px !important;
}

@media screen and (max-width: 1000px) {
  .paddingStyle button {
    margin-top: 22px !important;
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
  .fontSize12px {
    font-size: 12px !important;
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
