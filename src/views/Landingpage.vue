<template>
  <particles />

  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-12">
        <!--Naslov i podnaslov -->
        <div class="">
          <p class="title">
            Welcome to Crypto<span style="color: #0099ff">Tracker</span>
          </p>
          <p class="subtitle">Keep track on everything. Everywhere.</p>
        </div>

        <div class="text-center">
          <button>
            <span> <router-link to="/Home/BTC"> GET STARTED </router-link></span>
          </button>
        </div>
        <p class="footer">Fakultet Informatike u Puli</p>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

.title {
  width: 100%;
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: #fff;
  font-size: 50px;
  margin-top: 250px;
}

.subtitle {
  width: 100%;
  text-align: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: #fff;
  font-size: 30px;
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
  margin-top: 100px;
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

a {
  color: #fff;
}

.footer {
  text-align: center;
  width: 100%;
  font-size: 12px;
  color: #999;
  font-family: "Comic Sans MS", cursive, sans-serif;
  margin-top: 550px;
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
