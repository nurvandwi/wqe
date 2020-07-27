<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="col-lg-12 mt-3 proceed-btn mt-3"
      data-toggle="modal"
      data-target="#exampleModal"
    >Checkout</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark" id="exampleModalLabel">Data Anda</h5>
            <button
              type="button"
              class="close button-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" class="button-close text-dark">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="form-group col-md-12 col-12 text-left">
                <input type="text" class="form-control sizeform" placeholder="Nama" />
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
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-theme">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Checkout",
  methods: {
    show() {
      this.$modal.show("modal-info");
    },
    hide() {
      this.$modal.hide("modal-info");
    }
  }
};
</script>
<style scoped src="../../../public/css/style-header.css">
body {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
}

.btn-theme {
  color: black !important;
}
</style>