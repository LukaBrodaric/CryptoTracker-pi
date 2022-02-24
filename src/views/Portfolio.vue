<template>
  <div v-if="alert == 1">
    <div class="col-sm-12">
      <div
        class="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
        role="alert"
        data-brk-library="component__alert"
      >
        <button type="button" class="close font__size-18" data-dismiss="alert">
          <span aria-hidden="true">
            <i class="fa fa-times blue-cross"></i>
          </span>
          <span class="sr-only">Close</span>
        </button>
        <i class="start-icon fa fa-info-circle faa-shake animated"></i>
        <strong class="font__weight-semibold">Heads up!</strong> &nbsp; This is
        a reminder to let you know that one or more of your reminders have been
        triggered, please check the current crypto prices and your portfolio.
      </div>
    </div>
  </div>
  <div>
    <!-- Naslov i ukupna kolicina -->
    <div class="container currency-portfolio-div">
      <div class="div-header">
        <h2>Portfolio:</h2>
        <p class="wallet-settings">
          <ion-icon
            name="wallet-outline"
            role="img"
            class="md hydrated"
            aria-label="wallet outline"
          ></ion-icon>
        </p>
      </div>
      <div class="total">
        <h3>Total:</h3>
        <h3>
          ${{
            (
              this.cryptos.BTC.USD * this.BTC +
              this.cryptos.ETH.USD * this.ETH +
              this.cryptos.LTC.USD * this.LTC +
              this.cryptos.ADA.USD * this.ADA +
              this.cryptos.BNB.USD * this.BNB +
              this.cryptos.SOL.USD * this.SOL
            ).toFixed(2)
          }}
        </h3>
      </div>
      <div class="add-btn">
        <div class="container">
          <div class="interior">
            <a class="btn" href="#open-modal"
              >Click here to set your currencies</a
            >
          </div>
        </div>
        <div id="open-modal" class="modal-window">
          <div>
            <a href="#" title="Close" class="modal-close">Close</a>
            <br /><br />
            <h1><b>Update your wallet</b></h1>
            <div>
              <form action="calcular.php" method="post">
                <h1>Choose a cryptocurrency</h1>
                <select class="form-control" id="" v-model="novaValuta">
                  <option value="" disabled selected hidden>
                    Choose a cryptocurrency
                  </option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="LTC">LTC</option>
                  <option value="ADA">ADA</option>
                  <option value="BNB">BNB</option>
                  <option value="SOL">SOL</option>
                </select>
                <label for="">Amount: </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="e.g. 1.00"
                  v-model="novaKolicina"
                />
                <input
                  type="submit"
                  value="Update"
                  @click.prevent="unesiValutu()"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Lista s valutama !-->
      <ul class="currency-div">
        <li>
          <a href="/Home">
            <div class="left">
              <img src="@/assets/btc.png" />
              <div>
                <h3>btc</h3>
                <p>Bitcoin</p>
              </div>
            </div>
            <div class="right">
              <h4>BTC</h4>
              <h4>${{ (this.cryptos.BTC.USD * this.BTC).toFixed(2) }}</h4>
              <p>{{ this.BTC }} btc</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/Eth">
            <div class="left">
              <img src="@/assets/eth.png" />
              <div>
                <h3>eth</h3>
                <p>Ethereum</p>
              </div>
            </div>
            <div class="right">
              <h4>ETH</h4>
              <h4>${{ (this.cryptos.ETH.USD * this.ETH).toFixed(2) }}</h4>
              <p>{{ this.ETH }} eth</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/Ltc">
            <div class="left">
              <img src="@/assets/ltc.png" />
              <div>
                <h3>ltc</h3>
                <p>Litecoin</p>
              </div>
            </div>
            <div class="right">
              <h4>LTC</h4>
              <h4>${{ (this.cryptos.LTC.USD * this.LTC).toFixed(2) }}</h4>
              <p>{{ this.LTC }} ltc</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/Ada">
            <div class="left">
              <img src="@/assets/ada.png" />
              <div>
                <h3>Ada</h3>
                <p>Cardano</p>
              </div>
            </div>
            <div class="right">
              <h4>ADA</h4>
              <h4>${{ (this.cryptos.ADA.USD * this.ADA).toFixed(2) }}</h4>
              <p>{{ this.ADA }} ada</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/Bnb">
            <div class="left">
              <img src="@/assets/bnb.png" />
              <div>
                <h3>bnb</h3>
                <p>Binance Coin</p>
              </div>
            </div>
            <div class="right">
              <h4>BNB</h4>
              <h4>${{ (this.cryptos.BNB.USD * this.BNB).toFixed(2) }}</h4>
              <p>{{ this.BNB }} bnb</p>
            </div>
          </a>
        </li>
        <li>
          <a href="/Sol">
            <div class="left">
              <img src="@/assets/sol.png" />
              <div>
                <h3>sol</h3>
                <p>Solana</p>
              </div>
            </div>
            <div class="right">
              <h4>SOL</h4>
              <h4>${{ (this.cryptos.SOL.USD * this.SOL).toFixed(2) }}</h4>
              <p>{{ this.SOL }} sol</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

