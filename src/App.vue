<template>
  <div id="app">
    <Vue2Qrcode
      content="https://www.npmjs.com/"
      width="500"
      :logoImg="require('./assets/logo.png')"
    />
  </div>
</template>

<script>
import { Vue2Qrcode } from "./index";

export default {
  name: "App",
  components: {
    Vue2Qrcode,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
