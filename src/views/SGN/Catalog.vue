<template>
  <div>
    <!-- <Header ref="header" @remove="removeItems" /> -->
    <ListProduct @onAdded="changeKeranjang" />
  </div>
</template>
<script>
import ListProduct from "@/components/SIGNATURE/ListProduct.vue";
// import Header from "@/components/SIGNATURE/Header.vue";
export default {
  components: {
    ListProduct
  },
  data() {
    return {
      keranjangUser: [],
      pointUser: 10
    };
  },
  methods: {
    changeKeranjang(data) {
      this.$refs.header.keranjangUser = data;
    },
    // removeItems(data) {
    //   this.$refs.header.keranjangUser = data;
    // }
    removeItems(xx) {
      let collections = JSON.parse(localStorage.getItem("keranjangUser"));
      let collection = collections.map(collection => collection.id);
      let index = collection.findIndex(id => id == xx);
      this.keranjangUser.splice(index, 1);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
      this.$emit("remove", this.keranjangUser);
      console.log(index);
    }
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
<style scoped>
</style>