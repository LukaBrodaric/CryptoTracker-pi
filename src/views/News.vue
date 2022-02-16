<template>
<div v-if="alert==1">
        <div class="col-sm-12">
        <div class="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
          <button type="button" class="close font__size-18" data-dismiss="alert">
									<span aria-hidden="true">
										<i class="fa fa-times blue-cross"></i>
									</span>
									<span class="sr-only">Close</span>
								</button>
          <i class="start-icon  fa fa-info-circle faa-shake animated"></i>
          <strong class="font__weight-semibold">Heads up!</strong>  &nbsp; This is a reminder to let you know that one or more of your reminders have been triggered, please check the current crypto prices and your portfolio.
        </div>
      </div>
      </div>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-12 news-div">
        <!-- Implementacija live vijesti -->
        <div class="div-header">
          <h2>News:</h2>
          <p class="news-settings">
            <ion-icon
              name="newspaper-outline"
              role="img"
              class="md hydrated"
              aria-label="newspaper outline"
            ></ion-icon>
          </p>
        </div>
        <iframe
          width="100%"
          scrolling="no"
          allowtransparency="true"
          frameborder="0"
          src="https://cryptopanic.com/widgets/news/?bg_color=FFFFFF&amp;currencies=BTC%2CETH%2CLTC%2CADA%2CBNB%2CSOL&amp;font_family=sans&amp;font_size=20&amp;header_bg_color=FFFFFF&amp;header_text_color=FFFFFF&amp;link_color=000000&amp;news_feed=trending&amp;posts_limit=10&amp;text_color=2C3E50&amp;"
          height="1000px"
        ></iframe>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

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

.news-div {
  position: relative;
  margin-top: 24px;
  font-family: "Lato", sans-serif;
  width: 100%;
  background-color: #ffffff;
}

.div-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 30px;
}
.div-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #17171a;
}

.news-settings ion-icon {
  position: relative;
  font-size: 20px;
  color: #4376fe;
  font-family: "Lato", sans-serif;
  top: 2px;
}

.div-header .newspaper-setting {
  font-size: 20px;
  color: #b9c1d9;
}
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
  name: "eth",
  props: {
    msg: String,
  },
  components: {
    VueTradingView,
  },
  data: function () {
    return {
      alert: 0,
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
        setTimeout(() => {
this.getReminder();
}, 2000)
  },
  methods: {
    playSound () {
        var audio = new Audio('http://docs.google.com/uc?export=open&id=1r9E4Lj17lLdRPwY_d6xSsu3T9V8w66v2');
        audio.play();
    },
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
        if (this.pBTC > 0){                                                                         // Ovdje ubaciti reminder api
      if(store.pocetnaVrijednostBTC - this.cryptos.BTC.USD > (store.pocetnaVrijednostBTC/100*this.pBTC)) {  this.alert = 1; this.playSound();}
      if(store.pocetnaVrijednostBTC - this.cryptos.BTC.USD < (store.pocetnaVrijednostBTC/100*this.pBTC)) {  this.alert = 1; this.playSound();}
      }
       if (this.pADA > 0){                                                                         // Ovdje ubaciti reminder api
      if(store.pocetnaVrijednostADA - this.cryptos.ADA.USD > (store.pocetnaVrijednostADA/100*this.pADA)) {  this.alert = 1; this.playSound();}
      if(store.pocetnaVrijednostADA - this.cryptos.ADA.USD < (store.pocetnaVrijednostADA/100*this.pADA)) {  this.alert = 1; this.playSound();}
      }
      if (this.pSOL > 0){                                                                         // Ovdje ubaciti reminder api
      if(store.pocetnaVrijednostSOL - this.cryptos.SOL.USD > (store.pocetnaVrijednostSOL/100*this.pSOL)) {  this.alert = 1; this.playSound();}
      if(store.pocetnaVrijednostSOL - this.cryptos.SOL.USD < (store.pocetnaVrijednostSOL/100*this.pSOL)) {  this.alert = 1; this.playSound();}
      }
      if (this.pBNB > 0){                                                                         // Ovdje ubaciti reminder api
      if(store.pocetnaVrijednostBNB - this.cryptos.BNB.USD > (store.pocetnaVrijednostBNB/100*this.pBNB)) {  this.alert = 1; this.playSound();}
      if(store.pocetnaVrijednostBNB - this.cryptos.BNB.USD < (store.pocetnaVrijednostBNB/100*this.pBNB)) {  this.alert = 1; this.playSound();}
      }
              if (this.pETH > 0){                                                                         // Ovdje ubaciti reminder api
      if(store.pocetnaVrijednostETH - this.cryptos.ETH.USD > (store.pocetnaVrijednostETH/100*this.pETH)) {  this.alert = 1; this.playSound();}
      if(store.pocetnaVrijednostETH - this.cryptos.ETH.USD < (store.pocetnaVrijednostETH/100*this.pETH)) {  this.alert = 1; this.playSound();}
      }
      if (this.pLTC > 0){                                                                         // Ovdje ubaciti reminder api
      if(store.pocetnaVrijednostLTC - this.cryptos.LTC.USD > (store.pocetnaVrijednostLTC/100*this.pLTC)) {  this.alert = 1; this.playSound();}
      if(store.pocetnaVrijednostLTC - this.cryptos.LTC.USD < (store.pocetnaVrijednostLTC/100*this.pLTC)) {  this.alert = 1; this.playSound();}
      }
    },
    setReminder(){
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
getReminder(){
   
  var docRe = db.collection("reminderi").doc(store.currentUser);
  docRe.get().then((doc) => {
      if (doc.exists) {
         
        this.pBTC = doc.data().BTC;
        this.pLTC = doc.data().LTC;
        this.pADA = doc.data().ADA;
        this.pBNB = doc.data().BNB;
        this.pSOL = doc.data().SOL;
        this.pETH = doc.data().ETH;
  
} else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  })},
  },
};
</script>
