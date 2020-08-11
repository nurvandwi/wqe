import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import VueCurrencyFilter from "vue-currency-filter";
import VueFilterDateFormat from "@vuejs-community/vue-filter-date-format";
import VueFilterDateParse from "@vuejs-community/vue-filter-date-parse";
import VueSessionStorage from 'vue-sessionstorage'
import store from './store'
import moment from 'moment';
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
Vue.use(VueCurrencyFilter, {
  symbol: "",
  thousandsSeparator: ".",
  fractionCount: 0,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true
});
Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  dayOfWeekNamesShort: ["Su", "Mo", "Tu", "We", "Tr", "Fr", "Sa"],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
});
// setting inspect
// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     console.log('You cannot inspect Element');
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//     console.log('You cannot inspect Element');
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//     console.log('You cannot inspect Element');
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//     console.log('You cannot inspect Element');
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//     console.log('You cannot inspect Element');
//     return false;
//   }
// } // prevents right clicking
// document.addEventListener('contextmenu', e => e.preventDefault());
// End setting
Vue.use(VueFilterDateParse);
Vue.use(VueSessionStorage)
Vue.prototype.moment = moment