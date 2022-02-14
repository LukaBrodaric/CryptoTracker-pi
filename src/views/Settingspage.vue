<template>
  <body>
    <div class="container currency-settings-div">
      <div class="stng-header">
        <h2><b>Settings</b></h2>
        <br>
        <p class="currency-settings">
          <ion-icon name="settings-outline"></ion-icon>
        </p>
      </div>
<br>
      <!-- Settings i edit profile -->

        <div class="center">
            <div class="center"><h2>Edit Profile</h2>
            <div class="user">{{store.currentUser}}</div></div>
            <br><br>
        </div>
      <!-- Lista s navigacijom -->
      <ul class="settings-navigations">
<li>
         <div class="row">
              <h4>Notifications</h4>
              <!--  <ion-icon name="phone-portrait-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample">
                <div class="mt-3">
                </div>
              </div>
            </div>
            <br>
           CryptoTracker will send you app updates if enabled &nbsp;&nbsp;&nbsp; <Toggle v-model="value" class="toggle-blue" on-label="On" off-label="Off" @click="switchUpdate()"/>
        </li>
        <li>
          <div class="row">
              <h4>Reminders</h4>
              <!--  <ion-icon name="phone-portrait-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="mt-3">
                </div>
              </div>
            </div><br>
            CryptoTracker uses <b>only</b> in-app notifications
            <a class="btn" href="#open-modal">Click here if you want to edit your reminders</a>
            <div id="open-modal" class="modal-window">
          <div>
            <a href="#" title="Close" class="modal-close">Close</a>
            <br>
            <h4>Cryptotracker will send you <b>only</b> in-app reminders</h4>
            <br>
            <h5>App will notify you when cryptovalue changes for :</h5><br>
            <p> BTC:&nbsp; <b>{{this.pBTC}}% </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" onclick="console.log('Hello world!')">Change rate</button></p>
            <p> ETH:&nbsp; <b>{{this.pETH}}% </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" onclick="console.log('Hello world!')">Change rate</button></p>
            <p> LTC:&nbsp; <b>{{this.pLTC}}% </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" onclick="console.log('Hello world!')">Change rate</button></p>
            <p> ADA:&nbsp; <b>{{this.pADA}}% </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" onclick="console.log('Hello world!')">Change rate</button></p>
            <p> BNB:&nbsp; <b>{{this.pBNB}}% </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" onclick="console.log('Hello world!')">Change rate</button></p>
            <p> SOL:&nbsp; <b>{{this.pSOL}}% </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type="button" onclick="console.log('Hello world!')">Change rate</button></p>
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
                  CryptoTracker app is running on newest Version 2.0.6 and will
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

      <a href="#" class="sign-out-btn" @click="signout()">Sign Out</a>
    </div>
  </body>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Nunito:wght@600&display=swap");

.toggle-blue {
  --toggle-bg-on: rgb(0, 153, 254);
  --toggle-border-on: rgb(0, 153, 254);;
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
  margin-top: 16px;
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
    width: 450px;
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

.currency-settings-div {
  position: relative;
  margin-top: 16px;
  font-family: "Lato", sans-serif;
  width: 100%;
  background-color: #ffffff;
  padding: 24px;
}

.currency-settings-div .stng-header {
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

.currency-settings-div .stng-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #17171a;
}

.currency-settings-div .stng-header .currency-settings ion-icon {
  position: relative;
  font-size: 20px;
  color: #4376fe;
  top: 2px;
}

.currency-settings-div .settings-profile {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 36px 0;
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
import store from "@/store"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Toggle from '@vueform/toggle'
let db = firebase.firestore();

export default {
name: 'settings',
data: function() {
  return {
    store,
    value: true
    }
},
components: {
    Toggle,
  },
created(){
setTimeout(() => {
console.log(store.currentUser);
}, 1000)
setTimeout(() => {
this.getReminder();
}, 1500)
},
methods: {
  switchUpdate(){
    console.log(this.value);
    const notifikacije = this.value
       db.collection("notifikacije korisnika").doc(store.currentUser).set({
      app_notifs : notifikacije
    })
    .then((doc) => {
      console.log("Spremljeno! ", doc)})
      .catch((e) =>{console.error(e)});
  },
  signout(){
          firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Signup" });
        });
  },
 getReminder(){
  console.log(store.currentUser);
  var docRe = db.collection("reminderi").doc(store.currentUser);
  docRe.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.pBTC = doc.data().BTC;
        this.pLTC = doc.data().LTC;
        this.pADA = doc.data().ADA;
        this.pBNB = doc.data().BNB;
        this.pSOL = doc.data().SOL;
        this.pETH = doc.data().ETH;
 console.log(this.pBTC, this.pLTC, this.pADA, this.pBNB, this.pSOL, this.pETH);
} else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  })},
}
}
</script>
<style src="@vueform/toggle/themes/default.css"></style>