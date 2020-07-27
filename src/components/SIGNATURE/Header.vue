<template>
  <!-- Header Section Begin -->
  <header class="header-section">
    <div class="container">
      <div class="inner-header py-0 mb-5">
        <div class="row header-top my-4">
          <div class="col-lg-2 col-md-2 mb-2">
            <div>
              <a href="./index.html">
                <router-link to="/Sgn/catalog" class="active">
                  <img src="../../assets/unnamed.png" class="mx-auto" style="max-width: 5rem;" />
                </router-link>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mb-2"></div>
          <div class="col-lg-6 text-right col-md-6 mb-2 mx-auto align-self-center">
            <ul class="nav-right">
              <li class="cart-icon">
                Shopping Cart &nbsp;
                <a href="#">
                  <i class="icon_bag_alt"></i>
                  <span>{{keranjangUser.length}}</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table style="border:0px solid">
                      <tbody v-if="keranjangUser.length >0 ">
                        <tr v-for="keranjang in keranjangUser" :key="keranjang.id">
                          <td class="si-pic">
                            <img class="photo-item" :src="keranjang.photo" alt />
                          </td>
                          <td class="si-text">
                            <div class="product-selected text-left">
                              <p>{{keranjang.price}} x 1</p>
                              <h6>{{keranjang.name}}</h6>
                            </div>
                          </td>
                          <td @click="removeItems(keranjang.id)" class="si-close">
                            <i class="ti-close"></i>
                          </td>
                        </tr>
                      </tbody>

                      <tbody v-else>
                        <tr>
                          <td>Keranjang Kosong</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="select-total">
                    <span>total:</span>
                    <h5 style="color:black !important">{{totalPoint}} Point</h5>
                  </div>
                  <div class="select-button">
                    <a href="#" class="primary-btn view-card">VIEW CART</a>
                    <a href="#" class="primary-btn checkout-btn">
                      <router-link :to="{ path: '/sgn/cart' }" style="color: #FFF;">Check Out</router-link>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex my-3 align-self-center">
          <img src="../../assets/icon/ic_point.png" style="height:2rem" />
          <h4 class="font18 align-self-center ml-3">{{pointUser-totalPoint}}</h4>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      keranjangUser: [],
      pointUser: 10
    };
  },
  methods: {
    removeItems(xx) {
      // this.keranjangUser.splice(index, 1);
      // const parsed = JSON.stringify(this.keranjangUser);
      // localStorage.setItem("keranjangUser", parsed);
      // console.log(index);
      let collections = JSON.parse(localStorage.getItem("keranjangUser"));
      let collection = collections.map(collection => collection.id);
      let index = collection.findIndex(id => id == xx);
      this.keranjangUser.splice(index, 1);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
      this.$emit("remove", this.keranjangUser);
      // window.location.reload();
      console.log(index);
    }
    // removeItem(id) {
    //   this.keranjangUser = this.keranjangUser.filter(x => x.id !== id);
    //   const parsed = JSON.stringify(this.keranjangUser);
    //   localStorage.setItem("keranjangUser", parsed);
    //   window.location.reload();
    //   console.log(id, this.keranjangUser);
    // }
  },
  mounted() {
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }
  },
  computed: {
    totalPoint() {
      return this.keranjangUser.reduce(function(items, data) {
        return items + data.price;
      }, 0);
    }
  }
};
</script>

<style scoped src="../../../public/css/style-header.css">
@media screen and (max-width: 1000px) {
}
</style>