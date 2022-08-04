<template>
  <link rel="icon" src="@/assets/favicon.ico" />
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <router-link to="/">
        <img
          src="@/assets/logoproba2.png"
          height="35"
          class="d-inline-block align-center"
          alt=""
          loading="lazy"
        />
      </router-link>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-if="refresh == 0">
          <router-link to="/Home/BTC">Home</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item" v-if="refresh == 0">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item" v-if="refresh == 0">
          <router-link to="/news">News</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item" v-if="refresh == 0">
          <router-link to="/settingspage">Settings</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item" v-if="administrator == 1">
          <router-link to="/adminpanel">adminpanel</router-link>
        </li>
      </ul>
      <br />
      <button
        class="btn btn-outline-primary my-2 my-sm-0"
        type="submit"
        v-if="refresh == 1"
      >
        <router-link to="/signup">Sign In</router-link>
      </button>
      <button
        class="btn btn-outline-primary my-2 my-sm-0"
        type="submit"
        v-if="refresh == 0"
      >
        <a href="#" @click="logout()" class="nav-link">Sign out</a>
      </button>
    </div>
  </nav>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //background-color: #f6f5f7;
}

#nav {
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.815) !important;
  a {
    font-weight: bold;
    color: #ffffff;
    font-family: "Lato", sans-serif;

    &.router-link-exact-active {
      color: #0099ff;
    }
  }
}
</style>

<script>
import router from "@/router";
import store from "@/store";
import { connectFirestoreEmulator } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  name: "app",
  data() {
    return {
      store,
      refresh: 0,
      administrator: 0,
    };
  },
  mounted() {
    this.Observer();
  setTimeout(() => {
  }, 1500)
    //alert(store.currentUser);
  },
  methods: {
    Observer() {
      firebase.auth().onAuthStateChanged((user) => {
        const currentRoute = router.currentRoute;
        console.log(currentRoute._value.name);
        if(currentRoute._value.name==="adminpanel"){
          console.log("this works");
        }
        if (user) {
          // User is signed in.
          console.log("Logged in as ", user.email);
          store.currentUser = user.email;
          this.refresh = 0;
          if(store.currentUser=="adminn@gmail.com"){
          store.admin=true;
          this.administrator=1;
          }
          if (!currentRoute.value.meta.needsUser) {
            console.log("ja radim");
            router.push({ name: "Home", params: { cryptocurrency: 'BTC' }});
          }
        } else {
          // User is signed out
          console.log("No user logged in");
          store.currentUser = null;
          this.administrator=0;
          store.admin=false;
          this.refresh = 1;
          if (currentRoute.value.meta.needsUser) {
            router.push({ name: "Signup" });
          }
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Signup" });
        });
    },
  },
};
</script>
