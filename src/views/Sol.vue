<template>
  <div class="home">
    <!--  <h1>Cryptotracker</h1> -->

    <body>
      <section class="container currency-div">
        <!-- Izbronik valuta -->
        <ul class="currency-nav">
          <li>
            <router-link to="/Home">BTC</router-link>
          </li>
          <li>
            <router-link to="/Eth">ETH</router-link>
          </li>
          <li>
            <router-link to="/Ltc">LTC</router-link>
          </li>
          <li>
            <router-link to="/Ada">ADA</router-link>
          </li>
          <li>
            <router-link to="/Bnb">BNB</router-link>
          </li>
          <li class="currency-active">
            <router-link to="/Sol">SOL</router-link>
          </li>
        </ul>

        <!--  Div sa imenom i slikom -->
        <div class="single-currency" data-item="currency-sol">
          <div class="currency-price-div">
            <div class="left">
              <img src="@/assets/sol.png" alt="" class="currency-logo" />
              <div>
                <h4 class="sort-name">sol</h4>
                <span class="full-name">Solana</span>
              </div>
            </div>
            <div class="right">
              <h4 class="current-price">${{ this.cryptos.SOL.USD }}</h4>
              <span class="currency-qnt">1.00 sol</span>
            </div>
          </div>

          <!-- Ovdje ide live graf  -->
          <div class="currency-chart">
            <div id="ethChart">
              <VueTradingView
                :options="{
                  width: '1000',
                  height: '520',
                  symbol: 'BINANCE:SOLUSDT',
                  theme: 'light',
                }"
              />
            </div>
          </div>

          <!-- Total balance -->
          <div class="currency-balance-div">
            <div class="left">
              <p>Total balance</p>
              <h5>{{ this.SOL }} SOL</h5>
            </div>
            <div class="right">
              <h5>${{ (this.cryptos.SOL.USD * this.SOL).toFixed(2) }}</h5>
            </div>
          </div>

          <div class="balance-reminder sol-reminder">
            <a href="#" class="reminder-btn">Add reminder</a>
           
          </div>

          <!-- Ovdje idu Live vjesti -->
          <div class="currency-news-div">
            <a href="/news" class="news-header">
              <h2>News</h2>
              <h3>
                <span>All </span>
               
              </h3>
            </a>
            <ul class="news-list">
              <li>
                <iframe
                  width="100%"
                  scrolling="yes"
                  allowtransparency="true"
                  frameborder="0"
                  src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;currencies=SOL&amp;font_family=sans&amp;font_size=20&amp;header_bg_color=FFFFFF&amp;header_text_color=FFFFFF&amp;link_color=000000&amp;news_feed=recent&amp;posts_limit=3&amp;text_color=2C3E50&amp;"
                  height="350px"
                ></iframe>
               
              </li>
            </ul>
          </div>
        </div>
      </section>
    </body>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lato:wght@400;900&family=Roboto&display=swap");
*,
html,
body {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}

.currency-div {
  background-color: #ffffff;
  padding: 0 8px;
  margin-top: 16px;
}

.currency-div .currency-nav {
  position: relative;
  list-style: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: "Lato", sans-serif;
  padding: 2px;
  background-color: #7676801f;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
}

.currency-div .currency-nav li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: relative;
}

.currency-div .currency-nav li:not(:last-child)::after {
  position: absolute;
  content: "";
  height: calc(100% - 12px);
  width: 1px;
  background-color: #78788033;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.currency-div .currency-nav li.currency-active {
  background-color: #ffffff;
  border-radius: 7px;
  -webkit-box-shadow: 0px 3px 8px 0px #00000026;
  box-shadow: 0px 3px 8px 0px #00000026;
}

.currency-div .currency-nav li a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 13px;
  color: #000000;
  line-height: 13px;
  margin: 7.5px auto;
}

.currency-div .currency-price-div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 16px;
  font-family: "Lato", sans-serif;
  padding: 0 8px;
}

.currency-div .currency-price-div .left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 12px;
}
.currency-div .currency-price-div .left .sort-name {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 900;
  color: #17171a;
}

.currency-div .currency-price-div .left .full-name {
  font-size: 12px;
  font-weight: 400;
  color: #b9c1d9;
}
.currency-div .currency-price-div .right {
  text-align: end;
}

