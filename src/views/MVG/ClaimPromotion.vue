<template>
  <div class="containers">
    <div class="card" style="width: 25rem;">
      <div class="content">
        <h3
          class="text-center text-light p-3"
          style="background-color: #653366; font-size: 22px;"
        >Masukan jumlah barang yang akan di Claim</h3>
        <img src="https://i.imgur.com/YEE46H0.jpg" alt="mini" class="card-img-top" />
        <h4
          class="text-black mt-0 font-weight-bold"
          style="border-bottom:1px solid #dedede; "
        >Oreo Soft Cake</h4>
        <div class="d-inline-flex mt-1 mb-1 p-2">
          <input
            placeholder="Quantity"
            class="text-center mr-2 rounded-pill"
            style="height: 35px; border: 1px solid;"
            type="number"
          />
          <button
            type="button"
            style="height: 36px; background-color: #653366;"
            class="btn btn1 text-light"
          >
            Insentif
            <span class="badge badge-warning font-weight-bold font-weight-lighter">4%</span>
          </button>
        </div>
      </div>

      <!--card-->
      <div class="card-body mt-4">
        <h3
          id="total"
          class="card-title font-weight-bold"
          style="color: #653366!important; font-size: 20px; "
        >Total Klaim</h3>
        <h4 class="card-text text-dark font-weight-bolder" style="font-size: 2rem">Rp. 350.000</h4>
        <div class="btn-group-vertical p-0">
          <router-link :to="{ path: '/mvg/transaksi' }" style="color: #FFF;" class="m-auto font18">
            <button
              id="claim"
              type="submit"
              class="btn btn-lg text-light col-md-12 btn-primary font-button"
            >Klaim</button>
          </router-link>

          <a href="#" id="cancel" class="btn btn-secondary text-light mt-2">Batal</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.btn1 {
  -webkit-box-shadow: 2px 2px 8px -5px #653366;
  box-shadow: 0px 2px 8px -5px #653366;
}
.content {
  border: 1px solid #dedede;
  -webkit-box-shadow: 2px 2px 8px -5px #898989;
  box-shadow: -4px 18px 24px -16px #898989;
}
.card {
  overflow: auto;
  border-radius: 20px !important;
  border: 0px solid #dedede !important;
}
.rounded-pill {
  width: 12vw;
}

.containers {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}
.btn-group-vertical {
  display: flex;
  padding: 20px;
}
.card-img-top {
  width: auto;
  height: 35vh;
}

#claim {
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  background-color: #653366;
  width: 17vw;
  border: none;
}

#cancel {
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border: none;
}

#claim,
#cancel {
  border-radius: 20px;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .text-light,
  h3 {
    font-size: 20px;
  }
  .rounded-pill {
    width: 40vw;
  }
  .containers {
    width: 100vw;
    position: fixed;
    padding: 18px;
    height: auto;
  }
  #claim,
  #cancel {
    border-radius: 20px;
    width: 75vw;
    -webkit-box-shadow: 2px 5px 8px -5px #898989;
    box-shadow: 0px 10px 12px -5px #898989;
  }

  .card-title,
  h3 {
    font-size: 20px;
  }

  .card-img-top {
    height: 38vh;
    width: 74vw !important;
  }

  #total {
    position: absolute;
    margin-left: 31%;
    margin-top: -25px;
  }
}
</style>
