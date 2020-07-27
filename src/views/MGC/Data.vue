<template>
  <div class="container">
    <div class="row boxform justify-content-center" style="padding:0px !important">
      <div class="col-md-8 text-left d-flex flex-row">
        <img
          class="mr-4"
          src="https://i.imgur.com/myZDp6l.png"
          style="width:3.5em !important;height:3.5em !important;"
        />
        <div>
          <h2 class="formh2">Data Registrasi</h2>
          <p class="formp">Mohon Lengkapi Data dibawah ini</p>
        </div>
      </div>

      <hr style="width:2000px;margin-top:0px !important" />
      <div class="col-md-12 px-2">
        <form>
          <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input type="text" class="form-control sizeform" placeholder="Nama Pemilik" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input type="text" class="form-control sizeform" placeholder="EKTP" />
            </div>
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input name="telepon1" class="form-control sizeform" placeholder="No.HP" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input type="text" class="form-control sizeform" placeholder="Alamat" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input type="text" class="form-control sizeform" placeholder="RT/RW" />
            </div>
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input type="text" class="form-control sizeform" placeholder="KodePos" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 col-12 text-left">
              <select name="dataProvinsi" class="form-control">
                <option disabled selected value="0">Pilih Provinsi</option>
                <option></option>
              </select>
            </div>
            <div class="form-group col-md-12 col-12 text-left">
              <select name="dataKabupaten" class="form-control">
                <option disabled selected value="0">Pilih Kabupaten</option>
                <option></option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 col-12 text-left">
              <select name="dataKecamatan" class="form-control">
                <option disabled selected value="0">Pilih Kecamatan</option>
                <option></option>
              </select>
            </div>
            <div class="form-group col-md-12 col-12 text-left">
              <select class="form-control">
                <option disabled selected value="0">Pilih Kelurahan</option>
                <option></option>
              </select>
            </div>

            <h4 class="text-dark mt-3 p-1 font16">
              <strong>Informasi Rekening Bank</strong>
            </h4>
            <div class="form-group col-md-12 col-12 text-left">
              <input type="text" class="form-control sizeform" placeholder="Nama Nasabah" />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input type="number" class="form-control sizeform" placeholder="No Rekening" />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input type="text" class="form-control sizeform" placeholder="Nama Bank" />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input type="text" class="form-control sizeform" placeholder="Cabang Bank" />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input type="text" class="form-control sizeform" placeholder="Kota Bank" />
            </div>
          </div>
          <button type="submit" class="btn btn-lg col-md-12 btn-theme font-button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>


<style>
.btn-theme {
  background-color: #000099 !important;
  color: white !important;
}
@media screen and (max-width: 1000px) {
  .font16 {
    font-size: 16px;
  }
}
</style>