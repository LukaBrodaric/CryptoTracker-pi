<template>
  <div class="home">
    <!--  <h1>Cryptotracker</h1> -->

    <body>
      <section class="container currency-div">
        <!-- Izbronik valuta -->
        <ul class="currency-nav">
          <li class="currency-active">
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
          <li>
            <router-link to="/Sol">SOL</router-link>
          </li>
        </ul>

        <!-- Div sa imenom i slikom -->
        <div class="single-currency">
          <div class="currency-price-div">
            <div class="left">
              <img src="@/assets/btc.png" alt="" class="currency-logo" />
              <div>
                <h4 class="sort-name">btc</h4>
                <span class="full-name">Bitcoin</span>
              </div>
            </div>
            <div class="right">
              <h4 class="current-price">${{ this.cryptos.BTC.USD }}</h4>
              <span class="currency-qnt">1.00 btc</span>
            </div>
          </div>

          <!-- Ovdje ide live graf  -->
          <div class="currency-chart">
            <div id="ethChart">
              <VueTradingView
                :options="{
                  width: '1000',
                  height: '520',
                  symbol: 'BINANCE:BTCUSDT',
                  theme: 'light',
                }"
              />
            </div>
          </div>

          <!-- Total balance -->
          <div class="currency-balance-div">
            <div class="left">
              <p>Total balance</p>
              <h5>{{ this.BTC }} BTC</h5>
            </div>
            <div class="right">
              <h5>${{ (this.cryptos.BTC.USD * this.BTC).toFixed(2) }}</h5>
            </div>
          </div>

          <div class="balance-reminder btc-reminder">
            <a href="#open-modal" class="reminder-btn">Add reminder</a>
            
          </div>
                  <div id="open-modal" class="modal-window">
          <div>
            <a href="#" title="Close" class="modal-close">Close</a>
            <br /><br />
            <h1><b>Add a reminder</b></h1>
            <div>
              <form>
                <h5>CryptoTracker will send you a notification when the value of :</h5><br>
        <select class="form-control" id="" v-model="novaValuta" >
        <option value="" disabled selected hidden>Choose a cryptocurrency</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="LTC">LTC</option>
        <option value="ADA">ADA</option>
        <option value="BNB">BNB</option>
        <option value="SOL">SOL</option>
      </select>
             <h5><b>changes for ± : </b></h5> <br>
              <input type="number" placeholder="Enter % number (e.g. 5)" v-model="novaKolicina"/>
      <input type="submit" value="Add" @click.prevent="setReminder()" onsubmit="return false" >
    </form>
            </div>
          </div>
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
                  src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;currencies=BTC&amp;font_family=sans&amp;font_size=20&amp;header_bg_color=FFFFFF&amp;header_text_color=FFFFFF&amp;link_color=000000&amp;news_feed=recent&amp;posts_limit=3&amp;text_color=2C3E50&amp;title=Trending%20news"
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

#open-modal{
  * {
  box-sizing: border-box;
}
body {
  color: white;
  font-family: sans-serif;
}

form {
  margin: auto;
  padding: 20px;
  margin-top: 20px;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
}
label, input,select {
  width: 100%;
  display: block;
  font-size: 1.2em;
}
input, select {
  padding: 5px;
  margin-bottom: 20px;
}
input[type="submit"] {
  width: 30%;
  margin: auto;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
}
}

.modal-window {
  text-align:center;
  position: fixed;
  background-color: #aaa9aa73;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
  }
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

.currency-div .balance-reminder.btc-reminder {
  background-color: #e0c11d12;
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
  name: "btc",
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
      pBTC: 0,
      pETH: 0,
      pLTC: 0,
      pADA: 0,
      pBNB: 0,
      pSOL: 0,
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
    setReminder(){
      console.log("zbunjen je ne zna šta radi")
      const kriptovaluta = this.novaValuta;
      const postotak = this.novaKolicina;
    switch(kriptovaluta) {
  case "BTC":
    this.pBTC = postotak
    break;
  case "ETH":
    this.pETH = postotak
    break;
  case "LTC":
    this.pLTC = postotak
    break;
  case "ADA":
    this.pADA = postotak
    break;
  case "BNB":
    this.pBNB = postotak
    break;
  case "SOL":
    this.pSOL = postotak
    break;
  default:
}
      db.collection("reminderi").doc(store.currentUser).set({
        BTC: this.pBTC,
        ETH: this.pETH,
        LTC: this.pLTC,
        ADA: this.pADA,
        BNB: this.pBNB,
        SOL: this.pSOL,
    },)
      .then((doc) => {
      console.log("Spremljeno! ", doc)})
      .catch((e) =>{console.error(e)});
    },
  },
};
</script>
