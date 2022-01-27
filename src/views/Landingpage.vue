<template>
  <particles />
  <button id="botunic">
    <span> <a href="/signup"> GET STARTED </a></span>
  </button>

  <p>Fakultet Informatike u Puli</p>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

#botunic {
  margin-top: 100px;
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
