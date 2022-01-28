<template>
  <particles />

  <div class="margina">
    <p class="naslov">
      Welcome to Crypto<span style="color: #0099ff">Tracker</span>
    </p>
    <p class="podnaslov">Keep track on everything. Everywhere.</p>
  </div>

  <button id="botunic">
    <span> <a href="/signup"> GET STARTED </a></span>
  </button>

  <p class="podnozje">Fakultet Informatike u Puli</p>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

#botunic {
  margin-top: 100px;
}

.podnozje {
  position: fixed;
  width: 100%;
  bottom: 30px;
  font-size: 12px;
  color: #999;
  margin-top: 200px;
}

.botunic {
  margin-top: 200px;
}

.margina {
  margin-bottom: 400px;
}

.podnaslov {
  position: fixed;
  width: 100%;
  margin-top: 270px;
  margin-bottom: 100px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: #fff;
  font-size: 30px;
}
.naslov {
  position: fixed;
  width: 100%;
  margin-top: 180px;
  margin-bottom: 100px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: #fff;
  font-size: 50px;
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
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
a {
  color: #fff;
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

<script>
import particles from "@/components/particles";

export default {
  name: "App",
  components: {
    particles,
  },
};
</script>
