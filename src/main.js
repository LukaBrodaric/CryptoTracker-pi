import { createApp } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCv8LdMenvYJoCkIuIrhocsCsnFSfQhBXI",
  authDomain: "cryptotracker-fbe77.firebaseapp.com",
  databaseURL:
    "https://cryptotracker-fbe77-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cryptotracker-fbe77",
  storageBucket: "cryptotracker-fbe77.appspot.com",
  messagingSenderId: "1066916108373",
  appId: "1:1066916108373:web:b19c3505f556ab84829cdc",
};

//let db = firebase.firestore();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount("#app");

//export default {db};
