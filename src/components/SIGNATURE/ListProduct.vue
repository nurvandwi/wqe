<template>
  <div class="container">
    <Header />
    <div class="row" v-if="products.length>0">
      <div
        class="col-6 col-md-4 col-sm-3 mb-3 d-flex justify-content-around"
        v-for="(itemProduct,index) in products"
        v-bind:key="index"
      >
        <div class="card m-auto">
          <img
            v-bind:src="itemProduct.galleries[0].photo"
            class="card-img-top img-responsive m-auto"
            alt="..."
          />
          <div class="card-body">
            <router-link :to="{name:'product',params:{id:itemProduct.id}}" push>
              <p class="caption card-text font10 text-left">{{itemProduct.name}}</p>
            </router-link>
            <div class="point-info d-flex align-self-center">
              <img src="../../assets/icon/ic_point.png" style="height:1rem" />
              <p class="caption my-auto ml-2">{{itemProduct.price}}</p>
            </div>
            <a
              @click="addNewItem()"
              href="#"
              class="btn btn-primary mt-3 mb-2 col-md-12 col-12 p-1"
            >Add to cart</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <p>Saat ini produk belum tersedia</p>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "ListProduct",
  components: {
    Header
  },
  data() {
    return {
      keranjangUser: []
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addNewItem() {
      this.$store.dispatch("addNewProduct", this.newProductItem);
    },
    saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
      var productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct
      };

      this.keranjangUser.push(productStored);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
      this.$emit("onAdded", this.keranjangUser);
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>


<style>
img {
  min-height: 1.3rem !important;
}
.caption {
  color: black;
}
.card-body {
  padding: 0 1.5rem 0 1.5rem !important;
}
.card {
  width: 15rem;
}

@media screen and (max-width: 1000px) {
  .card {
    width: 11rem;
  }
  .card-body {
    padding: 0.75rem !important;
  }
  .fontSize10px {
    font-size: 10px !important;
  }
}
</style>