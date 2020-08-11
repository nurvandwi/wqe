<template>
  <div class="container">
    <div class="row boxform justify-content-center px-4">
      <div class="col-md-8 text-left d-flex flex-row mt-2 p-0">
        <img
          class="mr-3 imgUser"
          src="https://img.icons8.com/offices/80/000000/gender-neutral-user.png"
        />
        <div>
          <h2 class="formh2 mb-0">Data Registrasi</h2>
          <p class="formp mb-0">Mohon Lengkapi Data dibawah ini</p>
        </div>
      </div>

      <div class="col-md-12 px-0">
        <HeaderTitle :outlet_name="this.$route.params.outlet_id" />
        <h4 class="text-dark mt-2 mb-0 text-left font14">
          <b>Input Data Outlet</b>
        </h4>
        <p class="formp section3 p-0 m-0 mt-0 mb-2 text-dark text-left">
          Nomor Ektp dan Nomor Handphone/WA wajib diisi
        </p>
        <form @submit="formSubmit">
          <p
            v-if="errors.length"
            style="color:black!important; "
            class="text-left"
          >
            <b style="color:red">Tolong Isi Kolom berikut ini :</b>
          </p>
          <ul class="text-left px-3">
            <li
              class="text-left"
              style="color:red"
              v-for="error in errors"
              v-bind:key="error"
            >
              {{ error }}
            </li>
          </ul>

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
          <div class="form-row">
            <div class="form-group col-md-12 col-sm-12 col-12 text-left">
              <vue-dropzone
                :include-styling="true"
                :options="dropzoneOptions"
                :useCustomSlot="true"
                id="dropzone"
                v-if="data_outlet.file == null"
                v-model="data_outlet.file"
                @vdropzone-file-added="vfileAdded"
              >
                <div class="dropzone-custom-content">
                  <img
                    class="logoPromo mb-4"
                    src="../../assets/camera-3.svg"
                    alt
                  />
                  <h3
                    class="dropzone-custom-title font15"
                    style="color: grey!important;"
                  >
                    Unggah Foto KTP
                  </h3>
                  <p style="color: grey!important;">
                    Silahkan upload foto kartu ektp anda
                  </p>
                </div>
              </vue-dropzone>

              <div>
                <img
                  v-bind:src="data_outlet.file"
                  class="w-100 p-0 m-0"
                  style="min-height:100%"
                  alt
                />
              </div>
            </div>
          </div>
          <!--         end dropzone-->

          <!-- <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()" />
            </div>
          </div>-->
          <h4 class="text-dark mt-2 text-left font14">
            <h4 class="text-dark mt-2 mb-0 text-left font14">
              <b>Input Data Bank</b>
            </h4>
            <p class="formp section3 p-0 m-0 mt-0 mb-2 text-dark text-left">
              Data Rekening Bank wajib diisi sesuai dengan data di buku bank
            </p>
          </h4>

          <div class="form-row mt-2">
            <div class="form-group col-md-12 col-12 text-left">
              <select
                @change="getBank()"
                v-model="state.nama_bank"
                name="dataBank"
                class="form-control"
              >
                <option disabled selected value="0">Pilih Bank</option>
                <option
                  v-for="(row, i) in data_bank.data"
                  :value="row.id_bank"
                  :key="i"
                  >{{ row.nama_bank }}</option
                >
              </select>
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
                v-model="data_outlet.nomor_rekening"
                type="text"
                class="form-control sizeform"
                placeholder="No Rekening"
              />
            </div>

            <div class="form-group col-md-12 col-12 text-left">
              <input
                v-model="data_outlet.nama_rekening"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Nasabah"
              />
            </div>
            <div class="form-group col-md-12 col-12 text-left">
              <input
                v-model="data_outlet.kota_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Kota Tujuan"
              />
            </div>

            <div class="form-group col-md-12 col-12 text-left">
              <vue-dropzone
                :include-styling="true"
                :options="dropzoneOptions"
                :useCustomSlot="true"
                id="dropzone2"
                v-if="data_outlet.file2 == null"
                v-model="data_outlet.file2"
                @vdropzone-file-added="vfileAdded2"
              >
                <div class="dropzone-custom-content">
                  <img
                    class="logoPromo mb-4"
                    src="../../assets/camera-3.svg"
                    alt
                  />
                  <h3
                    class="dropzone-custom-title font15"
                    style="color: grey!important;"
                  >
                    Unggah Foto Buku Bank
                  </h3>
                  <p style="color: grey!important;">
                    Silahkan upload Buku Bank Anda
                  </p>
                </div>
              </vue-dropzone>
              <div>
                <img
                  v-bind:src="data_outlet.file2"
                  class="w-100 p-0 m-0"
                  style="min-height:100%"
                  alt
                />
              </div>
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
            @click="formSubmit"
            class="btn col-md-12 col-12 py-3 colorMondelez text-white mb-4"
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
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      state: {
        nama_bank: 0,
      },
      data_bank: [],
      data_outlet: [],
      file: null,
      file2: null,
      img: "",
      errors: [],
      // nama_konsumen: [],
      // errors: [],
      dropzoneOptions: {
        url:
          "https://www.inosis.co.id/demo_promosi_api/api.php/update-outlet-simple",
        maxFiles: 1,
        resizeWidth: 640,
        maxFilesize: 2,
        thumbnailHeight: 250,
        thumbnailWidth: 450,
        addRemoveLinks: true,
        autoProcessQueue: false,
      },
    };
  },
  methods: {
    getUser() {
      axios
        .get(
          `https://www.inosis.co.id/demo_promosi_api/api.php/detail-outlet`,
          {
            params: {
              outlet_id: this.$route.params.outlet_id,
              token: localStorage.token,
            },
          }
        )
        .then((res) => {
          this.data_outlet = res.data;
          this.state.nama_bank = this.data_outlet.nama_bank;
        })
        .catch((err) => console.log(err));
    },
    getBank() {
      axios
        .get(`https://www.inosis.co.id/demo_promosi_api/api.php/list-bank`)
        .then((res) => (this.data_bank = res.data))
        .catch((err) => console.log(err));
    },
    vfileAdded(file) {
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => (this.img = reader.result);
    },
    vfileAdded2(file2) {
      this.file2 = file2;
      const reader = new FileReader();
      reader.readAsDataURL(file2);
      reader.onload = () => (this.img = reader.result);
    },

    formSubmit(e) {
      console.log("file");
      let formData = new FormData();
      if (this.file != null || this.file2 != null) {
        formData.append("file", this.file, this.file.name);
        formData.append("file2", this.file2, this.file2.name);
      }
      formData.append("outlet_id", this.$route.params.outlet_id);
      formData.append("no_ektp", this.data_outlet.no_ektp);
      formData.append("nama_konsumen", this.data_outlet.nama_konsumen);
      formData.append("telepon2", this.data_outlet.telepon2);
      formData.append("nomor_rekening", this.data_outlet.nomor_rekening);
      formData.append("nama_rekening", this.data_outlet.nama_rekening);
      formData.append("nama_bank", this.state.nama_bank);
      formData.append("cabang_bank", this.data_outlet.cabang_bank);
      formData.append("kota_bank", this.data_outlet.kota_bank);
      this.errors = [];
      if (!this.data_outlet.no_ektp) {
        this.errors.push("no eKTP");
      }
      if (!this.data_outlet.nama_konsumen) {
        this.errors.push("Nama Konsumen");
      }
      if (!this.data_outlet.telepon2) {
        this.errors.push("telepon2");
      }
      if (!this.data_outlet.nomor_rekening) {
        this.errors.push("nomor_rekening");
      }
      if (!this.data_outlet.nama_rekening) {
        this.errors.push("nama_rekening");
      }

      if (!this.data_outlet.cabang_bank) {
        this.errors.push("cabang_bank");
      }
      if (!this.data_outlet.kota_bank) {
        this.errors.push("kota_bank");
      }
      if (!this.data_outlet.file && !this.file) {
        this.errors.push("Foto KTP");
      }
      if (!this.data_outlet.file2 && !this.file2) {
        this.errors.push("Buku Bank");
      }

      e.preventDefault();
      if (
        this.data_outlet.no_ektp &&
        this.data_outlet.nama_konsumen &&
        this.data_outlet.telepon2 &&
        this.data_outlet.nama_rekening &&
        this.data_outlet.nomor_rekening &&
        this.data_outlet.cabang_bank &&
        this.data_outlet.kota_bank &&
        this.state.nama_bank
      )
        if (this.file2 != null || this.data_outlet.file2 != null)
          if (this.file != null || this.data_outlet.file != null) {
            axios
              .post(
                `https://www.inosis.co.id/demo_promosi_api/api.php/update-outlet-simple`,
                formData,
                {
                  params: {
                    token: localStorage.token,
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
                this.$router.replace(
                  `/mgc/promosi/${this.$route.params.outlet_id}`
                );
              })
              .catch((err) => console.log(err));
          }
    },
  },
  mounted() {
    this.getUser();
    this.getBank();
  },
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

  .vue-dropzone {
    border: 1px solid #e5e5e5;
  }
  .font15 {
    font-size: 15px !important;
  }
}
</style>
