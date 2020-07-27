<template>
  <div class="container">
    <div class="row justify-content-center p-3">
      <div class="boxtitlepoints col-md-12" style="background-color: #653366; border-radius: 5px;">
        <div class="d-flex flex-row justify-content-center">
          <h2 class="text-light">INSENTIF STATEMENT</h2>
        </div>
      </div>
      <div class="boxtitle col-md-12 mt-2 mb-0" style="  background-color: #653366;">
        <h5 style="color:white!important;" class="text-center">501005-SUM0009</h5>
        <h3 style="color: yellow!important; " class="text-center">SUMBER MAKMUR</h3>
      </div>
      <div class="col-md-12 boxpoint font-weight-bold mb-1">
        <div class="row mt-0" style="border:1px #dedede solid;border-radius: 0 0 10px 10px ;">
          <div class="col-md-5 col-5 text-left margincustom">
            <p style="color:black !important;" class="mb-0">Nilai Insentif</p>
            <h5 style="color:black !important;">Rp. 37.500.000</h5>
          </div>
          <div class="col-md-2 col-2 margincustom">
            <hr style="width: 0px; height: 25px; border: 1px #dedede solid;border-style: solid;" />
          </div>
          <div class="col-md-5 col-5 text-left margincustom">
            <p style="color:black !important;" class="mb-0">Total Nilai Transfer</p>
            <h5 style="color:black !important;">Rp. 46.000.00</h5>
          </div>
          <div
            class="col-md-11 col-11 mx-auto"
            style=" height: 0px; border: 1px #dedede dashed;border-style: solid;"
          ></div>
          <div class="col-md-5 col-5 text-left margincustom">
            <h5 style="color:black !important;" class="mb-0 font-weight-bold">Saldo Insentif:</h5>
          </div>
          <div class="col-md-2 col-2">
            <hr
              class="margincustom"
              style="width: 0px; height: 25px; border: 1px #dedede dashed;border-style: solid;"
            />
          </div>
          <div class="col-md-5 col-5 text-left margincustom">
            <h5 style="color:black !important;">Rp. 8.500.00</h5>
          </div>
        </div>
      </div>

      <div class="wrapper table-responsive">
        <table class="table table-borderless" style="border: none">
          <thead id="rcorners1">
            <tr class="text-light">
              <th colspan="1" style="color: yellow">Juli</th>
              <th colspan="4">Tgl. Transfer</th>
              <th colspan="1">No. Ref</th>
            </tr>
            <tr class="text-light">
              <td colspan="1" style="color: yellow">Rp 20.0000</td>
              <td colspan="4">20-Agustus-2020</td>
              <td colspan="1">12345678901234</td>
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
              <th style="border-right: 1px solid #dedede;" id="right1" scope="row">Mini Oreo Puch</th>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">4%</td>
              <td>40.000.000</td>
            </tr>
            <tr>
              <th style="border-right: 1px solid #dedede;" id="right2" scope="row">Mini Oreo Puch</th>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">4%</td>
              <td>40.000.000</td>
            </tr>
            <tr>
              <th style="border-right: 1px solid #dedede;" id="right3" scope="row">Mini Oreo Puch</th>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">100</td>
              <td style="border-right: 1px solid #dedede;">4%</td>
              <td>40.000.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-12 mt-2">
      <button
        type="button"
        class="btn col-md-12 formlogin"
        style="background-color:#653366; color:white;"
      >Keluar</button>
    </div>
  </div>
</template>

<script>
export default {};
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
  .boxpoint h5,
  p {
    font-size: 12px !important;
  }
}
</style>
