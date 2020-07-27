<template>
  <div class="container">
    <div class="row boxform justify-content-center px-2">
      <div class="col-md-8 text-left d-flex flex-row mt-3">
        <img
          class="mr-3 imgUser"
          src="https://img.icons8.com/offices/80/000000/gender-neutral-user.png"
        />
        <div>
          <h2 class="formh2">Data Registrasi</h2>
          <p class="formp">Mohon Lengkapi Data dibawah ini</p>
        </div>
      </div>

      <div class="col-md-12 px-0">
        <HeaderTitle :outlet_name="this.$route.params.outlet_id" />
        <form>
          <input type="hidden" />
          <input type="hidden" />

          <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input
                v-model="data_outlet.nama_konsumen"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Pemilik"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input
                v-model="data_outlet.no_ektp"
                type="text"
                class="form-control sizeform"
                placeholder="EKTP"
              />
            </div>
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input
                v-model="data_outlet.telepon2"
                type="number"
                class="form-control sizeform"
                placeholder="No.HP"
              />
            </div>
          </div>
          <!--          Upload-ktp-->
          <div id="app">
            <vue-dropzone
              v-model="data_outlet.formulir"
              :include-styling="true"
              :options="dropzoneOptions"
              :useCustomSlot="true"
              v-on:change="onChangeFileUpload()"
              ref="file"
            >
              <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title text-dark" style="color: black;">Unggah Foto KTP</h3>
              </div>
            </vue-dropzone>
          </div>
          <!--         end dropzone-->

          <!-- <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
            </div>
          </div>-->

          <div class="form-row mt-2">
            <div class="form-group col-md-12 col-12 text-left">
              <input
                v-model="data_outlet.nama_rekening"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Nasabah"
              />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input
                v-model="data_outlet.nama_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Bank"
              />
            </div>

            <div class="form-group col-md-6 col-6 text-left">
              <input
                v-model="data_outlet.cabang_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Cabang Bank"
              />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input
                v-model="data_outlet.kota_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Kota Tujuan"
              />
            </div>
            <div class="form-group col-md-6 col-6 text-left">
              <input
                v-model="data_outlet.nomor_rekening"
                type="text"
                class="form-control sizeform"
                placeholder="No Rekening"
              />
            </div>
          </div>
          <!-- <router-link :to="{ path: '/mgc/promosi' }" style="color: #FFF;" class="m-auto font18"></router-link> -->

          <!--  <a @click="registrasi()" class="btn btn-lg col-md-12 btn-primary font-button">Submit</a> -->

          <!-- <a
            @click="registrasi()"
            class="btn col-md-12 col-12 py-3 colorMondelez text-white"
            style="border-radius: 10px !important;"
          >
            <h3 class="my-0 font15">Submit</h3>
          </a>-->

          <button
            v-on:click="submitForm()"
            type="button"
            class="btn col-md-12 col-12 py-3 colorMondelez text-white"
            style="border-radius: 10px !important;"
          >
            <h3 class="my-0 font15">Submit</h3>
          </button>
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
      data_outlet: {
        outlet_id: "",
        no_ektp: "",
        nama_konsumen: "",
        telepon2: "",
        nomor_rekening: "",
        nama_rekening: "",
        nama_bank: "",
        cabang_bank: "",
        kota_bank: "",
        formulir: ""
      },
      // nama_konsumen: [],
      // errors: [],
      dropzoneOptions: {
        url:
          "https://www.inosis.co.id/mv_promosi_api/api.php/update-outlet-simple",
        thumbnailHeight: 250,
        thumbnailWidth: 450,
        addRemoveLinks: true
      }
    };
  },
  methods: {
    submitForm() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("outlet_id", this.$route.params.outlet_id);
      let registrasiData = {
        outlet_id: this.$route.params.outlet_id,
        no_ektp: this.data_outlet.no_ektp,
        nama_konsumen: this.data_outlet.nama_konsumen,
        telepon2: this.data_outlet.telepon2,
        nomor_rekening: this.data_outlet.nomor_rekening,
        nama_rekening: this.data_outlet.nama_rekening,
        nama_bank: this.data_outlet.nama_bank,
        cabang_bank: this.data_outlet.cabang_bank,
        kota_bank: this.data_outlet.cabang_bank,
        formulir: this.data_outlet.formulir
      };
      axios
        .post(
          `https://www.inosis.co.id/mv_promosi_api/api.php/update-outlet-simple`,
          registrasiData,
          formData,
          {
            params: {
              token: localStorage.token,
              username: localStorage.username,
              outlet_id: localStorage.outlet_id
            }
          }
        )
        .then(() =>
          this.$router.replace(`/mgc/promosi/${this.$route.params.outlet_id}`)
        )
        .catch(err => console.log(err));
    },
    onChangeFileUpload() {
      this.formulir = this.data.data_outlet.formulir.formulir[0];
    }
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

  .placeholder {
    color: grey;
  }
  select option:first-child {
    color: grey;
    display: none;
  }
  select option {
    color: #555;
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
