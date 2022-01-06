<template>
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
        <li class="nav-item">
          <router-link to="/Home">Home</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <router-link to="/news">News</router-link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
      <br />   
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" v-if="refresh==1">
        <router-link to="/signup">Sign In</router-link>
      </button>
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" v-if="refresh==0">
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
}

#nav {
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.815) !important;
  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #0099ff;
    }
  }
}
</style>

<script>
import store from '@/store';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  name : 'app',
  data() {
    return {
     store,
     refresh : 0
    };
  },
  mounted(){
    this.Observer();
    //alert(store.currentUser);
  },
  methods: {
  Observer(){
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log("Logged in as ",user.email);
    store.currentUser = user.email;
    this.refresh= 0;
  } else {
    // User is signed out
    console.log("No user logged in");
    store.currentUser = null;
    this.refresh=1;
  }
})
    },
logout(){
firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push({ name : 'Signup'});
        });
},
  }
}
</script>