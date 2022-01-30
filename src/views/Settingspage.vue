<template>
  <body>
    <div class="container currency-settings-div">
      <div class="stng-header">
        <h2>Settings</h2>
        <p class="currency-settings">
          <ion-icon name="settings-outline"></ion-icon>
        </p>
      </div>

      <!-- Settings i edit profile -->

      <a href="#" class="settings-profile">
        <img src="@/assets/profile.png" alt="porfile" class="profile-img" />
        <div class="right">
          <div>
            <h2>Edit Profile</h2>
            <div class="user">{{store.currentUser}}</div>
          </div>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </a>

      <!-- Lista s navigacijom -->

      <ul class="settings-navigations">
        <li>
          <a
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
            ><div class="row">
              <h4>Notification</h4>

              <!-- <ion-icon name="card-outline"></ion-icon> -->

              <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div class="mt-3">
                  CryptoTracker allows right to send you notification about any
                  new updas to app. If you don't want to allow notifications
                  send email at: info@cryptotracker.com
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a
            data-toggle="collapse"
            href="#multiCollapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
            ><div class="row">
              <h4>Reminders</h4>
              <!--   <ion-icon name="notifications-outline"></ion-icon> -->
              <div class="collapse multi-collapse" id="multiCollapseExample2">
                <div class="mt-3">Ovjde dodati remidere ako cemo imati</div>
              </div>
            </div>
          </a>
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Nunito:wght@600&display=swap");

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

export default {
name: 'settings',
data: function() {
  return {
    store
    }
},
created(){
setTimeout(() => {
console.log(store.currentUser);
}, 1000)
},
methods: {
  signout(){
          firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Signup" });
        });
  }
}
}
</script>
