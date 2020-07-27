<template>
  <div class="row justify-content-center" style="margin-bottom:-10px !important;">
    <div class="col-md-12">
      <br />
      <br />
      <br />
      <img src="../../assets/button3.png" class="m-auto styleImg" />
    </div>
    <div class="col-md-10 p-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FF9966"
          fill-opacity="1"
          d="M0,64L60,106.7C120,149,240,235,360,261.3C480,288,600,256,720,218.7C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <div class="col-md-12 stylebox">
        <div class="row p-0 mx-0 mt-4" style="border: none">
          <div class="col-md-6 col-6 col-sm-6">
            <div class="form-group">
              <label for="year">Tahun</label>
              <select id="inputState" class="form-control styleForm">
                <option value="2020">2020</option>
              </select>
            </div>
          </div>
          <div class="col-md-6 col-6 col-sm-6">
            <div class="form-group">
              <label for="phase">Phase</label>
              <select id="inputState" v-model="version" class="form-control styleForm">
                <option selected>Pilih Quarter</option>
                <option value="1">Quarter 1</option>
                <option value="2">Quarter 2</option>
                <option value="3">Quarter 3</option>
              </select>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="inputAddress">ID</label>
              <input
                type="text"
                class="form-control text-center styleForm"
                id="id"
                v-model="username"
                placeholder="Masukan User Id anda"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group">
              <label for="exampleInputPassword1">Kata Sandi</label>
              <input
                type="password"
                class="form-control text-center styleForm"
                v-model="password"
                id="exampleInputPassword1"
                placeholder="Masukan Password anda"
              />
            </div>
          </div>
          <div class="col-md-12 mt-3 mb-4">
            <div class="form-group">
              <a @click="getLogin" style="color:white !important" href="#">
                <button
                  type="button"
                  class="btn btn-info col-md-12 col-12 styleButton colorbutton"
                >Masuk</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      regid: "test",
      version: "1"
    };
  },
  methods: {
    getLogin() {
      this.$emit(
        "getLogin",
        this.username,
        this.password,
        this.regid,
        this.version
      );
    }
  }
};
</script>
<style scoped>
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #000000;
  border-color: #000000;
  box-shadow: 0 0 0 0.2rem #17a2b8 !important;
}
.buttonlogin {
  border-radius: 10px !important;
  padding: 1px 10px !important;
  background-color: #17a2b8 !important;
  border-color: #17a2b8 !important;
}
.styleImg {
  overflow: hidden;
  height: 8rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.styleForm {
  border-radius: 10px !important;
  padding: 1px 10px !important;
}
.styleButton {
  border-radius: 10px !important;
  padding: 12px 12px 12px 12px !important;
}
.colorbutton {
  background-color: #17a2b8 !important;
  outline: none;
  border: #17a2b8 !important;
}
.stylebox {
  padding: 20px !important;
  background-color: #ff9966;
  color: white !important;
}

.borderTop {
  border-radius: 10px 10px 0 0;
  color: white;
}
.borderStyle {
  border: 1px #dedede solid;
  border-radius: 0 0 10px 10px;
}
.fontsize2rem {
  font-size: 2rem !important;
}
.paddingStyle {
  padding: 10px 0px 8px 10px !important;
}

@media screen and (max-width: 1000px) {
  .styleImg {
    height: 150px;
  }
  .stylebox {
    overflow: scroll;
    overflow-x: hidden;
    padding: 0px !important;
    background-color: #ff9966;
    color: white !important;
  }
  .fontSize10px {
    font-size: 10px !important;
  }
  .fontsize17px {
    font-size: 17px !important;
  }

  .font16 {
    font-size: 16px !important;
  }
  .font7 {
    font-size: 7.5px !important;
  }
}
</style>
