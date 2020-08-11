<template>
  <div class="containers">
    <div class="mt-1" style="width: 25rem;">
      <div class="cardShadow">
        <h3
          class="text-center text-light p-3 font15"
          style="background-color: #653366; "
        >PRODUK PROMOSI DISKON</h3>
        <img
          v-bind:src="claimDetails.img"
          alt="mini"
          class="card-h100 w-100"
          style="min-height:100%"
        />
        <h4 class="text-black pt-2 font15 font-weight-bold mb-1">Jumlah Paket Terjual</h4>

        <div class="d-inline-flex mt-1 mb-1 p-0 d-flex flex-column">
          <div class="input-group justify-content-center">
            <input
              :placeholder="[[claimDetails.saldo]]"
              v-model.number="jumlah"
              min="1"
              type="number"
              v-bind:class="[
                'form-control',
                { red: jumlah > claimDetails.saldo || jumlah <1 }
              ]"
              style="border-top-left-radius: 10px;  
                     border-bottom-left-radius: 11px; height: 38px; max-width:100px;
                     font-size : 13 px"
            />

            <div class="input-group-append">
              <span
                class="input-group-text"
                style="background-color: #653366; color:#facd50;border-top-right-radius: 10px;  border-bottom-right-radius: 10px;"
              >X {{ claimDetails.claim_basic }} / Paket</span>
            </div>
          </div>
          <p
            class="text-left mt-2 mb-0"
            style="color:#BABABA "
          >* Minimum Quantity yang bisa di klaim 1 paket</p>
          <p
            class="text-left mt-0 mb-0"
            style="color:#BABABA "
          >* Maksimum paket yang bisa diklaim sesuai angka diatas .</p>
        </div>
      </div>

      <!--card-->
      <div class="card-body p-0">
        <div
          class="d-flex col-md-12 col-12 my-3 px-5"
          style=" border-style: solid;border-width: thin;  border-color: #BABABA; border-radius:10px"
        >
          <h3
            class="card-title font-weight-bold mr-1 py-0 my-2 font14"
            style="color: #653366!important; font-size: 16px; "
          >Total Klaim = Rp.</h3>

          <h3
            class="card-title font-weight-bold mr-1 py-0 my-2 font14"
            style="color: #653366!important; font-size: 16px; "
            ref="total"
          >{{ (jumlah * claimDetails.claim_basic) | currency }}</h3>

          <!-- <h3
            class="card-title font-weight-bold text-dark text-left my-0 font15"
            ref="total"
          >{{jumlah * claimDetails.claim_basic|currency}}</h3>-->
        </div>
        <div class="d-flex justify-content-between mt-3">
          <div class="col-md-6 col-6 pr-2 pl-0">
            <button
              @click="resetClaim"
              style="border-radius: 10px !important;border-color: #BABABA"
              type="button"
              class="btn col-md-12 col-12"
            >
              <h5 class="my-0 font14 text-dark">Batal</h5>
            </button>
          </div>
          <div class="col-md-6 col-6 pr-0 pl-2">
            <button
              v-on:click="claimTransactions"
              type="button"
              class="btn col-md-12 col-12 colorMondelez text-white"
              style="border-radius: 10px !important;"
              :disabled="jumlah > claimDetails.saldo || jumlah < 1"
            >
              <h5 class="my-0 font14">Claim</h5>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-3 mb-0 py-2 catatan px-2 py-0">
        <h3 class="text-dark text-left font13" style="color: #653366!important">
          <b>Catatan :</b>
        </h3>
        <p class="text-dark text-left mb-0" style="color: #653366!important">
          Perhitungan Klaim diatas hanya estimasi. Nilai klaim sebenarnya akan
          dihitung pada akhir bulan.
        </p>
      </div>
      <div class="mt-3 mb-1 py-2 catatan px-2">
        <h3 class="text-dark text-left font13" style="color: #653366!important">
          <b>Tabel Konversi Oreo Lup :</b>
        </h3>
        <p class="text-dark text-left mb-0" style="color: #653366!important">
          1 Paket = 4 Polybag
          <br />1 case/kardus = 3 Paket
          <br />1 case/kardus = 12 polybag
        </p>
        <p
          class="text-dark text-left mb-0"
          style="color: #653366!important"
        >Promo Diskon Pelanggan : Rp. 2.000 per Paket</p>
      </div>

      <div class="mt-3 mb-5 py-2 catatan px-2">
        <h3 class="text-dark text-left font13" style="color: #653366!important">
          <b>Tabel Konversi Oreo Soft Cake :</b>
        </h3>
        <p class="text-dark text-left mb-0" style="color: #653366!important">
          1 Paket = 4 InnerBox
          <br />1 case/kardus = 3 Paket
          <br />1 case/kardus = 12 InnerBox
        </p>
        <p
          class="text-dark text-left mb-0"
          style="color: #653366!important"
        >Promo Diskon Pelanggan : Rp. 2.000 per Paket</p>
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
    //  resetClaim: function() {
    //   let claimDetails = this.claimDetails.saldo;
    //   this.jumlah = claimDetails;
    // },
    resetClaim: function() {
      this.jumlah = [];
    },
    claimTransactions: function() {
      let totalClaim = {
        quantity: this.jumlah,
        outlet_id: this.$route.params.outlet_id,
        kode_produk: this.$route.params.kode_produk
      };
      axios
        .post(
          `https://www.inosis.co.id/demo_promosi_api/api.php/insert-transaksi`,
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
.catatan {
  border-style: solid;
  border-width: thin;
  border-color: #bababa;
  border-radius: 10px;
}
svg {
  height: 60px;
  overflow: hidden;
  vertical-align: middle;
}
.red {
  border-color: red;
}
.btn1 {
  -webkit-box-shadow: 2px 2px 8px -5px #653366;
  box-shadow: 0px 2px 8px -5px #653366;
}
.cardShadow {
  border: 1px solid #dedede;
  -webkit-box-shadow: 6px 6px 15px -12px #bababa !important;
  box-shadow: 6px 6px 15px -12px #bababa !important;
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
    position: relative !important;
    margin-bottom: 2rem !important;
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
