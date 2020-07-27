<template>
  <div class="container">
    <div class="row boxform justify-content-center px-2">
      <div class="col-md-8 text-left d-flex flex-row">
        <img
          class="mr-3 imgUser"
          src="https://img.icons8.com/offices/80/000000/gender-neutral-user.png"
        />
        <div>
          <h2 class="formh2">Data Registrasi</h2>
          <p class="formp">Mohon Lengkapi Data dibawah ini</p>
        </div>
      </div>

      <hr style="width:2000px;margin-top:0px !important" />
      <div class="col-md-12 px-0">
        <HeaderTitle outlet_id="100000-ANE003" outlet_name="Evan" />

        <form>
          <input type="hidden" />
          <input type="hidden" />
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
          <!--          Upload-ktp-->
          <div id="app">
            <vue-dropzone :include-styling="true" :options="dropzoneOptions" :useCustomSlot="true">
              <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title text-dark" style="color: black;">Unggah Foto KTP</h3>
              </div>
            </vue-dropzone>
          </div>
          <!--         end dropzone-->

          <div class="form-row mt-2">
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
              <input type="text" class="form-control sizeform" placeholder="Kota Tujuan" />
            </div>
          </div>
          <router-link :to="{ path: '/mvg/promosi' }" style="color: #FFF;" class="m-auto font18">
            <button type="submit" class="btn btn-lg col-md-12 btn-primary font-button">Submit</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderTitle from "@/components/MGC/HeaderTitle.vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "Registrasi",
  components: {
    HeaderTitle,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      state: {
        provinsi: 0,
        kabupaten: 0,
        kecamatan: 0,
        kelurahan: 0
      },
      dataProvinsis: [],
      dataKabupatens: [],
      dataKecamatans: [],
      dataKelurahans: [],
      dataTelephones1: [],
      dataNama_Konsumen: [],
      data_outlet: [],
      errors: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailHeight: 250,
        thumbnailWidth: 450,
        addRemoveLinks: true
      }
    };
  },
  methods: {
    getTelephone() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/detail-outlet`,
          {
            params: {
              txtKodeOutlet: this.$route.params.outlet_id
            }
          }
        )
        .then(res => {
          this.data_outlet = res.data;
          this.state.provinsi = this.data_outlet.data.id_propinsi;
          if (this.state.provinsi == null) {
            this.state.provinsi = 0;
          } else {
            this.getKabupaten();
          }
          this.state.kabupaten = this.data_outlet.data.id_kota;
          if (this.state.kabupaten == null) {
            this.state.kabupaten = 0;
          } else {
            this.getKecamatan();
          }
          this.state.kecamatan = this.data_outlet.data.id_kecamatan;
          if (this.state.kecamatan == null) {
            this.state.kecamatan = 0;
          } else {
            this.getKelurahan();
          }
          this.state.kelurahan = this.data_outlet.data.id_kelurahan;
          if (this.state.kelurahan == null) {
            this.state.kelurahan = 0;
          }
        })
        .catch(err => console.log(err));
    },
    getProvinsi() {
      axios
        .get(
          "https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-province"
        )
        .then(res => (this.dataProvinsis = res.data))
        .catch(err => console.log(err));
    },
    getKabupaten() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-cities?id_provinsi=${this.state.provinsi}`
        )
        .then(res => {
          this.dataKabupatens = res.data;
        })
        .catch(err => console.log(err));
    },
    getKecamatan() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-district?id_city=${this.state.kabupaten}`
        )
        .then(res => (this.dataKecamatans = res.data))
        .catch(err => console.log(err));
    },
    getKelurahan() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-subdistricts?id_district=${this.state.kecamatan}`
        )
        .then(res => (this.dataKelurahans = res.data))
        .catch(err => console.log(err));
    },
    formSubmit(e) {
      this.errors = [];

      if (!this.data_outlet.data.no_ektp) {
        this.errors.push("no eKTP");
      }
      if (!this.data_outlet.data.nama_konsumen) {
        this.errors.push("Nama Pemilik");
      }
      if (!this.data_outlet.data.telepon2) {
        this.errors.push("No Hp");
      }
      if (!this.data_outlet.data.alamat2) {
        this.errors.push("Alamat");
      }
      if (!this.data_outlet.data.rtrw) {
        this.errors.push("RT/RW");
      }
      if (!this.state.kelurahan) {
        this.errors.push("Kelurahan");
      }
      if (!this.state.kecamatan) {
        this.errors.push("Kecamatan");
      }
      if (!this.state.kabupaten) {
        this.errors.push("Kabupaten");
      }
      if (!this.state.provinsi) {
        this.errors.push("Propinsi");
      }
      if (!this.data_outlet.data.kodepos) {
        this.errors.push("Kodepos");
      }
      if (!this.data_outlet.data.nama_rekening) {
        this.errors.push("Nama Nasabah");
      }
      if (!this.data_outlet.data.nomor_rekening) {
        this.errors.push("No Rekening");
      }
      if (!this.data_outlet.data.nama_bank) {
        this.errors.push("Nama Bank");
      }
      if (!this.data_outlet.data.cabang_bank) {
        this.errors.push("Cabang Bank");
      }
      if (!this.data_outlet.data.kota_bank) {
        this.errors.push("Kota Tujuan");
      }
      e.preventDefault();
      if (
        this.data_outlet.data.outlet_id &&
        this.data_outlet.data.no_ektp &&
        this.data_outlet.data.nama_konsumen &&
        this.data_outlet.data.telepon2 &&
        this.data_outlet.data.alamat2 &&
        this.data_outlet.data.rtrw &&
        this.state.kelurahan &&
        this.state.kecamatan &&
        this.state.kabupaten &&
        this.state.provinsi &&
        this.data_outlet.data.kodepos &&
        this.data_outlet.data.nama_rekening &&
        this.data_outlet.data.nomor_rekening &&
        this.data_outlet.data.nama_bank &&
        this.data_outlet.data.cabang_bank &&
        this.data_outlet.data.kota_bank
      ) {
        axios
          .post(
            `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/update-outlet-ms`,
            {
              outlet_id: this.data_outlet.data.outlet_id,
              no_ektp: this.data_outlet.data.no_ektp,
              nama_konsumen: this.data_outlet.data.nama_konsumen,
              telepon2: this.data_outlet.data.telepon2,
              alamat2: this.data_outlet.data.alamat2,
              rtrw: this.data_outlet.data.rtrw,
              kelurahan: this.state.kelurahan,
              kecamatan: this.state.kecamatan,
              kabupaten: this.state.kabupaten,
              propinsi: this.state.provinsi,
              kodepos: this.data_outlet.data.kodepos,
              nama_rekening: this.data_outlet.data.nama_rekening,
              nomor_rekening: this.data_outlet.data.nomor_rekening,
              nama_bank: this.data_outlet.data.nama_bank,
              cabang_bank: this.data_outlet.data.cabang_bank,
              kota_bank: this.data_outlet.data.kota_bank
            }
          )
          .then(res => {
            console.log(res.data);
            this.$router.push("/success/");
          })
          .catch(err => console.log(err));
      }
    }
  },

  mounted() {
    this.getKecamatan();
    this.getKabupaten();
    this.getProvinsi();
    this.getTelephone();
    this.getKelurahan();
  }
};
</script>