#open-modal {
  * {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
  body {
    color: white;
    font-family: "Lato", sans-serif;
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
  label,
  input,
  select {
    width: 100%;
    display: block;
    font-size: 1.2em;
  }
  input,
  select {
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

.currency-portfolio-div {
  position: relative;
  margin-top: 24px;
  font-family: "Lato", sans-serif;
  width: 100%;
  background-color: #ffffff;
}

.currency-portfolio-div .div-header {
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
}

.currency-portfolio-div .div-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #17171a;
}

.currency-portfolio-div .div-header .currency-setting {
  font-size: 20px;
  color: #b9c1d9;
}

.currency-portfolio-div .total {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 20px;
  text-align: left;
  margin-left: 16px;
}

.currency-portfolio-div .total h3 {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}

.currency-portfolio-div .total h3:nth-child(1) {
  -webkit-box-flex: 3;
  -ms-flex: 3;
  flex: 3;
}

.currency-portfolio-div .otal h3:nth-child(2) {
  color: #093c6a;
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

.currency-portfolio-div .add-btn {
  position: relative;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 50px;
}

.currency-portfolio-div .add-btn a {
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  padding: 11px;
  width: 65%;
  position: relative;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0px 3px 8px 0px #0000001f;
  box-shadow: 0px 3px 8px 0px #0000001f;
  border-radius: 7px;
  border: 0.5px solid #0099ff;
}

.currency-portfolio-div .currency-div {
  list-style: none;
  margin-top: 16px;
}

.currency-portfolio-div .currency-div li {
  border-bottom: 1px solid #b9c1d928;
  margin-top: 12px;
  padding-bottom: 12px;
}

.currency-portfolio-div .currency-div li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-decoration: none;
}

.wallet-settings ion-icon {
  position: relative;
  font-size: 20px;
  color: #4376fe;
  font-family: "Lato", sans-serif;
  top: 2px;
}

.currency-portfolio-div .currency-div li a .left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 5px;
}

.currency-portfolio-div .currency-div li a p .left img {
  height: 56px;
  width: 56px;
}

.currency-portfolio-div .currency-div li a .left h3 {
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  color: #17171a;
  text-align: left;
  margin-left: 5px;
}

.currency-portfolio-div .currency-div li a .left p {
  font-weight: 400;
  font-size: 12px;
  color: #b9c1d9;
  margin-top: 2px;
  margin-left: 5px;
  text-align: left;
}

.currency-portfolio-div .currency-div li a .right {
  text-align: end;
}

.currency-portfolio-div .currency-div li a .right h4 {
  font-weight: 900;
  font-size: 16px;
  color: #17171a;
}

.currency-portfolio-div .currency-div li a .right p {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  color: #b9c1d9;
  margin-top: 2px;
}
.modal-window {
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

.lijevo h5 {
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  color: #17171a;
  text-align: left;
  margin-left: 5px;
}

.desno {
  text-align: right;
}
</style>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import store from "@/store";
let db = firebase.firestore();
import axios from "axios";

export default {
  name: "portfolio",
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
    setTimeout(() => {
      this.getReminder();
    }, 2000);
    this.interval = setInterval(() => this.getWallet(), 1200);
  },
  methods: {
    getReminder() {
      var docRe = db.collection("reminderi").doc(store.currentUser);
      docRe
        .get()
        .then((doc) => {
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
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    playSound() {
      var audio = new Audio(
        "http://docs.google.com/uc?export=open&id=1r9E4Lj17lLdRPwY_d6xSsu3T9V8w66v2"
      );
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
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      if (this.pBTC > 0) {
        if (
          this.cryptos.BTC.USD >
          store.pocetnaVrijednostBTC +
            (store.pocetnaVrijednostBTC / 100) * this.pBTC
        ) {
          this.alert = 1;
          this.playSound();
        }
        if (
          this.cryptos.BTC.USD <
          store.pocetnaVrijednostBTC -
            (store.pocetnaVrijednostBTC / 100) * this.pBTC
        ) {
          this.alert = 1;
          this.playSound();
        }
      }
      if (this.pETH > 0) {
        if (
          this.cryptos.ETH.USD >
          store.pocetnaVrijednostETH +
            (store.pocetnaVrijednostETH / 100) * this.pETH
        ) {
          this.alert = 1;
          this.playSound();
        }
        if (
          this.cryptos.ETH.USD <
          store.pocetnaVrijednostETH -
            (store.pocetnaVrijednostETH / 100) * this.pETH
        ) {
          this.alert = 1;
          this.playSound();
        }
      }
      if (this.pADA > 0) {
        if (
          this.cryptos.ADA.USD >
          store.pocetnaVrijednostADA +
            (store.pocetnaVrijednostADA / 100) * this.pADA
        ) {
          this.alert = 1;
          this.playSound();
        }
        if (
          this.cryptos.ADA.USD <
          store.pocetnaVrijednostADA -
            (store.pocetnaVrijednostADA / 100) * this.pADA
        ) {
          this.alert = 1;
          this.playSound();
        }
      }
      if (this.pBNB > 0) {
        if (
          this.cryptos.BNB.USD >
          store.pocetnaVrijednostBNB +
            (store.pocetnaVrijednostBNB / 100) * this.pBNB
        ) {
          this.alert = 1;
          this.playSound();
        }
        if (
          this.cryptos.BNB.USD <
          store.pocetnaVrijednostBNB -
            (store.pocetnaVrijednostBNB / 100) * this.pBNB
        ) {
          this.alert = 1;
          this.playSound();
        }
      }
      if (this.pSOL > 0) {
        if (
          this.cryptos.SOL.USD >
          store.pocetnaVrijednostSOL +
            (store.pocetnaVrijednostSOL / 100) * this.pSOL
        ) {
          this.alert = 1;
          this.playSound();
        }
        if (
          this.cryptos.SOL.USD <
          store.pocetnaVrijednostSOL -
            (store.pocetnaVrijednostSOL / 100) * this.pSOL
        ) {
          this.alert = 1;
          this.playSound();
        }
      }
      if (this.pLTC > 0) {
        if (
          this.cryptos.LTC.USD >
          store.pocetnaVrijednostLTC +
            (store.pocetnaVrijednostLTC / 100) * this.pLTC
        ) {
          this.alert = 1;
          this.playSound();
        }
        if (
          this.cryptos.LTC.USD <
          store.pocetnaVrijednostLTC -
            (store.pocetnaVrijednostLTC / 100) * this.pLTC
        ) {
          this.alert = 1;
          this.playSound();
        }
      }
    },
    unesiValutu() {
      const valuta = this.novaValuta;
      const kolicina = this.novaKolicina;
      db.collection("povijest uplata")
        .add({
          naziv: valuta,
          vrijednost: kolicina,
          korisnik: store.currentUser,
          vrijeme: new Date(Date.now() + 3600000).toISOString(),
        })
        .then((doc) => {
          console.log("Spremljeno! ", doc), alert("Currency updated!");
          switch (valuta) {
            case "BTC":
              this.BTC = kolicina;
              break;
            case "ETH":
              this.ETH = kolicina;
              break;
            case "LTC":
              this.LTC = kolicina;
              break;
            case "ADA":
              this.ADA = kolicina;
              break;
            case "BNB":
              this.BNB = kolicina;
              break;
            case "SOL":
              this.SOL = kolicina;
              break;
            default:
          }
          db.collection("wallet").doc(store.currentUser).set({
            BTC: this.BTC,
            ETH: this.ETH,
            LTC: this.LTC,
            ADA: this.ADA,
            BNB: this.BNB,
            SOL: this.SOL,
          });
          window.location.reload();
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>
