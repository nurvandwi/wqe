<template>
  <div>
    <boxtitle firstTitle="TRX-001" class="mb-2" />
    <RincianTransaksi />
  </div>
</template>

<script>
import boxtitle from "@/components/MVG/BoxTitle.vue";
import RincianTransaksi from "@/components/MVG/RincianTransaksi.vue";
export default {
  components: {
    boxtitle,
    RincianTransaksi
  }
};
</script>

<style>
</style>