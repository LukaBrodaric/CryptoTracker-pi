<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/logoproba2.png"
        height="35"
        class="d-inline-block align-center"
        alt=""
        loading="lazy"
      />
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
          <router-link to="/">Home</router-link>
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
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
        Login
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
  background-color: rgba(0, 0, 0, 0.144) !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0099fe;
    }
  }
}
</style>
