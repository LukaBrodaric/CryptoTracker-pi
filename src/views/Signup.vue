<template>
  <div class="container" :class="rightpanel" id="container">
    <div class="form-container sign-up-container">
            <div v-if="errorMessage !== ''" class="alert alert-danger position-absolute" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
      <form action="#" @submit.prevent="signupRequest" id="signup-form">
        <h1>Create Account</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" v-model="username" placeholder="Username" />
        <input type="email" id="email" v-model="email" placeholder="Email" />
        <input type="password" id="password" v-model="password" placeholder="Password" />
        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}">
          <span v-if="! xhrRequest">Sign Up</span>
          <span v-if="xhrRequest">Please Wait...</span>
        </button>

      </form>
    </div>
    <div class="form-container sign-in-container">
      <div v-if="errorMessage !== ''" class="alert alert-danger position-absolute" role="alert">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
        {{ successMessage }}
      </div>
      <form action="#" @submit.prevent="loginRequest" id="login-form">
        <h1>Sign in</h1>
        <div class="social-container">
          <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
          <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" v-model="email" id="email" />
        <input type="password" placeholder="Password" v-model="password" id="password" />
        <a href="#">Forgot your password?</a>
        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-primary px-4">
          <span v-if="! xhrRequest">Login</span>
          <span v-if="xhrRequest">Please Wait...</span>
        </button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>
            To keep using CryptoTracker please login with your personal info
          </p>
          <button class="ghost" @click="removerightpanel" id="signIn">
            Sign In
          </button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>
            Enter your personal details and start journey with CryptoTracker
          </p>
          <button class="ghost" @click="addrightpanel" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
  margin-top: 20px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 640px;
  margin-top: 150px;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

button {
  border-radius: 20px;
  border: 1px solid #0099ff;
  background: #0099ff;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #0099ff;
  background: linear-gradient(to right, #0099ff, #710ca0) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.container.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.container.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.container.right-panel-active .overlay-right {
  transform: translateY(20%);
}

.footer {
  margin-top: 25px;
  text-align: center;
}

.icons {
  display: flex;
  width: 30px;
  height: 30px;
  letter-spacing: 15px;
  align-items: center;
}
</style>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  name: "Signup",
  data() {
    return {
      rightpanel: "",
      username:"",
      email: "",
      password: "",
      xhrRequest: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    addrightpanel() {
      this.rightpanel = "right-panel-active";
    },
    removerightpanel() {
      this.rightpanel = "";
    },
    signupRequest() {
      let v = this;
      v.xhrRequest = true;
      v.errorMessage = "";
      v.successMessage = "";

      firebase
        .auth()
        .createUserWithEmailAndPassword(v.email, v.password)
        .then(
          () => {
            v.successMessage = "Registered Successfully.";
            v.xhrRequest = false;
          },
          (error) => {
            v.errorMessage = error.message.slice(10);
            v.xhrRequest = false;
          }
        );
    },
        loginRequest() {
            let v = this;

            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase.auth().signInWithEmailAndPassword(v.email, v.password).then(
                () => {
                    alert('Successfully logged in');
                    v.$router.replace({name:"Home"});
                    v.xhrRequest = false;
                }, 
                (error) => {
                    v.errorMessage = error.message.slice(10);
                    v.xhrRequest = false;
                }
            )
        },
  },
};
</script>
