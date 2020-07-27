<template>
  <div>
    <ul class="list-unstyled mx-2">
      <router-link
        :to="{ path: '/mvg/detailtransaksi' }"
        style="color: #FFF;"
        class="m-auto font18"
      >
        <li class="media listShadow list-group-item-action">
          <div class="media-body px-3 my-2">
            <div class="d-flex justify-content-between">
              <h5 class="text-dark text-left">TRX-001</h5>
              <h5 class="text-dark text-left">100 Qty</h5>
            </div>
            <p class="my-auto text-dark text-left"></p>
            <div class="d-flex justify-content-between my-auto">
              <p class="text-dark m-0 font14">Update 29 June 2020 3:05</p>
              <p class="text-dark m-0 font14">Lihat Detail</p>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.listShadow {
  -webkit-box-shadow: 2px 2px 8px -5px #898989;
  box-shadow: 0px 2px 8px -5px #898989;
  border-radius: 5px;
}
@media screen and (max-width: 1000px) {
  .font14 {
    font-size: 14px;
  }
}
</style>