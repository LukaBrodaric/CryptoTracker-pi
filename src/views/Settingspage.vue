<template>
  <body>
    <div v-if="alertt == 1">
      <div class="col-sm-12">
        <div
          class="alertt fade alertt-simple alertt-info alertt-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
          role="alertt"
          data-brk-library="component__alertt"
        >
          <button
            type="button"
            class="close font__size-18"
            data-dismiss="alertt"
          >
            <span aria-hidden="true">
              <i class="fa fa-times blue-cross"></i>
            </span>
            <span class="sr-only">Close</span>
          </button>
          <i class="start-icon fa fa-info-circle faa-shake animated"></i>
          <strong class="font__weight-semibold">Heads up!</strong> &nbsp; This
          is a reminder to let you know that one or more of your reminders have
          been triggered, please check the current crypto prices and your
          portfolio.
        </div>
      </div>
    </div>
    <div class="container currency-settings-div">
      <div class="stng-header">
        <h2>Settings</h2>
        <br />
        <p class="currency-settings">
          <!-- <ion-icon
            name="settings-outline"
            role="img"
            class="md hydrated"
            aria-label="settings outline"
          ></ion-icon> -->
        </p>
      </div>
      <br />
      <!-- Settings i edit profile -->
          <div id="open-modal5" class="modal-window5">
            <div>
              <a href="#" title="Close" class="modal-close"
                >Close</a
              >
              <br />
              <br />
              <h1><b>Send us a message</b></h1>
              <div>
                <form style="margin-top: 5px">
                  <textarea placeholder="Your message" class="form-control" v-model="textmessage"></textarea>
                  <input
                    type="submit"
                    value="Send"
                    @click.prevent="sendemail()"
                    onsubmit=window.close()
                  />
                </form>
              </div>
            </div>
          </div>
      <div class="center">
        <div class="center">
          <h2>Edit Profile</h2>
          <div class="user">{{ store.currentUser }}</div>
        </div>
        <br /><br />
      </div>
      <!-- Lista s navigacijom -->
      <ul class="settings-navigations">
        <li>
          <div class="row">
            <h4>Notifications</h4>
            <!--  <ion-icon name="phone-portrait-outline"></ion-icon> -->
            <div class="collapse multi-collapse" id="multiCollapseExample">
              <div class="mt-3"></div>
            </div>
          </div>
          <br />
          CryptoTracker will send you app updates if enabled &nbsp;&nbsp;&nbsp;
          <Toggle
            v-model="value"
            class="toggle-blue"
            on-label="On"
            off-label="Off"
            @click="switchUpdate()"
          />
        </li>
        <li>
          <div class="row">
            <h4>Reminders</h4>
            &nbsp;&nbsp; &nbsp;
            <p style="color: #0099ff">
              (CryptoTracker uses <b>only</b> in-app notifications)
            </p>
            <!--  <ion-icon name="phone-portrait-outline"></ion-icon> -->
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="mt-3"></div>
            </div>
          </div>
          BTC:&nbsp; <b>{{ this.pBTC }}%, </b> &nbsp; ETH:&nbsp;
          <b>{{ this.pETH }}%, </b> &nbsp; LTC:&nbsp;
          <b>{{ this.pLTC }}%, </b> &nbsp; ADA:&nbsp;
          <b>{{ this.pADA }}%, </b> &nbsp; BNB:&nbsp;
          <b>{{ this.pBNB }}%, </b> &nbsp; SOL:&nbsp;
          <b>{{ this.pSOL }}%, </b> &nbsp;
          <a class="btn" href="#open-modal"
            ><p style="color: #0099ff">
              Click here if you want to edit your reminders
            </p></a
          >
          <div id="open-modal" class="modal-window">
            <div>
              <a href="#" title="Close" class="modal-close" @click="add = 0"
                >Close</a
              >
              <br />
              <div style="color: green" class="fade-in-text" v-if="add == 1">
                <b>Reminders updated!</b>
              </div>
              <br />
              <h1><b>Add a reminder</b></h1>
              <div>
                <form>
                  <h5>
                    CryptoTracker will send you a notification when the value of
                    :
                  </h5>
                  <br />
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
                  <h5><b>changes for ± : </b></h5>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter % number (e.g. 5)"
                    v-model="novaKolicina"
                  />
                  <input
                    type="submit"
                    value="Add"
                    @click.prevent="setReminder()"
                    onsubmit="return false"
                  />
                </form>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a
            data-toggle="collapse"
            href="#multiCollapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample3"
            ><div class="row">
              <h4>Version</h4>
              <!--  <ion-icon name="phone-portrait-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample3">
                <div class="mt-3">
                  CryptoTracker app is running on newest Version 1.0.1 and will
                  be constantly updated, and you as a user will be reminded on
                  email about any new version or updates.
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a
            data-toggle="collapse"
            href="#multiCollapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample4"
            ><div class="row">
              <h4>Terms of Service</h4>
              <!--  <ion-icon name="clipboard-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample4">
                <div class="mt-3">
                  These Terms of Service constitute a legally binding agreement
                  made between you, whether personally or on behalf of an entity
                  (“you”) and CryptoTracker. You agree that by accessing the
                  Site, you have read, understood, and agree to be bound by all
                  of these Terms of Service
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a
            data-toggle="collapse"
            href="#multiCollapseExample5"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample5"
            ><div class="row">
              <h4>Privacy Policy</h4>
              <!--   <ion-icon name="shield-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample5">
                <div class="mt-3">
                  CryptoTracker operates the CryptoTracker website, which
                  provides the SERVICE.This page is used to inform website
                  visitors regarding our policies with the collection, use, and
                  disclosure of Personal Information if anyone decided to use
                  our Service, the CryptoTracker website.
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a
            data-toggle="collapse"
            href="#multiCollapseExample6"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample6"
            ><div class="row">
              <h4>Help</h4>
              <!--  <ion-icon name="code-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample6">
                <div class="mt-3">
                  You may be required to register with the Site. You agree to
                  keep your password confidential and will be responsible for
                  all use of your account and password. We reserve the right to
                  remove, reclaim, or change a username you select if we
                  determine, in our sole discretion, that such username is
                  inappropriate, obscene, or otherwise objectionable.
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
<a class="btn" href="#open-modal5" @click="classremove"
            ><p style="color: #0099ff">
              Contact us
            </p></a
          >
          <br>
      <a href="#" class="sign-out-btn" @click="signout()">Sign Out</a>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Nunito:wght@600&display=swap");

