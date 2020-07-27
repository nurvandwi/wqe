<template>
  <div class="containers">
    <div class="card mt-1" style="width: 25rem;">
      <div class="content">
        <h3
          class="text-center text-light p-3"
          style="background-color: #653366; font-size: 22px;"
        >Masukan Jumlah Barang Yang akan di Claim</h3>
        <img v-bind:src="claimDetails.img" alt="mini" class="card-img-top" />
        <h4
          class="text-black mt-0 font-weight-bold mb-1"
          style="border-bottom:1px solid #dedede; "
        >{{claimDetails.nama_produk}}</h4>

        <div class="d-inline-flex mt-1 mb-1 p-2">
          <div class="input-group mb-3">
            <input
              placeholder="Quantity"
              v-model.number="jumlah"
              type="number"
              class="form-control"
              style="border-top-left-radius: 10px;  border-bottom-left-radius: 10px;"
            />
            <div class="input-group-append">
              <span
                class="input-group-text"
                style="background-color: #653366; color:#facd50;border-top-right-radius: 10px;  border-bottom-right-radius: 10px;"
              >X {{claimDetails.claim_basic}}</span>
            </div>
          </div>
        </div>
      </div>

      <!--card-->
      <div class="card-body mt-4">
        <h3
          id="total"
          class="card-title font-weight-bold"
          style="color: #653366!important; font-size: 20px; "
        >Total Klaim</h3>
        <h4
          class="card-text text-dark font-weight-bolder"
          style="font-size: 2rem"
          ref="total"
        >{{jumlah * claimDetails.claim_basic}}</h4>
        <div>
          <button
            v-on:click="claimTransactions"
            type="button"
            class="btn col-md-12 col-12 py-2 colorMondelez text-white"
            style="border-radius: 10px !important;"
          >
            <h3 class="my-0 font15">Claim</h3>
          </button>

          <button
            style="border-radius: 10px !important;"
            type="button"
            class="btn btn-outline-dark col-md-12 col-12 py-1 mt-3"
          >Batal</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      claimDetails: [],
      jumlah: ""
    };
  },
  methods: {
    claimTransactions: function() {
      let totalClaim = {
        quantity: this.jumlah,
        outlet_id: this.$route.params.outlet_id,
        kode_produk: this.$route.params.kode_produk
      };
      axios
        .post(
          `https://www.inosis.co.id/mv_promosi_api/api.php/insert-transaksi`,
          totalClaim,
          {
            params: {
              token: localStorage.token
            }
          }
        )
        .then(() =>
          this.$router.replace(`/mgc/transaksi/${this.$route.params.outlet_id}`)
        )
        .catch(err => console.log(err));
    }
  },
  mounted() {
    axios
      .get("https://www.inosis.co.id/mv_promosi_api/api.php/detail-product", {
        params: {
          kode_produk: this.$route.params.kode_produk,
          outlet_id: this.$route.params.outlet_id,
          token: localStorage.token
        }
      })
      .then(res => (this.claimDetails = res.data))
      .catch(err => console.log(err));
  }
};
</script>
<style>
svg {
  height: 60px;
  overflow: hidden;
  vertical-align: middle;
}

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
    position: relative !important;
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
  .font15 {
    font-size: 18px !important;
  }
}
</style>