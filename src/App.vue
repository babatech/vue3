<template>
  <nav class="navbar sticky-top navbar-light bg-blue">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="./assets/myra-logo.png" height="30" alt="logo" />
      </a>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: 'Montserrat-ExtraBold';
  src: url('./assets/font/Montserrat-ExtraBold.otf');
}
@font-face {
  font-family: 'Montserrat-Regular';
  src: url('./assets/font/Montserrat-Regular.otf');
}
#app {
  font-family: 'Montserrat-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  &.bg-blue {
    background-color: #082434;
  }
}
</style>
