<template>
  <div>
    <Header ref="header" @remove="removeItems" />
    <ListProduct @onAdded="changeKeranjang" />
  </div>
</template>
<script>
import ListProduct from "@/components/MRC/ListProduct.vue";
import Header from "@/components/MRC/Header.vue";
export default {
  components: {
    ListProduct,
    Header
  },
  methods: {
    changeKeranjang(data) {
      this.$refs.header.keranjangUser = data;
    },
    removeItems(data) {
      this.$refs.header.keranjangUser = data;
    }
  }
};
</script>
<style scoped>
</style>