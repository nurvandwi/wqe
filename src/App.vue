<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <div class="container">
      <div class="row">
        <div
          class="nav-bar"
          v-if="$route.name!='MGCLogin' && $route.name !='MRCLogin'  && $route.name !='MVGLogin'  && $route.name !='SGNLogin' && $route.name !='BannerPromoMgc'&& $route.name !='Login'"
        >
          <ul class="px-0">
            <li>
              <router-link
                v-bind:to="'/mgc/promosi/'+`${$route.params.outlet_id}`"
                style="color: #FFF;"
                class="mx-auto font18"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 172 172"
                    style=" fill:#000000;"
                  >
                    <g transform>
                      <g
                        fill="none"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style="mix-blend-mode: normal"
                      >
                        <path d="M0,172v-172h172v172z" fill="#ffffff" />
                        <g fill="#000000">
                          <path
                            d="M85.87235,3.62813c-0.72195,0.0249 -1.41775,0.27642 -1.98875,0.71891l-79.12,61.7386c-1.49911,1.16886 -1.76683,3.33167 -0.59797,4.83078c1.16886,1.49911 3.33167,1.76683 4.83078,0.59797l4.76359,-3.71547v90.4411c0.00019,1.89978 1.54022,3.43981 3.44,3.44h47.58219c0.37149,0.0614 0.75054,0.0614 1.12203,0h40.15797c0.37149,0.0614 0.75054,0.0614 1.12203,0h47.61578c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-90.4411l4.7636,3.71547c0.96974,0.75623 2.26928,0.93763 3.40904,0.47586c1.13976,-0.46177 1.94657,-1.49654 2.11649,-2.71449c0.16992,-1.21795 -0.32287,-2.43403 -1.29273,-3.19012l-26.1964,-20.43844c-0.00027,-0.71566 0.00021,-1.54424 0,-2.62031c-0.00049,-2.51634 0.00021,-5.84135 0,-9.15765c-0.00043,-6.6326 0,-13.22922 0,-13.22922c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44h-13.76c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44c0,0 0.00215,3.9803 0,7.96172c-0.00019,0.34196 0.00022,0.60118 0,0.94062l-32.2836,-25.19531c-0.64007,-0.49632 -1.43474,-0.7509 -2.24406,-0.71891zM86,11.42859l35.70344,27.85594c0.96599,0.75571 2.26124,0.94002 3.39969,0.48375c0,0 2.12978,-2.74746 2.12984,-2.74797c0.00007,-0.00051 0.01741,-0.18347 0.02016,-0.22172c0.00516,-0.07657 0.00569,-0.09779 0.00672,-0.12094c0.00155,-0.04627 0.00603,-0.06912 0.00672,-0.09406c0.00083,-0.04988 -0.00051,-0.09782 0,-0.16125c0.00103,-0.12687 -0.00083,-0.30351 0,-0.52406c0.00166,-0.44111 0.00534,-1.06575 0.00672,-1.81406c0.0018,-1.49664 0.00564,-3.48383 0.00672,-5.47578c0.00122,-2.26404 -0.00023,-2.99601 0,-4.52844h6.88c0.00002,2.2095 -0.00032,4.88108 0,9.78922c0.00022,3.31645 -0.00049,6.64074 0,9.15765c0.00024,1.25846 -0.00033,2.31207 0,3.06375c0.00033,0.75168 0.00321,0.97207 0.00672,1.27656c0.01161,1.04625 0.49872,2.03036 1.3236,2.67406l15.86969,12.38265v92.3761h-41.28v-65.36h-48.16v65.36h-41.28v-92.36937zM68.8,96.32h34.4v58.48h-34.4zM92.88,120.4c-1.89986,0 -3.44,1.54014 -3.44,3.44c0,1.89986 1.54014,3.44 3.44,3.44c1.89986,0 3.44,-1.54014 3.44,-3.44c0,-1.89986 -1.54014,-3.44 -3.44,-3.44z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="menu-navigation">Home</span>
                </div>
              </router-link>
            </li>

            <li>
              <router-link
                v-bind:to="'/mgc/transaksi/'+`${$route.params.outlet_id}`"
                style="color: #FFF;"
                class="mx-auto font18"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="64"
                    height="64"
                    viewBox="0 0 172 172"
                    style=" fill:#000000;"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,172v-172h172v172z" fill="#ffffff" />
                      <g fill="#000000">
                        <path
                          d="M29.5625,17.46875c-9.675,0 -17.46875,7.79375 -17.46875,17.46875c0,9.675 7.79375,17.46875 17.46875,17.46875c9.675,0 17.46875,-7.79375 17.46875,-17.46875c0,-9.675 -7.79375,-17.46875 -17.46875,-17.46875zM29.5625,25.53125c5.24063,0 9.40625,4.16563 9.40625,9.40625c0,5.24063 -4.16562,9.40625 -9.40625,9.40625c-5.24062,0 -9.40625,-4.16562 -9.40625,-9.40625c0,-5.24062 4.16563,-9.40625 9.40625,-9.40625zM83.3125,30.90625c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h72.5625c2.28438,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74687,-4.03125 -4.03125,-4.03125zM29.5625,68.53125c-9.675,0 -17.46875,7.79375 -17.46875,17.46875c0,9.675 7.79375,17.46875 17.46875,17.46875c9.675,0 17.46875,-7.79375 17.46875,-17.46875c0,-9.675 -7.79375,-17.46875 -17.46875,-17.46875zM29.5625,76.59375c5.24063,0 9.40625,4.16563 9.40625,9.40625c0,5.24063 -4.16562,9.40625 -9.40625,9.40625c-5.24062,0 -9.40625,-4.16562 -9.40625,-9.40625c0,-5.24062 4.16563,-9.40625 9.40625,-9.40625zM83.3125,81.96875c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h72.5625c2.28438,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74687,-4.03125 -4.03125,-4.03125zM60.41888,118.23425c-1.02461,0.0168 -2.03242,0.4194 -2.77148,1.22565l-28.0849,29.15833l-14.6474,-15.72083c-1.47812,-1.6125 -4.0302,-1.74845 -5.6427,-0.27032c-1.6125,1.47812 -1.74845,4.03282 -0.27032,5.64532l17.60522,18.94635c0.80625,0.80625 1.74583,1.34375 2.9552,1.34375c1.075,0 2.14895,-0.40365 2.9552,-1.2099l30.90625,-32.38385c1.47813,-1.6125 1.47865,-4.16458 -0.13385,-5.6427c-0.80625,-0.73906 -1.84661,-1.10859 -2.87121,-1.0918zM83.3125,133.03125c-2.28437,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74688,4.03125 4.03125,4.03125h72.5625c2.28438,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span class="menu-navigation">Transaksi</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                v-bind:to="'/mgc/dashboardinsentif/'+`${$route.params.outlet_id}`"
                style="color: #FFF;"
                class="mx-auto font18"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="64"
                    height="64"
                    viewBox="0 0 172 172"
                    style=" fill:#000000;"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,172v-172h172v172z" fill="#ffffff" />
                      <g fill="#000000">
                        <path
                          d="M58.20117,10.75c-3.59033,0 -6.96021,1.39624 -9.50073,3.93677l-23.26367,23.26367c-2.54053,2.54053 -3.93677,5.9104 -3.93677,9.50073v105.73633c0,4.44067 3.62183,8.0625 8.0625,8.0625h107.5c4.44067,0 8.0625,-3.62183 8.0625,-8.0625v-134.375c0,-4.44067 -3.62183,-8.0625 -8.0625,-8.0625zM59.125,16.125h77.9375c1.48022,0 2.6875,1.20728 2.6875,2.6875v134.375c0,1.48022 -1.20728,2.6875 -2.6875,2.6875h-107.5c-1.48022,0 -2.6875,-1.20728 -2.6875,-2.6875v-104.8125h24.1875c4.44067,0 8.0625,-3.62183 8.0625,-8.0625zM53.75,17.46875v22.84375c0,1.48022 -1.20728,2.6875 -2.6875,2.6875h-22.84375c0.28345,-0.44092 0.62988,-0.86084 1.01831,-1.24927l23.26367,-23.26367c0.38843,-0.37793 0.80835,-0.71387 1.24927,-1.01831zM115.5625,67.1875c-0.68237,0 -1.37524,0.26245 -1.90015,0.78735l-38.41235,38.41235l-19.59985,-19.59985c-1.0498,-1.0498 -2.75049,-1.0498 -3.80029,0c-1.0498,1.0498 -1.0498,2.75049 0,3.80029l21.5,21.5c0.5249,0.5249 1.20728,0.78735 1.90015,0.78735c0.69287,0 1.37524,-0.26245 1.90015,-0.78735l40.3125,-40.3125c1.0498,-1.0498 1.0498,-2.75049 0,-3.80029c-0.5249,-0.5249 -1.21777,-0.78735 -1.90015,-0.78735zM34.9375,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM48.375,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM61.8125,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM75.25,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM88.6875,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM102.125,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM115.5625,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875zM129,139.75c-1.48022,0 -2.6875,1.20728 -2.6875,2.6875v5.375c0,1.48022 1.20728,2.6875 2.6875,2.6875c1.48022,0 2.6875,-1.20728 2.6875,-2.6875v-5.375c0,-1.48022 -1.20728,-2.6875 -2.6875,-2.6875z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span class="menu-navigation">Insentif</span>
                </div>
              </router-link>
            </li>
            <li>
              <button type="button" class="btn p-0" v-on:click="logout()">
                <div>
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M41.1307 84.1307C18.4528 84.1307 0 65.6779 0 43C0 20.3222 18.4528 1.86938 41.1307 1.86938C58.1471 1.86938 73.1712 12.107 79.4118 27.9541C79.9801 29.3932 79.2694 31.0199 77.8302 31.5916C76.3904 32.1531 74.7637 31.4533 74.192 30.0067C68.8037 16.3211 55.8254 7.47808 41.1307 7.47808C21.5447 7.47808 5.6087 23.4148 5.6087 43C5.6087 62.5853 21.5447 78.522 41.1307 78.522C55.8254 78.522 68.8037 69.679 74.192 55.9975C74.7602 54.5502 76.387 53.8511 77.8302 54.4119C79.2694 54.9801 79.9801 56.6103 79.4118 58.0501C73.1712 73.8931 58.1471 84.1307 41.1307 84.1307Z"
                        fill="#636363"
                      />
                      <path
                        d="M41.2 80C20.6894 80 4 63.4004 4 43C4 22.5996 20.6894 6 41.2 6C56.5903 6 70.1786 15.2095 75.8228 29.4651C76.3368 30.7597 75.694 32.223 74.3924 32.7373C73.0902 33.2423 71.6189 32.6129 71.1019 31.3115C66.2285 19.0003 54.4905 11.0454 41.2 11.0454C23.4858 11.0454 9.0727 25.3817 9.0727 43C9.0727 60.6183 23.4858 74.9546 41.2 74.9546C54.4905 74.9546 66.2285 66.9997 71.1019 54.6922C71.6158 53.3902 73.0871 52.7614 74.3924 53.2658C75.694 53.777 76.3368 55.2434 75.8228 56.5386C70.1786 70.7905 56.5903 80 41.2 80Z"
                        fill="white"
                      />
                      <path
                        d="M21.3619 39.4L64.6202 40.3587C65.8553 40.3861 66.8298 41.6644 66.7955 43.212C66.7612 44.7596 65.731 45.9934 64.4959 45.966L21.2376 45.0073C20.0025 44.9799 19.028 43.7017 19.0623 42.1541C19.0966 40.6065 20.1268 39.3726 21.3619 39.4Z"
                        fill="#636363"
                      />
                      <path
                        d="M49.4319 25.0621C50.1499 25.078 50.8613 25.3664 51.3953 25.9281L66.0165 41.2121C67.0874 42.3323 67.0481 44.1078 65.9286 45.1787L50.6446 59.8C49.5251 60.8709 47.7496 60.8315 46.678 59.7121C45.6071 58.5926 45.6464 56.817 46.7659 55.7461L60.0251 43.0619L47.3409 29.8027C46.27 28.6832 46.3093 26.9077 47.4288 25.8368C47.9905 25.3027 48.7146 25.0462 49.4319 25.0621V25.0621Z"
                        fill="#636363"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="86" height="86" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span class="menu-navigation">Logout</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let menuItems = document.querySelectorAll(".nav-bar ul li svg");

