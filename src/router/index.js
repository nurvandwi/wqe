import Vue from "vue";
import VueRouter from "vue-router";

import BannerPromoMgc from "../views/MGC/BannerPromo.vue";
import LoginMondelez from "../views/MGC/LoginMondelez.vue";
import Login from "../views/MGC/Login.vue";
import TransaksiMgc from "../views/MGC/Transaksi.vue";
import DetailTransaksiMgc from "../views/MGC/DetailTransaksi.vue";
import MgcRegistrasi from "../views/MGC/Registrasi.vue";
import ClaimPromotionMgc from "../views/MGC/ClaimPromotion.vue";
import DashboardInsentifMgc from "../views/MGC/DashboardInsentif.vue";
import PromosiMgc from "../views/MGC/Promosi.vue"
import BannerPromoMvg from "../views/MVG/BannerPromo.vue";
import LoginMvg from "../views/MVG/LoginMvg.vue";
import MvgRegistrasi from "../views/MVG/Registrasi.vue";
import PromosiMvg from "../views/MVG/Promosi.vue"
import ClaimPromotionMvg from "../views/MVG/ClaimPromotion.vue";
import TransaksiMvg from "../views/MVG/Transaksi.vue";
import DetailTransaksiMvg from "../views/MVG/DetailTransaksi.vue";
import DashboardInsentifMvg from "../views/MVG/DashboardInsentif.vue";
Vue.use(VueRouter);

const routes = [


  {
    path: "/Mgc/Promosi/:outlet_id",
    props: true,
    name: "PromosiMgc",
    component: PromosiMgc,
  },
  {
    path: "/Mvg/Promosi",
    props: true,
    name: "PromosiMvg",
    component: PromosiMvg,
  },
  {
    path: "/MGC",
    props: true,
    name: "BannerPromoMgc",
    component: BannerPromoMgc,
  },
  {
    path: "/Mvg/BannerPromo",
    props: true,
    name: "BannerPromoMvg",
    component: BannerPromoMvg,
  },
  {
    path: "/Mgc/LoginMondelez",
    props: true,
    name: "LoginMondelez",
    component: LoginMondelez,
  },
  {
    path: "/Mgc/Login",
    props: true,
    name: "Login",
    component: Login,
  },
  {
    path: "/Mvg/LoginMvg",
    props: true,
    name: "LoginMvg",
    component: LoginMvg,
  },
  {
    path: "/Mgc/Transaksi/:outlet_id",
    props: true,
    name: "TransaksiMgc",
    component: TransaksiMgc,
  },
  {
    path: "/Mvg/Transaksi",
    props: true,
    name: "TransaksiMvg",
    component: TransaksiMvg,
  },
  {
    path: "/Mgc/DetailTransaksi/:outlet_id/:kode_transaksi",
    props: true,
    name: "DetailTransaksiMgc",
    component: DetailTransaksiMgc,
  },
  {
    path: "/Mvg/DetailTransaksi",
    props: true,
    name: "DetailTransaksiMvg",
    component: DetailTransaksiMvg,
  },
  {
    path: "/Mgc/Registrasi/:outlet_id",
    props: true,
    name: "MgcRegistrasi",
    component: MgcRegistrasi,
  },
  {
    path: "/Mvg/Registrasi",
    props: true,
    name: "MvgRegistrasi",
    component: MvgRegistrasi,
  },
  {
    path: "/Mgc/ClaimPromotion/:outlet_id/:kode_produk",
    props: true,
    name: "ClaimPromotionMgc",
    component: ClaimPromotionMgc,
  },
  {
    path: "/Mvg/ClaimPromotion",
    props: true,
    name: "ClaimPromotionMvg",
    component: ClaimPromotionMvg,
  },
  {
    path: "/Mgc/DashboardInsentif/:outlet_id",
    props: true,
    name: "DashboardInsentifMgc",
    component: DashboardInsentifMgc,
  },
  {
    path: "/Mvg/DashboardInsentif",
    props: true,
    name: "DashboardInsentifMvg",
    component: DashboardInsentifMvg,
  }
];

const router = new VueRouter({

  routes
});
export default router;