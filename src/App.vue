<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Sign in</router-link> |
    <router-link to="/singup">Register</router-link>
  </div>
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
  background-color: rgba(47, 137, 189, 0.144) !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #10dd32;
    }
  }
}
</style>
