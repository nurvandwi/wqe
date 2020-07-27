<template>
  <div>
    <boxtitle firstTitle="Transaksi" class="mb-2" />
    <ListTransaksi />
    <ListTransaksi />
    <ListTransaksi />
  </div>
</template>

<script>
import boxtitle from "@/components/MVG/BoxTitle.vue";
import ListTransaksi from "@/components/MVG/ListTransaksi.vue";
export default {
  components: {
    boxtitle,
    ListTransaksi
  }
};
</script>

<style>
</style>