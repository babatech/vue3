<template>
  <nav class="navbar sticky-top navbar-light bg-blue">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="./assets/myra-logo.png" height="30" alt="logo" />
      </a>
    </div>
  </nav>
  <div class="container">
    <router-view />
  </div>
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
@font-face {
  font-family: 'Montserrat-SemiBold';
  src: url('./assets/font/Montserrat-SemiBold.otf');
}
#app {
  font-family: 'Montserrat-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  &.bg-blue {
    background-color: #082434;
  }
}
.btn-custom {
  font-family: "Montserrat-SemiBold";
  display: inline-block;
  padding: 15px;
  border: 1px solid #007bff;
  color: #007bff;
  font-size: 1.3em;
  margin: 10px;
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  &.btn-delete {
    border: 1px solid #ff0033;
    color: #fff;
    background-color: #ff0033;
  }
}
</style>
