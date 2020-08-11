<template>
  <div
    class="py-2 my-1 col-md-12"
    style="background-color:#653366 !important;  border-radius: 7px;"
  >
    <h5 class="text-center text-light m-0 font14">{{ outlet_id }}</h5>
    <h2 class="m-0 text-light">{{ outlet_name }}</h2>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["outlet_id", "outlet_name"]
};
</script>
<style>
@media screen and (max-width: 1000px) {
  .font14 {
    font-size: 14px;
  }
}
</style>
