<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <img class="imgLogo mb-5" src="../../assets/LogoMondelez.png" alt />
      </div>
      <div class="mt-5 mb-2 px-5 col-10">
        <h2 class="font25" style=" font-family:Layar Bahtera light">Masuk kedalam account anda</h2>
      </div>
      <div class="col-md-10 p-0">
        <div class="col-md-12">
          <div class="row p-0 mx-0 mt-4" style="border: none">
            <div class="col-md-12 col-12">
              <div class="form-group text-left">
                <label for="inputAddress">Username</label>
                <input
                  type="text"
                  class="form-control text-left py-4"
                  style="border-radius: 10px !important;"
                  id="id"
                  v-model="username"
                  placeholder="Masukan User Id anda"
                />
              </div>
            </div>
            <div class="col-md-12 col-12 mt-2">
              <div class="form-group text-left">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  style="border-radius: 10px !important;"
                  class="form-control text-left py-4"
                  v-model="password"
                  id="exampleInputPassword1"
                  placeholder="Masukan Password anda"
                />
              </div>
            </div>
            <div class="col-md-12 mt-4 mb-4">
              <div class="form-group">
                <a @click="getLogin" style="color:white !important" href="#">
                  <button
                    style="border-radius: 10px !important;"
                    type="button"
                    class="text-white btn btn-mondelez col-md-12 col-12 styleButton p-3 colorMondelez"
                  >Lanjut</button>
                </a>
              </div>
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
.btn-mondelez:focus,
.btn-mondelez.focus {
  color: #fff;
  background-color: #000000;
  border-color: #000000;
  box-shadow: 0 0 0 0.2rem #e19e29 !important;
}

.styleImg {
  overflow: hidden;
  height: 8rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.colorMondelez {
  background-color: #e19e29 !important;
  outline: none;
  border: #e19e29 !important;
}
.stylebox {
  padding: 20px !important;
  background-color: #064495;
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
.imgLogo {
  height: 90px;
}
@media screen and (max-width: 1000px) {
  .styleImg {
    height: 150px;
  }
  .stylebox {
    overflow: scroll;
    overflow-x: hidden;
    padding: 0px !important;
    background-color: #064495;
    color: white !important;
  }
  .font10 {
    font-size: 10px !important;
  }
  .font17 {
    font-size: 17px !important;
  }

  .font16 {
    font-size: 16px !important;
  }
  .font25 {
    font-size: 25px !important;
  }
  .font7 {
    font-size: 7.5px !important;
  }
  .imgLogo {
    background-size: cover;
    height: 40px;
  }
}
</style>
