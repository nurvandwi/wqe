<template>
  <div class="shopping px-2">
    <HeaderShayna />

    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container px-0">
        <div class="breadcrumb-text product-more text-left mx-0">
          <router-link to="/SGN/CATALOG">
            <i class="fa fa-home"></i> Catalog
          </router-link>
          <span>Shopping Cart</span>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad px-0">
      <div class="container d-flex align-items-center justify-content-center px-0">
        <div class="row m-auto p-auto justify-space-between" style="width:100vw;">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 p-0">
                <div class="mb-3" style="width:12em;background-color:black;padding:0.5em; ">
                  <h5 class="text-left">Voucher & E-Wallet</h5>
                </div>
                <div class="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th class="p-name text-center">Product</th>
                        <th>Point</th>
                        <th>No HP</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="keranjang in keranjangUser" :key="keranjang.id">
                        <td class="cart-pic first-row">
                          <img class="img-cart" :src="keranjang.photo" />
                        </td>
                        <td class="cart-title first-row text-center">
                          <h5 class="font14 text-dark">{{keranjang.name}}</h5>
                        </td>
                        <td class="p-price first-row text-dark">
                          <h5 class="font14 text-dark">{{keranjang.price}}</h5>
                        </td>
                        <td class="p-price first-row text-dark">
                          <h5 class="font14 text-dark">081343897654</h5>
                        </td>
                        <td @click="removeItems(keranjang.id)" class="delete-item">
                          <a href="#">
                            <i class="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 p-0 mt-3">
                <div class="mb-3" style="width:12em;background-color:black;padding:0.5em; ">
                  <h5 class="text-left">Product</h5>
                </div>
                <div class="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th class="p-name text-center">Product</th>
                        <th>Point</th>
                        <th>QTY</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="cart-pic first-row">
                          <img class="img-cart" />
                        </td>
                        <td class="cart-title first-row text-center">
                          <h5 class="font14 text-dark">Laptop Asus</h5>
                        </td>
                        <td class="p-price first-row text-dark">
                          <h5 class="font14 text-dark">232</h5>
                        </td>
                        <td class="p-price first-row text-dark">
                          <h5 class="font14 text-dark">1</h5>
                        </td>
                        <td class="delete-item">
                          <a href="#">
                            <i class="material-icons">close</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-12 p-0">
                    <div class="proceed-checkout text-left w-100">
                      <ul class="px-3 pt-3">
                        <li class="subtotal">
                          ID
                          <span style="color:black !important">#MGC12000</span>
                        </li>
                        <li class="subtotal mt-3">
                          Total Point
                          <span style="color:black !important">575</span>
                        </li>
                        <li class="subtotal mt-3">
                          Sisa Point
                          <span style="color:black !important">10</span>
                        </li>
                      </ul>
                      <!-- <router-link to="/success"> -->
                      <Checkout />
                      <!-- </router-link> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section End -->
  </div>
</template>

<script>
import Checkout from "@/components/SIGNATURE/Checkout.vue";
export default {
  components: {
    Checkout
  },
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
  .font14 {
    font-size: 18px !important;
  }
}
</style>
