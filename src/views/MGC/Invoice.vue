<template>
  <div class="container">
    <div class="row boxform justify-content-center px-4">
      <div class="col-md-8 text-left d-flex flex-row mt-2 p-0">
        <img
          class="mr-3 imgUser"
          src="https://img.icons8.com/offices/80/000000/gender-neutral-user.png"
        />
        <div>
          <h2 class="formh2 mb-0">Data POSM</h2>
          <p class="formp mb-0">Mohon Lengkapi Data dibawah ini</p>
        </div>
      </div>

      <div class="col-md-12 px-0">
        <HeaderTitle :outlet_name="this.$route.params.outlet_id" />
        <h4 class="text-dark mt-2 text-left font14">
          <h4 class="text-dark mt-2 mb-0 text-left font14">
            <b>Input Data POSM</b>
          </h4>
          <p
            class="formp section3 p-0 m-0 mt-0 mb-2 text-dark text-left"
          >Foto POSM wajib ada untuk syarat penukaran insentif</p>
        </h4>

        <form @submit="formSubmit">
          <p v-if="errors.length" style="color:black!important; " class="text-left">
            <b style="color:red">Tolong Isi Kolom berikut ini :</b>
          </p>
          <ul class="text-left px-3">
            <li
              class="text-left"
              style="color:red"
              v-for="error in errors"
              v-bind:key="error"
            >{{ error }}</li>
          </ul>

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
                  <img class="logoPromo mb-4" src="../../assets/camera-3.svg" alt />
                  <h3
                    class="dropzone-custom-title font15"
                    style="color: grey!important;"
                  >Unggah Foto POSM</h3>
                  <p style="color: grey!important;">Silahkan upload foto POSM anda</p>
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

            <div class="form-group col-md-12 col-12 text-left">
              <h4 class="text-dark mt-2 mb-0 text-left font14">
                <b>Input Data Invoice</b>
              </h4>
              <p
                class="formp section3 p-0 m-0 mt-0 mb-2 text-dark text-left"
              >Foto Invoice wajib ada untuk syarat penukaran insentif</p>

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
                  <img class="logoPromo mb-4" src="../../assets/camera-3.svg" alt />
                  <h3
                    class="dropzone-custom-title font15"
                    style="color: grey!important;"
                  >Unggah Foto invoice</h3>
                  <p style="color: grey!important;">Silahkan upload Invoice Anda</p>
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

          <button
            type="submit"
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
  name: "Invoice",
  components: {
    HeaderTitle,
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      data_outlet: [],
      file: null,
      file2: null,
      img: "",
      errors: [],
      // nama_konsumen: [],
      // errors: [],
      dropzoneOptions: {
        url: "https://www.inosis.co.id/demo_promosi_api/api.php/upload-posm",
        thumbnailHeight: 250,
        thumbnailWidth: 450,
        addRemoveLinks: true,
        autoProcessQueue: false
      }
    };
  },
  methods: {
    getUser() {
      axios
        .get(`https://www.inosis.co.id/demo_promosi_api/api.php/cek-posm`, {
          params: {
            outlet_id: this.$route.params.outlet_id,
            token: localStorage.token
          }
        })
        .then(res => {
          this.data_outlet = res.data;
        })
        .catch(err => console.log(err));
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
      this.errors = [];

      if (!this.data_outlet.file && !this.file) {
        this.errors.push("Foto POSM");
      }
      if (!this.data_outlet.file2 && !this.file2) {
        this.errors.push("Foto Invoice");
      }

      e.preventDefault();

      if (this.file2 != null || this.data_outlet.file2 != null)
        if (this.file != null || this.data_outlet.file != null) {
          axios
            .post(
              `https://www.inosis.co.id/demo_promosi_api/api.php/upload-posm`,
              formData,
              {
                params: {
                  token: localStorage.token
                }
              }
            )
            .then(res => {
              console.log(res.data);
              this.$router.replace(
                `/mgc/promosi/${this.$route.params.outlet_id}`
              );
            })
            .catch(err => console.log(err));
        }
    }
  },
  mounted() {
    this.getUser();
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

  .vue-dropzone {
    border: 1px solid #e5e5e5;
  }
  .font15 {
    font-size: 15px !important;
  }
}
</style>