// eslint-disable-next-line no-unused-vars
const navItemClick = function(el) {
  let element = this;

  menuItems.forEach(item => {
    item.classList.remove("active");
  });

  element.classList.add("active");
};

menuItems.forEach(item => {
  item.addEventListener("click", navItemClick);
});
export default {
  props: ["mode"],
  methods: {
    logout: function() {
      localStorage.removeItem("token");
      this.$router.push("/MGC/login");
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.menu-navigation {
  color: #a59e9e;
}
.nav-bar {
  border-top: 1px solid transparent;
  background: #ffffff;
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  -webkit-box-shadow: 0px 3px 8px -3px rgba(186, 186, 186, 0.8);
  box-shadow: 0px 3px 8px -3px rgba(186, 186, 186, 0.8);
  display: block;
  /* padding: 0 34.5rem 0 34.5rem !important;*/

  min-width: 360px !important;
  max-width: 700px !important;
  margin: 0 auto !important;
  padding: auto !important;
}

.nav-bar svg {
  height: 1.2rem !important;
  position: relative;
  z-index: 10;
  transition: all 0.4s;
  display: inline-block;
}

.nav-bar ul {
  display: flex;
  height: 100%;
}

.nav-bar ul li {
  height: 100%;
  text-align: center;
  list-style: none;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  flex: 1;
  color: #a59e9e;
}

.nav-bar ul li span {
  font-weight: 600;
  width: 100%;
  display: block;
  text-align: center;
  transition: all 0.22s;
}

.nav-bar ul li:after {
  width: 50%;

  border-radius: 100%;
  content: "";
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
  z-index: 0;
  position: absolute;
  background: rgb(255, 255, 255);
  transition: all 0.4s;
}

.nav-bar ul li:hover:after {
  transform: translate3d(0, -15%, 0);
}

.nav-bar ul li.active:after {
  transform: translate3d(0, -40%, 0);
}

.nav-bar ul li.active span,
.nav-bar ul li:hover span {
  color: #d83cf0;
}

.nav-bar ul li.active svg {
  transform: scale(1.12) translate3d(0, -10px, 0);
}

.nav-bar ul li:not(.active):hover svg {
  transform: scale(1.049) translate3d(0, -4px, 0);
}

.nav-bar ul li svg path {
  transition: all 0.4s;
}

@media screen and (max-width: 400px) {
  .nav-bar {
    border-top: 1px solid transparent;
    background: #ffffff;
    width: 100%;
    height: 3rem;
    position: fixed;
    left: 0;
    bottom: 0;
    -webkit-box-shadow: 0px 3px 8px 0px #bababa;
    box-shadow: 0px 3px 8px 0px #bababa;
    display: block;
  }
  .nav-bar svg {
    height: 1.5rem;
  }

  .nav-bar ul li span {
    font-size: 0.75rem;
    font-weight: 500;
  }

  .nav-bar ul li.active:after {
    transform: translate3d(0, -25%, 0);
  }
  .nav-bar ul li:hover svg g,
  .nav-bar ul li.active svg {
    fill: #d83cf0;
  }
}
</style>