.currency-div .currency-price-div .right .currency-qnt {
  font-size: 12px;
  font-weight: 400;
  color: #b9c1d9;
  text-transform: uppercase;
}

.london {
  height: 400px;
}

.currency-div .currency-balance-div {
  font-family: "Lato", sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #21212114;
  padding-bottom: 8px;
  margin: 0 8px;
}
.currency-div .currency-balance-div .left p {
  font-size: 13px;
  font-weight: 400;
  color: #b9c1d9;
}

.currency-div .currency-balance-div .left h5 {
  font-size: 16px;
  font-weight: 400;
  color: #17171a;
}
.currency-div .currency-balance-div .right h5 {
  font-size: 16px;
  font-weight: 400;
  color: #17171a;
}

.currency-div .balance-reminder {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  border-radius: 9px;
  position: relative;
  padding: 2px 0;
  margin: 16px 8px 0;
}

.currency-div .balance-reminder.sol-reminder {
  background-color: #cb4ee812;
}

.currency-div .balance-reminder .reminder-btn {
  background-color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  padding: 5.5px 35px;
  border-radius: 7px;
  -webkit-box-shadow: 0px 2px 5px 0px #0000001f;
  box-shadow: 0px 2px 5px 0px #0000001f;
}

.currency-div .balance-reminder ion-icon {
  position: absolute;
  right: 12px;
  color: #000000de;
}

.currency-news-div {
  padding: 10px 12px;
}

.currency-news-div .news-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: #222222;
}

.currency-news-div .news-header h2 {
  font-size: 20px;
  font-weight: 600;
}

.currency-news-div .news-header h3 {
  font-size: 16px;
  font-weight: 400;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 2px;
}

.currency-news-div .news-header h3 ion-icon {
  font-size: 20px;
}

.currency-news-div .news-list {
  list-style: none;
  font-family: "Roboto", sans-serif;
  margin-top: 8px;
}

.currency-news-div .news-list li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 12px;
}

.currency-news-div .news-list li:not(:last-child) {
  padding-bottom: 12px;
  border-bottom: 1px solid #21212114;
}

.currency-news-div .news-list li h3 {
  font-weight: 400;
  font-size: 16px;
  color: #000000de;
  margin-bottom: 4px;
}

.currency-news-div .news-list li p {
  font-weight: 400;
  font-size: 14px;
  color: #00000099;
}

.currency-news-div .news-list li ion-icon {
  color: #000000de;
}

.currency-chart {
  margin-top: 20px;
  margin-bottom: 30px;
}

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Lato:wght@400;900&family=Roboto&display=swap");

$fontLato: "Lato", sans-serif;
$fontInter: "Inter", sans-serif;
$fontRoboto: "Roboto", sans-serif;

$colorPrimary: #000000;
$colorWhite: #ffffff;
$colorTretiary: #7676801f;
</style>

<script>
import VueTradingView from "vue-trading-view/src/vue-trading-view";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import store from "@/store";
let db = firebase.firestore();
import axios from "axios";

export default {
  name: "sol",
  props: {
    msg: String,
  },
  components: {
    VueTradingView,
  },
  data: function () {
    return {
      novaValuta: "",
      novaKolicina: "",
      refresh: 0,
      BTC: 0,
      ETH: 0,
      LTC: 0,
      ADA: 0,
      BNB: 0,
      SOL: 0,
      cryptos: [],
      errors: [],
    };
  },
  created() {
    this.interval = setInterval(() => this.getWallet(), 1200);
  },
  methods: {
    getWallet() {
      
      var docRef = db.collection("wallet").doc(store.currentUser);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            
            this.BTC = doc.data().BTC;
            this.LTC = doc.data().LTC;
            this.ADA = doc.data().ADA;
            this.BNB = doc.data().BNB;
            this.SOL = doc.data().SOL;
            this.ETH = doc.data().ETH;
     
            axios
              .get(
                "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,ADA,BNB,SOL&tsyms=USD"
              )
              .then((response) => {
                this.cryptos = response.data;
               
              })
              .catch((e) => {
                this.errors.push(e);
              });
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
};
</script>
