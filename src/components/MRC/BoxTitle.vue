<template>
  <div class="boxstyle col-md-12 mt-2 mb-0 py-2" style="  background-color:#F47536;">
    <h2 class="text-center mt-0 mb-0">{{ firstTitle }}</h2>
    <h3 class="font14 mt-0 mb-0" style="color:white !important">{{ secondTitle }}</h3>
  </div>
</template>
<script>
export default {
  name: "BoxTitle",
  props: ["firstTitle", "secondTitle"]
};
</script>
<style scoped>
.customfont15 h2 {
  font-size: 15pt;
  font-weight: bolder;
}
.boxstyle {
  padding: 20px;
  border-radius: 10px;
}
.boxstyle h2,
h3,
h5 {
  color: white;
}
@media screen and (max-width: 1000px) {
  .boxstyle h2 {
    font-size: 15pt;
    margin-bottom: 0px;
  }
  .font14 {
    font-size: 14pt !important;
  }
}
</style>
