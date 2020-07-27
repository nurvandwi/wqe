<template>
  <div class="container1">
    <div class="container">
      <div class="row justify-content-center">
        <boxtitle firstTitle="Point Statement" />
        <ButtonPromosi />
        <ButtonCatalog />
        <BtnCustomerPromo />
        <boxtitle :firstTitle="points.outlet_id" :secondTitle="points.outlet_name" />

        <boxachievement
          :archievement="points.total_achv"
          :saldo_sisa="points.sisa_point"
          :pointTargetPenjualan="points.total_target"
          :pointAktualPenjualan="points.total_sales"
          :selisihPenjualan="points.selisih_sales"
          :contentFor="'archievement'"
        />
        <boxdetailpoint
          :totalPoint="points.total_point"
          :carryOver="points.poin_carry_over"
          :redeemtion="points.total_redeem"
          :sisaPoint="points.sisa_point"
          :points="points"
          :contentFor="'A'"
        />
        <div v-for="point in points.data" :key="point.id">
          <boxachievement
            :month="point.bulan"
            :archievement="point.archievement"
            :pointTargetPenjualan="point.target_monthly"
            :pointAktualPenjualan="point.total_sales"
            :selisihPenjualan="point.selisih_monthly"
            :contentFor="'archievementMonth'"
          />
        </div>
      </div>
    </div>
    <button
      v-on:click="logout()"
      class="btn btn-lg col-md-12 btn-theme font-button mt-3 mb-3"
    >Keluar</button>
  </div>
</template>
<script>
import axios from "axios";
import boxtitle from "@/components/MGC/BoxTitle.vue";
import boxachievement from "@/components/MGC/BoxAchievement.vue";
import boxdetailpoint from "@/components/MGC/BoxDetailPoint.vue";
import ButtonPromosi from "@/components/MGC/ButtonPromosi.vue";
import ButtonCatalog from "@/components/MGC/ButtonCatalog.vue";
import BtnCustomerPromo from "@/components/MGC/BtnCustomerPromo.vue";
export default {
  components: {
    boxtitle,
    boxdetailpoint,
    boxachievement,
    ButtonPromosi,
    ButtonCatalog,
    BtnCustomerPromo
  },
  data() {
    return {
      points: {
        data: [],
        data_rebate: []
      }
    };
  },
  methods: {
    logout: function() {
      localStorage.removeItem("token");
      this.$router.replace("/MGC");
    },
    normalize(badNumeric) {
      return Number(badNumeric.split(",").join(""));
    }
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.name == "/MGC/Login") {
  //     next();
  //   }
  //   const answer = window.confirm("Do you really want to leave? ");
  //   if (answer) {
  //     localStorage.removeItem("token");

  //     next("/MGC/login");
  //   } else {
  //     next(false);
  //   }
  // },
  mounted() {
    axios
      .get("http://www.inosis.co.id/mgc2020_api/api.php/dashboard-outlet", {
        headers: { version: this.$route.params.version },
        params: {
          txtKodeOutlet: this.$route.params.outlet_id,
          token: localStorage.token
        }
      })
      .then(res => (this.points = res.data))
      .catch(err => console.log(err));
  },
  computed: {
    selisihPenjualan() {
      return this.points.target_actual - this.points.target_plan;
    },
    totalPoint() {
      return this.points.data.reduce(function(items, data) {
        return items + Number(data.point_satuan);
      }, 0);
    },
    totalRebate() {
      return this.points.data_rebate.reduce(function(items, data_rebate) {
        return items + Number(data_rebate.rebate_value);
      }, 0);
    },
    sisaPoint() {
      return (
        this.totalPoint +
        Number(this.points.carry_over) +
        Number(this.points.redeemtion)
      );
    },
    selisihPenjualanMonth() {
      return (
        Number(this.points.total_sales.split(",").join("")) -
        Number(this.points.target_monthly.split(",").join(""))
      );
    },
    warna() {
      return parseInt(this.points.selisihPenjualan) < 0 ? "black" : "red";
    }
  },
  watch: {
    points: {
      handler(value) {
        console.log(value);
      },
      deep: true
    }
  }
};
</script>
<style >
.btn-theme {
  background-color: #000099 !important;
  color: white !important;
}
</style>