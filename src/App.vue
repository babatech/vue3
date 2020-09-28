<template>
  <nav class="navbar sticky-top navbar-light bg-blue">
    <a class="navbar-brand" href="#">
      <img
        src="./assets/myra-logo.png"
        height="30"
        alt="logo"
      />
    </a>
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
nav{
  &.bg-blue {
    background-color: #082434;
  }
}
</style>
