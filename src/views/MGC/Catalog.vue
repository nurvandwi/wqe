<template>
  <div>
    <Header ref="header" @remove="removeItems" />
    <ListProduct @onAdded="changeKeranjang" />
  </div>
</template>
<script>
import ListProduct from "@/components/MGC/ListProduct.vue";
import Header from "@/components/MGC/Header.vue";
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