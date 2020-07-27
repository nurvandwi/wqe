<template>
  <div class="container">
    <div class="row justify-content-center p-3">
      <div class="boxtitlepoints col-md-12" style="background-color: #653366; border-radius: 5px;">
        <div class="d-flex flex-row justify-content-center">
          <h2 class="text-light">INSENTIF STATEMENT</h2>
        </div>
      </div>
      <div
        class="col-md-12 mt-2 mb-0 p-0"
        style="background-color: #653366;border-top-right-radius:7px;border-top-left-radius:7px"
      >
        <HeaderTitle :outlet_id="this.$route.params.outlet_id" :outlet_name="insentif.nama_outlet" />
      </div>
      <div class="col-md-12 boxpoint font-weight-bold mb-2">
        <div class="row mt-0" style="border:1px #dedede solid;border-radius: 0 0 10px 10px ;">
          <div class="col-md-5 col-5 text-left margincustom">
            <p class="text-dark">Nilai Insentif</p>
            <p class="text-dark">Rp. 37.500.000</p>
          </div>
          <div class="col-md-1 col-1 margincustom">
            <hr style="width: 0px; height: 25px; border: 1px #dedede solid;border-style: solid;" />
          </div>
          <div class="col-md-5 col-5 text-left margincustom">
            <p class="text-dark">Total Transfer</p>
            <p class="text-dark">Rp. 46.000.00</p>
          </div>
          <div
            class="col-md-11 col-11 mx-auto"
            style=" height: 0px; border: 1px #dedede dashed;border-style: solid;"
          ></div>
          <div class="col-md-5 col-5 text-left margincustom">
            <p class="text-dark">Saldo Insentif:</p>
          </div>
          <div class="col-md-1 col-1">
            <hr
              class="margincustom"
              style="width: 0px; height: 25px; border: 1px #dedede dashed;border-style: solid;"
            />
          </div>
          <div class="col-md-5 col-5 text-left margincustom">
            <p class="text-dark">Rp. 8.500.00</p>
          </div>
        </div>
      </div>

      <div class="wrapper table-responsive mb-2">
        <table
          class="table table-borderless"
          style="border: none"
          v-for="(point,index) in insentif.data"
          :key="index"
        >
          <thead id="rcorners1">
            <tr class="text-light">
              <div class="juli">
                <h1>{{point.bulan}}</h1>
              </div>
              <th colspan="1"></th>
              <th colspan="3">Nilai Insentif</th>
              <th colspan="3"></th>
            </tr>
            <tr class="text-light">
              <td colspan="2"></td>
              <td colspan="3  ">Rp 20.0000</td>

              <button
                type="button"
                class="redeem btn btn-warning font-weight-bold text-black"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >Redeem</button>
            </tr>
            <tr class="text-light">
              <th
                scope="col"
                style="display: inline-flex !important; width: 136px !important;"
              >Sub Brand</th>
              <th>Target</th>
              <th scope="col">Klaim</th>
              <th scope="col">Aktual</th>
              <th scope="col">%</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                style="border-right: 1px solid #dedede;"
                id="right1"
                scope="row"
              >{{point.nama_produk}}</th>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">{{point.quantity}}</td>
              <td style="border-right: 1px solid #dedede;">4%</td>
              <td>{{point.nominal}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-12 p-0">
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-transparent modal-dialog-centered" role="document">
          <div class="modal-content">
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
                    <p class="text-dark font-weight-bold font14">Juli</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="text-black-50 font15">Nilai Insentif :</h5>
                    <p class="text-dark font-weight-bold font14">100 Karton</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="text-black-50 font15">Tgl Redeem :</h5>
                    <p class="text-dark font-weight-bold font14">29 June 2020</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="text-black-50 font15">Tgl Transfer :</h5>
                    <p class="text-dark font-weight-bold font14">29 June 2020</p>
                  </div>

                  <div class="d-flex justify-content-between">
                    <h5 class="text-black-50 font15">No. Ref :</h5>
                    <p class="text-dark font-weight-bold font14">12345678901234</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn text-light" style="background-color:#653366;">Redeem</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-secondary col-md-12 col-12 py-2 mb-4">Keluar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderTitle from "@/components/MGC/HeaderTitle.vue";
export default {
  components: {
    HeaderTitle
  },
  data() {
    return {
      insentif: {
        data: []
      }
    };
  },
  mounted() {
    axios
      .get(
        "https://www.inosis.co.id/mv_promosi_api/api.php/insentif-statement",
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

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  .boxpoint p {
    font-size: 15px !important;
  }
}
</style>
