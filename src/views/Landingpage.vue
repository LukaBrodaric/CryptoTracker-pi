<template>
  <div id="particles-js"></div>
  <div id="container">
    Make
    <div id="flip">
      <div><div>wOrK</div></div>
      <div><div>lifeStyle</div></div>
      <div><div>Everything</div></div>
    </div>
    AweSoMe!
  </div>

  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div>
        <div id="naslov">Welcome to CryptoTracker</div>
        <button id="botunic">
          <span> <a href="/signup"> GET STARTED </a></span>
        </button>
      </div>
      <div class="col"></div>
    </div>
  </div>

  <p>Fakultet Informatike u Puli</p>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

body {
  margin: 0px;
  font-family: "Roboto";
  text-align: center;
  background-color: #17182f !important;
}

#botunic {
  margin-top: 400px;
}

#naslov {
  color: #0099ff;
  text-align-last: center;
  text-transform: uppercase;
  font-size: 45px;
  font-weight: bold;
  padding-top: 200px;
  width: 100%;
  bottom: 75%;
  display: block;
}

#container {
  color: #999;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  padding-top: 200px;
  position: fixed;
  width: 100%;
  bottom: 50%;
  display: block;
}

#flip {
  height: 50px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background: #710ca0;
}
#flip div:first-child div {
  background: #0099ff;
}
#flip div:last-child div {
  background: #dc143c;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

p {
  position: fixed;
  width: 100%;
  bottom: 30px;
  font-size: 12px;
  color: #999;
  margin-top: 200px;
}

button {
  border-radius: 4px;
  background: linear-gradient(to right, #0099ff, #710ca0);
  border: none;
  color: #fff !important;
  text-align: center;
  font-size: 28px;
  padding: 16px;
  width: 270px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 30px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
}
a {
  color: #fff;
}
button {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

button:hover {
  padding-right: 24px;
  padding-left: 8px;
}

button:hover:after {
  opacity: 1;
  right: 10px;
}
</style>
