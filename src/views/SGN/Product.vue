<template>
  <div>
    <Header />
    <h5 class="mt-5 mb-4 text-dark text-left">Masukkan Nomor telepon anda dibawah ini</h5>
    <div class="row mt-3">
      <div class="col-4">
        <img :src="product.galleries[0].photo" class="w-100" alt />
      </div>
      <div class="col-8">
        <h3 class="text-left text-dark">{{product.name}}</h3>
        <h5 class="text-dark text-left">{{product.price}}</h5>
        <!-- <p
          class="mt-1 mb-1 text-dark text-left"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>-->
        <div class="d-flex mb-0 mt-4">
          <input type="text" class="text-left col-2 mr-2 p-1" />
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/SIGNATURE/Header.vue";
export default {
  props: ["id"],
  components: {
    Header
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  }
};
</script>
<style>
</style>