<style>
@import "~vue2-dropzone/dist/vue2Dropzone.min.css";
#customdropzone {
  background-color: orange;
  font-family: "Arial", sans-serif;
  letter-spacing: 0.2px;
  color: #777;
  transition: background-color 0.2s linear;
  height: 200px;
  padding: 40px;
}

#customdropzone .dz-preview {
  width: 160px;
  display: inline-block;
}
#customdropzone .dz-preview .dz-image {
  width: 450px;
  height: 250px;
  margin-left: 40px;
  margin-bottom: 10px;
}
#customdropzone .dz-preview .dz-image > div {
  width: inherit;
  height: inherit;
  border-radius: 50%;
  background-size: contain;
}
#customdropzone .dz-preview .dz-image > img {
  width: 100%;
}

#customdropzone .dz-preview .dz-details {
  color: white;
  transition: opacity 0.2s linear;
  text-align: center;
}
#customdropzone .dz-success-mark,
.dz-error-mark,
.dz-remove {
  display: none;
}

.dropzone .dz-preview .dz-image img {
  display: block;
  width: auto;
  height: fit-content;
}
.imgUser {
  height: 60px;
}
.boxtitle3 h3,
a {
  color: black !important;
}
.dz-remove {
  color: #d3d3d3 !important;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .dz-remove {
    color: #d3d3d3 !important;
  }
  .boxtitle3 h3,
  a {
    color: black !important;
  }
  .imgUser {
    height: 40px;
  }
  .dropzone .dz-preview .dz-image {
    overflow: hidden;
    width: 466px;
    height: 242px;
    position: relative;
    display: block;
    zoom: 0.6;
  }

  .vue-dropzone > .dz-preview .dz-remove {
    margin-top: 17px;
    background-color: transparent;
    position: relative;
    z-index: 30;
    color: #fff;
    margin-left: -1px;
    padding: 0px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1.1px;
    opacity: 0.8;
  }
}
</style>
