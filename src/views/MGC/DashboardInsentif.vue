<template>
  <div class="container pb-5 mb-5">
    <div class="row justify-content-center p-3">
      <div class="boxtitlepoints col-md-12" style="background-color: #653366; border-radius: 5px;">
        <div class="d-flex flex-row justify-content-center">
          <h2 class="text-light">PROMO PELANGGAN</h2>
        </div>
      </div>
      <div
        class="col-md-12 col-12 my-0 mt-2 mb-0 p-0"
        style="background-color: #653366;border-top-right-radius:7px;border-top-left-radius:7px"
      >
        <HeaderTitle :outlet_id="this.$route.params.outlet_id" :outlet_name="insentif.nama_outlet" />
      </div>
      <div class="col-md-12 boxpoint font-weight-bold mb-2">
        <div class="row mt-0" style="border:1px #dedede solid;border-radius: 0 0 10px 10px ;">
          <div class="col-md-5 col-5 text-left mt-1">
            <p class="text-dark mb-1" style="font-weight: lighter;">Nilai Insentif</p>
            <h6 class="nilai text-dark font16">Rp. {{insentif.nilai_insentif}}</h6>
          </div>
          <div class="col-md-1 col-1">
            <hr style="width:0px; height: 25px; border: 0.5px #e8e8e8 dashed;" />
          </div>
          <div class="col-md-5 col-5 text-left mt-1">
            <p class="text-dark mb-1" style="font-weight: lighter;">Total Penukaran</p>
            <h6 class="text-dark">Rp. {{insentif.nilai_klaim}}</h6>
          </div>
          <div
            class="col-md-11 col-11 ml-2 mt-0"
            style=" height: 0px; border: 0.5px #e8e8e8 dashed;"
          ></div>
          <div class="col-md-5 col-5 text-left mt-3">
            <p class="text-dark m-0" style="font-weight: lighter;">Saldo Insentif</p>
          </div>
          <div class="dashed col-md-1 col-1 mt-0" style>
            <hr style=" width: 0px; height: 15px; border: 0.5px #e8e8e8 dashed;" />
          </div>
          <div class="col-md-5 col-5 mt-3 ml-0">
            <h6 class="nilai text-dark text-left">Rp. {{insentif.saldo_insentif}}</h6>
          </div>
        </div>
      </div>

      <div
        class="wrapper mb-2 mt-0 col-12 p-0 border-0"
        v-for="(point,index) in insentif.data"
        :key="index"
      >
        <BoxPromosi
          :bulan="point.bulan"
          :insentif_bulan="point.insentif_bulan"
          :tanggal_klaim="point.tanggal_klaim"
          :tanggal_transfer="point.tanggal_transfer"
          :nomor_referensi="point.nomor_referensi"
          :inv_file="point.inv_file"
          @postInsentif="postInsentif"
          class="wrapper"
        />
        <table class="table-borderless border-0 mt-0 mb-1" width="100%" cellpadding="4">
          <thead id="rcorners1">
            <tr class="text-light">
              <th
                style="width : 25%!important;font-weight:normal!important; font-size:10px;"
              >Foto POSM :</th>
              <th
                class="text-warning"
                style="width : 25%!important;font-weight:normal!important;font-size:10px;"
                v-if="point.posm_file!=null"
              >ADA</th>
              <th
                class="text-warning"
                style="width : 25%!important;font-weight:normal!important;font-size:10px;"
                v-else
              >TIDAK ADA</th>
              <th
                style="width : 25%!important;font-weight:normal!important;font-size:10px;"
              >Foto Invoice :</th>
              <th
                class="text-warning"
                style="width : 25%!important;font-weight:normal!important;font-size:10px;"
                v-if="point.inv_file!=null"
              >ADA</th>
              <th
                class="text-warning"
                style="width : 25%!important;font-weight:normal!important;font-size:10px;"
                v-else
              >TIDAK ADA</th>
            </tr>
            <tr class="text-light">
              <th
                class="text-warning"
                style="width : 25%!important;font-weight:normal!important; font-size:10px;"
                colspan="4"
              >Penukaran Insentif harus ada foto POSM dan Invoice bulan tersebut</th>
            </tr>
          </thead>
        </table>
        <table class="table-borderless border-0" style="margin-top:-3px!important;" width="100%">
          <thead id="rcorners1">
            <tr class="text-light">
              <th style="width : 35%!important;font-weight:normal!important;">Sub Brand</th>
              <th style="width : 14%!important;font-weight:normal!important;">Baseline</th>
              <th scope="col" style="width : 14%!important;font-weight:normal!important;">Klaim</th>
              <th scope="col" style="width : 14%!important;font-weight:normal!important;">Aktual</th>
              <th style="width : 23%!important;font-weight:normal!important;">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(isipoint,index) in point.produk_data" :key="index">
              <th
                style="border-right: 1px solid #dedede;"
                id="right1"
                scope="row"
                class="text-left"
              >{{isipoint.nama_produk}}</th>
              <td id="right2" style="border-right: 1px solid #dedede;">{{isipoint.target}}</td>
              <td id="right3" style="border-right: 1px solid #dedede;">{{isipoint.klaim}}</td>
              <td id="right4" style="border-right: 1px solid #dedede;">{{isipoint.actual}}</td>
              <td id="right5">{{isipoint.nominal}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BoxPromosi from "@/components/MGC/BoxPromosi.vue";
import HeaderTitle from "@/components/MGC/HeaderTitle.vue";
export default {
  components: {
    HeaderTitle,
    BoxPromosi
  },
  data() {
    return {
      insentif: {
        data: {
          produk_data: []
        }
      },
      detailInsentif: {
        data: []
      }
    };
  },
  methods: {
    getData() {
      axios
        .post(
          "https://www.inosis.co.id/demo_promosi_api/api.php/insentif-claim",
          {
            params: {
              // bulan: this.$route.params.bulan,
              outlet_id: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )
        .then(res => (this.detailInsentif = res.data))
        .catch(err => console.log(err));
    },
    postInsentif(outlet_id, bulan) {
      console.log(outlet_id, bulan);
      let formData = new FormData();
      formData.append("bulan", bulan);
      axios
        .post(
          "https://www.inosis.co.id/demo_promosi_api/api.php/insert-insentif",
          formData,
          {
            params: {
              // bulan: this.$route.params.bulan,
              outlet_id: this.$route.params.outlet_id,
              token: localStorage.token
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.$router.replace(
            `/mgc/dashboardinsentif/${(this.$route.params.outlet_id,
            window.location.reload())}`
          );
        })
        .catch(err => console.log(err));
    }
  },

  mounted() {
    axios
      .get(
        "https://www.inosis.co.id/demo_promosi_api/api.php/insentif-statement",
        {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        }
      )
      .then(res => (this.insentif = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
.text-light th {
  font-size: 15px;
}
#sub {
  display: inline-flex !important;
  width: 98px !important;
}

#right1 #right2 #right3 {
  border-right: 1px solid #dedede;
}
.wrapper {
  overflow: auto;
  border-radius: 6px;
  border: 1px solid #dedede;
}

#rcorners1 {
  background: #653366;
  border-top-left-radius: 50% 20px;
  border-top-right-radius: 50% 20px;
}

.listShadow {
  box-shadow: 0px 0px 12px -3px #898989 !important;
  border-radius: 5px;
}

.redeem {
  position: relative;
  top: -2vh;
}

.juli {
  position: relative;
  left: 75px;
  top: 38px;
  color: #fdda21;
}

.modal-footer {
  border-top: none !important;
}

.modal-header {
  border-bottom: none !important;
}
.boxtitle {
  padding: 20px;
  margin-bottom: 20px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.boxtitle span a {
  color: white !important;
}

.boxtitle3 h2,
h5,
h3 {
  color: white !important;
}

.boxtitle3 h3,
a {
  color: #fdda21 !important;
}

.boxtitle h2,
h3,
h5 {
  color: #fdda21;
}

.boxtitlepoint h2,
h3,
h5 {
  color: white;
}

table {
  text-align: center;
}

p {
  color: white;
}

table {
  border: 2px solid #f1f1f1;
  border-radius: 10px;
}

.formlogin {
  border-radius: 100px !important;
}

.margincustom {
  margin-top: 14px !important;
  margin-bottom: 10px !important;
}

.boxtitlepoints {
  background: #fff;
  padding: 10px;
}

.boxpoint p {
  font-size: 14px !important;
}
.font16 {
  font-size: 16px !important;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  .boxpoint h6 {
    font-weight: 800;
    font-size: 16px !important;
  }

  #right1,
  #right2,
  #right3,
  #right4,
  #right5 {
    padding: 1px;
    padding-top: 9px;
    font-size: 11px;
  }

  #rcorners1 th {
    font-size: 13px;
  }
  #sub {
    display: inline-flex !important;
    width: 96px !important;
  }

  .font16 {
    font-size: 16px !important;
  }
}
</style>