.fade-in-text {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: black;
  animation: fadeIn linear 1s;
  -webkit-animation: fadeIn linear 1s;
  -moz-animation: fadeIn linear 1s;
  -o-animation: fadeIn linear 1s;
  -ms-animation: fadeIn linear 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.toggle-blue {
  --toggle-bg-on: #0099ff;
  --toggle-border-on: #0099ff;
}

#open-modal, #open-modal5 {
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
  label,
  input,
  textarea,
  select {
    width: 100%;
    display: block;
    font-size: 1.2em;
  }
  input,
  textarea,
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

.modal-window {
  text-align: center;
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

.modal-window5 {
  text-align: center;
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
    width: 700px;
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

.currency-settings-div {
  position: relative;
  margin-top: 24px;
  font-family: "Lato", sans-serif;
  width: 100%;
  background-color: #ffffff;
}
.stng-header {
  margin-bottom: 16px;
}
.currency-settings-div .stng-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  font-family: "Lato", sans-serif;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0 16px;
}

.currency-settings-div .stng-header h2 {
  font-size: 28px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #17171a;
}

.currency-settings-div .stng-header .currency-settings ion-icon {
  position: relative;
  font-size: 20px;
  color: #4376fe;
  font-family: "Lato", sans-serif;
  top: 2px;
}

.currency-settings-div .settings-profile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 36px 0;
  font-family: "Lato", sans-serif;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: #333333;
  background-color: rgb(231, 235, 255);
  border: 2px solid rgb(0, 151, 254);
  border-radius: 25px;
}

.currency-settings-div .settings-profile img {
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.currency-settings-div .settings-profile .right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.currency-settings-div .settings-profile .right h2 {
  font-size: 24px;
  font-weight: 700;
}

.currency-settings-div .settings-profile .right .user {
  font-weight: 600;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  margin-top: 8px;
}

.currency-settings-div .settings-navigations {
  list-style: none;
}

.currency-settings-div .settings-navigations li {
  margin-bottom: 40px;
}

.currency-settings-div .settings-navigations li a {
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
  font-size: 20px;
  color: #12121d;
}

.currency-settings-div .settings-navigations li a h4 {
  font-weight: 400;
}

.currency-settings-div .sign-out-btn {
  font-size: 20px;
  color: #ff0000;
  text-decoration: none;
  font-weight: 400;
}
</style>

<script>
import store from "@/store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Toggle from "@vueform/toggle";
let db = firebase.firestore();
import axios from "axios";
import emailjs from '@emailjs/browser';
import { MODULEDECLARATION_TYPES } from "@babel/types";

export default {
  name: "settings",
  data: function () {
    return {
      add: 0,
      alertt: 0,
      novaValuta: "",
      novaKolicina: "",
      store,
      value: true,
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
  components: {
    Toggle,
  },
  created() {
    this.interval = setInterval(() => this.getWallet(), 1200);
    setTimeout(() => {
      this.getReminder();
    }, 2000);
    setTimeout(() => {
      this.getNotifications();
    }, 1000);
    setTimeout(() => {
      store.pocetnaVrijednostBTC = this.cryptos.BTC.USD;
      store.pocetnaVrijednostETH = this.cryptos.ETH.USD;
      store.pocetnaVrijednostBNB = this.cryptos.BNB.USD;
      store.pocetnaVrijednostSOL = this.cryptos.SOL.USD;
      store.pocetnaVrijednostLTC = this.cryptos.LTC.USD;
      store.pocetnaVrijednostADA = this.cryptos.ADA.USD;
    }, 5000);
  },
  methods: {
    classremove(){
   const openmodal = document.getElementById("open-modal5");
  openmodal.classList.remove("d-none");
    },
    sendemail(){
      const templateParams = {
    from_name: store.currentUser,
    message: this.textmessage
};
emailjs.send('service_q18j0g5','template_70wb9rg', templateParams, '5k1-fk5W2IMJjiyiJ')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
     alert("Message successfully sent");
     const openmodal = document.getElementById("open-modal5");
     openmodal.classList.add("d-none"); //style iz bootstrapa
     this.textmessage="";
	}, (err) => {
	   console.log('FAILED...', err);
	});
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
      if (this.pBTC > 0) {
        if (
          this.cryptos.BTC.USD >
          store.pocetnaVrijednostBTC +
            (store.pocetnaVrijednostBTC / 100) * this.pBTC
        ) {
          this.alertt = 1;
          this.playSound();
        }
        if (
          this.cryptos.BTC.USD <
          store.pocetnaVrijednostBTC -
            (store.pocetnaVrijednostBTC / 100) * this.pBTC
        ) {
          this.alertt = 1;
          this.playSound();
        }
      }
      if (this.pETH > 0) {
        if (
          this.cryptos.ETH.USD >
          store.pocetnaVrijednostETH +
            (store.pocetnaVrijednostETH / 100) * this.pETH
        ) {
          this.alertt = 1;
          this.playSound();
        }
        if (
          this.cryptos.ETH.USD <
          store.pocetnaVrijednostETH -
            (store.pocetnaVrijednostETH / 100) * this.pETH
        ) {
          this.alertt = 1;
          this.playSound();
        }
      }
      if (this.pADA > 0) {
        if (
          this.cryptos.ADA.USD >
          store.pocetnaVrijednostADA +
            (store.pocetnaVrijednostADA / 100) * this.pADA
        ) {
          this.alertt = 1;
          this.playSound();
        }
        if (
          this.cryptos.ADA.USD <
          store.pocetnaVrijednostADA -
            (store.pocetnaVrijednostADA / 100) * this.pADA
        ) {
          this.alertt = 1;
          this.playSound();
        }
      }
      if (this.pBNB > 0) {
        if (
          this.cryptos.BNB.USD >
          store.pocetnaVrijednostBNB +
            (store.pocetnaVrijednostBNB / 100) * this.pBNB
        ) {
          this.alertt = 1;
          this.playSound();
        }
        if (
          this.cryptos.BNB.USD <
          store.pocetnaVrijednostBNB -
            (store.pocetnaVrijednostBNB / 100) * this.pBNB
        ) {
          this.alertt = 1;
          this.playSound();
        }
      }
      if (this.pSOL > 0) {
        if (
          this.cryptos.SOL.USD >
          store.pocetnaVrijednostSOL +
            (store.pocetnaVrijednostSOL / 100) * this.pSOL
        ) {
          this.alertt = 1;
          this.playSound();
        }
        if (
          this.cryptos.SOL.USD <
          store.pocetnaVrijednostSOL -
            (store.pocetnaVrijednostSOL / 100) * this.pSOL
        ) {
          this.alertt = 1;
          this.playSound();
        }
      }
      if (this.pLTC > 0) {
        if (
          this.cryptos.LTC.USD >
          store.pocetnaVrijednostLTC +
            (store.pocetnaVrijednostLTC / 100) * this.pLTC
        ) {
          this.alertt = 1;
          this.playSound();
        }
        if (
          this.cryptos.LTC.USD <
          store.pocetnaVrijednostLTC -
            (store.pocetnaVrijednostLTC / 100) * this.pLTC
        ) {
          this.alertt = 1;
          this.playSound();
        }
      }
    },
    playSound() {
      var audio = new Audio(
        "http://docs.google.com/uc?export=open&id=1r9E4Lj17lLdRPwY_d6xSsu3T9V8w66v2"
      );
      audio.play();
    },
    switchUpdate() {
      const notifikacije = this.value;
      db.collection("notifikacije korisnika")
        .doc(store.currentUser)
        .set({
          app_notifs: notifikacije,
        })
        .then((doc) => {
          console.log("Spremljeno! ", doc);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Signup" });
        });
    },
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
    setReminder() {
      this.add = 1;
      const kriptovaluta = this.novaValuta;
      const postotak = this.novaKolicina;
      switch (kriptovaluta) {
        case "BTC":
          this.pBTC = postotak;
          break;
        case "ETH":
          this.pETH = postotak;
          break;
        case "LTC":
          this.pLTC = postotak;
          break;
        case "ADA":
          this.pADA = postotak;
          break;
        case "BNB":
          this.pBNB = postotak;
          break;
        case "SOL":
          this.pSOL = postotak;
          break;
        default:
      }
      db.collection("reminderi")
        .doc(store.currentUser)
        .set({
          BTC: this.pBTC,
          ETH: this.pETH,
          LTC: this.pLTC,
          ADA: this.pADA,
          BNB: this.pBNB,
          SOL: this.pSOL,
        })
        .then((doc) => {
          console.log("Spremljeno! ", doc);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getNotifications() {
      var docRef = db
        .collection("notifikacije korisnika")
        .doc(store.currentUser);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.value = doc.data().app_notifs;
          } else {
            // doc.data() will be undefined in this case
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
<style src="@vueform/toggle/themes/default.css"></style>
